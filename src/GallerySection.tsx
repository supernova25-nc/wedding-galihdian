import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "public/gallery/foto1.jpg",
  "public/gallery/foto2.jpg",
  "public/gallery/foto3.jpg",
  "public/gallery/foto4.jpg",
];

export default function GallerySection() {
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((idx + 1) % images.length);
  const prev = () => setIdx((idx - 1 + images.length) % images.length);

  return (
    <section className="max-w-5xl mx-auto px-4 py-14 text-center">
      <h2 className="text-3xl font-serif">Galeri</h2>    

      <div className="mt-6 relative overflow-hidden rounded-2xl shadow aspect-video">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[idx]} // penting supaya AnimatePresence tahu elemen berubah
            src={images[idx]}
            alt="Galeri"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }} // durasi & smoothness
          />
        </AnimatePresence>

        {/* Tombol navigasi */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 hover:bg-white"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 hover:bg-white"
        >
          ›
        </button>
      </div>

      <div className="mt-3 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === idx ? "bg-neutral-900 scale-125" : "bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
