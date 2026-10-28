import React from 'react';

export function ToastNotification({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isError = toast.type === 'error';
        const isInfo = toast.type === 'info';

        const bgClass = isSuccess
          ? 'bg-emerald-900/95 text-white border-emerald-500'
          : isError
          ? 'bg-red-900/95 text-white border-red-500'
          : 'bg-stone-900/95 text-white border-stone-500';

        const icon = isSuccess ? '✓' : isError ? '⚠️' : 'ℹ️';

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl shadow-2xl border backdrop-blur-md transition-all duration-300 animate-in slide-in-from-bottom-3 ${bgClass}`}
          >
            <span className="text-lg shrink-0">{icon}</span>
            <div className="flex-1 text-xs font-semibold leading-relaxed">
              {toast.message}
            </div>
            <button
              onClick={() => onDismiss(toast.id)}
              className="text-white/60 hover:text-white text-xs font-bold p-1 cursor-pointer"
            >
              ✕
            </button>
          </div>
        );
      })}
    </div>
  );
}
