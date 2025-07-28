import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Trophy, Users } from "lucide-react";

const RecentDraws = () => {
  const recentDraws = [
    {
      id: 1,
      date: "2024-01-20",
      block: "32,145,123",
      numbers: [7, 14, 23, 35, 42, 58],
      winners: {
        sena: 0,
        quina: 342,
        quadra: 18567
      },
      prize: "987,000 BNB"
    },
    {
      id: 2,
      date: "2024-01-17",
      block: "32,142,890",
      numbers: [3, 18, 27, 39, 45, 51],
      winners: {
        sena: 1,
        quina: 289,
        quadra: 15432
      },
      prize: "1,200,000 BNB"
    },
    {
      id: 3,
      date: "2024-01-14",
      block: "32,140,567",
      numbers: [9, 15, 28, 33, 46, 59],
      winners: {
        sena: 0,
        quina: 456,
        quadra: 21890
      },
      prize: "856,000 BNB"
    }
  ];

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
      <div className="space-y-6">
        <h3 className="text-xl font-orbitron font-bold text-foreground flex items-center">
          <Trophy className="w-6 h-6 mr-2 text-neon-green" />
          Sorteios Recentes
        </h3>

        <div className="space-y-4">
          {recentDraws.map((draw, index) => (
            <div 
              key={draw.id}
              className="p-4 bg-muted/20 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Draw Info */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground font-exo">
                    <div className="flex items-center">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      {draw.date}
                    </div>
                    <div>Bloco #{draw.block}</div>
                  </div>
                  
                  {/* Winning Numbers */}
                  <div className="flex space-x-2">
                    {draw.numbers.map((number) => (
                      <div
                        key={number}
                        className="w-8 h-8 rounded-full bg-gradient-secondary flex items-center justify-center text-secondary-foreground font-orbitron font-bold text-sm shadow-glow-secondary"
                      >
                        {number}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Winners & Prize */}
                <div className="flex flex-col md:items-end space-y-2">
                  <div className="text-lg font-orbitron font-bold text-neon-green">
                    {draw.prize}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="border-neon-green text-neon-green">
                      <Users className="w-3 h-3 mr-1" />
                      Sena: {draw.winners.sena}
                    </Badge>
                    <Badge variant="outline" className="border-primary text-primary">
                      Quina: {draw.winners.quina}
                    </Badge>
                    <Badge variant="outline" className="border-secondary text-secondary">
                      Quadra: {draw.winners.quadra}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="text-sm text-primary hover:text-primary/80 font-exo underline">
            Ver todos os sorteios
          </button>
        </div>
      </div>
    </Card>
  );
};

export default RecentDraws;