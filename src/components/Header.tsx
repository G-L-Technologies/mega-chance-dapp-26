import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border bg-gradient-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg animate-pulse-glow"></div>
            <h1 className="text-2xl font-orbitron font-bold bg-gradient-primary bg-clip-text text-transparent">
              MegaSena DApp
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:block text-sm text-muted-foreground font-exo">
              BSC Network
            </div>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-primary font-exo"
            >
              <Wallet className="w-4 h-4 mr-2" />
              Conectar Carteira
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;