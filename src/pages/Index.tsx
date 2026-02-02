import OvenStatusBar from "@/components/OvenStatusBar";
import Hero from "@/components/Hero";
import DailyRotation from "@/components/DailyRotation";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-accent selection:text-white">
      <div className="sticky top-0 z-50">
        <OvenStatusBar />
      </div>
      <Hero />
      <DailyRotation />
      <Philosophy />
      <Footer />
    </main>
  );
}