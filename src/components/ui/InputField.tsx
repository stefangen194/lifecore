interface InputFieldProps {
  label?: string;
  /** Short explanation of what this field means, shown under the input. */
  hint?: string;
  value: string | number;
  /** Receives the raw string value (parity with `e.target.value`). */
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  /** Unit/suffix shown to the right of the field (e.g. "RON", "%"). */
  suffix?: string;
  step?: string | number;
  min?: number;
  max?: number;
  readOnly?: boolean;
  name?: string;
  id?: string;
  required?: boolean;
  className?: string;
}

const fieldClass =
  'w-full px-3.5 py-2.5 text-sm bg-paper border border-ink-300 rounded-lg text-ink-900 ' +
  'placeholder:text-ink-500 transition-colors focus:border-gold-500 focus:outline-none ' +
  'focus:ring-2 focus:ring-gold-500/30 disabled:opacity-60 read-only:bg-paper-lo';

/** Themed labeled text/number input for forms and calculators. */
export default function InputField({
  label,
  hint,
  value,
  onChange,
  type = 'text',
  placeholder,
  suffix,
  step,
  min,
  max,
  readOnly = false,
  name,
  id,
  required = false,
  className = '',
}: InputFieldProps) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-ink-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          step={step}
          min={min}
          max={max}
          readOnly={readOnly}
          required={required}
          className={`${fieldClass} ${suffix ? 'pr-14' : ''}`}
        />
        {suffix && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-ink-500 pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
      {hint && <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{hint}</p>}
    </div>
  );
}
