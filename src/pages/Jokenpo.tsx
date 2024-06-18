import { Container, Button, Typography, Box, Grid } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import "../styles/Jokenpo.css";
import { usePlayContext } from "../hooks";

const Jokenpo = () => {
  const {
    choices,
    userChoice,
    handleUserChoice,
    showResult,
    result,
    computerChoice1,
    computerChoice2,
  } = usePlayContext();

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          Jogue Contra Dois Computadores
        </Typography>
      </Box>

      <Box my={4}>
        <Grid container spacing={2} justifyContent="center">
          {choices.map((choice) => (
            <Grid item key={choice.value}>
              <Button
                variant="contained"
                color={userChoice === choice.value ? "secondary" : "primary"}
                onClick={() => handleUserChoice(choice.value)}
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
        {result && (
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Resultado:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Você escolheu: {userChoice}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Computador 1 escolheu: {computerChoice1}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Computador 2 escolheu: {computerChoice2}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {result === "win" && "Você ganhou!"}
              {result === "lose" && "Você perdeu!"}
              {result === "draw" && "Empate!"}
            </Typography>
          </Box>
        )}
      </CSSTransition>
    </Container>
  );
};

export default Jokenpo;
