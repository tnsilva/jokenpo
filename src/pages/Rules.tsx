import { Typography, Box } from "@mui/material";

const Rules = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Regras do Jogo
      </Typography>
      <Typography variant="body1">
        Pedra ganha de Tesoura
        <br />
        Papel ganha de Pedra
        <br />
        Tesoura ganha de Papel
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Atalhos de Teclado
      </Typography>
      <Typography variant="body1">
        P - Pedra
        <br />
        A - Papel
        <br />T - Tesoura
      </Typography>
    </Box>
  );
};

export default Rules;
