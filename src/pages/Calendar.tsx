import { useState } from "react";
import Header from "@/components/Header";
import {
  UtensilsCrossed,
  Dumbbell,
  Droplets,
  Bed,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  SlidersHorizontal,
  Video,
  MoreHorizontal,
  Clock,
} from "lucide-react";

type StatCard = {
  icon: React.ElementType;
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
};

const stats: StatCard[] = [
  {
    icon: UtensilsCrossed,
    label: "Total Meal Plans",
    value: "1,452",
    sub: "Total Meal Planning Schedule",
    highlight: true,
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
    icon: Bed,
    label: "Sleep Tracker",
    value: "92",
    sub: "Total Sleep Tracking Entries",
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
  day: number;
  hour: number;
  rowSpan?: number;
  title: string;
  time: string;
  tone: "blue" | "yellow";
  withJoin?: boolean;
  upcoming?: boolean;
};

const events: Event[] = [
  { day: 0, hour: 0, rowSpan: 2, title: "Weekly Stand Up", time: "8 AM - 9 AM", tone: "blue", withJoin: true },
  { day: 1, hour: 1, rowSpan: 2, title: "Sprint Planning", time: "9:30 AM - 10:30 AM", tone: "yellow", upcoming: true },
  { day: 2, hour: 1, rowSpan: 2, title: "Weekly Stand Up", time: "8 AM - 9 AM", tone: "blue", upcoming: true },
  { day: 3, hour: 1, rowSpan: 2, title: "Sprint Planning", time: "9:30 AM - 10:30 AM", tone: "yellow" },
  { day: 4, hour: 2, rowSpan: 2, title: "Weekly Stand Up", time: "8 AM - 9 AM", tone: "blue" },
];

const toneStyles: Record<Event["tone"], { card: string; chip: string; iconBg: string }> = {
  blue: {
    card: "bg-sky-50 border-sky-100",
    chip: "text-sky-700",
    iconBg: "bg-sky-500",
  },
  yellow: {
    card: "bg-amber-50 border-amber-100",
    chip: "text-amber-700",
    iconBg: "bg-amber-400",
  },
};

const Avatars = () => (
  <div className="flex -space-x-2">
    {[14, 32, 47, 5].map((id) => (
      <img
        key={id}
        src={`https://i.pravatar.cc/40?img=${id}`}
        alt=""
        className="w-6 h-6 rounded-full ring-2 ring-white object-cover"
      />
    ))}
  </div>
);

const StatCardItem = ({ icon: Icon, label, value, sub, highlight }: StatCard) => (
  <div
    className={`rounded-3xl p-5 border transition-all hover:-translate-y-0.5 ${
      highlight
        ? "bg-primary/90 border-primary text-primary-foreground shadow-soft"
        : "bg-surface border-border/60 shadow-card"
    }`}
  >
    <div className="flex items-start justify-between gap-3 mb-3">
      <p className={`text-sm font-medium ${highlight ? "text-white/90" : "text-foreground/80"}`}>
        {label}
      </p>
      <div
        className={`grid place-items-center w-9 h-9 rounded-xl shrink-0 ${
          highlight ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
        }`}
      >
        <Icon className="w-4 h-4" />
      </div>
    </div>
    <p className={`text-3xl font-bold leading-none ${highlight ? "text-white" : "text-foreground"}`}>
      {value}
    </p>
    <p className={`text-[11px] mt-3 ${highlight ? "text-white/80" : "text-muted-foreground"}`}>
      {sub}
    </p>
  </div>
);

const EventCard = ({ ev }: { ev: Event }) => {
  const t = toneStyles[ev.tone];
  return (
    <div
      className={`h-full rounded-2xl border p-3 flex flex-col gap-2 transition-all hover:-translate-y-0.5 hover:shadow-card cursor-pointer ${t.card}`}
    >
      <div className="flex items-start justify-between">
        <div className={`grid place-items-center w-7 h-7 rounded-lg text-white ${t.iconBg}`}>
          <Video className="w-3.5 h-3.5" />
        </div>
        <button className="text-foreground/40 hover:text-foreground/80">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <div>
        <p className="text-sm font-semibold leading-tight text-foreground">{ev.title}</p>
        <p className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {ev.time}
        </p>
      </div>

      <Avatars />

      {ev.withJoin && (
        <button className="mt-1 inline-flex items-center justify-center gap-1.5 text-[11px] font-semibold bg-primary text-primary-foreground rounded-full px-3 py-1.5 hover:bg-primary-glow transition">
          <Video className="w-3 h-3" /> Join a Meeting
        </button>
      )}

      {ev.upcoming && (
        <p className={`text-[11px] font-semibold mt-1 ${t.chip}`}>Upcoming</p>
      )}
    </div>
  );
};

const CalendarPage = () => {
  const [view, setView] = useState<"Day" | "Week" | "Month">("Week");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto py-6 lg:py-8">
        {/* Heading + stats row */}
        <section className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6 items-stretch animate-fade-in">
          <div className="md:col-span-1 flex md:items-end">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Calendar</h1>
          </div>
          <div className="md:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <StatCardItem key={s.label} {...s} />
            ))}
          </div>
        </section>

        {/* Control bar */}
        <section className="flex flex-wrap items-center gap-3 justify-between mb-5">
          <div className="flex items-center gap-3">
            <h2 className="text-lg md:text-xl font-bold whitespace-nowrap">
              Monday, 06 October 2025
            </h2>
            <button className="px-4 py-1.5 rounded-full bg-surface border border-border/60 text-sm font-medium hover:bg-muted transition">
              Today
            </button>
          </div>

          <div className="flex items-center gap-1 bg-surface border border-border/60 p-1 rounded-full">
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
            <div className="flex items-center gap-2 bg-surface border border-border/60 rounded-full px-4 py-2 text-sm">
              <CalendarDays className="w-4 h-4 text-muted-foreground" />
              <span className="font-medium">06 Oct - 10 Oct 2025</span>
            </div>
            <button className="flex items-center gap-2 bg-surface border border-border/60 rounded-full px-4 py-2 text-sm font-semibold hover:bg-muted transition">
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </button>
          </div>
        </section>

        {/* Weekly grid (md+) */}
        <section className="card-surface p-4 hidden md:block overflow-x-auto">
          {/* Day headers */}
          <div
            className="grid mb-2"
            style={{ gridTemplateColumns: "70px repeat(7, minmax(140px, 1fr))" }}
          >
            <div className="text-[11px] text-muted-foreground self-end pb-2">GMT +7</div>
            {DAYS.map((d) => (
              <div key={d.name} className="px-2 pb-2 border-b border-border/60">
                <p className="text-xs text-muted-foreground">{d.name} {String(d.date).padStart(2, "0")}</p>
              </div>
            ))}
          </div>

          {/* Time grid */}
          <div
            className="grid"
            style={{
              gridTemplateColumns: "70px repeat(7, minmax(140px, 1fr))",
              gridAutoRows: "90px",
            }}
          >
            {HOURS.map((hour, hIdx) => (
              <div key={hour} className="contents">
                <div className="text-xs text-muted-foreground pt-2 pr-2 text-right border-t border-border/40">
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
                  if (isCovered) return <div key={dIdx} />;
                  return (
                    <div
                      key={dIdx}
                      className="border-t border-l border-border/40 p-1.5"
                      style={ev?.rowSpan ? { gridRow: `span ${ev.rowSpan}` } : undefined}
                    >
                      {ev && <EventCard ev={ev} />}
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
