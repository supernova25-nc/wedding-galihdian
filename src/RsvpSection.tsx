import { Send } from "lucide-react";
import { useState } from "react";

export default function RsvpSection() {
  const [rsvp, setRsvp] = useState({ name: "", status: "Hadir", pax: 1 });
  const WA_NUMBER = "628993791455";

  function openWA() {
    const text = `Halo Galih & Dian%0A%0A` +
      `Nama: ${encodeURIComponent(rsvp.name)}%0A` +
      `Kehadiran: ${encodeURIComponent(rsvp.status)}%0A` +
      `Jumlah Tamu: ${encodeURIComponent(String(rsvp.pax))}%0A` +
      `Sampai jumpa di acara!`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-14">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-serif">Konfirmasi Kehadiran</h3>
        <div className="mt-4 grid sm:grid-cols-4 gap-3">
          <input
            placeholder="Nama lengkap"
            value={rsvp.name}
            onChange={(e) => setRsvp((v) => ({ ...v, name: e.target.value }))}
            className="rounded-xl border px-4 py-3 focus:ring-2 focus:ring-amber-400 col-span-2"
          />
          <select
            value={rsvp.status}
            onChange={(e) => setRsvp((v) => ({ ...v, status: e.target.value }))}
            className="rounded-xl border px-4 py-3 focus:ring-2 focus:ring-amber-400"
          >
            <option>Hadir</option>
            <option>Tidak Hadir</option>
          </select>
          <input
            type="number"
            min={1}
            value={rsvp.pax}
            onChange={(e) => setRsvp((v) => ({ ...v, pax: Number(e.target.value) }))}
            className="rounded-xl border px-4 py-3 focus:ring-2 focus:ring-amber-400"
          />
        </div>
        <button
          onClick={openWA}
          className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-emerald-600 text-white px-5 py-3 hover:bg-emerald-700"
        >
          <Send className="w-4 h-4" /> Kirim via WhatsApp
        </button>
      </div>
    </section>
  );
}
