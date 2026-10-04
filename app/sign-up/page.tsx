"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

const inputClass =
  "mt-1 w-full rounded-sm border border-eucalypt/15 bg-card px-4 py-3 text-base text-ink shadow-sm placeholder:text-ink/45 focus:outline-none focus:ring-1 focus:ring-ink/30";
const labelClass = "block text-sm font-medium text-ink";

export default function SignUpPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setErrorMessage(error.message);
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="font-serif text-3xl text-eucalypt">Check your email</h1>
        <p className="mx-auto mt-3 max-w-md text-ink/70">
          We've sent a confirmation link to your inbox. Click it to activate your account, then{" "}
          <Link href="/log-in" className="text-eucalypt underline underline-offset-2 hover:text-eucalypt-light">
            log in
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="container-page py-12">
      <div className="mx-auto max-w-md">
        <h1 className="font-serif text-3xl text-eucalypt">Create your account</h1>
        <p className="mt-3 text-ink/70">
          Save communities, get alerts on new listings, and more.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5 rounded-sm border border-eucalypt/10 bg-card p-6 shadow-sm sm:p-8"
        >
          <div>
            <label htmlFor="signup-email" className={labelClass}>Email</label>
            <input
              id="signup-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="signup-password" className={labelClass}>Password</label>
            <input
              id="signup-password"
              name="password"
              type="password"
              required
              minLength={6}
              autoComplete="new-password"
              className={inputClass}
            />
            <p className="mt-1 text-sm text-ink/60">At least 6 characters.</p>
          </div>

          {status === "error" && (
            <p className="rounded-sm bg-orange-100 px-4 py-3 text-sm text-orange-800" role="alert">
              {errorMessage || "Something went wrong creating your account. Please try again."}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-sm bg-black px-8 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-neutral-800 disabled:opacity-60"
          >
            {status === "sending" ? "Creating account..." : "Sign up"}
          </button>

          <p className="text-center text-sm text-ink/60">
            Already have an account?{" "}
            <Link href="/log-in" className="text-eucalypt underline underline-offset-2 hover:text-eucalypt-light">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
