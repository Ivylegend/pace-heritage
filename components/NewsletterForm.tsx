"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Unable to subscribe right now.");
      }

      setState("success");
      setEmail("");
      setMessage("Thanks. We have received your subscription.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Unable to subscribe right now.");
    }
  }

  return (
    <form className="mt-4" aria-label="Newsletter signup" onSubmit={handleSubmit}>
      <div className="flex min-h-11 overflow-hidden rounded-lg bg-white">
        <input
          className="min-w-0 flex-1 px-3.5 text-[#07182f] outline-0"
          type="email"
          placeholder="Enter your email"
          aria-label="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <button
          className="flex w-12 items-center justify-center bg-[#d99524] font-black text-white disabled:opacity-60"
          type="submit"
          aria-label="Submit newsletter signup"
          disabled={state === "submitting"}
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
      {message ? (
        <p className={`mt-2 text-xs leading-5 ${state === "error" ? "text-red-200" : "text-white/65"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}

