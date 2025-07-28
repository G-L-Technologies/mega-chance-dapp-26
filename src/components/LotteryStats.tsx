import { Card } from "@/components/ui/card";
import { Trophy, Users, Clock, DollarSign } from "lucide-react";

const LotteryStats = () => {
  const stats = [
    {
      icon: DollarSign,
      label: "Prêmio Acumulado",
      value: "1,250,000 BNB",
      subtext: "≈ $375,000,000",
      color: "text-neon-green",
      glow: "shadow-glow-accent"
    },
    {
      icon: Users,
      label: "Apostas Ativas",
      value: "45,672",
      subtext: "Este sorteio",
      color: "text-primary",
      glow: "shadow-glow-primary"
    },
    {
      icon: Clock,
      label: "Próximo Sorteio",
      value: "2h 34m",
      subtext: "Bloco #32,145,678",
      color: "text-secondary",
      glow: "shadow-glow-secondary"
    },
    {
      icon: Trophy,
      label: "Último Ganhador",
      value: "6 acertos",
      subtext: "0x1234...5678",
      color: "text-neon-pink",
      glow: "shadow-[0_0_20px_hsl(320_100%_60%_/_0.5)]"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card 
            key={index} 
            className={`p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:${stat.glow} animate-slide-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground font-exo mb-1">
                  {stat.label}
                </p>
                <p className={`text-2xl font-orbitron font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground font-exo">
                  {stat.subtext}
                </p>
              </div>
              <Icon className={`w-8 h-8 ${stat.color} opacity-80`} />
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default LotteryStats;