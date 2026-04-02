"use client";

import { useEffect, useState } from "react";

interface LoadingSpinnerProps {
  size?: number;   // longueur de la barre en blocs
  color?: string;
}

export default function LoadingSpinner({
  size = 10,
  color = "#58a6ff",
}: LoadingSpinnerProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= size ? 0 : p + 1));
    }, 120);
    return () => clearInterval(interval);
  }, [size]);

  const filled = "█".repeat(progress);
  const empty  = "░".repeat(size - progress);

  return (
    <span
      style={{
        fontFamily: '"Share Tech Mono", monospace',
        color,
        fontSize: "0.9rem",
        letterSpacing: "0.05em",
      }}
    >
      [{filled}{empty}]
    </span>
  );
}
