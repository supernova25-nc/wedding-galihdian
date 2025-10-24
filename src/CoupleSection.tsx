import Section from "./Section";

interface CoupleProps {
  groomFull: string;
  brideFull: string;
  groomParents: string;
  brideParents: string;
}

export default function CoupleSection({
  groomFull,
  brideFull,
  groomParents,
  brideParents,
}: CoupleProps) {
  return (
    <Section className="text-center">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
        {/* Pengantin Pria */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif">{groomFull}</h2>
          <div className="mt-2 text-neutral-600 text-sm leading-relaxed">
            Putra dari <br />
            {groomParents}
          </div>
        </div>

        {/* Garis + Cincin */}
        <div className="relative flex items-center justify-center">
          <div className="hidden sm:block h-16 w-px bg-neutral-300" />
          <div className="sm:hidden w-16 h-px bg-neutral-300" />
          <div className="absolute flex items-center justify-center bg-neutral-50 rounded-full p-2 shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-amber-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5.25l2.25-2.25m-4.5 0L12 5.25m0 0v3m0 0a6.75 6.75 0 016.75 6.75A6.75 6.75 0 0112 21.75a6.75 6.75 0 01-6.75-6.75A6.75 6.75 0 0112 8.25z"
              />
            </svg>
          </div>
        </div>

        {/* Pengantin Wanita */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif">{brideFull}</h2>
          <div className="mt-2 text-neutral-600 text-sm leading-relaxed">
            Putri dari <br />
            {brideParents}
          </div>
        </div>
      </div>

      <p className="mt-6 text-neutral-600 max-w-2xl mx-auto">
        Dengan penuh cinta kami mengundang Anda untuk hadir dalam hari bahagia kami.
      </p>
    </Section>
  );
}
