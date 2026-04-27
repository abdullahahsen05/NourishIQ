import { Footprints } from "lucide-react";

const StepsCard = () => {
  const bars = [40, 65, 35, 80, 55, 90, 60, 75, 45, 85, 50, 70];
  return (
    <div className="rounded-3xl p-5 bg-surface border border-border/60 shadow-card h-full flex flex-col justify-between min-h-[170px]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1">
            <Footprints className="w-3 h-3" /> Steps
          </p>
          <div className="text-3xl font-bold tracking-tight">82,641</div>
        </div>
        <span className="text-[10px] bg-surface-soft px-2 py-1 rounded-full font-medium text-muted-foreground">
          Today
        </span>
      </div>

      <div className="flex items-end gap-1 h-12">
        {bars.map((b, i) => (
          <span
            key={i}
            className="flex-1 rounded-sm bg-primary/80"
            style={{ height: `${b}%`, opacity: 0.4 + (b / 150) }}
          />
        ))}
      </div>

      <div className="flex items-center justify-between text-[11px]">
        <span className="text-primary font-semibold">+12% vs yesterday</span>
        <span className="text-muted-foreground">Goal: 100k</span>
      </div>
    </div>
  );
};

export default StepsCard;
