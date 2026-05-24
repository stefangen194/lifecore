import React, { useState } from 'react';
import { ChevronDown, type LucideIcon } from 'lucide-react';

export interface AccordionItem {
  icon?: LucideIcon;
  title: string;
  body: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Index open by default (none if undefined). */
  defaultOpen?: number;
  className?: string;
}

/** Independent collapsible rows — used for the FAQ blocks under each calculator. */
export default function Accordion({ items, defaultOpen, className = '' }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen ?? null);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const Icon = item.icon;
        return (
          <div
            key={i}
            className="bg-paper-hi border border-ink-300 rounded-lg overflow-hidden transition-colors hover:border-gold-500/60"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center gap-3 text-left px-5 py-4"
              aria-expanded={isOpen}
            >
              {Icon && <Icon size={18} className="text-gold-500 shrink-0" />}
              <span className="flex-1 font-display text-lg text-ink-900">{item.title}</span>
              <ChevronDown
                size={18}
                className={`text-ink-500 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-ink-700">{item.body}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
