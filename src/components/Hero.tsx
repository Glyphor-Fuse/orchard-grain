
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-stone-50">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bread.jpg"
          alt="Artisanal sourdough loaf close up"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Navigation Placeholder (Visual only for composition) */}
      <nav className="relative z-10 container py-6 flex justify-between items-center text-white">
        <div className="text-2xl font-serif font-bold tracking-tighter">Orchard & Grain</div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
          <a href="#bakery" className="hover:text-accent transition-colors">Bakery</a>
          <a href="#pastry" className="hover:text-accent transition-colors">Pastry</a>
          <a href="#philosophy" className="hover:text-accent transition-colors">Source</a>
          <a href="#visit" className="hover:text-accent transition-colors">Visit</a>
        </div>
        <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors rounded-none uppercase text-xs tracking-widest">
          Order Online
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container pb-20 pt-20 md:pt-40">
        <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <span className="inline-block py-1 px-3 border border-white/30 text-white text-xs uppercase tracking-[0.2em] backdrop-blur-sm">
            Est. The Vale, 2024
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.9]">
            Slow Fermented. <br />
            <span className="text-accent/90 italic">Hearth Baked.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-xl font-light leading-relaxed">
            We believe in the patience of wild yeast and the honesty of local grain. 
            Every loaf is a testament to time, temperature, and touch.
          </p>
          <div className="pt-8 flex flex-col md:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-accent hover:text-white rounded-none h-14 px-8 text-xs uppercase tracking-widest transition-all">
              View Daily Menu
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-none h-14 px-8 text-xs uppercase tracking-widest transition-all">
              Our Philosophy
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce">
        <ArrowDown className="w-6 h-6 opacity-60" />
      </div>
    </section>
  );
}
