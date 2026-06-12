import { Database } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-blue-900/20 text-slate-500 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-blue-500/60" />
            <span className="text-sm text-slate-500">
              © 2026 Miłosz Kordziński. Wszelkie prawa zastrzeżone.
            </span>
          </div>
          <p className="text-sm text-slate-600">
            Zbudowane z React, Vite i Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
