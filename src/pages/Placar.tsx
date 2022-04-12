import { usePlayContext } from "../hooks";

import { Box, Typography } from "@mui/material";
import { Box2 } from "../styles/styles";

export const Placar = () => {
  const { contPlayer, contPc1, contPc2 } = usePlayContext();

  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h6">Placar</Typography>

      <Box2>
        <Box>Jogador: {contPlayer}</Box>
        <Box>PC1: {contPc1}</Box>
        <Box>PC2: {contPc2}</Box>
      </Box2>
    </Box>
  );
};
