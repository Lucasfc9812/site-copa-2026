import { useEffect, useState } from "react";

export function CountdownTimer() {
  const [time, setTime] = useState({ h: 1, m: 47, s: 32 });
  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        let { h, m, s } = t;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 1; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const box = (n: number, label: string) => (
    <div className="flex flex-col items-center">
      <div className="card-premium rounded-xl px-4 py-3 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[90px] shadow-neon">
        <div className="text-3xl sm:text-5xl font-display font-black text-gradient-green tabular-nums">
          {String(n).padStart(2, "0")}
        </div>
      </div>
      <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      {box(time.h, "Horas")}
      <div className="text-3xl sm:text-5xl font-black text-primary">:</div>
      {box(time.m, "Min")}
      <div className="text-3xl sm:text-5xl font-black text-primary">:</div>
      {box(time.s, "Seg")}
    </div>
  );
}
