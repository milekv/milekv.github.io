import { ArrowDown, Github, Linkedin, Mail, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedNetworkBg } from './AnimatedNetworkBg';

const techStack = [
  'Oracle Database', 'SQL', 'PL/SQL', 'PostgreSQL', 'React', 'Node.js', 'Data Modeling',
  'Oracle Database', 'SQL', 'PL/SQL', 'PostgreSQL', 'React', 'Node.js', 'Data Modeling',
];

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16 bg-[#050a1e]">
      <AnimatedNetworkBg />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050a1e]/10 to-[#050a1e] pointer-events-none z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex-1 flex flex-col items-center justify-center w-full"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
            <Database className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 tracking-wide">
              Database Engineer | SQL Developer
            </span>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black mb-5 leading-none">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
            Miłosz
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300">
            Kordziński
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl font-semibold text-slate-300 mb-5">
          Projektuję bazy danych, backend i narzędzia developerskie
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed mb-10"
        >
          Buduję projekty oparte na danych: od modeli relacyjnych i SQL, przez backend i API,
          po aplikacje webowe oraz narzędzia wspierające pracę z bazami danych.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10"
        >
          <motion.a
            whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(59,130,246,0.45)' }}
            whileTap={{ scale: 0.96 }}
            href="#projects"
            className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg transition-all text-sm tracking-wide"
          >
            Zobacz portfolio
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="px-8 py-3.5 border border-blue-500/40 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all text-sm tracking-wide backdrop-blur-sm"
          >
            Skontaktuj się
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center items-center gap-4 mb-12">
          {[
            { href: 'https://github.com/milekv', icon: Github, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/miłosz-kordziński-a85947254', icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:miloszk.kontakt@gmail.com', icon: Mail, label: 'Email' },
          ].map((s) => (
            <motion.a
              key={s.label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={s.href}
              target={s.label !== 'Email' ? '_blank' : undefined}
              rel={s.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="p-3 rounded-full border border-slate-700 bg-slate-800/60 hover:border-blue-500/60 hover:bg-blue-500/10 transition-all backdrop-blur-sm"
              aria-label={s.label}
            >
              <s.icon className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.a
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            href="#snapshot"
            className="inline-block text-slate-500 hover:text-blue-400 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Tech bar */}
      <div className="relative z-20 w-full border-t border-blue-900/30 bg-[#050a1e]/80 backdrop-blur-sm overflow-hidden py-3">
        <motion.div
          animate={{ x: [0, -50 * techStack.length / 2] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="flex gap-6 whitespace-nowrap"
          style={{ width: 'max-content' }}
        >
          {techStack.map((tech, i) => (
            <span key={i} className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span className="w-1 h-1 rounded-full bg-blue-500/60 inline-block" />
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
