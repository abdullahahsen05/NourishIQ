import { Sparkles, MoreHorizontal, Send, Mic, Apple, Dumbbell, TrendingUp } from "lucide-react";
import orb from "@/assets/ai-orb.png";

const actions = [
  { label: "Generate Meal Plan", Icon: Apple },
  { label: "Fitness Guidance", Icon: Dumbbell },
  { label: "Analyze Progress", Icon: TrendingUp },
];

const AIAssistant = () => {
  return (
    <div className="card-surface p-5 lg:p-6 flex flex-col h-full min-h-[420px] lg:min-h-[640px] relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-foreground" fill="currentColor" />
          <h3 className="font-semibold text-base">AI Assistant</h3>
        </div>
        <button className="w-9 h-9 rounded-full bg-surface-soft grid place-items-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Ambient glow behind orb */}
      <div className="relative flex-1 flex flex-col items-center justify-center py-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-72 h-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

        {/* Orb */}
        <div className="relative w-52 h-52 lg:w-60 lg:h-60 flex items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-primary/15 animate-ping-slow" />
          <span className="absolute inset-4 rounded-full bg-primary/10 animate-pulse-soft" />
          <img
            src={orb}
            alt="AI Assistant orb"
            width={480}
            height={480}
            loading="lazy"
            className="relative w-full h-full object-contain drop-shadow-[0_30px_50px_hsl(var(--primary)/0.45)] animate-float"
          />
        </div>

        {/* Greeting */}
        <div className="text-center mt-6 relative">
          <p className="text-base text-muted-foreground font-light">Hi, Masud</p>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mt-1">
            How can I help you?
          </h2>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {actions.map(({ label, Icon }) => (
          <button
            key={label}
            className="group rounded-2xl bg-surface-soft hover:bg-muted border border-border/40 p-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-card active:scale-[0.97]"
          >
            <div className="w-7 h-7 rounded-full bg-primary/15 grid place-items-center mb-2 group-hover:bg-primary/25 transition-colors">
              <Icon className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="text-[11px] font-medium leading-tight block">{label}</span>
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 bg-surface-soft border border-border/40 rounded-full p-1.5 pl-5">
        <input
          type="text"
          placeholder="Ask something.."
          className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-muted-foreground py-2"
        />
        <button
          aria-label="Voice input"
          className="w-9 h-9 grid place-items-center rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        >
          <Mic className="w-4 h-4" />
        </button>
        <button
          aria-label="Send message"
          className="w-10 h-10 grid place-items-center rounded-full bg-primary text-primary-foreground shadow-soft hover:bg-primary-glow hover:shadow-pop transition-all active:scale-95"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;
