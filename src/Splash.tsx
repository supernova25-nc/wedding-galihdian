import { motion, AnimatePresence } from "framer-motion";

interface SplashProps {
  couple: { groom: string; bride: string };
  show: boolean;
  step: 0 | 1 | 2;
  onOpen: () => void;
}

export default function Splash({ couple, show, step, onOpen }: SplashProps) {
  return (
    <motion.div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white text-center transition-opacity duration-700 ${
        show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: show ? 1 : 0 }}
    >
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            THE WEDDING OF
          </motion.div>
        )}
        {step === 1 && (
          <motion.div
            key="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-4xl sm:text-5xl font-serif"
          >
            {couple.groom} & {couple.bride}
          </motion.div>
        )}
        {step === 2 && (
          <motion.button
            key="2"
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-amber-400 text-neutral-900 px-6 py-3 shadow hover:shadow-md transition"
            onClick={onOpen}
          >
            Open Invitation
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
