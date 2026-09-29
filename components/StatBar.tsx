interface Stat {
  value: string;
  label: string;
}

export default function StatBar({ stats }: { stats: Stat[] }) {
  return (
    <div className="border-y border-eucalypt/10 bg-sand-light">
      <div className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-serif text-3xl text-ink">{stat.value}</div>
            <div className="text-xs uppercase tracking-wide text-ink/50 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
