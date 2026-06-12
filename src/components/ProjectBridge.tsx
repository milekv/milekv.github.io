import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = ['Model danych', 'SQL', 'Backend', 'Automatyzacja', 'Raportowanie', 'System'];

export function ProjectBridge() {
  return (
    <section className="py-12 relative overflow-hidden bg-[#060c1c]">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0d1b35] border border-blue-900/30 rounded-xl px-6 py-6"
        >
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono text-center mb-5">
            Od modelu danych do działającego systemu
          </p>
          <p className="text-center text-sm text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            Moje projekty pokazują pełne podejście do pracy z danymi: projektowanie schematów, logikę SQL,
            backend, automatyzację, optymalizację i prezentację danych w aplikacjach.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="px-3 py-1.5 text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/25 rounded-lg font-mono cursor-default transition-all"
                >
                  {step}
                </motion.span>
                {i < steps.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-blue-800/60 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
