import { Container, Button, Typography, Box, Grid } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import "../styles/Jokenpo.css";
import { usePlayContext } from "../hooks";

const Jokenpo = () => {
  const {
    choices,
    userChoice,
    handleChoice,
    showResult,
    result,
    computerChoice,
  } = usePlayContext();

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Jokenpo
      </Typography>

      <Box my={4}>
        <Grid container spacing={2} justifyContent="center">
          {choices.map((choice) => (
            <Grid item key={choice.value}>
              <Button
                variant="contained"
                color={userChoice === choice.value ? "secondary" : "primary"}
                onClick={() => handleChoice(choice.value)}
                startIcon={choice.icon}
                sx={{ minWidth: 120 }}
                aria-label={choice.alt}
              >
                {choice.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      <CSSTransition
        in={showResult}
        timeout={300}
        classNames="result"
        unmountOnExit
      >
        <Box my={4}>
          <Typography variant="h5" gutterBottom>
            {result === "Empate"
              ? "Empate! Jogue novamente."
              : result === "Você ganhou!"
              ? "Parabéns! Você ganhou!"
              : "Que pena! Você perdeu."}
          </Typography>
          <Typography variant="body1">
            Você escolheu: {userChoice}
            <br />
            Computador escolheu: {computerChoice}
          </Typography>
        </Box>
      </CSSTransition>
    </Container>
  );
};

export default Jokenpo;
