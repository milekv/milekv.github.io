import { Moon, Sun, Menu, X, Database } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'O mnie', href: '#about' },
    { label: 'Projekty', href: '#projects' },
    { label: 'Umiejętności', href: '#skills' },
    { label: 'Pipeline', href: '#pipeline' },
    { label: 'Kontakt', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[#050a1e]/90 backdrop-blur-md z-50 border-b border-blue-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-2 text-white font-bold text-base tracking-wide hover:text-blue-400 transition-colors"
          >
            <Database className="w-4 h-4 text-blue-400" />
            Miłosz Kordziński
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm text-slate-400 hover:text-blue-400 transition-colors tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all border border-slate-700"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-300" />
              ) : (
                <Sun className="w-4 h-4 text-slate-300" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-300" />
              ) : (
                <Sun className="w-4 h-4 text-slate-300" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-slate-300" />
              ) : (
                <Menu className="w-4 h-4 text-slate-300" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-1 border-t border-blue-900/30">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block py-2.5 px-4 text-sm text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
