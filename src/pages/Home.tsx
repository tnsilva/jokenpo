import { Comp1, Comp2, Jogador } from ".";
import { usePlayContext } from "../hooks";

import { Grid, Box, Alert } from "@mui/material";

export const Home = () => {
  const { msg, opPc1, opPc2 } = usePlayContext();

  return (
    <Box sx={{ p: 2 }}>
      {msg.length > 0 && (
        <Box sx={{ p: 0, mb: 1 }}>
          <Alert severity="warning">{msg}</Alert>
        </Box>
      )}

      <Grid container direction="row" spacing={1}>
        {opPc1 === null || opPc2 === null ? (
          <>
            <Grid item xs={12} md={12}>
              <Alert sx={{ p: 1 }} severity="info">
                Clique em um dos botões abaixo para começar! | Legenda: Vermelho
                = perdeu, Verde Claro = marcou 01 ponto e Verde Escuro = marcou
                02 pontos.
              </Alert>
            </Grid>

            <Grid item xs={12} md={12}>
              <Jogador />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} md={12}>
              <Box sx={{ p: 0, mb: 1 }}>
                <Alert sx={{ p: 1 }} severity="info">
                  Para recomeçar, clique em "Novo Jogo" e para voltar, clique em
                  Jo-ken-pô!
                </Alert>
              </Box>
            </Grid>

            <Grid item xs={12} md={12}>
              <Box sx={{ p: 1 }}>Jogador</Box>
              <Jogador />
            </Grid>

            <Grid item xs={6} md={6}>
              <Box>
                <Box sx={{ p: 1 }}>PC 1:</Box>

                <Comp1 />
              </Box>
            </Grid>

            <Grid item xs={6} md={6}>
              <Box>
                <Box sx={{ p: 1 }}>PC 2:</Box>
                <Comp2 />
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};
