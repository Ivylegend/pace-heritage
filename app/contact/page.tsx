"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ease = [0.19, 1, 0.22, 1] as const;

const INQUIRY_TYPES = [
  "Wholesale Pricing",
  "Private Label Manufacturing",
  "Distribution Partnership",
  "Dry Mix / Cones Order",
  "Retail Supply",
  "General Enquiry",
];

const inputBase =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-[#f3b23f]/60 focus:bg-white/8 focus:ring-2 focus:ring-[#f3b23f]/20";

const labelBase = "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/50";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Unable to send message right now.");
      }

      setFormState("success");
    } catch (error) {
      setFormState("error");
      setErrorMessage(error instanceof Error ? error.message : "Unable to send message right now.");
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans text-[#0A1A2F]">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_66%_35%,rgba(17,166,232,0.28),transparent_33%),linear-gradient(125deg,#05142b_0%,#071a34_48%,#020d20_100%)] pb-24 pt-[150px] text-white max-lg:pt-32 max-sm:pt-28">
        {/* Grid overlay */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[82px_82px]" />
        {/* Radial light accents */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_42%_18%,rgba(243,178,63,0.12),transparent_18%),radial-gradient(circle_at_74%_20%,rgba(255,255,255,0.16),transparent_8%),radial-gradient(circle_at_88%_62%,rgba(17,166,232,0.18),transparent_22%)]" />

        <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#f3b23f]"
          >
            Get in Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.1, ease }}
            className="mt-5 font-serif text-[clamp(2.8rem,5vw,4rem)] leading-[0.96] max-sm:text-[clamp(2.5rem,11vw,3.6rem)] max-sm:leading-[1.02]"
          >
            Let&apos;s Build Something
            <br />
            <span className="text-[#f3b23f]">Great Together.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.22, ease }}
            className="mt-5 max-w-xl text-[1.05rem] leading-8 text-white/75"
          >
            Whether you&apos;re looking for wholesale pricing, private label manufacturing,
            or a distribution partnership — our team is ready to help.
          </motion.p>
        </div>
      </section>

      {/* ── Main content: Form + Info ───────────────────────────── */}
      <section className="relative -mt-8 pb-24">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

            {/* ── Contact Form ──────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="rounded-3xl bg-[linear-gradient(135deg,#071a34_0%,#021025_100%)] p-8 shadow-[0_28px_72px_rgba(0,0,0,0.28)] ring-1 ring-white/8 md:p-12"
            >
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f3b23f]/15 ring-1 ring-[#f3b23f]/30">
                    <svg className="h-9 w-9 text-[#f3b23f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-white md:text-3xl">
                    Message Received!
                  </h2>
                  <p className="mt-3 max-w-sm text-base leading-7 text-white/65">
                    Thank you for reaching out. A member of our team will get back to you within one business day.
                  </p>
                  <button
                    onClick={() => { setFormState("idle"); setErrorMessage(""); setForm({ name: "", company: "", email: "", phone: "", inquiryType: "", message: "" }); }}
                    className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/6 px-6 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="font-serif text-2xl font-bold text-white md:text-3xl">
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Fill in the form below and we&apos;ll get back to you within one business day.
                  </p>
                  {formState === "error" ? (
                    <p className="mt-4 rounded-xl border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-100">
                      {errorMessage}
                    </p>
                  ) : null}

                  <form
                    id="contact-form"
                    onSubmit={handleSubmit}
                    className="mt-9 grid gap-5 sm:grid-cols-2"
                    noValidate
                  >
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-name" className={labelBase}>
                        Full Name <span className="text-[#f3b23f]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="e.g. Chidi Okafor"
                        value={form.name}
                        onChange={handleChange}
                        className={inputBase}
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="contact-company" className={labelBase}>
                        Company / Business Name <span className="text-[#f3b23f]">*</span>
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        required
                        autoComplete="organization"
                        placeholder="e.g. Lagos Supermart Ltd."
                        value={form.company}
                        onChange={handleChange}
                        className={inputBase}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className={labelBase}>
                        Email Address <span className="text-[#f3b23f]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputBase}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className={labelBase}>
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+234 800 000 0000"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputBase}
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div className="sm:col-span-2">
                      <label htmlFor="contact-inquiry" className={labelBase}>
                        Inquiry Type <span className="text-[#f3b23f]">*</span>
                      </label>
                      <select
                        id="contact-inquiry"
                        name="inquiryType"
                        required
                        value={form.inquiryType}
                        onChange={handleChange}
                        className={`${inputBase} appearance-none`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 14px center",
                          paddingRight: "40px",
                        }}
                      >
                        <option value="" disabled className="bg-[#071a34]">
                          — Select an inquiry type —
                        </option>
                        {INQUIRY_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-[#071a34]">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label htmlFor="contact-message" className={labelBase}>
                        Message / Details <span className="text-[#f3b23f]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your business needs — quantities, product types, timelines, etc."
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputBase} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <div className="sm:col-span-2">
                      <button
                        id="contact-submit"
                        type="submit"
                        disabled={formState === "submitting"}
                        className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-linear-to-br from-[#c8791c] to-[#f3b23f] px-8 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(217,149,36,0.32)] transition disabled:opacity-60 hover:enabled:-translate-y-0.5 hover:enabled:from-[#d98a2a] hover:enabled:to-[#f5c14f] hover:enabled:shadow-[0_18px_44px_rgba(217,149,36,0.40)] sm:w-auto"
                      >
                        {formState === "submitting" ? (
                          <>
                            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>

            {/* ── Info Sidebar ──────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease }}
              className="flex flex-col gap-5"
            >
              {/* Contact details card */}
              <div className="rounded-3xl bg-[linear-gradient(135deg,#071a34_0%,#021025_100%)] p-8 ring-1 ring-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
                <h2 className="font-serif text-xl font-bold text-white">Contact Details</h2>
                <p className="mt-1.5 text-sm leading-6 text-white/50">
                  Prefer to reach us directly? Use any of the channels below.
                </p>
                <ul className="mt-7 grid gap-5">
                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f3b23f]/12 ring-1 ring-[#f3b23f]/20">
                      <Phone className="h-4.5 w-4.5 text-[#f3b23f]" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Phone</p>
                      <a
                        href="tel:+2347065934811"
                        className="mt-0.5 block text-sm font-medium text-white transition hover:text-[#f3b23f]"
                      >
                        07065934811
                      </a>
                      <a
                        href="tel:+2347032328424"
                        className="mt-0.5 block text-sm font-medium text-white transition hover:text-[#f3b23f]"
                      >
                        07032328424
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f3b23f]/12 ring-1 ring-[#f3b23f]/20">
                      <MessageCircle className="h-4.5 w-4.5 text-[#f3b23f]" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/40">WhatsApp</p>
                      <a
                        href="https://wa.me/2347032328424"
                        className="mt-0.5 block text-sm font-medium text-white transition hover:text-[#f3b23f]"
                      >
                        07032328424
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f3b23f]/12 ring-1 ring-[#f3b23f]/20">
                      <Mail className="h-4.5 w-4.5 text-[#f3b23f]" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Email</p>
                      <a
                        href="mailto:info@paceheritage.com"
                        className="mt-0.5 block text-sm font-medium text-white transition hover:text-[#f3b23f]"
                      >
                        info@paceheritage.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f3b23f]/12 ring-1 ring-[#f3b23f]/20">
                      <MapPin className="h-4.5 w-4.5 text-[#f3b23f]" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Address</p>
                      <p className="mt-0.5 text-sm font-medium leading-6 text-white">
                        PaceHeritage Limited
                        <br />
                        Block C7,
                        <br />
                        Lagos State Small Scale Industrial Scheme,
                        <br />
                        Fatai Atere Way,
                        <br />
                        Matori,
                        <br />
                        Lagos
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f3b23f]/12 ring-1 ring-[#f3b23f]/20">
                      <Clock className="h-4.5 w-4.5 text-[#f3b23f]" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Office Hours</p>
                      <p className="mt-0.5 text-sm font-medium leading-6 text-white">
                        Mon – Fri: 8:00 AM – 5:00 PM<br />
                        <span className="text-white/50">Sat – Sun: Closed</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* What to expect card */}
              <div className="rounded-3xl bg-[linear-gradient(135deg,#071a34_0%,#021025_100%)] p-8 ring-1 ring-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
                <h2 className="font-serif text-lg font-bold text-white">What to Expect</h2>
                <ul className="mt-5 grid gap-4">
                  {[
                    { step: "01", text: "We review your inquiry and match you with the right team member." },
                    { step: "02", text: "You receive a response within one business day." },
                    { step: "03", text: "We discuss your requirements and provide a tailored proposal." },
                  ].map(({ step, text }) => (
                    <li key={step} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f3b23f]/15 text-[11px] font-bold text-[#f3b23f]">
                        {step}
                      </span>
                      <p className="text-sm leading-6 text-white/65">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
