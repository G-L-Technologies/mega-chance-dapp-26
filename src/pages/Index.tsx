import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LotteryStats from "@/components/LotteryStats";
import NumberSelector from "@/components/NumberSelector";
import RecentDraws from "@/components/RecentDraws";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background font-exo">
      <Header />
      
      <main>
        <HeroSection />
        
        <div className="container mx-auto px-4 py-12 space-y-12">
          <LotteryStats />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <NumberSelector />
            <RecentDraws />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-card/30 backdrop-blur-sm py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-exo">
            © 2024 MegaSena DApp - Loteria Descentralizada na BSC
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
