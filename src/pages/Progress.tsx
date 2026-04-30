import { useMemo, useState } from "react";
import Header from "@/components/Header";
import { MoreHorizontal, TrendingUp, Users, Filter, Play, Trophy, Flame } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/* ---------- Mock data ---------- */
const sparkData = Array.from({ length: 14 }, (_, i) => ({
  x: i,
  y: 40 + Math.sin(i / 1.6) * 18 + Math.random() * 10,
}));

const calorieData = [
  { m: "Jan", calorie: 70, goal: 72 },
  { m: "Feb", calorie: 74, goal: 75 },
  { m: "Mar", calorie: 78, goal: 80 },
  { m: "Apr", calorie: 82, goal: 78 },
  { m: "May", calorie: 80, goal: 84 },
  { m: "Jun", calorie: 76, goal: 86 },
  { m: "Jul", calorie: 84, goal: 88 },
  { m: "Aug", calorie: 85, goal: 90 },
  { m: "Sep", calorie: 79, goal: 84 },
  { m: "Oct", calorie: 75, goal: 80 },
  { m: "Nov", calorie: 78, goal: 82 },
  { m: "Dec", calorie: 82, goal: 85 },
];

const macroData = [
  { name: "Protein", value: 20, color: "#FA865E", info: "145 / 150 g" },
  { name: "Carbs", value: 40, color: "#1F2937", info: "180 / 250 g" },
  { name: "Fats", value: 25, color: "#60C6FF", info: "65 / 70 g" },
  { name: "Fiber", value: 15, color: "#F4C430", info: "22 / 30 g" },
];

const menuTabs = ["All", "Breakfast", "Lunch", "Snack", "Dinner"] as const;

const recommendedMenu = [
  { name: "Greek Yogurt Parfait", kcal: 320, score: 9, tag: "Breakfast" },
  { name: "Grilled Chicken Bowl", kcal: 540, score: 8, tag: "Lunch" },
  { name: "Avocado Toast", kcal: 280, score: 7, tag: "Snack" },
  { name: "Salmon & Quinoa", kcal: 610, score: 9, tag: "Dinner" },
];

const workoutDays = [
  { d: "Sun", n: 13 },
  { d: "Mon", n: 14 },
  { d: "Tue", n: 15, active: true },
  { d: "Wed", n: 16 },
  { d: "Thu", n: 17 },
  { d: "Fri", n: 18 },
  { d: "Sat", n: 19 },
];

