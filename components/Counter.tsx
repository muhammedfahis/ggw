"use client";
import { useEffect, useState } from "react";

export function Counter({ end, suffix = "", duration = 2000 }: { end: number | string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const numericEnd = typeof end === "string" ? parseFloat(end.replace(/[^0-9.]/g, "")) : end;

  useEffect(() => {
    if (numericEnd === 0) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * numericEnd));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [numericEnd, duration]);

  return (
    <span>
      {typeof end === "string" ? count + end.replace(/[0-9.]/g, "") : count}
      {suffix}
    </span>
  );
}
