import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';

interface Command {
  input: string;
  output: string[];
}

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [commands, setCommands] = useState<Command[]>([]);
  const [input, setInput] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commandResponses: Record<string, string[]> = {
    whoami: [
      'Miłosz Kordziński',
      'Database Engineer | SQL Developer',
      'Location: Poland',
    ],
    skills: [
      'SQL, Oracle Database, PL/SQL, PostgreSQL',
      'Backend: Node.js, Express, Python, Flask',
      'Data Modeling, Performance Tuning, Partitioning',
    ],
    projects: [
      'OraBank             -- Enterprise Oracle Banking System',
      'VisualDB Studio     -- Visual Database Design Tool',
      'CommerceFlow        -- E-commerce Backend Platform',
      'CodeSprint          -- Interactive Learning Platform',
      'E-commerce API      -- RESTful Backend',
      'System Firmy Szkoleniowej -- Analytics Dashboard',
      'Optymalizator SQL   -- Query Performance Tool',
    ],
    contact: [
      'Email:    miloszk.kontakt@gmail.com',
      'LinkedIn: Miłosz Kordziński',
      'GitHub:   @milekv',
    ],
    help: [
      'Dostępne komendy:',
      '  whoami   - Informacje o mnie',
      '  skills   - Moje umiejętności',
      '  projects - Moje projekty',
      '  contact  - Dane kontaktowe',
      '  clear    - Wyczyść terminal',
      '  help     - Ta wiadomość',
    ],
    clear: [],
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (trimmed === 'clear') {
      setCommands([]);
      setInput('');
      return;
    }
    const output = commandResponses[trimmed] || [
      `bash: ${trimmed}: command not found`,
      'Type "help" for available commands',
    ];
    setCommands((prev) => [...prev, { input: cmd, output }]);
    setInput('');
    setTimeout(() => {
      terminalRef.current?.scrollTo({ top: terminalRef.current.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) handleCommand(input);
  };

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  return (
    <section className="relative overflow-hidden py-16 bg-[#060c1c]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all text-sm"
          >
            <TerminalIcon className="w-4 h-4" />
            Developer Terminal
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.25 }}
              className="mt-8 max-w-2xl mx-auto"
            >
              <div className="bg-[#070d1c] rounded-xl border border-blue-900/40 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between bg-[#0a1225] px-4 py-3 border-b border-blue-900/30">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-blue-400 font-mono">milekv@portfolio:~</span>
                  <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div ref={terminalRef} className="h-80 overflow-y-auto p-4 space-y-2 font-mono text-sm">
                  <div className="text-blue-400/70 text-xs mb-3">
                    Wpisz komendę... (help - dostępne komendy)
                  </div>
                  <AnimatePresence>
                    {commands.map((cmd, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <div className="text-green-400 text-xs">$ {cmd.input}</div>
                        {cmd.output.map((line, li) => (
                          <div key={li} className="text-slate-300 text-xs ml-3 leading-5">{line}</div>
                        ))}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <form onSubmit={handleSubmit} className="border-t border-blue-900/30 bg-[#0a1225] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 font-mono text-sm">$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="whoami, skills, projects, contact..."
                      className="flex-1 bg-transparent text-slate-100 font-mono text-sm outline-none placeholder-slate-600"
                      autoComplete="off"
                    />
                  </div>
                </form>
              </div>

              <p className="text-center text-xs text-slate-600 mt-3">
                Spróbuj: <code className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">whoami</code> lub{' '}
                <code className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">projects</code>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
