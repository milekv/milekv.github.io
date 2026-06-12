import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Github, ExternalLink, Database, Code, ShoppingCart, BookOpen, Package, BarChart3 } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  label: string;
  icon: React.ElementType;
  color: string;
  accent: string;
  status: string;
  statusColor: string;
  description: string;
  features: string[];
  stack: string[];
  github: string | null;
  demo: string | null;
  codeLines: { text: string; color: string }[];
}

const projects: Project[] = [
  {
    id: 'orabank',
    name: 'OraBank',
    label: 'Enterprise Banking',
    icon: Database,
    color: 'text-blue-400',
    accent: 'border-blue-500/40 bg-blue-500/8',
    status: 'Flagship',
    statusColor: 'bg-blue-500/15 text-blue-400 border-blue-500/25',
    description: 'Rozbudowany system bankowy oparty na Oracle Database z pełną logiką SQL i PL/SQL.',
    features: ['Architektura Oracle DB', 'Transakcje bankowe', 'Audyt i bezpieczeństwo', 'Performance tuning'],
    stack: ['Oracle Database', 'SQL', 'PL/SQL', 'Data Modeling'],
    github: 'https://github.com/milekv/orabank',
    demo: null,
    codeLines: [
      { text: 'SELECT account_id, balance', color: 'text-blue-400' },
      { text: '  FROM accounts', color: 'text-slate-300' },
      { text: '  WHERE status = \'ACTIVE\';', color: 'text-slate-300' },
      { text: '', color: '' },
      { text: 'CREATE OR REPLACE PROCEDURE', color: 'text-cyan-400' },
      { text: '  process_transfer(p_from, p_to,', color: 'text-slate-300' },
      { text: '                   p_amount);', color: 'text-slate-300' },
      { text: '', color: '' },
      { text: 'CREATE INDEX idx_transactions_account', color: 'text-green-400' },
      { text: '  ON transactions(account_id);', color: 'text-slate-400' },
    ],
  },
  {
    id: 'visualdb',
    name: 'VisualDB Studio',
    label: 'DB Design Tool',
    icon: Code,
    color: 'text-cyan-400',
    accent: 'border-cyan-500/40 bg-cyan-500/8',
    status: 'Flagship',
    statusColor: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/25',
    description: 'Wizualne narzędzie do projektowania schematów bazy danych z generowaniem SQL.',
    features: ['Visual schema builder', 'Relacje między tabelami', 'Generowanie SQL', 'Interaktywny canvas'],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Database Design'],
    github: 'https://github.com/milekv/visualdb-studio',
    demo: null,
    codeLines: [
      { text: 'CREATE TABLE users (', color: 'text-blue-400' },
      { text: '  id INT PRIMARY KEY,', color: 'text-slate-300' },
      { text: '  email VARCHAR(255)', color: 'text-slate-300' },
      { text: ');', color: 'text-blue-400' },
      { text: '', color: '' },
      { text: 'ALTER TABLE accounts', color: 'text-cyan-400' },
      { text: '  ADD CONSTRAINT fk_user', color: 'text-slate-300' },
      { text: '  FOREIGN KEY (user_id)', color: 'text-slate-300' },
      { text: '  REFERENCES users(id);', color: 'text-slate-400' },
      { text: '', color: '' },
      { text: 'exportSchema() → schema.sql', color: 'text-green-400' },
    ],
  },
  {
    id: 'commerceflow',
    name: 'CommerceFlow',
    label: 'E-commerce Backend',
    icon: ShoppingCart,
    color: 'text-sky-400',
    accent: 'border-sky-500/30 bg-sky-500/5',
    status: 'Backend',
    statusColor: 'bg-sky-500/15 text-sky-400 border-sky-500/25',
    description: 'Platforma e-commerce z backendem, API, płatnościami i analizą aktywności użytkowników.',
    features: ['REST API', 'Zarządzanie produktami', 'System płatności', 'Analityka użytkowników'],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'REST API'],
    github: 'https://github.com/milekv/CommerceFlow',
    demo: null,
    codeLines: [
      { text: 'GET  /api/products', color: 'text-green-400' },
      { text: 'POST /api/orders', color: 'text-yellow-400' },
      { text: 'GET  /api/analytics', color: 'text-green-400' },
      { text: '', color: '' },
      { text: 'GET  /api/users/:id', color: 'text-green-400' },
      { text: 'PUT  /api/products/:id', color: 'text-blue-400' },
      { text: 'DELETE /api/cart/:id', color: 'text-red-400' },
      { text: '', color: '' },
      { text: '// PostgreSQL + Express', color: 'text-slate-600' },
      { text: '// JWT Auth middleware', color: 'text-slate-600' },
    ],
  },
  {
    id: 'codesprint',
    name: 'CodeSprint',
    label: 'Learning Platform',
    icon: BookOpen,
    color: 'text-emerald-400',
    accent: 'border-emerald-500/30 bg-emerald-500/5',
    status: 'Web App',
    statusColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
    description: 'Interaktywna platforma do nauki programowania z zadaniami dopasowanymi do poziomu.',
    features: ['Zadania per poziom', 'Multi-language', 'Walidacja kodu', 'Postęp użytkownika'],
    stack: ['React', 'JavaScript', 'Education', 'UI/UX'],
    github: 'https://github.com/milekv/code-sprint',
    demo: null,
    codeLines: [
      { text: 'runChallenge(userId, taskId)', color: 'text-blue-400' },
      { text: '  → evaluate(code, tests)', color: 'text-slate-300' },
      { text: '  → return { passed, score }', color: 'text-slate-300' },
      { text: '', color: '' },
      { text: 'validateAnswer(submission)', color: 'text-cyan-400' },
      { text: '  → runTests()', color: 'text-slate-300' },
      { text: '  → updateProgress()', color: 'text-slate-300' },
      { text: '', color: '' },
      { text: 'loadTasks(level, language)', color: 'text-green-400' },
      { text: '  → filter(difficulty)', color: 'text-slate-400' },
    ],
  },
  {
    id: 'ecomapi',
    name: 'E-commerce API',
    label: 'RESTful Backend',
    icon: Package,
    color: 'text-amber-400',
    accent: 'border-amber-500/30 bg-amber-500/5',
    status: 'Backend',
    statusColor: 'bg-amber-500/15 text-amber-400 border-amber-500/25',
    description: 'REST API dla platformy e-commerce z obsługą produktów, użytkowników i zamówień.',
    features: ['CRUD endpoints', 'User management', 'Product catalog', 'Order processing'],
    stack: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    github: 'https://github.com/milekv/ecommerce-api',
    demo: null,
    codeLines: [
      { text: 'GET  /products?page=1&limit=20', color: 'text-green-400' },
      { text: 'POST /products  → 201 Created', color: 'text-yellow-400' },
      { text: 'GET  /orders/:id/status', color: 'text-green-400' },
      { text: '', color: '' },
      { text: 'POST /auth/login', color: 'text-blue-400' },
      { text: '  → { token, userId }', color: 'text-slate-300' },
      { text: '', color: '' },
      { text: '// MongoDB + Mongoose', color: 'text-slate-600' },
      { text: '// Express validation', color: 'text-slate-600' },
    ],
  },
  {
    id: 'sqlopt',
    name: 'SQL Optimizer',
    label: 'Performance Tool',
    icon: BarChart3,
    color: 'text-rose-400',
    accent: 'border-rose-500/30 bg-rose-500/5',
    status: 'SQL Tool',
    statusColor: 'bg-rose-500/15 text-rose-400 border-rose-500/25',
    description: 'Narzędzie do analizy i optymalizacji zapytań SQL z podpowiedziami wydajności.',
    features: ['Analiza zapytań', 'Plan wykonania', 'Index suggestions', 'Performance report'],
    stack: ['SQL', 'Performance', 'Database', 'Query Optimization'],
    github: null,
    demo: null,
    codeLines: [
      { text: 'EXPLAIN PLAN FOR', color: 'text-blue-400' },
      { text: '  SELECT * FROM transactions', color: 'text-slate-300' },
      { text: '  WHERE account_id = :id;', color: 'text-slate-300' },
      { text: '', color: '' },
      { text: '-- Suggestions:', color: 'text-slate-600' },
      { text: 'CREATE INDEX idx_acc_id', color: 'text-green-400' },
      { text: '  ON transactions(account_id);', color: 'text-slate-300' },
      { text: '', color: '' },
      { text: '-- Cost: 842 → 12 (98% faster)', color: 'text-cyan-400' },
    ],
  },
];

