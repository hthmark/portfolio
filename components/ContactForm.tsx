"use client";

import { useState, type FormEvent } from "react";
import { finalCtaContent, siteConfig } from "@/lib/content";
import { ArrowUpRight } from "./icons/ArrowUpRight";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const { form } = finalCtaContent;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = `Portfolio inquiry from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  const inputClasses =
    "w-full rounded-2xl border border-ink/15 bg-white/60 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-ink";

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 flex w-full max-w-md flex-col gap-4">
      <input
        type="text"
        required
        placeholder={form.nameLabel}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={inputClasses}
      />
      <input
        type="email"
        required
        placeholder={form.emailLabel}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputClasses}
      />
      <textarea
        required
        rows={4}
        placeholder={form.messageLabel}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={`${inputClasses} resize-none`}
      />
      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 self-center rounded-pill bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors duration-300 hover:bg-accent"
      >
        <span>{form.submitLabel}</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cream/10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight className="h-3 w-3" />
        </span>
      </button>
      {sent && <p className="text-center text-xs text-ink/50">{form.sentLabel}</p>}
    </form>
  );
}
