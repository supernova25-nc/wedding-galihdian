import { useEffect, useState } from "react";

export default function Countdown({ targetDate }: { targetDate: Date }) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  const dd = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hh = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mm = Math.floor((diff / (1000 * 60)) % 60);
  const ss = Math.floor((diff / 1000) % 60);

  return (
    <div className="mt-8 grid grid-cols-4 gap-3 h-[100px] items-center">
      {[{ label: "Hari", val: dd }, { label: "Jam", val: hh }, { label: "Menit", val: mm }, { label: "Detik", val: ss }].map((x, idx) => (
        <div key={idx} className="rounded-2xl bg-white/10 backdrop-blur px-5 py-4 text-center">
          <div className="w-14 font-mono text-3xl font-semibold text-center">{String(x.val).padStart(2, "0")}</div>
          <div className="text-xs tracking-wider uppercase text-white/80">{x.label}</div>
        </div>
      ))}
    </div>
  );
}
