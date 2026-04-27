import { TrendingUp } from "lucide-react";

const WeightCard = () => {
  // Sparkline data
  const points = [22, 18, 26, 14, 30, 20, 28, 16, 24, 12, 22, 16];
  const max = Math.max(...points);
  const min = Math.min(...points);
  const w = 120;
  const h = 40;
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / (max - min)) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <div className="rounded-3xl p-5 bg-gradient-orange text-primary-foreground shadow-soft relative overflow-hidden h-full flex flex-col justify-between min-h-[170px]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-primary-foreground/80 mb-1">Weight</p>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold tracking-tight">72.5</span>
            <span className="text-sm font-medium opacity-80">kg</span>
          </div>
        </div>
        <span className="text-[10px] bg-white/20 backdrop-blur px-2 py-1 rounded-full font-medium">
          This week
        </span>
      </div>

      <div className="relative -mx-1">
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-12" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wfill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0.4" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${path} L${w},${h} L0,${h} Z`} fill="url(#wfill)" />
          <path d={path} fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1 bg-white/15 backdrop-blur px-2 py-1 rounded-full">
          <TrendingUp className="w-3 h-3" />
          <span className="font-semibold">+1.2kg</span>
        </div>
        <span className="opacity-80">Goal: 70kg</span>
      </div>
    </div>
  );
};

export default WeightCard;
