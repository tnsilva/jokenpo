import { Typography, Box } from "@mui/material";
import { usePlayContext } from "../hooks";

const History = () => {
  const { history } = usePlayContext();

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Histórico de Partidas
      </Typography>
      {history.length < 1 && (
        <Typography mt={2}>
          Você precisa jogar primeiro. Clique em "Jokenpo"!
        </Typography>
      )}
      {history.map((game, index) => (
        <Typography key={index} variant="body2">
          Jogo {index + 1}: Você escolheu {game.userChoice}, Computador escolheu{" "}
          {game.computerChoice} - {game.result}
        </Typography>
      ))}
    </Box>
  );
};

export default History;
