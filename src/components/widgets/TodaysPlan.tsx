import { MoreHorizontal, Square } from "lucide-react";
import benchPress from "@/assets/bench-press.jpg";

const items = [
  {
    title: "Bench press",
    subtitle: "3:00 | 3 Sets | 8 Reps",
    category: "Barbells",
    image: benchPress,
    active: true,
  },
  {
    title: "Pull Ups",
    subtitle: "2:30 | 4 Sets | 12 Reps",
    category: "Bodyweight",
    image: benchPress,
    active: false,
  },
];

const TodaysPlan = () => {
  return (
    <div className="card-surface p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-base">Today's Plan Activity</h3>
        <button className="text-muted-foreground hover:text-foreground">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="flex items-center gap-3 p-3 rounded-2xl bg-surface-soft hover:bg-muted transition-colors"
          >
            <img
              src={it.image}
              alt={it.title}
              loading="lazy"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover shrink-0 ring-2 ring-background"
            />
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm truncate">{it.title}</div>
              <div className="text-[11px] text-muted-foreground mt-0.5 truncate">
                {it.subtitle}
              </div>
              <div className="text-[10px] text-primary font-medium mt-0.5">
                ◆ {it.category}
              </div>
            </div>
            {it.active ? (
              <button className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-xs font-bold flex items-center gap-1.5 shadow-soft hover:bg-primary-glow transition-colors">
                <Square className="w-3 h-3" fill="currentColor" /> STOP
              </button>
            ) : (
              <button className="bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-xs font-bold hover:opacity-90 transition-opacity">
                START
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysPlan;
