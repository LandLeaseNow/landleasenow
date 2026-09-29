import Link from "next/link";
import Image from "next/image";
import { STATE_LABELS } from "@/lib/types";

export default function Footer() {
  const states = Object.entries(STATE_LABELS).slice(0, 6);

  return (
    <footer className="bg-black text-white/80 mt-24">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo-mark-inverse.png"
              alt="Landlease Now"
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <span className="font-brand uppercase tracking-wide text-lg text-white">
              <span className="font-semibold">Land Lease</span>{" "}
              <span className="font-light">Now</span>
            </span>
          </div>
          <p className="mt-3 text-sm text-white/60 max-w-xs">
            An independent directory of land lease and lifestyle communities
            across Australia, for people comparing where to buy.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-wide text-white/40 mb-3">Directory</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/communities" className="hover:text-white">All communities</Link></li>
            <li><Link href="/operators" className="hover:text-white">Operators</Link></li>
            <li><Link href="/regions" className="hover:text-white">Browse by region</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-wide text-white/40 mb-3">By state</h3>
          <ul className="space-y-2 text-sm">
            {states.map(([code, label]) => (
              <li key={code}>
                <Link href={`/regions/${code}`} className="hover:text-white">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-wide text-white/40 mb-3">Get involved</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Submit a correction</Link></li>
            <li><Link href="/" className="hover:text-white">Add your community</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/40 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Landlease Now. Independent directory, not affiliated with any operator.</span>
          <span>Sample data shown for preview purposes.</span>
        </div>
      </div>
    </footer>
  );
}
