import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import foto1 from "./assets/gallery/foto1.jpg";
import foto2 from "./assets/gallery/foto2.jpg";
import foto3 from "./assets/gallery/foto3.jpg";
import foto4 from "./assets/gallery/foto4.jpg";

const bgImages = [
  "/gallery/foto1.jpg",
  "/gallery/foto2.jpg",
  "/gallery/foto3.jpg",
];

export default function HeroBackground() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % bgImages.length);
    }, 8000); // waktu antar gambar (ms)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={bgImages[idx]}
          src={bgImages[idx]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }} // 🪄 ini bikin transisi smooth kayak di Gallery
        />
      </AnimatePresence>

      {/* Overlay hitam biar teks tetap terbaca */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />
    </div>
  );
}
