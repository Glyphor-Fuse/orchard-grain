
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer id="visit" className="bg-background pt-20 pb-8 border-t border-stone-200">
      <div className="container grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl font-serif font-bold text-primary">Orchard & Grain</h2>
          <p className="text-muted-foreground max-w-xs leading-relaxed">
            An artisanal bakery and patisserie in the heart of the Vale. 
            Dedicated to slow fermentation and seasonal ingredients.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Visit Us</h3>
          <address className="not-italic text-muted-foreground space-y-2">
            <p>142 Hearthstone Avenue</p>
            <p>The Vale, VT 05401</p>
            <p className="pt-2 hover:text-primary transition-colors cursor-pointer">hello@orchardandgrain.com</p>
            <p className="hover:text-primary transition-colors cursor-pointer">+1 (555) 019-2834</p>
          </address>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Hours</h3>
          <ul className="text-muted-foreground space-y-2">
            <li className="flex justify-between max-w-[140px]">
              <span>Wed - Fri</span>
              <span>7am - 3pm</span>
            </li>
            <li className="flex justify-between max-w-[140px]">
              <span>Sat - Sun</span>
              <span>8am - 4pm</span>
            </li>
            <li className="flex justify-between max-w-[140px] text-accent/80">
              <span>Mon - Tue</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="mb-8" />

      <div className="container flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground uppercase tracking-wider gap-4">
        <p>© 2024 Orchard & Grain. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
