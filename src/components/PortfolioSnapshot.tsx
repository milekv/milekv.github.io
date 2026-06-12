import { motion } from 'framer-motion';
import { Database, Server, Wrench, BarChart3 } from 'lucide-react';

const areas = [
  { icon: Database, label: 'Bazy danych', sub: 'Oracle, PostgreSQL, SQL, PL/SQL', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { icon: Server, label: 'Backend', sub: 'Node.js, Express, Python, Flask', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
  { icon: Wrench, label: 'Narzędzia dev', sub: 'React, TypeScript, Docker, Git', color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' },
  { icon: BarChart3, label: 'Inżynieria danych', sub: 'ETL, Data Modeling, Reporting', color: 'text-blue-300', bg: 'bg-blue-600/10 border-blue-600/20' },
];

const flagships = ['OraBank', 'VisualDB Studio'];

const stack = ['Oracle', 'PostgreSQL', 'SQL', 'PL/SQL', 'React', 'Node.js', 'TypeScript', 'Python'];

export function PortfolioSnapshot() {
  return (
    <section id="snapshot" className="py-16 relative overflow-hidden bg-[#060c1c]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a1e] to-[#060c1c]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Portfolio w skrócie</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main areas */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0d1b35] border border-blue-900/30 rounded-xl p-5"
          >
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-4">Główne obszary</p>
            <div className="space-y-3">
              {areas.map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className={`flex items-center gap-3 p-2.5 rounded-lg border ${a.bg}`}
                >
                  <a.icon className={`w-4 h-4 ${a.color} shrink-0`} />
                  <div>
                    <p className={`text-xs font-semibold ${a.color}`}>{a.label}</p>
                    <p className="text-[10px] text-slate-500">{a.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Flagship projects */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0d1b35] border border-blue-900/30 rounded-xl p-5"
          >
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-4">Projekty flagowe</p>
            <div className="space-y-4">
              {flagships.map((name, i) => (
                <motion.a
                  key={name}
                  href="#projects"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  transition={{ delay: i * 0.1 }}
                  className="block"
                >
                  <div className={`p-4 rounded-xl border ${i === 0 ? 'border-blue-500/40 bg-blue-500/8' : 'border-cyan-500/30 bg-cyan-500/5'} hover:border-opacity-70 transition-all`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-bold ${i === 0 ? 'text-blue-300' : 'text-cyan-300'}`}>{name}</span>
                      <span className={`text-[9px] px-2 py-0.5 rounded-full font-mono ${i === 0 ? 'bg-blue-500/15 text-blue-400 border border-blue-500/20' : 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20'}`}>
                        Flagowy
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500">{i === 0 ? 'Oracle Database · SQL · PL/SQL' : 'React · TypeScript · Database Design'}</p>
                  </div>
                </motion.a>
              ))}
              <div className="pt-1">
                <p className="text-[10px] text-slate-600 font-mono">+ 5 dodatkowych projektów</p>
              </div>
            </div>
          </motion.div>

          {/* Stack */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#0d1b35] border border-blue-900/30 rounded-xl p-5"
          >
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-4">Stack</p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={{ delay: i * 0.04 }}
                  className="px-3 py-1.5 text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-blue-900/20">
              <p className="text-[10px] text-slate-500 mb-2">GitHub</p>
              <a
                href="https://github.com/milekv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 font-mono transition-colors"
              >
                github.com/milekv
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
