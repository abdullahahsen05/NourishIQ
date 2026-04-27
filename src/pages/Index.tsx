import Header from "@/components/Header";
import { Calendar } from "lucide-react";
import WeightCard from "@/components/widgets/WeightCard";
import StepsCard from "@/components/widgets/StepsCard";
import DailyInputs from "@/components/widgets/DailyInputs";
import TodaysPlan from "@/components/widgets/TodaysPlan";
import SleepCard from "@/components/widgets/SleepCard";
import WaterCard from "@/components/widgets/WaterCard";
import NutritionCard from "@/components/widgets/NutritionCard";
import AIAssistant from "@/components/widgets/AIAssistant";

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
            <AIAssistant />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
