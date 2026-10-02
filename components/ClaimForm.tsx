"use client";

import { useState } from "react";

// Web3Forms public access key. It is designed to sit in client-side code;
// submissions are emailed to the address it was created with.
const WEB3FORMS_ACCESS_KEY = "35f066f3-e5b0-4e8e-a32b-0ff460fdcc60";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "mt-1 w-full rounded-sm border border-eucalypt/15 bg-card px-4 py-3 text-base text-ink shadow-sm placeholder:text-ink/45 focus:outline-none focus:ring-1 focus:ring-ink/30";
const labelClass = "block text-sm font-medium text-ink";

export default function ClaimForm({
  communityName,
  communitySlug,
  operatorName
}: {
  communityName?: string;
  communitySlug?: string;
  operatorName?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    const community = String(formData.get("community") ?? "");
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `New community claim: ${community || "unspecified"}`);
    formData.append("from_name", "Land Lease Now");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = (await response.json()) as { success?: boolean };
      setStatus(result.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-eucalypt/10 bg-card p-8 text-center shadow-sm">
        <h2 className="font-serif text-2xl text-eucalypt">Thanks, we've received your claim</h2>
        <p className="mx-auto mt-3 max-w-md text-ink/70">
          We'll be in touch shortly to verify your details. Once confirmed, your
          listing will show as verified by the operator.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-sm border border-eucalypt/10 bg-card p-6 shadow-sm sm:p-8"
    >
      {/* Spam trap: hidden from people, bots tend to fill it in. */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="community_slug" value={communitySlug ?? ""} />
      <input type="hidden" name="listed_operator" value={operatorName ?? ""} />

      <div>
        <label htmlFor="claim-community" className={labelClass}>Community</label>
        <input
          id="claim-community"
          name="community"
          type="text"
          required
          defaultValue={communityName}
          placeholder="Community name"
          className={inputClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="claim-name" className={labelClass}>Your name</label>
          <input id="claim-name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="claim-role" className={labelClass}>Job title</label>
          <input id="claim-role" name="job_title" type="text" required autoComplete="organization-title" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="claim-company" className={labelClass}>Company</label>
        <input
          id="claim-company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          defaultValue={operatorName}
          className={inputClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="claim-email" className={labelClass}>Work email</label>
          <input id="claim-email" name="email" type="email" required autoComplete="email" className={inputClass} />
          <p className="mt-1 text-sm text-ink/60">Ideally on your company's domain, so we can verify you quickly.</p>
        </div>
        <div>
          <label htmlFor="claim-phone" className={labelClass}>Phone</label>
          <input id="claim-phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="claim-message" className={labelClass}>
          Anything we should update? <span className="font-normal text-ink/60">(optional)</span>
        </label>
        <textarea
          id="claim-message"
          name="message"
          rows={4}
          placeholder="Site fees, number of homes, status, amenities..."
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p className="rounded-sm bg-orange-100 px-4 py-3 text-sm text-orange-800" role="alert">
          Sorry, something went wrong sending your claim. Please try again in a moment.
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink/60">We only use these details to verify your claim.</p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 rounded-sm bg-black px-8 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-neutral-800 disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Submit claim"}
        </button>
      </div>
    </form>
  );
}
