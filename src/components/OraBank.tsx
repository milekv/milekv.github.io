import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText, Users, CreditCard, ArrowLeftRight, Receipt, TrendingUp, ShieldCheck, BarChart2, Landmark, Zap, History } from 'lucide-react';

const modules = [
  { icon: Users, label: 'Customers', color: 'text-blue-400' },
  { icon: Landmark, label: 'Accounts', color: 'text-cyan-400' },
  { icon: CreditCard, label: 'Cards', color: 'text-sky-400' },
  { icon: ArrowLeftRight, label: 'Transfers', color: 'text-blue-300' },
  { icon: Receipt, label: 'Transactions', color: 'text-cyan-300' },
  { icon: History, label: 'Balance History', color: 'text-blue-400' },
  { icon: TrendingUp, label: 'Loans', color: 'text-sky-300' },
  { icon: ShieldCheck, label: 'Audit', color: 'text-blue-300' },
  { icon: BarChart2, label: 'Reporting', color: 'text-cyan-400' },
];

const highlights = ['Oracle Database', 'SQL i PL/SQL', 'Transakcje bankowe', 'Model relacyjny', 'Audyt i bezpieczeństwo', 'Indeksy i partycjonowanie', 'Performance tuning', 'Dokumentacja techniczna'];

const left = modules.slice(0, 4);
const right = modules.slice(5, 9);
const centerMod = modules[4];

export function OraBank() {
  return (
    <div className="bg-[#070e22] border border-blue-900/40 rounded-2xl p-6 md:p-8 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-semibold text-blue-400 tracking-wide uppercase">
              Enterprise Oracle Banking System
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-white mb-3">OraBank</h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            Rozbudowany projekt systemu bankowego oparty na Oracle Database. Pokazuje projektowanie relacyjnej bazy
            danych, logikę SQL i PL/SQL, obsługę transakcji, audyt, bezpieczeństwo, raportowanie i optymalizację
            wydajności.
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {highlights.map((h) => (
              <motion.span
                key={h}
                whileHover={{ scale: 1.05 }}
                className="px-2.5 py-1 text-[10px] rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 cursor-default font-mono"
              >
                {h}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2.5">
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              href="https://github.com/milekv/orabank" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-xs font-semibold transition-all">
              <Github className="w-3.5 h-3.5" /> GitHub
            </motion.a>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              href="#"
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition-all">
              <FileText className="w-3.5 h-3.5" /> Dokumentacja
            </motion.a>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              href="#"
              className="flex items-center gap-1.5 px-4 py-2 border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 rounded-lg text-xs font-semibold transition-all">
              <ExternalLink className="w-3.5 h-3.5" /> Demo
            </motion.a>
          </div>
        </div>

        {/* Architecture visual */}
        <div className="w-full lg:w-[440px] shrink-0">
          <div className="bg-[#050b1c] border border-blue-900/30 rounded-xl p-4">
            <p className="text-[9px] text-slate-600 font-mono mb-4 text-center tracking-widest uppercase">Architecture</p>
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-1.5 flex-1">
                {left.map((mod, i) => (
                  <motion.div key={mod.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="bg-[#0a1428] border border-blue-900/25 rounded-md px-2.5 py-1.5 flex items-center gap-1.5">
                    <mod.icon className={`w-3 h-3 ${mod.color} shrink-0`} />
                    <span className="text-[9px] text-slate-300 font-mono">{mod.label}</span>
                    <div className="ml-auto flex-1 h-px bg-blue-900/40 relative overflow-hidden mx-1">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.35, ease: 'linear' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="shrink-0 flex flex-col items-center gap-1.5">
                <motion.div
                  animate={{ boxShadow: ['0 0 6px rgba(59,130,246,0.2)', '0 0 16px rgba(59,130,246,0.5)', '0 0 6px rgba(59,130,246,0.2)'] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="bg-gradient-to-br from-blue-700 to-blue-800 border-2 border-blue-500/60 rounded-lg p-2.5 text-center w-20">
                  <Zap className="w-4 h-4 text-white mx-auto mb-0.5" />
                  <p className="text-white font-bold text-[8px] leading-tight text-center">TRANSACTION<br />ENGINE</p>
                </motion.div>
                <div className="bg-[#0a1428] border border-blue-900/30 rounded-md px-2 py-1 flex items-center gap-1 w-20">
                  <centerMod.icon className={`w-2.5 h-2.5 ${centerMod.color} shrink-0`} />
                  <span className="text-[8px] text-slate-300 font-mono leading-tight">{centerMod.label}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                {right.map((mod, i) => (
                  <motion.div key={mod.label}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="bg-[#0a1428] border border-blue-900/25 rounded-md px-2.5 py-1.5 flex items-center gap-1.5">
                    <div className="mr-auto flex-1 h-px bg-blue-900/40 relative overflow-hidden mx-1">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.35 + 0.8, ease: 'linear' }}
                      />
                    </div>
                    <span className="text-[9px] text-slate-300 font-mono">{mod.label}</span>
                    <mod.icon className={`w-3 h-3 ${mod.color} shrink-0`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
