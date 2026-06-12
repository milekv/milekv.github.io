import { motion } from 'framer-motion';
import { OraBank } from './OraBank';
import { VisualDBStudio } from './VisualDBStudio';

export function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-[#080f24]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060c1c] to-[#080f24]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/4 rounded-full filter blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Projekty flagowe</h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Dwa główne projekty pokazujące pracę z bazami danych od modelowania schematu po architekturę systemu enterprise.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-5" />
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <OraBank />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <VisualDBStudio />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
