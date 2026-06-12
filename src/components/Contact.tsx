import { Mail, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:miloszk.kontakt@gmail.com?subject=Wiadomość od ${encodeURIComponent(name)}&body=${encodeURIComponent(`Imię: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'miloszk.kontakt@gmail.com',
      href: 'mailto:miloszk.kontakt@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Miłosz Kordziński',
      href: 'https://www.linkedin.com/in/miłosz-kordziński-a85947254',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@milekv',
      href: 'https://github.com/milekv',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050a1e]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060c1c] to-[#050a1e]" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Kontakt</h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-6">
            Masz projekt związany z bazami danych, backendem, automatyzacją lub analizą danych? Napisz do mnie.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-white mb-6">Sposoby kontaktu</h3>
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label !== 'Email' ? '_blank' : undefined}
                rel={c.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0d1b35] border border-blue-900/30 hover:border-blue-500/40 hover:bg-[#0f2040] transition-all group"
              >
                <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-lg group-hover:bg-blue-500/20 transition-all">
                  <c.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{c.label}</p>
                  <p className="text-xs text-slate-400">{c.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Imię</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0d1b35] border border-blue-900/30 text-white text-sm focus:outline-none focus:border-blue-500/60 focus:bg-[#0f2040] transition-all placeholder-slate-600"
                placeholder="Twoje imię"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0d1b35] border border-blue-900/30 text-white text-sm focus:outline-none focus:border-blue-500/60 focus:bg-[#0f2040] transition-all placeholder-slate-600"
                placeholder="Twój email"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">Wiadomość</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-[#0d1b35] border border-blue-900/30 text-white text-sm focus:outline-none focus:border-blue-500/60 focus:bg-[#0f2040] transition-all resize-none placeholder-slate-600"
                placeholder="Twoja wiadomość..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all text-sm shadow-lg hover:shadow-blue-500/30"
            >
              {submitted ? 'Otwieranie klienta pocztowego...' : 'Wyślij wiadomość'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
