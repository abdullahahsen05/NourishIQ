import { useState } from "react";
import Header from "@/components/Header";
import {
  UtensilsCrossed,
  Dumbbell,
  Droplets,
  Moon,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  SlidersHorizontal,
  Video,
} from "lucide-react";

type StatCard = {
  icon: React.ElementType;
  label: string;
  value: string;
  sub: string;
};

const stats: StatCard[] = [
  {
    icon: UtensilsCrossed,
    label: "Total Meal Plans",
    value: "1,452",
    sub: "Weekly Meal Planning Schedule",
  },
  {
    icon: Dumbbell,
    label: "Total Workouts",
    value: "1,145",
    sub: "Total Physical Activities Schedule",
  },
  {
    icon: Droplets,
    label: "Hydration Reminders",
    value: "1,854",
    sub: "Total Water Intake Reminders",
  },
  {
    icon: Moon,
    label: "Sleep Tracker",
    value: "92",
    sub: "Monthly Sleep Tracking Details",
  },
];

const HOURS = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM"];
const DAYS = [
  { name: "Mon", date: 6 },
  { name: "Tue", date: 7 },
  { name: "Wed", date: 8 },
  { name: "Thu", date: 9 },
  { name: "Fri", date: 10 },
  { name: "Sat", date: 11 },
  { name: "Sun", date: 12 },
];

type Event = {
  day: number; // 0..6
  hour: number; // 0..HOURS.length-1
  rowSpan?: number;
  title: string;
  time: string;
  tone: "blue" | "yellow";
  withJoin?: boolean;
};

const events: Event[] = [
  { day: 0, hour: 0, title: "Weekly Stand Up", time: "8:00 – 9:00 AM", tone: "blue", withJoin: true },
  { day: 1, hour: 1, rowSpan: 2, title: "Sprint Planning", time: "9:30 – 11:00 AM", tone: "yellow" },
  { day: 2, hour: 0, title: "Weekly Stand Up", time: "8:00 – 9:00 AM", tone: "blue", withJoin: true },
  { day: 3, hour: 1, rowSpan: 2, title: "Sprint Planning", time: "9:30 – 11:00 AM", tone: "yellow" },
];

const toneStyles: Record<Event["tone"], string> = {
  blue: "bg-sky-100 border-sky-200 text-sky-900",
  yellow: "bg-amber-100 border-amber-200 text-amber-900",
};

const StatCardItem = ({ icon: Icon, label, value, sub }: StatCard) => (
  <div className="card-surface p-5 flex items-start gap-4 hover:shadow-soft transition-all">
    <div className="grid place-items-center w-12 h-12 rounded-2xl bg-primary/10 text-primary shrink-0">
      <Icon className="w-6 h-6" />
    </div>
    <div className="min-w-0">
      <p className="text-xs text-muted-foreground truncate">{label}</p>
      <p className="text-2xl font-bold text-primary leading-tight">{value}</p>
      <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2">{sub}</p>
    </div>
  </div>
);

const EventCard = ({ ev }: { ev: Event }) => (
  <div
    className={`h-full rounded-2xl border p-3 flex flex-col gap-2 transition-all hover:-translate-y-0.5 hover:shadow-card cursor-pointer ${toneStyles[ev.tone]}`}
  >
    <div>
      <p className="text-sm font-semibold leading-tight">{ev.title}</p>
      <p className="text-[11px] opacity-70 mt-0.5">{ev.time}</p>
    </div>
    {ev.withJoin && (
      <button className="mt-auto inline-flex items-center justify-center gap-1.5 text-[11px] font-semibold bg-white/80 hover:bg-white rounded-full px-3 py-1.5 self-start text-sky-700">
        <Video className="w-3 h-3" /> Join Meeting
      </button>
    )}
  </div>
);

const CalendarPage = () => {
  const [view, setView] = useState<"Day" | "Week" | "Month">("Week");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto py-6 lg:py-8">
        {/* Heading */}
        <section className="mb-6 animate-fade-in">
          <p className="text-sm text-muted-foreground mb-1">Plan your week,</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Calendar</h1>
        </section>

        {/* Top stats */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((s) => (
            <StatCardItem key={s.label} {...s} />
          ))}
        </section>

        {/* Control bar */}
        <section className="card-surface p-4 mb-6 flex flex-wrap items-center gap-4 justify-between">
          <div className="flex items-center gap-2">
            <button className="grid place-items-center w-9 h-9 rounded-full bg-surface-soft hover:bg-muted transition">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <h2 className="text-lg md:text-xl font-bold whitespace-nowrap">
              Monday, 06 October 2025
            </h2>
            <button className="grid place-items-center w-9 h-9 rounded-full bg-surface-soft hover:bg-muted transition">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-1 bg-surface-soft p-1 rounded-full">
            {(["Day", "Week", "Month"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                  view === v
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 bg-surface-soft rounded-full px-4 py-2 text-sm">
              <CalendarDays className="w-4 h-4 text-muted-foreground" />
              <span className="font-medium">06 Oct – 12 Oct</span>
            </div>
            <button className="flex items-center gap-2 bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm font-semibold hover:opacity-90 transition">
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </button>
          </div>
        </section>

        {/* Weekly grid (md+) */}
        <section className="card-surface p-4 hidden md:block overflow-x-auto">
          <div
            className="grid min-w-[720px]"
            style={{ gridTemplateColumns: "70px repeat(7, minmax(0, 1fr))" }}
          >
            {/* Header row */}
            <div />
            {DAYS.map((d) => (
              <div key={d.name} className="text-center pb-3 border-b border-border/60">
                <p className="text-xs text-muted-foreground">{d.name}</p>
                <p className="text-lg font-bold">{d.date}</p>
              </div>
            ))}

            {/* Time rows */}
            {HOURS.map((hour, hIdx) => (
              <div key={hour} className="contents">
                <div className="text-xs text-muted-foreground pt-3 pr-2 text-right border-t border-border/40">
                  {hour}
                </div>
                {DAYS.map((_, dIdx) => {
                  const ev = events.find((e) => e.day === dIdx && e.hour === hIdx);
                  const isCovered = events.some(
                    (e) =>
                      e.day === dIdx &&
                      e.rowSpan &&
                      hIdx > e.hour &&
                      hIdx < e.hour + e.rowSpan,
                  );
                  return (
                    <div
                      key={dIdx}
                      className="border-t border-l border-border/40 min-h-[88px] p-1.5 relative"
                      style={ev?.rowSpan ? { gridRow: `span ${ev.rowSpan}` } : undefined}
                    >
                      {ev && !isCovered && <EventCard ev={ev} />}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </section>

        {/* Mobile: upcoming list */}
        <section className="md:hidden space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground px-1">Upcoming Tasks</h3>
          {events
            .slice()
            .sort((a, b) => a.day - b.day || a.hour - b.hour)
            .map((ev, i) => (
              <div key={i} className="card-surface p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-muted-foreground">
                    {DAYS[ev.day].name} {DAYS[ev.day].date} Oct
                  </span>
                  <span className="text-xs text-muted-foreground">{ev.time}</span>
                </div>
                <EventCard ev={ev} />
              </div>
            ))}
        </section>
      </main>
    </div>
  );
};

export default CalendarPage;
