import { useState } from "react";
import { Heart } from "lucide-react";

interface GuestbookEntry {
  name: string;
  message: string;
  ts: string;
}

export default function GuestbookSection() {
  const [guestbook, setGuestbook] = useState<GuestbookEntry[]>(() => {
    const raw = localStorage.getItem("guestbook");
    return raw ? JSON.parse(raw) : [];
  });

  const [wish, setWish] = useState({ name: "", message: "" });

  function addWish(e: React.FormEvent) {
    e.preventDefault();
    if (!wish.name || !wish.message) return;
    const item: GuestbookEntry = { ...wish, ts: new Date().toISOString() };
    const updated = [item, ...guestbook];
    setGuestbook(updated);
    localStorage.setItem("guestbook", JSON.stringify(updated));
    setWish({ name: "", message: "" });
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-14 grid sm:grid-cols-2 gap-6">
      <form onSubmit={addWish} className="rounded-2xl bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-serif">Ucapan & Doa</h3>
        <input
          placeholder="Nama"
          value={wish.name}
          onChange={(e) => setWish((v) => ({ ...v, name: e.target.value }))}
          className="mt-4 w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-amber-400"
        />
        <textarea
          placeholder="Tulis ucapan terbaikmu..."
          value={wish.message}
          onChange={(e) => setWish((v) => ({ ...v, message: e.target.value }))}
          className="mt-3 w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-amber-400"
        />
        <button
          type="submit"
          className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-neutral-900 text-white px-5 py-3 hover:bg-neutral-800"
        >
          <Heart className="w-4 h-4" /> Kirim Ucapan
        </button>
      </form>
      <div className="rounded-2xl bg-white p-6 shadow-sm max-h-96 overflow-auto">
        <h3 className="text-2xl font-serif">Ucapan Masuk</h3>
        <div className="mt-4 space-y-4 pr-2">
          {guestbook.length === 0 && (
            <p className="text-neutral-500">Belum ada ucapan. Jadilah yang pertama! ✨</p>
          )}
          {guestbook.map((g, i) => (
            <div key={i} className="rounded-xl border p-4">
              <div className="font-medium">{g.name}</div>
              <div className="mt-1 text-neutral-700">{g.message}</div>
              <div className="mt-1 text-xs text-neutral-500">
                {new Date(g.ts).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
