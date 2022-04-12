import { Box } from "@mui/material";
import { BoxApp } from "../styles/styles";

interface Comp1Props {
  opComp1: number;
  bgBox2: string;
}

export const Comp1 = ({ opComp1, bgBox2 }: Comp1Props) => {
  return (
    <>
      {opComp1 !== null && (
        <BoxApp bgcolor={bgBox2}>
          {opComp1 === 0 && (
            <Box>
              <img src="pedra.png" width="75px" alt="Pedra" />
            </Box>
          )}
          {opComp1 === 1 && (
            <Box>
              <img src="papel.png" width="75px" alt="Papel" />
            </Box>
          )}
          {opComp1 === 2 && (
            <Box>
              <img src="tesoura.png" width="75px" alt="Tesoura" />
            </Box>
          )}
        </BoxApp>
      )}
    </>
  );
};
