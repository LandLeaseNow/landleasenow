"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

const inputClass =
  "mt-1 w-full rounded-sm border border-eucalypt/15 bg-card px-4 py-3 text-base text-ink shadow-sm placeholder:text-ink/45 focus:outline-none focus:ring-1 focus:ring-ink/30";
const labelClass = "block text-sm font-medium text-ink";

export default function LogInPage() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setErrorMessage(error.message);
      setStatus("error");
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <div className="container-page py-12">
      <div className="mx-auto max-w-md">
        <h1 className="font-serif text-3xl text-eucalypt">Log in</h1>
        <p className="mt-3 text-ink/70">
          Welcome back. Log in to manage your saved communities and alerts.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5 rounded-sm border border-eucalypt/10 bg-card p-6 shadow-sm sm:p-8"
        >
          <div>
            <label htmlFor="login-email" className={labelClass}>Email</label>
            <input
              id="login-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="login-password" className={labelClass}>Password</label>
            <input
              id="login-password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className={inputClass}
            />
          </div>

          {status === "error" && (
            <p className="rounded-sm bg-orange-100 px-4 py-3 text-sm text-orange-800" role="alert">
              {errorMessage || "Couldn't log in. Please check your details and try again."}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-sm bg-black px-8 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-neutral-800 disabled:opacity-60"
          >
            {status === "sending" ? "Logging in..." : "Log in"}
          </button>

          <p className="text-center text-sm text-ink/60">
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-eucalypt underline underline-offset-2 hover:text-eucalypt-light">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
