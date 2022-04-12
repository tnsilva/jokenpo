import { Box } from "@mui/material";
import { Box2 } from "../styles/styles";

interface PlacarProps {
  contJog: number;
  contComp1: number;
  contComp2: number;
}

export const Placar = ({ contJog, contComp1, contComp2 }: PlacarProps) => {
  return (
    <Box2>
      <Box>Jogador: {contJog}</Box>
      <Box>PC1: {contComp1}</Box>
      <Box>PC2: {contComp2}</Box>
    </Box2>
  );
};
