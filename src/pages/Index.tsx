import Header from "@/components/Header";
import { Calendar } from "lucide-react";

const StatCard = ({
  title,
  value,
  unit,
  variant = "default",
  children,
}: {
  title: string;
  value: string;
  unit?: string;
  variant?: "default" | "primary";
  children?: React.ReactNode;
}) => {
  const isPrimary = variant === "primary";
  return (
    <div
      className={`rounded-3xl p-5 border transition-all hover:-translate-y-0.5 ${
        isPrimary
          ? "bg-gradient-orange text-primary-foreground border-transparent shadow-soft"
          : "bg-surface border-border/60 shadow-card"
      }`}
    >
      <div className="flex items-start justify-between mb-6">
        <span className={`text-sm font-medium ${isPrimary ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
          {title}
        </span>
      </div>
      <div className="flex items-end justify-between">
        <div className="text-3xl lg:text-4xl font-bold tracking-tight">
          {value}
          {unit && <span className="text-base font-medium ml-0.5 opacity-80">{unit}</span>}
        </div>
        {children}
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto py-6 lg:py-8">
        {/* Greeting row */}
        <section className="flex flex-wrap items-end justify-between gap-4 mb-8 animate-fade-in">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Let's Rock today,</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Welcome Back, Masud A. <span className="inline-block">👋</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 bg-surface rounded-full px-4 py-2 border border-border/60">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-2xl font-bold leading-none">19</span>
              <div className="leading-tight">
                <div className="text-xs font-medium">Tue,</div>
                <div className="text-xs text-muted-foreground">December</div>
              </div>
            </div>
            <button className="bg-primary text-primary-foreground rounded-full px-5 py-3 text-sm font-semibold shadow-soft hover:shadow-pop hover:bg-primary-glow transition-all">
              Show my Task
            </button>
          </div>
        </section>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <div className="grid grid-cols-2 gap-4">
              <StatCard title="Weight" value="72.5" unit="kg" variant="primary" />
              <StatCard title="Steps" value="82,641" />
            </div>

            <div className="card-surface p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Daily Inputs</h3>
                <button className="text-muted-foreground text-xl leading-none">···</button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <button className="aspect-square rounded-2xl border-2 border-dashed border-border grid place-items-center text-2xl text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                  +
                </button>
                <div className="aspect-square rounded-2xl bg-surface-soft p-3 flex flex-col justify-between">
                  <span className="text-xs text-muted-foreground">💧 Saturation</span>
                  <div>
                    <div className="text-lg font-bold">98%</div>
                    <div className="text-[10px] text-muted-foreground">Mmol/L 14:00</div>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl bg-surface-soft p-3 flex flex-col justify-between">
                  <span className="text-xs text-muted-foreground">💜 Pressure</span>
                  <div>
                    <div className="text-lg font-bold">140/70</div>
                    <div className="text-[10px] text-primary">120/60 14:00</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-surface-soft p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">🔥 Calories</span>
                  <span className="text-sm font-bold">1540<span className="text-xs text-muted-foreground">kcal</span></span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <span
                      key={i}
                      className={`flex-1 h-6 rounded-sm ${i < 16 ? "bg-primary" : "bg-border"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="card-surface p-5">
              <h3 className="font-semibold mb-3">Today's Plan Activity</h3>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-surface-soft grid place-items-center text-2xl">🏋️</div>
                <div className="flex-1">
                  <div className="font-semibold">Bench press</div>
                  <div className="text-xs text-muted-foreground">⏱ 3:00 · 3 Sets · 8 Reps</div>
                  <div className="text-xs text-primary mt-0.5">🔶 Barbells</div>
                </div>
                <button className="bg-primary text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold">
                  STOP
                </button>
              </div>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <div className="grid grid-cols-2 gap-4">
              <StatCard title="Sleep" value="5h 36m" />
              <StatCard title="Water Intake" value="1.8" unit="L" />
            </div>

            <div className="card-surface p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Nutrition</h3>
                <button className="text-muted-foreground text-xl leading-none">···</button>
              </div>
              <div className="grid grid-cols-7 gap-2 mb-5">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => {
                  const date = 21 + i;
                  const isActive = date === 23;
                  return (
                    <div key={d} className="flex flex-col items-center gap-1.5">
                      <span className="text-[10px] text-muted-foreground">{d}</span>
                      <span
                        className={`w-8 h-8 grid place-items-center rounded-full text-sm font-semibold border-2 ${
                          isActive ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground"
                        }`}
                      >
                        {date}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center my-4">
                <div className="relative w-44 h-44">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--primary))" strokeWidth="8" strokeDasharray="180 264" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <div className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full inline-block mb-1">Day 12</div>
                      <div className="text-2xl font-bold">🍎 764</div>
                      <div className="text-[10px] text-muted-foreground">1500 Kcal</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {[
                  { label: "Carbs", value: "80/174g", color: "bg-primary" },
                  { label: "Proteins", value: "68/158g", color: "bg-accent" },
                  { label: "Fats", value: "10/83g", color: "bg-secondary" },
                ].map((m) => (
                  <div key={m.label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-5 rounded-full ${m.color}`} />
                      <span className="text-muted-foreground">{m.label}</span>
                    </div>
                    <span className="font-semibold">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-5 lg:gap-6 md:col-span-2 lg:col-span-1">
            <div className="card-surface p-6 flex flex-col items-center text-center">
              <div className="flex items-center gap-2 self-start mb-2">
                <span className="text-primary">✦</span>
                <h3 className="font-semibold">AI Assistant</h3>
              </div>
              <div className="my-4 w-32 h-32 rounded-full bg-gradient-orange shadow-pop animate-pulse-soft" />
              <div className="font-semibold">Hi, Masud</div>
              <div className="text-sm text-muted-foreground mb-4">How can I help you?</div>

              <div className="grid grid-cols-3 gap-2 w-full mb-3">
                {["Generate Meal Plan", "Fitness Guidance", "Analyze Progress"].map((t) => (
                  <button key={t} className="rounded-2xl bg-surface-soft p-2 text-[10px] font-medium hover:bg-muted transition-colors">
                    <div className="w-6 h-6 rounded-full bg-primary/20 mx-auto mb-1" />
                    {t}
                  </button>
                ))}
              </div>

              <div className="w-full flex items-center gap-2 bg-surface-soft rounded-full p-1.5 pl-4">
                <input
                  type="text"
                  placeholder="Ask something..."
                  className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-muted-foreground"
                />
                <button className="w-9 h-9 grid place-items-center rounded-full bg-primary text-primary-foreground">
                  ➤
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
