import Header from "@/components/Header";
import { Calendar } from "lucide-react";
import WeightCard from "@/components/widgets/WeightCard";
import StepsCard from "@/components/widgets/StepsCard";
import DailyInputs from "@/components/widgets/DailyInputs";
import TodaysPlan from "@/components/widgets/TodaysPlan";
import SleepCard from "@/components/widgets/SleepCard";
import WaterCard from "@/components/widgets/WaterCard";
import NutritionCard from "@/components/widgets/NutritionCard";

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
              <WeightCard />
              <StepsCard />
            </div>
            <DailyInputs />
            <TodaysPlan />
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <div className="grid grid-cols-2 gap-4">
              <SleepCard />
              <WaterCard />
            </div>
            <NutritionCard />
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
