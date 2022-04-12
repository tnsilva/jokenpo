import { Box } from "@mui/material";
import { BoxApp } from "../styles/styles";

interface Comp2Props {
  opComp2: number;
  bgBox3: string;
}

export const Comp2 = ({ opComp2, bgBox3 }: Comp2Props) => {
  return (
    <>
      {opComp2 !== null && (
        <BoxApp bgcolor={bgBox3}>
          {opComp2 === 0 && (
            <Box>
              <img src="pedra.png" width="75px" alt="Pedra" />
            </Box>
          )}
          {opComp2 === 1 && (
            <Box>
              <img src="papel.png" width="75px" alt="Papel" />
            </Box>
          )}
          {opComp2 === 2 && (
            <Box>
              <img src="tesoura.png" width="75px" alt="Tesoura" />
            </Box>
          )}
        </BoxApp>
      )}
    </>
  );
};
