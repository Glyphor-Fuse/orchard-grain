
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const PASTRIES = [
  {
    id: 1,
    name: "Morning Bun",
    description: "Cinnamon, orange zest, caramelized sugar.",
    image: "/images/pastry-morning-bun.jpg",
    tag: "Signature"
  },
  {
    id: 2,
    name: "Seasonal Fruit Tart",
    description: "Vanilla bean custard, farmers market berries.",
    image: "/images/pastry-tart.jpg",
    tag: "Seasonal"
  },
  {
    id: 3,
    name: "Double Baked Almond",
    description: "Croissant soaked in rum syrup, almond frangipane.",
    image: "/images/pastry-croissant.jpg",
    tag: "Classic"
  },
  {
    id: 4,
    name: "Cardamom Knot",
    description: "Twisted dough, freshly ground cardamom, pearl sugar.",
    image: "/images/pastry-knot.jpg",
    tag: "New"
  },
];

export default function DailyRotation() {
  return (
    <section id="pastry" className="py-20 md:py-32 bg-background border-t border-stone-200">
      <div className="container mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Daily Rotation</h2>
          <p className="text-muted-foreground max-w-sm">
            Baked fresh every morning at 4am. When they're gone, they're gone.
          </p>
        </div>
        <div className="hidden md:block h-px flex-1 bg-stone-200 mx-8 mb-4" />
        <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-2">
          Scroll to Explore →
        </p>
      </div>

      <div className="container p-0 md:px-8">
        <ScrollArea className="w-full whitespace-nowrap pb-8">
          <div className="flex w-max space-x-4 p-4">
            {PASTRIES.map((item) => (
              <Card key={item.id} className="w-[300px] md:w-[400px] shrink-0 border-none shadow-none bg-transparent group cursor-pointer">
                <CardContent className="p-0 space-y-4">
                  <div className="overflow-hidden aspect-[4/5] relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-black hover:bg-white rounded-none border-none text-[10px] uppercase tracking-wider">
                      {item.tag}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif text-primary group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground text-wrap leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden md:flex" />
        </ScrollArea>
      </div>
    </section>
  );
}
