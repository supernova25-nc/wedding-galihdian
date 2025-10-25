import { useEffect, useMemo, useRef, useState } from "react";
import { Calendar, Music, Pause, Play } from "lucide-react";
import HeroBackground from "./HeroBackground";
import Splash from "./Splash";
import Countdown from "./Countdown";
import DetailSection from "./DetailSection";
import CoupleSection from "./CoupleSection";
import LoveStorySection from "./LoveStorySection";
import GallerySection from "./GallerySection";
import GiftSection from "./GiftSection";
import RsvpSection from "./RsvpSection";
import MapSection from "./MapSection";
import GuestbookSection from "./GuestbookSection";
import FooterSection from "./FooterSection";

// 🌀 Smooth Scroll Function dengan kecepatan custom
function smoothScrollTo(targetY: number, duration = 800) {
  const startY = window.scrollY;
  const distanceY = targetY - startY;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // easeInOutQuad ✨
    const ease = progress < 0.5
      ? 2 * progress * progress
      : -1 + (4 - 2 * progress) * progress;

    window.scrollTo(0, startY + distanceY * ease);

    if (elapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}


const COUPLE = {
  groom: "Galih",
  bride: "Dian",
  groomFull: "Galih S Setiawan",
  brideFull: "Siti Mardianti",
  groomParents: "Bpk. Paijan (Alm) & Ibu Siti Chotimah (Almh)",
  brideParents: "Bpk. Abdul Hadi & Ibu Sundari",
};
const EVENT_START_ISO = "2025-12-04T09:00:00+07:00";
const MUSIC_URL = "/bandaneira.mp3";

export default function App() {
  const targetDate = useMemo(() => new Date(EVENT_START_ISO), []);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOutSplash, setFadeOutSplash] = useState(false);
  const [splashStep, setSplashStep] = useState<0 | 1 | 2>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // 🕒 Splash step animation
  useEffect(() => {
    const t1 = setTimeout(() => setSplashStep(1), 2500);
    const t2 = setTimeout(() => setSplashStep(2), 5500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // 🚫 Scroll lock
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
  }, [showSplash]);

  // 🎵 Toggle music
  const toggleMusic = () => {
    const el = audioRef.current;
    if (!el) return;
    if (isPlaying) {
      el.pause();
      setIsPlaying(false);
    } else {
      el.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  // 📅 Save calendar
  const saveICS = () => {
    const start = new Date(EVENT_START_ISO);
    const end = new Date(start.getTime() + 3 * 60 * 60 * 1000);
    const pad = (n: number) => String(n).padStart(2, "0");
    const fmt = (d: Date) =>
      d.getUTCFullYear().toString() +
      pad(d.getUTCMonth() + 1) +
      pad(d.getUTCDate()) +
      "T" +
      pad(d.getUTCHours()) +
      pad(d.getUTCMinutes()) +
      pad(d.getUTCSeconds()) +
      "Z";

    const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding//ID
BEGIN:VEVENT
UID:${Date.now()}@Galih-Dian
DTSTAMP:${fmt(new Date())}
DTSTART:${fmt(start)}
DTEND:${fmt(end)}
SUMMARY:Pernikahan ${COUPLE.groom} & ${COUPLE.bride}
LOCATION:Rumah mempelai wanita
DESCRIPTION:Undangan pernikahan ${COUPLE.groom} & ${COUPLE.bride}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `SaveTheDate-${COUPLE.groom}-${COUPLE.bride}.ics`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  // 🪄 Open Invitation handler — smooth no flicker
  const handleOpenInvitation = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }

    // jalankan fade-out dulu
    setFadeOutSplash(true);

    // setelah 500ms baru unmount splash (halus di mobile)
    setTimeout(() => setShowSplash(false), 500);
  };


  return (
    <div className="min-h-screen text-neutral-800 relative overflow-x-hidden">
      {/* Hero Background */}
      <HeroBackground />

      {/* Splash with fade animation */}
      {showSplash && (
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-500 ${
            fadeOutSplash ? "opacity-0" : "opacity-100"
          }`}
        >
          <Splash couple={COUPLE} show step={splashStep} onOpen={handleOpenInvitation} />
        </div>
      )}

      {/* Music Button */}
      <div className="fixed top-4 right-3 z-40">
        <button
          type="button"
          onClick={toggleMusic}
          className="inline-flex items-center gap-0.5 rounded-2xl bg-black/20 backdrop-blur px-2 py-2 text-white shadow hover:bg-black/30 transition"
        >
          <Music className="w-4 h-4" />
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              <span>Play</span>
            </>
          )}
        </button>
      </div>

      <audio ref={audioRef} src={MUSIC_URL} loop preload="auto" playsInline />

      {/* Hero Section */}
      <header className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
        <nav className="absolute top-4 left-0 right-0 flex items-center justify-center max-w-5xl mx-auto px-4">
          <div className="text-white/90 tracking-widest uppercase text-xs">
            UNDANGAN PERNIKAHAN
          </div>
        </nav>

        <h1 className="mt-4 text-5xl sm:text-6xl font-serif">
          {COUPLE.groom} & {COUPLE.bride}
        </h1>
        <p className="mt-4 inline-flex items-center gap-2 text-white/90">
          <Calendar className="w-5 h-5" /> 4 Desember 2025
        </p>

        <Countdown targetDate={targetDate} />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={saveICS}
            className="rounded-2xl bg-amber-400 text-neutral-900 px-4 py-1 shadow hover:shadow-md transition inline-flex items-center gap-1"
          >
            <Calendar className="w-4 h-4" /> Simpan ke Kalender
          </button>
        </div>

{/* 🌿 Scroll Down Indicator — Fade In Up */}
<div
  className="absolute bottom-25 left-1/2 -translate-x-1/2 cursor-pointer opacity-100 animate-fadeInUp z-30"
  onClick={() => smoothScrollTo(window.innerHeight, 1200)} // ⏳ atur speed disini (ms)
>
  <div className="backdrop-blur-sm bg-white/10 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg border border-white/20 hover:bg-white/20 transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
    <span className="text-white text-xs tracking-wide">Scroll Down</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>


      </header>

      {/* Content Section */}
      <div
        className="relative text-neutral-800 z-20 rounded-t-4xl -mt-8 pt-10"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.5)),
            url('/textures/paper-texture3.jpg')
          `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CoupleSection
          groomFull={COUPLE.groomFull}
          brideFull={COUPLE.brideFull}
          groomParents={COUPLE.groomParents}
          brideParents={COUPLE.brideParents}
        />

        <DetailSection mapsLink="https://maps.app.goo.gl/8xsx17iUeR3BKpW58" />
        <LoveStorySection />
        <GallerySection />
        <GiftSection />
        <RsvpSection />
        <MapSection />
        <GuestbookSection />
      </div>

      <FooterSection />
    </div>
  );
}
