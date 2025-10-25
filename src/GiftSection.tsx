import { Copy, Check } from "lucide-react";
import { useState } from "react";

const GIFTS = [
  { bank: "BCA", name: "Galih", number: "1234567890" },
  { bank: "Mandiri", name: "Dian", number: "9876543210" },
];

const QRIS_IMAGE_URL = "https://www.vintageprints.co.uk/image/catalog/Product%20Photos/Invite%20Only/Vintage%20Blooms/VB11/VB11%20Vintage%20Bloom%20Invite%20Only%20Sq%2011%20Closer.jpg";
const GIFT_ADDRESS = "Jl. Contoh Alamat Pengantin No. 123, Jakarta Selatan";

export default function GiftSection() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  async function copyNumber(i: number) {
    try {
      await navigator.clipboard.writeText(GIFTS[i].number);
      setCopiedIdx(i);
      setTimeout(() => setCopiedIdx(null), 1500);
    } catch {}
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-14">
      <div className="text-center">
        <h2 className="text-3xl font-serif">Wedding Gift</h2>
        <p className="mt-2 text-neutral-600">
          Bagi keluarga/teman yang berhalangan hadir, dapat berbagi kebahagiaan melalui hadiah di bawah ini.
        </p>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-neutral-100 p-6 shadow-sm text-center">
          <div className="font-medium">QRIS</div>
          <img src={QRIS_IMAGE_URL} alt="QRIS" className="mt-3 mx-auto w-64 h-64 object-cover rounded-xl border" />
        </div>
        <div className="rounded-2xl bg-neutral-100 p-6 shadow-sm">
          <div className="font-medium mb-3">Rekening Bank</div>
          <div className="space-y-3">
            {GIFTS.map((g, i) => (
              <div key={i} className="rounded-xl border p-4 flex items-center justify-between gap-3">
                <div>
                  <div className="font-medium">{g.bank}</div>
                  <div className="text-sm text-neutral-600">a/n {g.name}</div>
                  <div className="mt-1 text-lg tracking-wider">{g.number}</div>
                </div>
                <button
                  onClick={() => copyNumber(i)}
                  className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-3 py-2 hover:bg-neutral-800"
                >
                  {copiedIdx === i ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copiedIdx === i ? "Tersalin" : "Salin"}
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl border text-sm text-neutral-700 bg-neutral-100">
            <p className="font-medium mb-1">Alamat Pengiriman Barang:</p>
            <p>{GIFT_ADDRESS}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
