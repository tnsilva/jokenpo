import { Typography, Box } from "@mui/material";
import { usePlayContext } from "../hooks";

const Scores = () => {
  const { userScore, computerScore } = usePlayContext();

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Pontuações
      </Typography>
      <Typography variant="body1">
        Você: {userScore}
        <br />
        Computador: {computerScore}
      </Typography>
    </Box>
  );
};

export default Scores;
