"use client";

import { useEffect, useState } from "react";

const lines = [
  { prompt: "$", text: "whoami" },
  { prompt: ">", text: "chayma-jlali — développeuse full-stack" },
  { prompt: "$", text: "cat status.txt" },
  { prompt: ">", text: "disponible pour de nouveaux projets" },
];

export default function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      setDone(true);
      return;
    }
    const text = lines[lineIndex].text;
    if (charIndex < text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 30);
      return () => clearTimeout(t);
    }
    const pause = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 550);
    return () => clearTimeout(pause);
  }, [charIndex, lineIndex]);

  return (
    <div className="mt-8 max-w-md rounded-md border border-line bg-surface/70 font-mono text-xs shadow-lg backdrop-blur">
      <div className="flex items-center gap-1.5 border-b border-line/70 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E4626F]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E5C07B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal" />
        <span className="ml-2 text-[11px] text-muted">chayma@portfolio</span>
      </div>
      <div className="min-h-[92px] space-y-1.5 px-4 py-3.5">
        {lines.map((l, i) => {
          if (i > lineIndex) return null;
          const text = i === lineIndex ? l.text.slice(0, charIndex) : l.text;
          const showCursor = i === lineIndex && !done;
          return (
            <p key={i} className="text-ink/90">
              <span className="text-teal">{l.prompt}</span> {text}
              {showCursor && (
                <span className="ml-0.5 inline-block h-3 w-1.5 -translate-y-0.5 animate-pulse bg-teal align-middle" />
              )}
            </p>
          );
        })}
        {done && (
          <p>
            <span className="text-teal">$</span>{" "}
            <span className="ml-0.5 inline-block h-3 w-1.5 -translate-y-0.5 animate-pulse bg-teal align-middle" />
          </p>
        )}
      </div>
    </div>
  );
}