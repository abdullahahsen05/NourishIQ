import { Clock, Dumbbell, MoreHorizontal, Square } from "lucide-react";

const items = [
  {
    title: "Bench Press",
    duration: "3:00",
    sets: "3 Sets",
    reps: "8 Reps",
    category: "Barbells",
    active: true,
  },
  {
    title: "Pull Ups",
    duration: "2:30",
    sets: "4 Sets",
    reps: "12 Reps",
    category: "Bodyweight",
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
            <div className="w-12 h-12 rounded-xl bg-primary/15 grid place-items-center shrink-0">
              <Dumbbell className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm truncate">{it.title}</div>
              <div className="flex items-center gap-2 text-[11px] text-muted-foreground mt-0.5 flex-wrap">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {it.duration}
                </span>
                <span>·</span>
                <span>{it.sets}</span>
                <span>·</span>
                <span>{it.reps}</span>
              </div>
              <div className="text-[10px] text-primary font-medium mt-0.5">◆ {it.category}</div>
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
