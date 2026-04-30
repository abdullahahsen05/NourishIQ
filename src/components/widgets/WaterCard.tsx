import { Droplets } from "lucide-react";

const WaterCard = () => {
  return (
    <div className="rounded-3xl p-4 bg-surface border border-border/60 shadow-card h-full flex flex-col justify-between min-h-[140px] relative overflow-hidden">
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-primary/15 grid place-items-center">
            <Droplets className="w-3.5 h-3.5 text-primary" fill="currentColor" />
          </div>
          <span className="text-xs font-medium text-muted-foreground">Water Intake</span>
        </div>
        <span className="text-[10px] text-muted-foreground">Today</span>
      </div>

      {/* Wave */}
      <div className="absolute inset-x-0 bottom-0 h-20 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id="wave1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="wave2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0,30 C40,15 80,45 120,25 C160,10 180,35 200,25 L200,60 L0,60 Z"
            fill="url(#wave1)"
          >
            <animate attributeName="d" dur="6s" repeatCount="indefinite"
              values="M0,30 C40,15 80,45 120,25 C160,10 180,35 200,25 L200,60 L0,60 Z;
                      M0,28 C40,40 80,15 120,30 C160,42 180,18 200,28 L200,60 L0,60 Z;
                      M0,30 C40,15 80,45 120,25 C160,10 180,35 200,25 L200,60 L0,60 Z" />
          </path>
          <path
            d="M0,38 C50,28 90,50 140,35 C170,25 185,40 200,38 L200,60 L0,60 Z"
            fill="url(#wave2)"
          >
            <animate attributeName="d" dur="4s" repeatCount="indefinite"
              values="M0,38 C50,28 90,50 140,35 C170,25 185,40 200,38 L200,60 L0,60 Z;
                      M0,36 C50,48 90,30 140,42 C170,50 185,32 200,40 L200,60 L0,60 Z;
                      M0,38 C50,28 90,50 140,35 C170,25 185,40 200,38 L200,60 L0,60 Z" />
          </path>
        </svg>
      </div>

      <div className="flex items-end justify-between relative z-10">
        <div className="text-2xl font-bold tracking-tight">
          2.4<span className="text-xl">L</span>
          <span className="text-xs text-muted-foreground font-medium ml-1">/ 3L</span>
        </div>
        <span className="text-[10px] text-primary font-semibold">+0.4L</span>
      </div>
    </div>
  );
};

export default WaterCard;
