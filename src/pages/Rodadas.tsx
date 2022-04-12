import { Box, Divider, Paper, Typography } from "@mui/material";
import { Footer, Header, MainPage } from "../components";
import { Box4 } from "../styles/styles";

type Rodada = {
  id?: string;
  jogador: number;
  pc1: number;
  pc2: number;
  rodada: number;
};

interface RodadasProps {
  rodadas: Rodada[];
}

export const Rodadas = ({ rodadas }: RodadasProps) => {
  return (
    <>
      {rodadas.length > 0 && (
        <>
          <Divider />
          {rodadas.map(
            (rod) =>
              rod.rodada > 0 && (
                <Box4 key={rod.id}>
                  <Paper>
                    <Typography variant="h6">Rodada: {rod.rodada}</Typography>
                    <Box>Jogador: {rod.jogador}</Box>
                    <Box>PC1: {rod.pc1}</Box>
                    <Box>PC2: {rod.pc2}</Box>
                  </Paper>
                </Box4>
              )
          )}
        </>
      )}
    </>
  );
};
