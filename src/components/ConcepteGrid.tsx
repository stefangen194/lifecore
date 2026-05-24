import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Chip } from './ui';
import { concepts } from './concepteData';

/** The 3×2 bordered grid of concepts. Shared by the home page and /concepte. */
export default function ConcepteGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink-300">
      {concepts.map((c) => (
        <Link
          key={c.n}
          to={c.to}
          className="group relative flex flex-col gap-6 p-8 border-r border-b border-ink-300 min-h-[300px] transition-colors hover:bg-paper-lo"
        >
          <div className="flex justify-between items-start">
            <span className="font-mono text-xs text-gold-700">{c.n}</span>
            <Chip>{c.cat}</Chip>
          </div>
          <div className="mt-auto">
            <h3 className="font-display text-3xl leading-none mb-3">{c.gridTitle ?? c.title}</h3>
            <p className="text-sm text-ink-600 leading-relaxed">{c.gridDesc}</p>
            <div className="mt-5 flex items-center gap-2 text-sm text-ink-900">
              Citește
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
