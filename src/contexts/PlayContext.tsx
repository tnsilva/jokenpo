import { useState, useEffect, createContext, ReactNode } from "react";
import RockIcon from "@mui/icons-material/EmojiObjects";
import PaperIcon from "@mui/icons-material/Description";
import ScissorsIcon from "@mui/icons-material/ContentCut";

interface IHistory {
  userChoice: string;
  computerChoice1: string;
  computerChoice2: string;
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
  computerChoice1: string;
  computerChoice2: string;
  result: string;
  showResult: boolean;
  userScore: number;
  computer1Score: number;
  computer2Score: number;
  history: IHistory[];
  handleUserChoice: (choice: string) => void;
}

export const PlayContext = createContext<PlayContextData>(
  {} as PlayContextData
);

const choices = [
  { name: "Pedra", icon: <RockIcon />, value: "Pedra", alt: "Pedra" },
  { name: "Papel", icon: <PaperIcon />, value: "Papel", alt: "Papel" },
  { name: "Tesoura", icon: <ScissorsIcon />, value: "Tesoura", alt: "Tesoura" },
];

const getRandomChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];

const determineWinner = (
  userChoice: string,
  computerChoice1: string,
  computerChoice2: string
) => {
  const winConditions: any = {
    Pedra: "Tesoura",
    Papel: "Pedra",
    Tesoura: "Papel",
  };

  const userWinsComputer1 = winConditions[userChoice] === computerChoice1;
  const userWinsComputer2 = winConditions[userChoice] === computerChoice2;
  const computer1WinsUser = winConditions[computerChoice1] === userChoice;
  const computer2WinsUser = winConditions[computerChoice2] === userChoice;

  if (userWinsComputer1 && userWinsComputer2) {
    return "win";
  }

  if (computer1WinsUser && computer2WinsUser) {
    return "lose";
  }

  return "draw";
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
  const [computerChoice1, setComputerChoice1] = useState("");
  const [computerChoice2, setComputerChoice2] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [computer1Score, setComputer1Score] = useState(0);
  const [computer2Score, setComputer2Score] = useState(0);
  const [history, setHistory] = useState<IHistory[]>([]);

  useEffect(() => {
    preloadSounds();

    const handleKeydown = (event: any) => {
      switch (event.key) {
        case "P":
        case "p":
          handleUserChoice("Pedra");
          break;
        case "A":
        case "a":
          handleUserChoice("Papel");
          break;
        case "T":
        case "t":
          handleUserChoice("Tesoura");
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

  useEffect(() => {
    if (result) {
      if (result === "win") {
        setUserScore((prev) => prev + 1);
        playSound(sounds.win);
      } else if (result === "lose") {
        setComputer1Score((prev) => prev + 1);
        setComputer2Score((prev) => prev + 1);
        playSound(sounds.lose);
      }

      setHistory([
        ...history,
        {
          userChoice,
          computerChoice1,
          computerChoice2,
          result,
        },
      ]);
    }
  }, [result]);

  const handleUserChoice = (choice: string) => {
    playSound(sounds.click);
    const computer1 = getRandomChoice().value;
    const computer2 = getRandomChoice().value;
    const gameResult = determineWinner(choice, computer1, computer2);

    setUserChoice(choice);
    setComputerChoice1(computer1);
    setComputerChoice2(computer2);
    setResult(gameResult);
    setShowResult(false);

    setTimeout(() => {
      setShowResult(true);
    }, 100);

    // setHistory([
    //   ...history,
    //   {
    //     userChoice: choice,
    //     computerChoice1: computer1,
    //     computerChoice2: computer2,
    //     result,
    //   },
    // ]);
  };

  return (
    <PlayContext.Provider
      value={{
        choices,
        userChoice,
        computerChoice1,
        computerChoice2,
        result,
        showResult,
        userScore,
        computer1Score,
        computer2Score,
        history,
        handleUserChoice,
      }}
    >
      {children}
    </PlayContext.Provider>
  );
};
