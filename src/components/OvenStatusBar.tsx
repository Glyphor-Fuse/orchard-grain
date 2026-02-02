
import { useEffect, useState } from "react";
import { Clock, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const OVEN_ITEMS = [
  { name: "Country Sourdough", status: "Cooling", time: "10 mins ago" },
  { name: "Olive & Rosemary", status: "Baking", time: "Ready in 15m" },
  { name: "Morning Buns", status: "Sold Out", time: "Tomorrow 7am" },
  { name: "Rye & Caraway", status: "Proofing", time: "Ready in 2h" },
];

export default function OvenStatusBar() {
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % OVEN_ITEMS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-primary text-primary-foreground py-2 overflow-hidden border-b border-white/10">
      <div className="container flex items-center justify-between text-xs md:text-sm tracking-wider uppercase font-medium">
        <div className="flex items-center gap-2 text-accent">
          <Flame className="w-4 h-4 animate-pulse" />
          <span className="hidden md:inline">Live from the Oven</span>
          <span className="md:hidden">Live</span>
        </div>

        <div className="flex-1 mx-4 h-5 relative overflow-hidden">
          {OVEN_ITEMS.map((item, idx) => (
            <div
              key={item.name}
              className={cn(
                "absolute inset-0 flex items-center justify-center gap-2 transition-all duration-500",
                idx === activeItem
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full"
              )}
            >
              <span className="font-serif italic text-accent/80">{item.status}:</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 text-white/60">
          <Clock className="w-4 h-4" />
          <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    </div>
  );
}
