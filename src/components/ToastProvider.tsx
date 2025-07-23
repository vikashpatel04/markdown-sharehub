import { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle, XCircle, Info, X } from "lucide-react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextProps {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

let toastId = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = "info") => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2000);
  }, []);

  const closeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const getIcon = (type: ToastType) => {
    switch (type) {
      case "success":
        return <CheckCircle size={20} className="text-green-400" />;
      case "error":
        return <XCircle size={20} className="text-red-400" />;
      default:
        return <Info size={20} className="text-blue-400" />;
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`
              flex items-center gap-3 px-5 py-3 rounded-xl shadow-2xl font-medium
              bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border
              ${toast.type === "success" ? "border-green-400" : ""}
              ${toast.type === "error" ? "border-red-400" : ""}
              ${toast.type === "info" ? "border-blue-400" : ""}
              animate-fade-in-up
            `}
            style={{ minWidth: 260, maxWidth: 340, position: "relative" }}
          >
            {getIcon(toast.type)}
            <span className="flex-1 text-gray-900 dark:text-white">{toast.message}</span>
            <button
              className="ml-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              onClick={() => closeToast(toast.id)}
              aria-label="Close"
              tabIndex={0}
            >
              <X size={18} className="text-gray-500 dark:text-gray-300" />
            </button>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.3s cubic-bezier(.4,0,.2,1);
          }
        `}
      </style>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx.showToast;
}