import { Database, Code, Server, Layers, GitBranch, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Skills() {
  const skillCategories = [
    {
      icon: Database,
      title: 'Bazy danych',
      skills: ['Oracle Database', 'PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
      accent: 'blue',
    },
    {
      icon: Code,
      title: 'Database Engineering',
      skills: ['SQL', 'PL/SQL', 'Modelowanie danych', 'Indeksy', 'Partycjonowanie', 'Optymalizacja zapytań', 'Audyt danych', 'Backup concepts'],
      accent: 'cyan',
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Flask', 'REST API'],
      accent: 'slate',
    },
    {
      icon: Layers,
      title: 'Frontend i narzędzia',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Git', 'Docker', 'GitHub Actions', 'DBeaver'],
      accent: 'sky',
    },
    {
      icon: BarChart3,
      title: 'Data',
      skills: ['ETL', 'ELT', 'Data Warehousing', 'Reporting', 'Power BI'],
      accent: 'indigo',
    },
    {
      icon: GitBranch,
      title: 'DevOps',
      skills: ['Git', 'Docker', 'CI/CD', 'GitHub Actions', 'Linux'],
      accent: 'emerald',
    },
  ];

  const accentMap: Record<string, { bg: string; text: string; border: string; icon: string }> = {
    blue:    { bg: 'bg-blue-500/10',    text: 'text-blue-400',    border: 'border-blue-500/20',    icon: 'text-blue-400' },
    cyan:    { bg: 'bg-cyan-500/10',    text: 'text-cyan-400',    border: 'border-cyan-500/20',    icon: 'text-cyan-400' },
    slate:   { bg: 'bg-slate-500/10',   text: 'text-slate-300',   border: 'border-slate-500/20',   icon: 'text-slate-400' },
    sky:     { bg: 'bg-sky-500/10',     text: 'text-sky-400',     border: 'border-sky-500/20',     icon: 'text-sky-400' },
    indigo:  { bg: 'bg-blue-600/10',    text: 'text-blue-300',    border: 'border-blue-600/20',    icon: 'text-blue-300' },
    emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', icon: 'text-emerald-400' },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#080f24]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060c1c] to-[#080f24]" />
      <div className="absolute top-10 right-20 w-72 h-72 bg-blue-600/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-10 left-20 w-72 h-72 bg-cyan-600/5 rounded-full filter blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Umiejętności</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat, index) => {
            const colors = accentMap[cat.accent];
            return (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-[#0d1b35] border border-blue-900/30 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20"
              >
                <div className={`inline-flex p-2.5 rounded-lg ${colors.bg} mb-4`}>
                  <cat.icon className={`w-5 h-5 ${colors.icon}`} />
                </div>
                <h3 className="text-base font-bold text-white mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={si}
                      whileHover={{ scale: 1.06 }}
                      className={`px-2.5 py-1 text-xs rounded-full ${colors.bg} ${colors.text} border ${colors.border} cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
