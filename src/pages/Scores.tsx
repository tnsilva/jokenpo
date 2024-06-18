import { Typography, Box } from "@mui/material";
import { usePlayContext } from "../hooks";

const Scores = () => {
  const { userScore, computer1Score, computer2Score } = usePlayContext();

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Pontuações
      </Typography>
      <Typography variant="body1">
        Você: {userScore}
        <br />
        Computador 1: {computer1Score}
        <br />
        Computador 2: {computer2Score}
      </Typography>
    </Box>
  );
};

export default Scores;