export function ProjectCommandCenter() {
  const [activeId, setActiveId] = useState('orabank');
  const active = projects.find((p) => p.id === activeId)!;

  return (
    <section className="py-24 relative overflow-hidden bg-[#060c1c]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080f24] to-[#060c1c]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-blue-600/5 rounded-full filter blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Project Command Center</h2>
          <p className="text-slate-400 text-sm">Interaktywny podgląd mojego portfolio technicznego.</p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-[200px_1fr_280px] gap-4">
          {/* Left: project list */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0a1225] border border-blue-900/30 rounded-xl p-3 flex flex-col gap-1.5 lg:self-start"
          >
            <p className="text-[9px] text-slate-600 uppercase tracking-widest font-mono px-2 mb-1">Projekty</p>
            {projects.map((p) => (
              <motion.button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                whileHover={{ x: 3 }}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left transition-all w-full ${
                  activeId === p.id
                    ? `${p.accent} border`
                    : 'hover:bg-blue-500/5 border border-transparent'
                }`}
              >
                <p.icon className={`w-3.5 h-3.5 shrink-0 ${activeId === p.id ? p.color : 'text-slate-600'}`} />
                <div className="min-w-0">
                  <p className={`text-xs font-semibold truncate ${activeId === p.id ? 'text-white' : 'text-slate-500'}`}>
                    {p.name}
                  </p>
                  <p className="text-[9px] text-slate-600 truncate">{p.label}</p>
                </div>
                {activeId === p.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-1 h-1 rounded-full bg-blue-400 shrink-0"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Center: project details */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0a1225] border border-blue-900/30 rounded-xl p-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <active.icon className={`w-5 h-5 ${active.color}`} />
                      <h3 className="text-xl font-bold text-white">{active.name}</h3>
                      <span className={`text-[9px] px-2 py-0.5 rounded-full border font-mono ${active.statusColor}`}>
                        {active.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{active.label}</p>
                  </div>
                  <div className="flex gap-2">
                    {active.github && (
                      <motion.a whileHover={{ scale: 1.06 }}
                        href={active.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-xs font-semibold transition-all">
                        <Github className="w-3 h-3" /> GitHub
                      </motion.a>
                    )}
                    {active.demo && (
                      <motion.a whileHover={{ scale: 1.06 }}
                        href={active.demo} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition-all">
                        <ExternalLink className="w-3 h-3" /> Demo
                      </motion.a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">{active.description}</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <p className="text-[9px] text-slate-600 uppercase tracking-widest font-mono mb-2">Funkcje</p>
                    <ul className="space-y-1.5">
                      {active.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-slate-300">
                          <span className={`w-1 h-1 rounded-full ${active.color} shrink-0 bg-current`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-600 uppercase tracking-widest font-mono mb-2">Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {active.stack.map((s) => (
                        <span key={s} className={`px-2 py-0.5 text-[9px] rounded font-mono border bg-opacity-10 ${active.statusColor}`}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: code preview */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#070d1e] border border-blue-900/30 rounded-xl overflow-hidden lg:self-start"
          >
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a1225] border-b border-blue-900/20">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/70" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <div className="w-2 h-2 rounded-full bg-green-500/70" />
              </div>
              <span className="text-[9px] text-slate-600 font-mono">{active.id}.preview</span>
              <span className="text-[9px] text-green-500/60 font-mono">● live</span>
            </div>

            <div className="p-4 font-mono text-[10px] leading-5 min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId + '-code'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {active.codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={line.color || 'text-slate-700'}
                    >
                      {line.text || '\u00A0'}
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
