import { motion } from 'framer-motion';
import { Database, Code2, Server, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Database,
    title: 'Modelowanie',
    description: 'Projektuję strukturę danych, tabele, relacje i klucze.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    delay: 0,
  },
  {
    icon: Code2,
    title: 'Logika SQL',
    description: 'Tworzę zapytania, procedury, widoki i mechanizmy przetwarzania danych.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
    delay: 0.1,
  },
  {
    icon: Server,
    title: 'Backend',
    description: 'Łączę bazę danych z aplikacją przez API i logikę biznesową.',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10 border-sky-500/20',
    delay: 0.2,
  },
  {
    icon: TrendingUp,
    title: 'Optymalizacja',
    description: 'Analizuję wydajność, indeksy, zapytania i strukturę danych.',
    color: 'text-blue-300',
    bg: 'bg-blue-600/10 border-blue-600/20',
    delay: 0.3,
  },
];

export function DataPipeline() {
  return (
    <section id="pipeline" className="py-20 relative overflow-hidden bg-[#060c1c]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080f24] to-[#060c1c]" />
      <div className="absolute top-10 right-1/4 w-72 h-72 bg-blue-600/4 rounded-full filter blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Jak pracuję z danymi</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-5">
            Od źródeł danych do gotowego systemu, raportu albo aplikacji.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
              whileHover={{ y: -5 }}
              className={`bg-[#0d1b35] border ${step.bg} rounded-xl p-5 hover:shadow-lg transition-all duration-300`}
            >
              <div className={`inline-flex p-3 rounded-xl ${step.bg} mb-4`}>
                <step.icon className={`w-5 h-5 ${step.color}`} />
              </div>
              <h3 className={`text-base font-bold ${step.color} mb-2`}>{i + 1}. {step.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
