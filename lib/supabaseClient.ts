"use client";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Fails fast and clearly in dev rather than a confusing runtime error
  // from inside the Supabase client later.
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. Check .env.local (local) or the Vercel project's Environment Variables (production)."
  );
}

// A single browser client shared across the app. supabase-js persists the
// session in localStorage and keeps it in sync across tabs automatically.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
