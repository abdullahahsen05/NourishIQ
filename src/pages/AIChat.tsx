import { useState } from "react";
import Header from "@/components/Header";
import { Send, Mic, Sparkles, Apple, LineChart, ImageIcon, CalendarCheck } from "lucide-react";
import orb from "@/assets/ai-orb.png";

const features = [
  {
    icon: Apple,
    title: "Personalized Meal Planning",
    desc: "Creates custom diet and meal plans based on your goals and preferences.",
    tone: "from-rose-200/60 to-orange-100/40",
  },
  {
    icon: LineChart,
    title: "Smart Progress Insights",
    desc: "Analyzes your nutrition data and provides actionable health suggestions.",
    tone: "from-pink-200/60 to-rose-100/40",
  },
  {
    icon: ImageIcon,
    title: "Image Generation",
    desc: "Creates visual meal ideas or food inspiration based on your prompts.",
    tone: "from-sky-200/60 to-blue-100/40",
  },
  {
    icon: CalendarCheck,
    title: "Task Automation",
    desc: "Automates reminders for meals, workouts, and hydration schedules.",
    tone: "from-violet-200/60 to-indigo-100/40",
  },
];

const AIChat = () => {
  const [value, setValue] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto py-6 lg:py-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Orb */}
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 flex items-center justify-center animate-fade-in">
            <span className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
            <span className="absolute inset-6 rounded-full bg-primary/15 animate-pulse-soft" />
            <img
              src={orb}
              alt="NutriAI Assistant orb"
              width={512}
              height={512}
              className="relative w-full h-full object-contain drop-shadow-[0_30px_60px_hsl(var(--primary)/0.5)] animate-float"
            />
          </div>

          {/* Heading */}
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Welcome to NutriAI Assistant
          </h1>
          <p className="mt-3 text-base md:text-lg text-muted-foreground">
            your personal smart guide for health & wellness.
          </p>

          {/* Feature cards */}
          <section className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map(({ icon: Icon, title, desc, tone }) => (
              <button
                key={title}
                className="group text-left rounded-3xl bg-card border border-border/60 p-5 hover:-translate-y-1 hover:shadow-pop transition-all"
              >
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${tone} grid place-items-center mb-3`}
                >
                  <Icon className="w-5 h-5 text-foreground/80" />
                </div>
                <h3 className="font-semibold text-sm mb-1.5">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </button>
            ))}
          </section>

          {/* Input bar */}
          <div className="mt-10 w-full max-w-3xl">
            <div className="relative bg-card border border-border/60 rounded-3xl shadow-card p-3 pl-5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary shrink-0" />
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Ask me anything about your health..."
                aria-label="Chat input"
                className="flex-1 bg-transparent text-sm md:text-base placeholder:text-muted-foreground focus:outline-none py-3"
              />
              <button
                aria-label="Voice input"
                className="w-10 h-10 grid place-items-center rounded-full text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
              >
                <Mic className="w-4 h-4" />
              </button>
              <button
                aria-label="Send"
                className="w-11 h-11 grid place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft hover:bg-primary-glow hover:shadow-pop transition-all active:scale-95"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[11px] text-muted-foreground mt-3">
              NutriAI may make mistakes. Verify important health information.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIChat;
