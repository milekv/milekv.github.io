import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText, Key, Hash, Link } from 'lucide-react';

const highlights = ['Visual schema builder', 'Tabele i kolumny', 'Relacje między tabelami', 'Generowanie SQL', 'Interaktywny canvas', 'Developer tool UX', 'React i TypeScript', 'Nowoczesny interfejs'];

const mockTables = [
  { name: 'users', cols: [{ n: 'id', pk: true }, { n: 'email' }, { n: 'name' }] },
  { name: 'accounts', cols: [{ n: 'id', pk: true }, { n: 'user_id', fk: true }, { n: 'balance' }] },
  { name: 'transactions', cols: [{ n: 'id', pk: true }, { n: 'account_id', fk: true }, { n: 'amount' }, { n: 'type' }] },
];

const sqlPreview = `CREATE TABLE users (
  id INT PRIMARY KEY,
  email VARCHAR(255),
  name VARCHAR(100)
);
CREATE TABLE accounts (
  id INT PRIMARY KEY,
  user_id INT REFERENCES users(id),
  balance DECIMAL(15,2)
);`;

export function VisualDBStudio() {
  return (
    <div className="bg-[#070e22] border border-blue-900/40 rounded-2xl p-6 md:p-8 overflow-hidden relative">
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-600/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row-reverse gap-8 items-start">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-[10px] font-semibold text-cyan-400 tracking-wide uppercase">
              Visual Database Design Tool
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-white mb-3">VisualDB Studio</h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            Interaktywne narzędzie do wizualnego projektowania baz danych. Umożliwia tworzenie tabel, kolumn, relacji
            i schematów w czytelnym canvasie oraz generowanie struktury SQL.
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {highlights.map((h) => (
              <motion.span
                key={h}
                whileHover={{ scale: 1.05 }}
                className="px-2.5 py-1 text-[10px] rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 cursor-default font-mono"
              >
                {h}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2.5">
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              href="https://github.com/milekv/visualdb-studio" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-xs font-semibold transition-all">
              <Github className="w-3.5 h-3.5" /> GitHub
            </motion.a>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              href="#"
              className="flex items-center gap-1.5 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-semibold transition-all">
              <ExternalLink className="w-3.5 h-3.5" /> Demo
            </motion.a>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              href="#"
              className="flex items-center gap-1.5 px-4 py-2 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 rounded-lg text-xs font-semibold transition-all">
              <FileText className="w-3.5 h-3.5" /> Case Study
            </motion.a>
          </div>
        </div>

        {/* Visual */}
        <div className="w-full lg:w-[460px] shrink-0">
          <div className="bg-[#050b1c] border border-blue-900/30 rounded-xl overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-2 bg-[#0a1428] border-b border-blue-900/20">
              <div className="w-2 h-2 rounded-full bg-red-500/70" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
              <div className="w-2 h-2 rounded-full bg-green-500/70" />
              <span className="ml-2 text-[9px] text-slate-600 font-mono">VisualDB Studio — schema.db</span>
            </div>
            <div className="flex">
              <div className="flex-1 p-3 bg-[#040810] relative overflow-hidden" style={{ minHeight: '200px' }}>
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.1) 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }} />
                <div className="relative z-10 flex gap-2.5 flex-wrap">
                  {mockTables.map((table, ti) => (
                    <motion.div key={table.name}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ti * 0.1 }}
                      className="bg-[#0a1428] border border-blue-800/40 rounded-lg overflow-hidden shadow-lg"
                      style={{ minWidth: '110px' }}>
                      <div className="bg-gradient-to-r from-blue-800/60 to-blue-700/30 px-2.5 py-1.5">
                        <span className="text-[9px] font-bold text-white font-mono">{table.name}</span>
                      </div>
                      <div className="px-2 py-1">
                        {table.cols.map((col) => (
                          <div key={col.n} className="flex items-center gap-1 py-0.5">
                            {col.pk && <Key className="w-2 h-2 text-yellow-400 shrink-0" />}
                            {(col as { fk?: boolean }).fk && <Link className="w-2 h-2 text-cyan-400 shrink-0" />}
                            {!col.pk && !(col as { fk?: boolean }).fk && <Hash className="w-2 h-2 text-slate-600 shrink-0" />}
                            <span className="text-[8px] text-slate-300 font-mono">{col.n}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="w-28 border-l border-blue-900/20 bg-[#070d1e] p-2.5">
                <p className="text-[8px] text-slate-600 uppercase tracking-widest font-mono mb-1.5">SQL</p>
                <pre className="text-[7px] text-green-400/80 font-mono leading-relaxed whitespace-pre-wrap overflow-hidden">{sqlPreview}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
