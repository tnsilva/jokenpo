import { usePlayContext } from "../hooks";

import { Box, Paper, Typography } from "@mui/material";
import { Box4 } from "../styles/styles";

export const Rodadas = () => {
  const { rounds } = usePlayContext();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">Rodadas</Typography>

      {rounds.length > 0 ? (
        <>
          {rounds.map(
            (rod) =>
              rod.round > 0 && (
                <Box4 key={rod.id}>
                  <Paper>
                    <Typography>Nº: {rod.round}</Typography>
                    <Box>Jogador: {rod.player}</Box>
                    <Box>PC1: {rod.pc1}</Box>
                    <Box>PC2: {rod.pc2}</Box>
                  </Paper>
                </Box4>
              )
          )}
        </>
      ) : (
        <Box>
          <Paper>
            <Typography>Nº: 0</Typography>
            <Box>Jogador: 0</Box>
            <Box>PC1: 0</Box>
            <Box>PC2: 0</Box>
          </Paper>
        </Box>
      )}
    </Box>
  );
};
