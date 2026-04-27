import { Plus, Search, Leaf } from "lucide-react";
import { useState } from "react";

const navLinks = ["Home", "Healthy Menu", "Calendar", "Progress", "AI Chat"];

const Header = () => {
  const [active, setActive] = useState("Home");

  return (
    <header className="w-full bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/40">
      <div className="container mx-auto flex flex-wrap items-center gap-3 lg:gap-5 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0 mr-2">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-soft">
            <Leaf className="w-5 h-5" strokeWidth={2.5} />
          </span>
          <span className="font-bold text-lg tracking-tight hidden sm:inline">NutriSense</span>
        </a>

        {/* Nav links - pill */}
        <nav className="order-3 lg:order-none w-full lg:w-auto overflow-x-auto scrollbar-none">
          <ul className="flex items-center gap-1 bg-surface/70 border border-border/50 rounded-full p-1 w-max mx-auto">
            {navLinks.map((link) => {
              const isActive = active === link;
              return (
                <li key={link}>
                  <button
                    onClick={() => setActive(link)}
                    className={`px-4 lg:px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-soft"
                        : "text-foreground/70 hover:text-foreground hover:bg-background"
                    }`}
                  >
                    {link}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right side: search, add, user */}
        <div className="ml-auto flex items-center gap-2 lg:gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search here"
              aria-label="Search"
              className="pl-9 pr-4 py-2.5 w-44 lg:w-56 rounded-full bg-surface border border-border/60 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
          </div>

          <button
            type="button"
            className="flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full pl-3 pr-4 py-2.5 text-sm font-semibold shadow-soft hover:shadow-pop hover:bg-primary-glow transition-all"
          >
            <Plus className="w-4 h-4" strokeWidth={3} />
            <span className="hidden sm:inline">Add</span>
          </button>

          <div className="flex items-center gap-2 pl-1">
            <img
              src="https://i.pravatar.cc/64?img=12"
              alt="Masud A."
              className="w-10 h-10 rounded-full object-cover ring-2 ring-background"
            />
            <div className="hidden md:flex flex-col leading-tight">
              <span className="text-sm font-semibold">Masud A.</span>
              <span className="text-xs text-muted-foreground">Coach</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
