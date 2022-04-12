import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { Btn1 } from "../../../styles/styles";

export const Header = () => {
  return (
    <Container sx={{ m: 4 }}>
      <AppBar position="fixed">
        <Toolbar variant="regular">
          <Typography variant="h6" color="inherit" component="div">
            Jo - Ken - Pô
          </Typography>

          <Box display="flex" marginLeft="auto">
            <Btn1
              // sx={{ ml: 12 }}
              variant="outlined"
              href="/"
              // onClick={() => novaJogada}
            >
              Novo Jogo
            </Btn1>

            {/* <Btn1
              // sx={{ ml: 12 }}
              variant="outlined"
              href="/rodadas"
              // onClick={() => novaJogada}
            >
              rodadas
            </Btn1> */}
            {/* <Link to="/rodadas">Rodadas</Link> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
