import { Card } from "@/components/ui/card";
import { Zap, Shield, Eye } from "lucide-react";

const HeroSection = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Transparente",
      description: "Smart contract auditado na BSC",
      color: "text-neon-green"
    },
    {
      icon: Zap,
      title: "Instant Payout",
      description: "Pagamento automático via blockchain",
      color: "text-primary"
    },
    {
      icon: Eye,
      title: "Verificável",
      description: "Todos os sorteios são públicos",
      color: "text-secondary"
    }
  ];

  return (
    <div className="relative py-16 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-background opacity-50"></div>
      
      <div className="relative z-10 container mx-auto text-center">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-orbitron font-black bg-gradient-primary bg-clip-text text-transparent animate-slide-up">
              MEGA<span className="text-secondary">SENA</span>
            </h1>
            <p className="text-xl md:text-2xl font-exo text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
              A primeira loteria descentralizada da BSC
            </p>
          </div>

          {/* Prize Display */}
          <Card className="p-8 bg-card/30 backdrop-blur-md border-primary/30 shadow-glow-primary animate-slide-up max-w-md mx-auto" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground font-exo uppercase tracking-wide">
                Próximo Prêmio
              </p>
              <div className="text-4xl md:text-5xl font-orbitron font-black text-neon-green animate-pulse-glow">
                1,250,000
              </div>
              <p className="text-lg text-neon-green font-exo">BNB</p>
              <p className="text-sm text-muted-foreground font-exo">
                ≈ $375,000,000 USD
              </p>
            </div>
          </Card>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 bg-card/20 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 animate-slide-up hover:animate-float"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="text-center space-y-3">
                    <Icon className={`w-12 h-12 mx-auto ${feature.color}`} />
                    <h3 className="text-lg font-orbitron font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-exo">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;