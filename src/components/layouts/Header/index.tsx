import { AppBar, Box, Container, Toolbar} from "@mui/material";
import { Btn1 } from "../../../styles/styles";

export const Header = () => {
  return (
    <Container sx={{ m: 4 }}>
      <AppBar position="fixed">
        <Toolbar variant="regular">
          <Box>
            <Btn1 variant="outlined" href="/">
              Jo - Ken - Pô
            </Btn1>
          </Box>

          <Box display="flex" marginLeft="auto">
            <Btn1 variant="outlined" href="/placar">
              Placar
            </Btn1>

            <Btn1 variant="outlined" href="/rodadas">
              Rodadas
            </Btn1>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
