export default function MapSection() {
  const MAPS_LINK = "https://www.google.com/maps/embed?pb=!4v1761307275700!6m8!1m7!1s17FWnN1JI_1bm51jOYO7Bw!2m2!1d-7.241292687454023!2d112.4928962425412!3f143.16949533599433!4f5.845390878733767!5f0.7820865974627469";
  return (
    <section className="max-w-5xl mx-auto px-4 py-14 text-center">
      <h2 className="text-3xl font-serif mb-4">Peta Lokasi Resepsi</h2>
      <div className="rounded-2xl overflow-hidden shadow">
        <iframe
          src={MAPS_LINK}
          className="w-full h-96 border-0"
          loading="lazy"
        ></iframe>
      </div>
      <button
        onClick={() => window.open(MAPS_LINK, "_blank")}
        className="mt-4 rounded-xl bg-neutral-900 text-white px-6 py-3 hover:bg-neutral-800"
      >
        Buka di Google Maps
      </button>
    </section>
  );
}
