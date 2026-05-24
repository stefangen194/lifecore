import { useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  variant: 'success' | 'error';
  title: string;
  message: string;
}

export default function NotificationModal({ isOpen, onClose, variant, title, message }: NotificationModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isSuccess = variant === 'success';
  const Icon = isSuccess ? CheckCircle : AlertCircle;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[120] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-paper-hi border border-ink-300 rounded-2xl shadow-lg max-w-md w-full overflow-hidden"
        role="alertdialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between p-6 pb-0">
          <span
            className={`grid place-items-center w-12 h-12 rounded-full border ${
              isSuccess ? 'bg-sage/15 border-sage/40' : 'bg-clay/15 border-clay/40'
            }`}
          >
            <Icon className={isSuccess ? 'text-sage' : 'text-clay'} size={24} />
          </span>
          <button
            onClick={onClose}
            className="text-ink-500 hover:text-ink-900 transition-colors"
            aria-label="Închide"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-6 pt-4 pb-6">
          <h2 className="font-display text-2xl text-ink-900 mb-2">{title}</h2>
          <p className="text-ink-600 leading-relaxed">{message}</p>
        </div>

        <div className="bg-paper-lo p-6 border-t border-ink-200">
          <button
            onClick={onClose}
            className="w-full bg-gold-500 text-[#0B0B0C] py-3 px-6 rounded-full font-medium hover:bg-gold-400 transition-colors"
          >
            Am înțeles
          </button>
        </div>
      </div>
    </div>
  );
}
