import { useState } from "react";
import { Copy, Gift, QrCode, Banknote } from "lucide-react";

export default function GiftSection() {
  const [activeTab, setActiveTab] = useState<"qris" | "transfer" | "hadiah">("qris");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Berhasil disalin!");
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-14">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-serif text-center mb-6">Wedding Gift</h2>

        {/* 🪄 Tab Button */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          <button
            onClick={() => setActiveTab("qris")}
            className={`flex flex-col items-center rounded-xl py-2 ${
              activeTab === "qris" ? "bg-amber-400 text-white" : "bg-neutral-100"
            }`}
          >
            <QrCode className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">QRIS</span>
          </button>

          <button
            onClick={() => setActiveTab("transfer")}
            className={`flex flex-col items-center rounded-xl py-2 ${
              activeTab === "transfer" ? "bg-amber-400 text-white" : "bg-neutral-100"
            }`}
          >
            <Banknote className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Transfer</span>
          </button>

          <button
            onClick={() => setActiveTab("hadiah")}
            className={`flex flex-col items-center rounded-xl py-2 ${
              activeTab === "hadiah" ? "bg-amber-400 text-white" : "bg-neutral-100"
            }`}
          >
            <Gift className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Hadiah</span>
          </button>
        </div>

        {/* 📌 Konten Tiap Tab */}
        {activeTab === "qris" && (
          <div className="text-center space-y-3 animate-fadeIn">
            <p className="text-neutral-600">Scan QRIS untuk memberikan hadiah</p>
            <div className="border rounded-xl overflow-hidden">
              <img
                src="/gallery/qris-sample.jpg"
                alt="QRIS"
                className="w-full max-w-xs mx-auto"
              />
            </div>
          </div>
        )}

        {activeTab === "transfer" && (
          <div className="space-y-3 animate-fadeIn">
            <div className="border rounded-xl p-3 flex justify-between items-center">
              <div>
                <p className="font-semibold">BCA</p>
                <p className="text-sm text-neutral-500">a/n Galih</p>
                <p className="font-mono text-lg">1234567890</p>
              </div>
              <button
                onClick={() => handleCopy("1234567890")}
                className="bg-black text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1"
              >
                <Copy className="w-4 h-4" /> Salin
              </button>
            </div>

            <div className="border rounded-xl p-3 flex justify-between items-center">
              <div>
                <p className="font-semibold">Mandiri</p>
                <p className="text-sm text-neutral-500">a/n Dian</p>
                <p className="font-mono text-lg">9876543210</p>
              </div>
              <button
                onClick={() => handleCopy("9876543210")}
                className="bg-black text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1"
              >
                <Copy className="w-4 h-4" /> Salin
              </button>
            </div>
          </div>
        )}

        {activeTab === "hadiah" && (
          <div className="space-y-2 animate-fadeIn">
            <p className="text-neutral-600">
              Kirim hadiah fisik ke alamat berikut:
            </p>
            <div className="border rounded-xl p-3 text-sm text-neutral-800 leading-relaxed">
              Jl. Contoh Alamat Pengantin No. 123, Jakarta Selatan, Indonesia
            </div>
            <button
              onClick={() =>
                handleCopy(
                  "Jl. Contoh Alamat Pengantin No. 123, Jakarta Selatan, Indonesia"
                )
              }
              className="bg-black text-white px-4 py-2 rounded-xl text-sm flex items-center justify-center gap-1 w-full"
            >
              <Copy className="w-4 h-4" /> Salin Alamat
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