/* ---------- Small components ---------- */
const Spark = ({ color = "#FA865E" }: { color?: string }) => (
  <ResponsiveContainer width="100%" height={50}>
    <AreaChart data={sparkData}>
      <defs>
        <linearGradient id={`sg-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.45} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area dataKey="y" stroke={color} strokeWidth={2} fill={`url(#sg-${color})`} />
    </AreaChart>
  </ResponsiveContainer>
);

const StatCard = ({
  label,
  value,
  meta,
  highlight,
  icon,
  sparkColor = "#FA865E",
  trend,
}: {
  label: string;
  value: string;
  meta?: string;
  highlight?: boolean;
  icon?: React.ReactNode;
  sparkColor?: string;
  trend?: string;
}) => (
  <div
    className={`rounded-3xl p-5 border transition-all hover:shadow-pop ${
      highlight
        ? "bg-primary text-primary-foreground border-transparent shadow-soft"
        : "bg-card border-border/60"
    }`}
  >
    <div className="flex items-start justify-between gap-3 mb-3">
      <div className="flex items-center gap-2">
        <span
          className={`grid place-items-center w-8 h-8 rounded-full ${
            highlight ? "bg-white/20" : "bg-surface"
          }`}
        >
          {icon ?? <Users className="w-4 h-4" />}
        </span>
        <span className={`text-sm font-medium ${highlight ? "text-white/90" : "text-muted-foreground"}`}>
          {label}
        </span>
      </div>
      {trend && (
        <span
          className={`flex items-center gap-1 text-xs font-semibold ${
            highlight ? "text-white/90" : "text-emerald-500"
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5" /> {trend}
        </span>
      )}
    </div>
    <div className="flex items-end justify-between gap-2">
      <div>
        <div className="text-3xl font-bold leading-none">{value}</div>
        {meta && (
          <div className={`text-xs mt-2 ${highlight ? "text-white/80" : "text-muted-foreground"}`}>
            {meta}
          </div>
        )}
      </div>
      <div className="w-24 h-12 -mb-1">
        <Spark color={highlight ? "#ffffff" : sparkColor} />
      </div>
    </div>
  </div>
);

/* ---------- Main page ---------- */
const ProgressPage = () => {
  const [period, setPeriod] = useState("Monthly");
  const [menuTab, setMenuTab] = useState<(typeof menuTabs)[number]>("All");
  const [sortBy, setSortBy] = useState("Calories");

  const filteredMenu = useMemo(
    () => (menuTab === "All" ? recommendedMenu : recommendedMenu.filter((m) => m.tag === menuTab)),
    [menuTab],
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto py-6 lg:py-8">
        {/* Page title row */}
        <section className="flex flex-wrap items-end justify-between gap-4 mb-6 animate-fade-in">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Track your journey,</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Your Progress 📈
            </h1>
          </div>
          <div className="flex items-center gap-2 bg-surface rounded-full p-1 border border-border/60">
            {["Weekly", "Monthly", "Yearly"].map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  period === p
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </section>

        {/* Top stats row - 4 cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5 mb-6 animate-fade-in">
          <StatCard
            label="Total Active Users"
            value="1,248"
            meta="32 new this week"
            highlight
            icon={<Users className="w-4 h-4" />}
          />
          <StatCard
            label="Avg Daily Calories"
            value="1,985"
            meta="Target: 2,000 kcal"
            icon={<Flame className="w-4 h-4 text-primary" />}
            sparkColor="#1F2937"
          />
          <StatCard
            label="Top Nutrient"
            value="1,854"
            meta="142g avg intake"
            icon={<Trophy className="w-4 h-4 text-primary" />}
            sparkColor="#1F2937"
          />
          <StatCard
            label="Avg Completion"
            value="87%"
            meta="Goal achievement rate"
            icon={<TrendingUp className="w-4 h-4 text-primary" />}
            trend="+4.2%"
            sparkColor="#1F2937"
          />
        </section>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* LEFT: Weekly Calorie Intake (spans 2) */}
          <div className="lg:col-span-2 bg-card border border-border/60 rounded-3xl p-5 lg:p-6 animate-fade-in">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="text-lg font-bold">Weekly Calorie Intake Vs Goal</h3>
                <div className="flex items-center gap-4 mt-2 text-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm bg-primary" /> Calorie
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm bg-amber-400" /> Goal
                  </span>
                </div>
              </div>
              <button className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-border/60 bg-surface hover:bg-background transition">
                {period} <span className="text-muted-foreground">▾</span>
              </button>
            </div>

            <div className="h-[280px] -ml-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={calorieData} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 6" vertical={false} />
                  <XAxis dataKey="m" tickLine={false} axisLine={false} className="text-xs" />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    className="text-xs"
                    tickFormatter={(v) => `${v} kg`}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 14,
                      border: "1px solid hsl(var(--border))",
                      boxShadow: "var(--shadow-pop)",
                      background: "hsl(var(--background))",
                      fontSize: 12,
                    }}
                    formatter={(v: number, n) => [`${v} Kg`, n === "calorie" ? "Calorie" : "Goal"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="calorie"
                    stroke="#FA865E"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 5, fill: "#FA865E" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="goal"
                    stroke="#F4C430"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 5, fill: "#F4C430" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* RIGHT: Macronutrient Breakdown */}
          <div className="bg-card border border-border/60 rounded-3xl p-5 lg:p-6 animate-fade-in">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-bold">Macronutrient Breakdown</h3>
              <button className="text-muted-foreground hover:text-foreground">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            <div className="h-[200px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={macroData}
                    innerRadius={55}
                    outerRadius={90}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {macroData.map((m) => (
                      <Cell key={m.name} fill={m.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              {/* Inline percentage labels */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">Total</div>
                  <div className="text-xl font-bold">100%</div>
                </div>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-3 mt-5">
              {macroData.map((m) => (
                <li key={m.name} className="flex items-start gap-2 text-xs">
                  <span
                    className="w-2.5 h-2.5 rounded-full mt-1 shrink-0"
                    style={{ background: m.color }}
                  />
                  <div>
                    <div className="font-semibold text-sm">{m.name}</div>
                    <div className="text-muted-foreground">{m.info}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* BOTTOM LEFT: Recommended Menu (spans 2) */}
          <div className="lg:col-span-2 bg-card border border-border/60 rounded-3xl p-5 lg:p-6 animate-fade-in">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 className="text-lg font-bold">Recommended Menu</h3>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-border/60 bg-surface hover:bg-background transition">
                  <Filter className="w-3.5 h-3.5" /> Filter
                </button>
                <span className="text-xs text-muted-foreground">Sort by:</span>
                <button
                  onClick={() => setSortBy(sortBy === "Calories" ? "Score" : "Calories")}
                  className="text-xs px-3 py-1.5 rounded-full border border-border/60 bg-surface hover:bg-background transition"
                >
                  {sortBy} ▾
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 flex-wrap mb-5">
              {menuTabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setMenuTab(t)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    menuTab === t
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-surface text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Menu list */}
            <ul className="space-y-3">
              {filteredMenu.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-4 p-3 rounded-2xl border border-border/50 hover:bg-surface transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-amber-200 grid place-items-center text-xl">
                    🥗
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{item.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.tag} · {item.kcal} kcal
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Health Score</div>
                      <div className="font-bold">
                        {item.score}
                        <span className="text-muted-foreground text-xs">/10</span>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-0.5">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <span
                          key={i}
                          className={`w-1 h-4 rounded-sm ${
                            i < item.score ? "bg-primary" : "bg-border"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* BOTTOM RIGHT: Your Workout Activity */}
          <div className="bg-card border border-border/60 rounded-3xl p-5 lg:p-6 animate-fade-in">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-bold">Your Workout Activity</h3>
              <button className="text-muted-foreground hover:text-foreground">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1.5 mb-5">
              {workoutDays.map((d) => (
                <div key={d.d} className="text-center">
                  <div className="text-[10px] text-muted-foreground mb-1.5">{d.d}</div>
                  <div
                    className={`mx-auto grid place-items-center text-sm font-semibold rounded-full w-9 h-9 transition ${
                      d.active
                        ? "bg-primary text-primary-foreground shadow-soft"
                        : "bg-surface text-foreground hover:bg-background"
                    }`}
                  >
                    {d.n}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-amber-500/80" />
              <div
                className="relative aspect-[16/10] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop')",
                }}
              >
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                  <div className="text-xs opacity-90">Today's Session</div>
                  <div className="font-bold text-lg leading-tight">Bench Press · Upper Body</div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-xs opacity-90">3:00 · 3 Sets · 8 Reps</div>
                    <button className="grid place-items-center w-10 h-10 rounded-full bg-white text-primary shadow-pop hover:scale-105 transition">
                      <Play className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProgressPage;
