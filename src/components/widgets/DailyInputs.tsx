import { Plus, Droplet, Heart, Flame, ArrowUpRight, MoreHorizontal } from "lucide-react";

const SaturationRing = ({ value = 98 }: { value?: number }) => {
  const r = 18;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12 -rotate-90">
      <circle cx="24" cy="24" r={r} stroke="hsl(var(--border))" strokeWidth="4" fill="none" />
      <circle
        cx="24"
        cy="24"
        r={r}
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
};

const CaloriesDots = () => {
  // 14 columns x 8 rows of dots
  const cols = 28;
  const rows = 7;
  const filled = Math.round(cols * rows * 0.72);
  return (
    <div
      className="grid gap-[3px]"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <span
          key={i}
          className={`aspect-square rounded-full ${
            i < filled
              ? i % 5 === 0
                ? "bg-primary"
                : "bg-primary/60"
              : "bg-border"
          }`}
        />
      ))}
    </div>
  );
};

const DailyInputs = () => {
  return (
    <div className="card-surface p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-base">Daily Inputs</h3>
        <button className="text-muted-foreground hover:text-foreground">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <button className="aspect-square rounded-2xl border-2 border-dashed border-border grid place-items-center text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all">
          <Plus className="w-6 h-6" />
        </button>

        <div className="aspect-square rounded-2xl bg-surface-soft p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <Droplet className="w-4 h-4 text-primary" fill="currentColor" />
            <span className="text-[9px] text-muted-foreground">Mmol/L</span>
          </div>
          <SaturationRing value={98} />
          <div>
            <div className="text-base font-bold leading-none">98<span className="text-xs">%</span></div>
            <div className="text-[9px] text-muted-foreground mt-0.5">Saturation</div>
          </div>
        </div>

        <div className="aspect-square rounded-2xl bg-surface-soft p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <Heart className="w-4 h-4 text-primary" fill="currentColor" />
            <ArrowUpRight className="w-3 h-3 text-primary" />
          </div>
          <div className="flex items-end gap-0.5 h-8">
            {[3, 5, 2, 6, 4, 7, 5, 8, 6].map((v, i) => (
              <span key={i} className="flex-1 rounded-sm bg-primary/70" style={{ height: `${v * 10}%` }} />
            ))}
          </div>
          <div>
            <div className="text-base font-bold leading-none">140<span className="text-xs text-muted-foreground">/70</span></div>
            <div className="text-[9px] text-muted-foreground mt-0.5">Pressure</div>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-2xl bg-surface-soft p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary/15 grid place-items-center">
              <Flame className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="text-sm font-semibold">Calories</span>
          </div>
          <div className="text-right">
            <div className="text-base font-bold leading-none">
              1540 <span className="text-xs text-muted-foreground font-medium">Kcal</span>
            </div>
            <div className="text-[10px] text-muted-foreground mt-0.5">Today</div>
          </div>
        </div>
        <CaloriesDots />
      </div>
    </div>
  );
};

export default DailyInputs;
