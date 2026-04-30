import { Moon } from "lucide-react";

const SleepCard = () => {
  // Timeline blocks representing sleep stages
  const blocks = [
    { w: 8, h: 35 },
    { w: 12, h: 70 },
    { w: 6, h: 25 },
    { w: 14, h: 90 },
    { w: 8, h: 50 },
    { w: 10, h: 75 },
    { w: 6, h: 30 },
    { w: 12, h: 85 },
    { w: 8, h: 45 },
    { w: 6, h: 20 },
  ];
  return (
    <div className="rounded-3xl p-4 bg-surface border border-border/60 shadow-card h-full flex flex-col justify-between min-h-[140px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-secondary grid place-items-center">
            <Moon className="w-3.5 h-3.5 text-secondary-foreground" fill="currentColor" />
          </div>
          <span className="text-xs font-medium text-muted-foreground">Sleep</span>
        </div>
        <span className="text-[10px] text-muted-foreground">Last night</span>
      </div>

      <div className="flex items-end gap-1 h-10 my-2">
        {blocks.map((b, i) => (
          <span
            key={i}
            className="rounded-sm bg-secondary"
            style={{ width: `${b.w}%`, height: `${b.h}%`, opacity: 0.3 + b.h / 150 }}
          />
        ))}
      </div>

      <div className="flex items-end justify-between">
        <div className="text-2xl font-bold tracking-tight">
          7h <span className="text-xl">02m</span>
        </div>
        <span className="text-[10px] text-primary font-semibold">Good</span>
      </div>
    </div>
  );
};

export default SleepCard;
