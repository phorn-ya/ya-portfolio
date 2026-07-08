import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY';

export default function Contact() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Basic validation
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      setState('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      // Submit via Web3Forms — 250 free submissions/month, no backend required
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          subject: formData.get('_subject') || 'Portfolio Contact Form',
          botcheck: formData.get('botcheck') || '',
        }),
      });

      const result = await res.json();

      if (!result.success) throw new Error(result.message || 'Submission failed');

      setState('success');
      form.reset();
    } catch {
      setState('error');
      setErrorMessage('Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <section id="contact" className="py-28 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-950 dark:text-white mb-4 tracking-tight">
            Get In <span className="text-rose-500">Touch</span>
          </h2>
          <div className="mb-6 h-1 w-20 rounded-full bg-rose-500" />
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">
            Let's discuss your next project or just say hello. I'm always excited to connect with fellow developers and potential collaborators.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info Side */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold dark:text-white mb-4 leading-tight">
                Let's Start a <span className="text-rose-500">Conversation</span>
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
                I'm currently available for freelance work and full-time opportunities. Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                { icon: Phone, label: "Phone", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
                { icon: MapPin, label: "Location", value: CONTACT_INFO.location, href: "#" }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800/60 hover:bg-rose-50 dark:hover:bg-rose-500/10 border border-slate-200 dark:border-slate-700 group transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-rose-500/10 dark:bg-rose-500/10 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{item.label}</p>
                    <p className="text-base font-semibold dark:text-white">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Follow</span>
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
              <div className="flex gap-3">
                {CONTACT_INFO.socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all shadow-sm"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 inline-flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                Available for Internship &amp; Freelance
              </span>
            </div>
          </div>

          {/* Form Side */}
          <motion.form
            onSubmit={handleSubmit}
            action="mailto:phornya26@gmail.com"
            method="post"
            encType="text/plain"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-white dark:bg-slate-800/60 rounded-[2rem] border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-8 text-rose-500 font-bold">
              <div className="p-2 rounded-lg bg-rose-500/10">
                <Send size={16} />
              </div>
              <span className="text-sm">Send Message</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 dark:text-white transition-all text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 dark:text-white transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5 mb-5">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Subject</label>
              <input
                type="text"
                name="_subject"
                placeholder="What's this about?"
                className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 dark:text-white transition-all text-sm"
              />
            </div>

            <div className="space-y-1.5 mb-8">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message *</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your project or just say hello..."
                required
                className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 dark:text-white transition-all text-sm resize-none"
              />
            </div>

            {/* Honeypot spam protection (hidden from real users) */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Status messages */}
            {state === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3"
              >
                <CheckCircle size={18} className="text-emerald-500 shrink-0" />
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  Message sent! I'll get back to you soon.
                </span>
              </motion.div>
            )}

            {state === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3"
              >
                <AlertCircle size={18} className="text-red-500 shrink-0" />
                <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                  {errorMessage}
                </span>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={state === 'loading'}
              whileHover={state === 'idle' ? { scale: 1.02 } : {}}
              whileTap={state === 'idle' ? { scale: 0.98 } : {}}
              className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 ${
                state === 'loading'
                  ? 'bg-rose-400 cursor-not-allowed text-white'
                  : 'bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/30'
              }`}
            >
              {state === 'loading' ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
              {state === 'loading' ? 'Sending...' : 'Send Message'}
            </motion.button>

            <p className="mt-5 text-center text-xs text-slate-400 font-semibold">
              Usually responds within 24 hours
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
