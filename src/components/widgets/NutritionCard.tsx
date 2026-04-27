import { Apple, MoreHorizontal } from "lucide-react";

const days = [
  { d: "Sun", n: 21 },
  { d: "Mon", n: 22 },
  { d: "Tue", n: 23 },
  { d: "Wed", n: 24 },
  { d: "Thu", n: 25 },
  { d: "Fri", n: 26 },
  { d: "Sat", n: 27 },
];

const macros = [
  { label: "Carbs", current: 80, total: 174, unit: "g", color: "bg-primary", track: "bg-primary/15" },
  { label: "Proteins", current: 68, total: 158, unit: "g", color: "bg-accent", track: "bg-accent/15" },
  { label: "Fats", current: 10, total: 83, unit: "g", color: "bg-secondary", track: "bg-secondary/15" },
];

const NutritionCard = () => {
  const consumed = 764;
  const goal = 1500;
  const pct = consumed / goal;
  const r = 70;
  const c = 2 * Math.PI * r;
  const offset = c - pct * c;

  return (
    <div className="card-surface p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-base">Nutrition</h3>
        <button className="text-muted-foreground hover:text-foreground">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Day picker */}
      <div className="grid grid-cols-7 gap-1 mb-5">
        {days.map((day) => {
          const active = day.n === 23;
          return (
            <button
              key={day.d}
              className="flex flex-col items-center gap-1.5 group"
            >
              <span className="text-[10px] text-muted-foreground">{day.d}</span>
              <span
                className={`w-9 h-9 grid place-items-center rounded-full text-sm font-semibold transition-all ${
                  active
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-surface-soft text-foreground hover:bg-muted"
                }`}
              >
                {day.n}
              </span>
            </button>
          );
        })}
      </div>

      {/* Donut */}
      <div className="flex items-center justify-center my-4">
        <div className="relative w-48 h-48">
          <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90">
            <circle cx="80" cy="80" r={r} fill="none" stroke="hsl(var(--border))" strokeWidth="14" />
            <circle
              cx="80"
              cy="80"
              r={r}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="14"
              strokeDasharray={c}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground text-[10px] font-medium px-2.5 py-1 rounded-full mb-2">
                <Apple className="w-3 h-3" /> Day 12
              </div>
              <div className="text-3xl font-bold leading-none tracking-tight">{consumed}</div>
              <div className="text-[11px] text-muted-foreground mt-1">
                / {goal} Kcal
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Macros */}
      <div className="space-y-3 mt-4">
        {macros.map((m) => {
          const p = (m.current / m.total) * 100;
          return (
            <div key={m.label}>
              <div className="flex items-baseline justify-between mb-1.5">
                <span className="text-sm font-medium text-muted-foreground">{m.label}</span>
                <span className="text-sm">
                  <span className="font-bold text-foreground">{m.current}</span>
                  <span className="text-muted-foreground">/{m.total}{m.unit}</span>
                </span>
              </div>
              <div className={`h-2 rounded-full ${m.track} overflow-hidden`}>
                <div
                  className={`h-full rounded-full ${m.color} transition-all`}
                  style={{ width: `${p}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NutritionCard;
