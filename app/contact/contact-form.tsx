'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data';

export function ContactForm() {
  const [status, setStatus] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();
    const body = `From: ${name} (${email})\n\n${message}`;
    setStatus('Your email app will open with a draft. Please send it there to complete your enquiry.');
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="contact-form-row"><label>Full name <span aria-hidden="true">*</span><input name="name" type="text" autoComplete="name" required minLength={2} placeholder="Your name" /></label><label>Email address <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label></div>
    <label>Subject <span aria-hidden="true">*</span><select name="subject" required defaultValue=""><option value="" disabled>Select a topic</option><option>Product enquiry</option><option>Craft and materials</option><option>Collection enquiry</option><option>Press or collaboration</option><option>Something else</option></select></label>
    <label>Your message <span aria-hidden="true">*</span><textarea name="message" required minLength={10} rows={6} placeholder="Tell us how we can help..." /></label>
    <p className="contact-form-note">This form opens an email draft in your email app. No message is sent from the website.</p>
    <button className="solid-button" type="submit">Prepare Email <ArrowUpRight size={17} /></button>
    <p className="contact-form-status" role="status" aria-live="polite">{status}</p>
  </form>;
}

