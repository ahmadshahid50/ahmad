'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('subject', 'Portfolio Contact Request');
    formData.append('access_key', '6e7326ef-a88b-4d35-a59f-ef49f94c4566');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Unable to send message.');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="rounded-3xl border border-border/60 bg-surface2/80 p-8 shadow-glow backdrop-blur-xl md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl"
      >
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-primary">Let&apos;s connect</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl">Get in touch</h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            I&apos;m available for freelance projects, full-time roles, or collaboration on exciting product work. Send me a message and I&apos;ll get back to you soon.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-muted">Name</span>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-2xl border border-border/70 bg-page/80 px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-muted">Email</span>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-2xl border border-border/70 bg-page/80 px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>

          <label className="md:col-span-2 space-y-2">
            <span className="text-sm font-medium text-muted">Message</span>
            <textarea
              name="message"
              rows={6}
              required
              className="w-full rounded-[28px] border border-border/70 bg-page/80 px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>

          <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-cyan-400 px-6 py-3 text-sm font-semibold text-page transition duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            <p className="text-sm text-muted">
              Prefer email? <a href="mailto:hello@ahmadshahid.dev" className="text-primary underline">meharahmed417@gmail.com</a>
            </p>
          </div>
        </form>

        {status === 'success' && (
          <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-700">
            Thanks! Your message has been sent.
          </div>
        )}

        {status === 'error' && (
          <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-700">
            Something went wrong while sending your message. Please try again or email me directly.
          </div>
        )}
      </motion.div>
    </section>
  );
}
