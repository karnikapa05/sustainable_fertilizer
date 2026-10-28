import os
import json
import numpy as np
import tensorflow as tf
from tensorflow.keras import layers, models, optimizers, callbacks
from sklearn.utils.class_weight import compute_class_weight

def train_soil_model():
    base_dir = "backend/datasets/processed"
    train_dir = os.path.join(base_dir, "train")
    val_dir = os.path.join(base_dir, "val")
    model_save_dir = "backend/models/soil_classifier"
    os.makedirs(model_save_dir, exist_ok=True)

    img_size = (224, 224)
    batch_size = 16

    print("[+] Loading train and validation datasets...")
    train_ds = tf.keras.preprocessing.image_dataset_from_directory(
        train_dir,
        image_size=img_size,
        batch_size=batch_size,
        label_mode="categorical",
        shuffle=True,
        seed=42
    )

    val_ds = tf.keras.preprocessing.image_dataset_from_directory(
        val_dir,
        image_size=img_size,
        batch_size=batch_size,
        label_mode="categorical",
        shuffle=False
    )

    class_names = train_ds.class_names
    num_classes = len(class_names)
    print(f"[+] Classes detected ({num_classes}): {class_names}")

    # Save class indices mapping
    class_indices = {i: name for i, name in enumerate(class_names)}
    with open(os.path.join(model_save_dir, "class_indices.json"), "w") as f:
        json.dump(class_indices, f, indent=2)

    # Compute class weights for dataset imbalance
    y_train = []
    for _, labels in train_ds:
        y_train.extend(np.argmax(labels.numpy(), axis=1))
    y_train = np.array(y_train)

    classes_unique = np.unique(y_train)
    weights = compute_class_weight(class_weight="balanced", classes=classes_unique, y=y_train)
    class_weights = dict(zip(classes_unique, weights))
    print(f"[+] Calculated Balanced Class Weights: {class_weights}")

    # Data augmentation pipeline (applied during training only)
    data_augmentation = tf.keras.Sequential([
        layers.RandomFlip("horizontal"),
        layers.RandomRotation(0.1),
        layers.RandomZoom(0.1),
        layers.RandomContrast(0.1)
    ], name="data_augmentation")

    # Transfer Learning with MobileNetV2
    base_model = tf.keras.applications.MobileNetV2(
        input_shape=(224, 224, 3),
        include_top=False,
        weights="imagenet"
    )
    base_model.trainable = False

    # Model architecture
    inputs = tf.keras.Input(shape=(224, 224, 3))
    x = data_augmentation(inputs)
    x = tf.keras.applications.mobilenet_v2.preprocess_input(x)
    x = base_model(x, training=False)
    x = layers.GlobalAveragePooling2D()(x)
    x = layers.BatchNormalization()(x)
    x = layers.Dropout(0.3)(x)
    x = layers.Dense(128, activation="relu")(x)
    x = layers.Dropout(0.2)(x)
    outputs = layers.Dense(num_classes, activation="softmax")(x)

    model = tf.keras.Model(inputs, outputs, name="AgriSense_MobileNetV2_SoilClassifier")

    # Compile phase 1 (train head)
    model.compile(
        optimizer=optimizers.Adam(learning_rate=1e-3),
        loss="categorical_crossentropy",
        metrics=["accuracy"]
    )

    best_model_path = os.path.join(model_save_dir, "best_model.keras")
    cb_list = [
        callbacks.EarlyStopping(monitor="val_loss", patience=5, restore_best_weights=True, verbose=1),
        callbacks.ReduceLROnPlateau(monitor="val_loss", factor=0.5, patience=2, min_lr=1e-6, verbose=1),
        callbacks.ModelCheckpoint(best_model_path, monitor="val_accuracy", save_best_only=True, verbose=1)
    ]

    print("\n[+] Phase 1: Training classification head with frozen backbone...")
    history1 = model.fit(
        train_ds,
        validation_data=val_ds,
        epochs=12,
        class_weight=class_weights,
        callbacks=cb_list,
        verbose=1
    )

    # Phase 2: Fine-tuning top layers of MobileNetV2
    print("\n[+] Phase 2: Fine-tuning top 30 layers of MobileNetV2...")
    base_model.trainable = True
    for layer in base_model.layers[:-30]:
        layer.trainable = False

    model.compile(
        optimizer=optimizers.Adam(learning_rate=1e-4),
        loss="categorical_crossentropy",
        metrics=["accuracy"]
    )

    history2 = model.fit(
        train_ds,
        validation_data=val_ds,
        epochs=10,
        class_weight=class_weights,
        callbacks=cb_list,
        verbose=1
    )

    # Save final model
    model.save(best_model_path)
    print(f"\n[+] Training complete! Best model saved to: {best_model_path}")

if __name__ == "__main__":
    train_soil_model()
