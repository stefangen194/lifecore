interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label?: string;
  /** Short explanation of what this field means, shown under the select. */
  hint?: string;
  value: string;
  onChange?: (value: string) => void;
  options: Option[];
  name?: string;
  id?: string;
  className?: string;
}

/** Themed labeled select for forms and calculators. */
export default function SelectField({
  label,
  hint,
  value,
  onChange,
  options,
  name,
  id,
  className = '',
}: SelectFieldProps) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-ink-700 mb-2">
          {label}
        </label>
      )}
      <select
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full px-3.5 py-2.5 text-sm bg-paper border border-ink-300 rounded-lg text-ink-900 transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-paper text-ink-900">
            {o.label}
          </option>
        ))}
      </select>
      {hint && <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{hint}</p>}
    </div>
  );
}
