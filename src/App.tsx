import { Typography, Divider, Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "./services";
import { Box2, BoxApp, Btn } from "./styles";

function App() {
  const [opJogador, setOpJogador] = useState(0);
  const [opComp1, setOpComp1] = useState(0);
  const [opComp2, setOpComp2] = useState(0);
  const [msg, setMsg] = useState("");
  const [contJog, setContJog] = useState(0);
  const [contComp1, setContComp1] = useState(0);
  const [contComp2, setContComp2] = useState(0);

  useEffect(() => {
    if (opJogador === opComp1 && opComp1 === opComp2) {
      setMsg("Empate");
    } else {
      setMsg("");
      if (
        (opJogador === 0 && opComp1 === 2 && opComp2 === 2) ||
        (opJogador === 1 && opComp1 === 0 && opComp2 === 0) ||
        (opJogador === 2 && opComp1 === 1 && opComp2 === 1) ||
        (opJogador === 0 && opComp1 === 0 && opComp2 === 2) ||
        (opJogador === 0 && opComp2 === 0 && opComp1 === 2) ||
        (opJogador === 1 && opComp1 === 1 && opComp2 === 0) ||
        (opJogador === 1 && opComp2 === 1 && opComp1 === 0) ||
        (opJogador === 2 && opComp1 === 2 && opComp2 === 1) ||
        (opJogador === 2 && opComp2 === 2 && opComp1 === 1)
      ) {
        console.log("Jogador Venceu");
        setContJog(contJog + 1);
      }

      if (
        (opComp1 === 0 && opComp2 === 2 && opJogador === 2) ||
        (opComp1 === 1 && opComp2 === 0 && opJogador === 0) ||
        (opComp1 === 2 && opComp2 === 1 && opJogador === 1) ||
        (opComp1 === 0 && opComp2 === 0 && opJogador === 2) ||
        (opComp1 === 0 && opJogador === 0 && opComp2 === 2) ||
        (opComp1 === 1 && opComp2 === 1 && opJogador === 0) ||
        (opComp1 === 1 && opJogador === 1 && opComp2 === 0) ||
        (opComp1 === 2 && opComp2 === 2 && opJogador === 1) ||
        (opComp1 === 2 && opJogador === 2 && opComp2 === 1)
      ) {
        console.log("PC1 Venceu");
        setContComp1(contComp1 + 1);
      }

      if (
        (opComp2 === 0 && opJogador === 2 && opComp1 === 2) ||
        (opComp2 === 1 && opJogador === 0 && opComp1 === 0) ||
        (opComp2 === 2 && opJogador === 1 && opComp1 === 1) ||
        (opComp2 === 0 && opJogador === 0 && opComp1 === 2) ||
        (opComp2 === 0 && opComp1 === 0 && opJogador === 2) ||
        (opComp2 === 1 && opJogador === 1 && opComp1 === 0) ||
        (opComp2 === 1 && opComp1 === 1 && opJogador === 0) ||
        (opComp2 === 2 && opJogador === 2 && opComp1 === 1) ||
        (opComp2 === 2 && opComp1 === 2 && opJogador === 1)
      ) {
        console.log("PC2 Venceu");
        setContComp2(contComp2 + 1);
      }
    }
  }, [setOpJogador, opComp1, opComp2]);

  const jogar = async (n: number) => {
    setOpJogador(n);

    await api
      .get("")
      .then((response) => {
        setOpComp1(response.data[0]);
        setOpComp2(response.data[1]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box sx={{ m: 1, p: 6, s: 6 }}>
      <Typography variant="h6">Pedra, Papel e Tesoura</Typography>

      <Divider />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={12} md={4}>
          Jogador:
          <BoxApp>
            <Btn type="submit" onClick={() => jogar(0)}>
              <img src="pedra.png" width="75px" alt="Pedra" />
            </Btn>
            <Btn type="submit" onClick={() => jogar(1)}>
              <img src="papel.png" width="75px" alt="Papel" />
            </Btn>
            <Btn type="submit" onClick={() => jogar(2)}>
              <img src="tesoura.png" width="75px" alt="Tesoura" />
            </Btn>
            {opJogador}
          </BoxApp>
        </Grid>

        <Grid item xs={12} md={4}>
          Computador 1:
          <BoxApp>
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
            {opComp1}
          </BoxApp>
        </Grid>

        <Grid item xs={12} md={4}>
          Computador 2:
          <BoxApp>
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

            {opComp2}
          </BoxApp>
        </Grid>
      </Grid>

      {msg.length > 0 && (
        <>
          <Divider />
          <Box2>{msg}</Box2>
        </>
      )}

      <Divider />
      <Box2>
        <Box>Jogador: {contJog}</Box>
        <Box>PC1: {contComp1}</Box>
        <Box>PC2: {contComp2}</Box>
      </Box2>
    </Box>
  );
}

export default App;
