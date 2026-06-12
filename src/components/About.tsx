import { Database, Code, Server, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  const highlights = [
    {
      icon: Database,
      title: 'Bazy danych',
      description: 'Projektowanie struktur danych, relacji, indeksów i logiki bazodanowej.',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Code,
      title: 'SQL i optymalizacja',
      description: 'Tworzenie zapytań SQL, analiza wydajności i poprawianie działania baz danych.',
      color: 'from-cyan-600 to-blue-600',
    },
    {
      icon: Server,
      title: 'Backend',
      description: 'Budowanie API i logiki aplikacji opartej na dobrze zaprojektowanej bazie danych.',
      color: 'from-slate-600 to-slate-700',
    },
    {
      icon: Wrench,
      title: 'Narzędzia developerskie',
      description: 'Tworzenie aplikacji, które ułatwiają projektowanie, analizę i pracę z danymi.',
      color: 'from-blue-700 to-cyan-700',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#080f24]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a1e] to-[#080f24]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/5 rounded-full filter blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">O mnie</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            <motion.p variants={itemVariants} className="text-slate-300 leading-relaxed text-base">
              Skupiam się na{' '}
              <span className="text-blue-400 font-semibold">bazach danych</span>,{' '}
              <span className="text-blue-400 font-semibold">SQL</span>, backendzie i inżynierii danych.
              Interesuje mnie projektowanie systemów, które są dobrze uporządkowane, wydajne i możliwe do dalszego rozwoju.
            </motion.p>
            <motion.p variants={itemVariants} className="text-slate-300 leading-relaxed text-base">
              Najmocniej rozwijam się w kierunku{' '}
              <span className="text-blue-400 font-semibold">Database Engineering</span> i{' '}
              <span className="text-blue-400 font-semibold">SQL Development</span>. Pracuję z relacyjnymi bazami danych,
              tworzę zapytania SQL, projektuję modele danych, analizuję wydajność i buduję aplikacje oparte na solidnej
              warstwie danych.
            </motion.p>
            <motion.p variants={itemVariants} className="text-slate-300 leading-relaxed text-base">
              W portfolio stawiam na praktyczne projekty techniczne. Szczególnie ważne są dla mnie{' '}
              <span className="text-blue-400 font-semibold">OraBank</span> i{' '}
              <span className="text-blue-400 font-semibold">VisualDB Studio</span>, ponieważ pokazują pełne podejście
              do pracy z bazami danych — od projektowania schematu po kompletną architekturę systemu. Pozostałe projekty
              pokazują moje doświadczenie w backendzie, API, aplikacjach webowych, analizie danych i automatyzacji.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`group bg-gradient-to-br ${item.color} p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-default`}
              >
                <div className="bg-white/10 p-2.5 rounded-lg w-fit mb-3 group-hover:bg-white/20 transition-all">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-white/75 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
