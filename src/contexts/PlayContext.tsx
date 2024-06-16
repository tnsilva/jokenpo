import { useState, useEffect, createContext, ReactNode } from "react";
import RockIcon from "@mui/icons-material/EmojiObjects";
import PaperIcon from "@mui/icons-material/Description";
import ScissorsIcon from "@mui/icons-material/ContentCut";

interface IHistory {
  userChoice: string;
  computerChoice: string;
  result: string;
}

interface IChoice {
  name: string;
  icon: JSX.Element;
  value: string;
  alt: string;
}

interface PlayContextData {
  choices: IChoice[];
  userChoice: string;
  computerChoice: string;
  result: string;
  showResult: boolean;
  userScore: number;
  computerScore: number;
  history: IHistory[];
  handleChoice: (choice: string) => void;
}

export const PlayContext = createContext<PlayContextData>(
  {} as PlayContextData
);

const choices = [
  { name: "Pedra", icon: <RockIcon />, value: "pedra", alt: "Pedra" },
  { name: "Papel", icon: <PaperIcon />, value: "papel", alt: "Papel" },
  { name: "Tesoura", icon: <ScissorsIcon />, value: "tesoura", alt: "Tesoura" },
];

const getResult = (userChoice: string, computerChoice: string) => {
  if (userChoice === computerChoice) return "Empate";
  if (
    (userChoice === "pedra" && computerChoice === "tesoura") ||
    (userChoice === "papel" && computerChoice === "pedra") ||
    (userChoice === "tesoura" && computerChoice === "papel")
  ) {
    return "Você ganhou!";
  }
  return "Você perdeu!";
};

const sounds = {
  click: "/sounds/newClick.mp3",
  win: "/sounds/win.mp3",
  lose: "/sounds/lose.mp3",
};

const preloadSounds = () => {
  Object.values(sounds).forEach((soundUrl) => {
    const audio = new Audio(soundUrl);
    audio.load();
  });
};

const playSound = (soundUrl: string) => {
  const audio = new Audio(soundUrl);
  audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};

interface PlayProviderProps {
  children: ReactNode;
}

export const PlayProvider = ({ children }: PlayProviderProps) => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [history, setHistory] = useState<IHistory[]>([]);

  useEffect(() => {
    preloadSounds();

    const handleKeydown = (event: any) => {
      switch (event.key) {
        case "P":
        case "p":
          handleChoice("pedra");
          break;
        case "A":
        case "a":
          handleChoice("papel");
          break;
        case "T":
        case "t":
          handleChoice("tesoura");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const handleChoice = (choice: string) => {
    playSound(sounds.click);
    const randomChoice =
      choices[Math.floor(Math.random() * choices.length)].value;
    setUserChoice(choice);
    setComputerChoice(randomChoice);
    const result = getResult(choice, randomChoice);
    setResult(result);
    setShowResult(false); // Oculta o resultado anterior
    setTimeout(() => {
      setShowResult(true); // Mostra o novo resultado após um pequeno atraso
    }, 100);

    setHistory([
      ...history,
      { userChoice: choice, computerChoice: randomChoice, result },
    ]);

    if (result === "Você ganhou!") {
      setUserScore(userScore + 1);
      playSound(sounds.win);
    } else if (result === "Você perdeu!") {
      setComputerScore(computerScore + 1);
      playSound(sounds.lose);
    }
  };

  return (
    <PlayContext.Provider
      value={{
        choices,
        userChoice,
        computerChoice,
        result,
        showResult,
        userScore,
        computerScore,
        history,
        handleChoice,
      }}
    >
      {children}
    </PlayContext.Provider>
  );
};
