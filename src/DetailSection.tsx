import { Clock, MapPin } from "lucide-react";

export default function DetailSection({ mapsLink }: { mapsLink: string }) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-14">
      <div className="text-center">
        <h2 className="text-3xl font-serif">Detail Acara</h2>
        <p className="mt-2 text-neutral-600">Mohon doa restu atas pernikahan kami.</p>
      </div>
      <div className="mt-8 grid sm:grid-cols-3 gap-5">
        <DetailBox icon={<Clock className="w-5 h-5" />} title="Akad" text="Kamis, 4 Desember 2025 — 07:00 WIB" />
        <DetailBox icon={<Clock className="w-5 h-5" />} title="Resepsi" text="Kamis, 4 Desember 2025 — 12:00 WIB – Selesai" />
        <DetailBox icon={<MapPin className="w-5 h-5" />} title="Lokasi" text="Rumah mempelai wanita" mapsLink={mapsLink} />
      </div>
    </section>
  );
}

function DetailBox({ icon, title, text, mapsLink }: any) {
  return (
    <div className="rounded-2xl bg-neutral-100 p-6 shadow-sm text-center">
      <div className="flex items-center justify-center gap-2 text-neutral-700">{icon}<span>{title}</span></div>
      <div className="mt-2 text-lg font-medium">{text}</div>
      {mapsLink && (
        <button
          onClick={() => window.open(mapsLink, "_blank")}
          className="mt-3 inline-block rounded-xl bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800 transition"
        >
          Buka Google Maps
        </button>
      )}
    </div>
  );
}
