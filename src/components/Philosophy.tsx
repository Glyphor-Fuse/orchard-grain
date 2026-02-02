
import { Button } from "@/components/ui/button";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 bg-stone-900 text-stone-100 overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-4 border border-stone-700 z-0 hidden md:block" />
          <div className="relative z-10 aspect-[3/4] md:aspect-square overflow-hidden bg-stone-800">
            <img 
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-ABYTuqk3l6jQwNFHMl5zLDus/user-28g2Vr2tFHWmicI728ehPG3p/img-ccaIv2hZfVnL9cRMl88cJHDc.png?st=2026-02-02T20%3A10%3A02Z&se=2026-02-02T22%3A10%3A02Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=1726b4ce-fee1-450b-8b92-1731ad8745f6&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-02-02T21%3A10%3A02Z&ske=2026-02-03T21%3A10%3A02Z&sks=b&skv=2024-08-04&sig=ecA3SIFc321XkzhNHZuNwz7VPoKg7WfiGbyNh5rnOnk%3D" 
              alt="Baker kneading dough" 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" 
            />
          </div>
        </div>
        
        <div className="space-y-8 order-1 md:order-2">
          <div className="space-y-2">
            <span className="text-accent text-xs uppercase tracking-[0.2em]">Our Source</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-white">
              Grown in the Vale, <br />
              <span className="text-stone-400 italic">Milled by Stone.</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-stone-300 font-light leading-relaxed text-lg">
            <p>
              We don't just bake bread; we steward grain. Our flour comes exclusively from 
              three family-run mills within 50 miles of our oven. 
            </p>
            <p>
              By using heritage grains like Einkorn and Red Fife, we aren't just creating 
              deeper flavor profiles—we're supporting a system of agriculture that 
              respects the soil and the seasons.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 py-4 border-t border-stone-700">
            <div>
              <h4 className="text-2xl font-serif text-accent">100%</h4>
              <p className="text-xs uppercase tracking-wider text-stone-500">Organic Flour</p>
            </div>
            <div>
              <h4 className="text-2xl font-serif text-accent">48hr</h4>
              <p className="text-xs uppercase tracking-wider text-stone-500">Fermentation</p>
            </div>
          </div>

          <Button variant="link" className="text-white hover:text-accent p-0 h-auto text-sm uppercase tracking-widest decoration-1 underline-offset-4">
            Read Our Manifesto &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
