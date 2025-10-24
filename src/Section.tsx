import React from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`max-w-5xl mx-auto px-4 sm:px-6 py-14 ${className}`}
    >
      {children}
    </section>
  );
}
