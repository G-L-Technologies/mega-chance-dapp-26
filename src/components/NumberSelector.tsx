import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shuffle, Trash2 } from "lucide-react";

const NumberSelector = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const maxNumbers = 6;
  const minNumber = 1;
  const maxNumber = 60;

  const toggleNumber = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== number));
    } else if (selectedNumbers.length < maxNumbers) {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  const generateRandomNumbers = () => {
    const randomNumbers: number[] = [];
    while (randomNumbers.length < maxNumbers) {
      const randomNum = Math.floor(Math.random() * maxNumber) + minNumber;
      if (!randomNumbers.includes(randomNum)) {
        randomNumbers.push(randomNum);
      }
    }
    setSelectedNumbers(randomNumbers.sort((a, b) => a - b));
  };

  const clearSelection = () => {
    setSelectedNumbers([]);
  };

  const isComplete = selectedNumbers.length === maxNumbers;

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-orbitron font-bold text-foreground">
            Escolha seus números
          </h3>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={generateRandomNumbers}
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              <Shuffle className="w-4 h-4 mr-2" />
              Surpresinha
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={clearSelection}
              className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Limpar
            </Button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground font-exo">
            Selecionados: {selectedNumbers.length}/{maxNumbers}
          </p>
        </div>

        {/* Selected Numbers Display */}
        <div className="flex justify-center">
          <div className="flex space-x-2 p-4 bg-muted/30 rounded-lg min-h-[60px] items-center">
            {selectedNumbers.length === 0 ? (
              <p className="text-muted-foreground font-exo">
                Selecione {maxNumbers} números
              </p>
            ) : (
              selectedNumbers.map((number) => (
                <div
                  key={number}
                  className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-orbitron font-bold shadow-glow-primary animate-pulse-glow"
                >
                  {number}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Number Grid */}
        <div className="grid grid-cols-10 gap-2">
          {Array.from({ length: maxNumber }, (_, i) => i + minNumber).map((number) => {
            const isSelected = selectedNumbers.includes(number);
            return (
              <button
                key={number}
                onClick={() => toggleNumber(number)}
                disabled={!isSelected && selectedNumbers.length >= maxNumbers}
                className={`
                  w-12 h-12 rounded-lg font-orbitron font-semibold text-sm transition-all duration-200
                  ${isSelected 
                    ? 'bg-gradient-primary text-primary-foreground shadow-glow-primary scale-110' 
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105'
                  }
                  ${!isSelected && selectedNumbers.length >= maxNumbers 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'cursor-pointer'
                  }
                `}
              >
                {number}
              </button>
            );
          })}
        </div>

        {/* Bet Button */}
        <div className="flex justify-center pt-4">
          <Button
            disabled={!isComplete}
            className={`
              px-8 py-3 font-orbitron font-bold text-lg
              ${isComplete 
                ? 'bg-gradient-primary hover:shadow-glow-primary animate-pulse-glow' 
                : 'opacity-50 cursor-not-allowed'
              }
            `}
          >
            {isComplete ? 'Apostar - 0.01 BNB' : `Selecione ${maxNumbers - selectedNumbers.length} números`}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default NumberSelector;