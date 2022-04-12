import { Comp1, Comp2, Jogador, Placar, Rodadas } from ".";
import { usePlayContext } from "../hooks";

import { Grid, Box, Divider, Alert } from "@mui/material";

export const Home = () => {
  const { msg, opPc1, opPc2 } = usePlayContext();

  return (
    <Box sx={{ p: 2 }}>
      {msg.length > 0 && <Alert>{msg}</Alert>}

      <Grid container direction="row" spacing={1}>
        {opPc1 === null || opPc2 === null ? (
          <>
            <Grid item xs={12} md={12}>
              <Alert sx={{ p: 1 }}>
                Clique em um dos botões abaixo para começar!
              </Alert>
            </Grid>

            <Grid item xs={12} md={12}>
              <Jogador />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} md={12}>
              <Alert sx={{ p: 1 }}>
                Para recomeçar, clique em "Novo Jogo"!
              </Alert>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ p: 1 }}>Jogador</Box>
              <Jogador />
            </Grid>

            <Grid item xs={6} md={3}>
              <Box>
                <Box sx={{ p: 1 }}>PC 1:</Box>

                <Comp1 />
              </Box>
            </Grid>

            <Grid item xs={6} md={3}>
              <Box>
                <Box sx={{ p: 1 }}>PC 2:</Box>
                <Comp2 />
              </Box>
            </Grid>
          </>
        )}
      </Grid>

      <Divider />
      <Placar />

      <Divider />
      <Rodadas />
    </Box>
  );
};
