import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Search, Database, Code, Layers, Wrench, Mail, X, Command } from 'lucide-react';

const options = [
  { icon: Database, label: 'Zobacz OraBank', href: '#projects', shortcut: '1' },
  { icon: Code, label: 'Zobacz VisualDB Studio', href: '#projects', shortcut: '2' },
  { icon: Layers, label: 'Zobacz projekty', href: '#projects', shortcut: 'P' },
  { icon: Wrench, label: 'Zobacz umiejętności', href: '#skills', shortcut: 'S' },
  { icon: Mail, label: 'Kontakt', href: '#contact', shortcut: 'C' },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
        setQuery('');
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(query.toLowerCase())
  );

  const navigate = (href: string) => {
    setOpen(false);
    setQuery('');
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Trigger button */}
      <motion.button
        onClick={() => { setOpen(true); setQuery(''); }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3 py-2 bg-[#0d1b35] border border-blue-800/50 rounded-lg text-xs text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-xl backdrop-blur-sm"
        aria-label="Open command palette"
      >
        <Command className="w-3.5 h-3.5" />
        <span className="hidden sm:inline font-mono">Ctrl+K</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.15 }}
              className="fixed top-[20vh] left-1/2 -translate-x-1/2 w-full max-w-md z-50 px-4"
            >
              <div className="bg-[#0a1428] border border-blue-800/50 rounded-xl shadow-2xl overflow-hidden">
                {/* Search input */}
                <div className="flex items-center gap-3 px-4 py-3.5 border-b border-blue-900/30">
                  <Search className="w-4 h-4 text-slate-500 shrink-0" />
                  <input
                    autoFocus
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Szukaj..."
                    className="flex-1 bg-transparent text-white text-sm outline-none placeholder-slate-600 font-mono"
                  />
                  <button onClick={() => setOpen(false)} className="text-slate-600 hover:text-slate-400 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Options */}
                <div className="py-2">
                  {filtered.length === 0 ? (
                    <p className="text-center text-xs text-slate-600 py-4 font-mono">Brak wyników</p>
                  ) : (
                    filtered.map((opt, i) => (
                      <motion.button
                        key={opt.label}
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                        onClick={() => navigate(opt.href)}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-500/10 transition-colors group text-left"
                      >
                        <div className="p-1.5 rounded-md bg-blue-500/10 border border-blue-500/15 group-hover:bg-blue-500/20 transition-all">
                          <opt.icon className="w-3.5 h-3.5 text-blue-400" />
                        </div>
                        <span className="flex-1 text-sm text-slate-200 group-hover:text-white transition-colors">
                          {opt.label}
                        </span>
                        <kbd className="text-[10px] text-slate-600 bg-slate-800 px-1.5 py-0.5 rounded font-mono border border-slate-700">
                          {opt.shortcut}
                        </kbd>
                      </motion.button>
                    ))
                  )}
                </div>

                <div className="px-4 py-2.5 border-t border-blue-900/20 flex items-center gap-4">
                  <span className="text-[10px] text-slate-600 font-mono">ESC zamknij</span>
                  <span className="text-[10px] text-slate-600 font-mono">↵ przejdź</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
