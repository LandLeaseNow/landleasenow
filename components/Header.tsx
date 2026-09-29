import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "/communities", label: "Communities" },
  { href: "/operators", label: "Operators" },
  { href: "/regions", label: "Regions" },
  { href: "/map", label: "Map" }
];

export default function Header() {
  return (
    <header className="border-b border-eucalypt/10 bg-card">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logo-mark.png"
            alt="Landlease Now"
            width={56}
            height={56}
            className="h-14 w-14"
            priority
          />
          <span className="leading-tight">
            <span className="block font-brand uppercase tracking-wide text-eucalypt text-lg">
              <span className="font-semibold">Land Lease</span>{" "}
              <span className="font-light">Now</span>
            </span>
            <span className="block text-xs tracking-wide text-ink/60">
              Australian land lease directory
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-16 text-sm font-bold text-ink/80">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-eucalypt transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 rounded-sm bg-black px-4 py-2 text-sm text-white">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            className="h-5 w-5 text-white/70"
          >
            <circle cx="12" cy="8" r="3.5" />
            <path d="M4.5 20c1.6-3.6 4.6-5.5 7.5-5.5s5.9 1.9 7.5 5.5" />
          </svg>
          <Link href="/sign-up" className="font-medium text-white hover:underline">
            Sign up
          </Link>
          <span className="text-white/50">or</span>
          <Link href="/log-in" className="font-medium text-white hover:underline">
            log in
          </Link>
        </div>
      </div>
    </header>
  );
}
