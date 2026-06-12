import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'CommerceFlow',
    description: 'Backend platformy e-commerce z REST API, obsługą produktów, użytkowników i płatności. Analiza aktywności i raportowanie.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'REST API'],
    github: 'https://github.com/milekv/CommerceFlow',
    demo: null,
    status: 'Backend',
    statusColor: 'bg-sky-500/15 text-sky-400 border-sky-500/25',
    image: '/images/comflow.png',
  },
  {
    title: 'CodeSprint',
    description: 'Interaktywna platforma do nauki programowania z zadaniami dopasowanymi do poziomu i wybranego języka.',
    tags: ['React', 'JavaScript', 'Education', 'UI'],
    github: 'https://github.com/milekv/code-sprint',
    demo: null,
    status: 'Web App',
    statusColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
    image: '/images/codesprint.png',
  },
  {
    title: 'E-commerce API',
    description: 'REST API z obsługą produktów, użytkowników i zamówień. Dokumentacja endpointów i uwierzytelnianie JWT.',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    github: 'https://github.com/milekv/ecommerce-api',
    demo: null,
    status: 'Backend',
    statusColor: 'bg-amber-500/15 text-amber-400 border-amber-500/25',
    image: '/images/ecomapi.png',
  },
  {
    title: 'System Firmy Szkoleniowej',
    description: 'Panel zarządzania kursami, instruktorami i zapisami z raportowaniem i analizą danych sprzedażowych.',
    tags: ['Python', 'SQL', 'Analytics', 'Dashboard'],
    github: 'https://github.com/milekv/firma-szkoleniowa',
    demo: 'https://milekv.github.io/firma-szkoleniowa/',
    status: 'Data Project',
    statusColor: 'bg-violet-500/15 text-violet-400 border-violet-500/25',
    image: '/images/sysfir.png',
  },
  {
    title: 'Optymalizator Wydajności SQL',
    description: 'Narzędzie do analizy zapytań SQL, optymalizacji indeksów i wskazywania problemów wydajnościowych.',
    tags: ['SQL', 'Performance', 'Database', 'Query Optimization'],
    github: null,
    demo: null,
    status: 'SQL Tool',
    statusColor: 'bg-rose-500/15 text-rose-400 border-rose-500/25',
    image: '/images/sql.png',
  },
];

export function AdditionalProjects() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#080f24]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060c1c] to-[#080f24]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Dodatkowe projekty</h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              whileHover={{ y: -5 }}
              className="group bg-[#0d1b35] border border-blue-900/30 rounded-xl overflow-hidden hover:border-blue-500/35 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b35]/90 via-[#0d1b35]/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className={`text-[9px] px-2 py-0.5 rounded-full border font-mono ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[9px] rounded font-mono bg-blue-500/10 text-blue-400 border border-blue-500/15">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.github && (
                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded text-[10px] font-semibold transition-all"
                    >
                      <Github className="w-3 h-3" /> GitHub
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-[10px] font-semibold transition-all"
                    >
                      <ExternalLink className="w-3 h-3" /> Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
