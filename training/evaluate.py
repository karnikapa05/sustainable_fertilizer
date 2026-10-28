import os
import sys
import json
import numpy as np

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
import tensorflow as tf
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score, precision_recall_fscore_support

def evaluate_model():
    model_path = "backend/models/soil_classifier/best_model.keras"
    indices_path = "backend/models/soil_classifier/class_indices.json"
    test_dir = "backend/datasets/processed/test"

    if not os.path.exists(model_path):
        print(f"[-] Model file not found at {model_path}")
        return

    with open(indices_path, "r") as f:
        class_indices = json.load(f)
    class_names = [class_indices[str(i)] for i in range(len(class_indices))]

    print(f"[+] Loading best model from: {model_path}")
    model = tf.keras.models.load_model(model_path)

    print(f"[+] Loading unseen test dataset from: {test_dir}")
    test_ds = tf.keras.preprocessing.image_dataset_from_directory(
        test_dir,
        image_size=(224, 224),
        batch_size=16,
        label_mode="categorical",
        shuffle=False
    )

    y_true = []
    y_pred = []
    y_probs = []

    for images, labels in test_ds:
        preds = model.predict(images, verbose=0)
        y_probs.extend(preds)
        y_pred.extend(np.argmax(preds, axis=1))
        y_true.extend(np.argmax(labels.numpy(), axis=1))

    y_true = np.array(y_true)
    y_pred = np.array(y_pred)
    y_probs = np.array(y_probs)

    acc = float(accuracy_score(y_true, y_pred))
    precision_macro, recall_macro, f1_macro, _ = precision_recall_fscore_support(y_true, y_pred, average="macro")
    precision_weighted, recall_weighted, f1_weighted, _ = precision_recall_fscore_support(y_true, y_pred, average="weighted")
    cm = confusion_matrix(y_true, y_pred).tolist()

    # Per-class metrics
    p_per, r_per, f1_per, support_per = precision_recall_fscore_support(y_true, y_pred, average=None)
    per_class = {}
    for idx, cname in enumerate(class_names):
        per_class[cname] = {
            "precision": round(float(p_per[idx]), 4),
            "recall": round(float(r_per[idx]), 4),
            "f1_score": round(float(f1_per[idx]), 4),
            "support": int(support_per[idx])
        }

    metrics = {
        "model_name": "AgriSense MobileNetV2 Soil Classifier",
        "model_version": "1.0",
        "dataset_version": "Kaggle_IndianSoil_Deduplicated_v1",
        "evaluation_dataset": "Unseen Test Set (15% Stratified)",
        "test_samples_total": len(y_true),
        "overall_accuracy": round(acc, 4),
        "macro_precision": round(float(precision_macro), 4),
        "macro_recall": round(float(recall_macro), 4),
        "macro_f1_score": round(float(f1_macro), 4),
        "weighted_f1_score": round(float(f1_weighted), 4),
        "confusion_matrix": cm,
        "class_labels": class_names,
        "per_class_performance": per_class
    }

    metrics_file = "backend/models/soil_classifier/metrics.json"
    with open(metrics_file, "w") as f:
        json.dump(metrics, f, indent=2)

    print("\n=======================================================")
    print(f"📊 UNSEEN TEST EVALUATION METRICS (Accuracy: {acc*100:.2f}%)")
    print("=======================================================")
    print(f"Overall Accuracy:  {acc*100:.2f}%")
    print(f"Macro F1-Score:    {f1_macro*100:.2f}%")
    print(f"Weighted F1-Score: {f1_weighted*100:.2f}%\n")
    print("Soil Class          Precision   Recall    F1-Score  Support")
    print("-----------------------------------------------------------")
    for cname, vals in per_class.items():
        print(f"{cname:<18}  {vals['precision']:<10.2f}  {vals['recall']:<8.2f}  {vals['f1_score']:<8.2f}  {vals['support']}")
    print("=======================================================\n")
    print(f"[+] Metrics saved to: {metrics_file}")

if __name__ == "__main__":
    evaluate_model()
