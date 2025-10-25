const loveStory = [
  { year: "2018", title: "Pertemuan Pertama", desc: "Bertemu di kampus dan mulai berteman." },
  { year: "2020", title: "Resmi Berpacaran", desc: "Memulai perjalanan bersama di tengah pandemi." },
  { year: "2023", title: "Lamaran", desc: "Resmi bertunangan disaksikan keluarga terdekat." },
  { year: "2025", title: "Menuju Pelaminan", desc: "Siap mengikat janji suci pada 4 Desember 2025." },
];

export default function LoveStorySection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-14">
      <div className="text-center">
        <h2 className="text-3xl font-serif">Love Story</h2>
        <p className="mt-2 text-neutral-600">Perjalanan singkat kisah cinta kami.</p>
      </div>

      <div className="mt-8 relative">
        {/* 🪄 Garis timeline (z-index rendah) */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-neutral-300 z-0" />

        {/* ✨ Konten timeline (z-index tinggi) */}
        <div className="relative z-10 space-y-8">
          {loveStory.map((item, i) => (
            <div key={i} className="grid sm:grid-cols-2 gap-6 items-start">
              <div
                className={`sm:text-right ${
                  i % 2 ? "order-0" : "sm:order-first"
                } relative z-10`}
              >
                <div className="text-2xl font-serif">{item.title}</div>
                <div className="text-sm text-neutral-500 mt-1">{item.year}</div>
                <p className="mt-2 text-neutral-700">{item.desc}</p>
              </div>

              <div className="sm:text-left">
                {/* 🔸 bullet di atas line */}
                <div className="h-3 w-3 rounded-full bg-amber-400 mx-auto sm:mx-0 sm:ml-auto mt-2 relative z-10 shadow-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
