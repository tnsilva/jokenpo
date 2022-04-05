import { Typography, Divider, Box, Grid } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import { api } from "./services";
import { Box2, Box3, BoxApp, Btn } from "./styles";

function App() {
  const [opJogador, setOpJogador] = useState(0);
  const [opComp1, setOpComp1] = useState(0);
  const [opComp2, setOpComp2] = useState(0);
  const [msg, setMsg] = useState("");
  const [contJog, setContJog] = useState(0);
  const [contComp1, setContComp1] = useState(0);
  const [contComp2, setContComp2] = useState(0);
  const [rodadas, setRodadas] = useState<any[]>([]);

  useEffect(() => {
    if (opJogador === opComp1 && opComp1 === opComp2) {
      setMsg("Empate");
    } else {
      setMsg("");
      camparePlayers(
        opJogador,
        opComp1,
        setContJog,
        setContComp1,
        "Jogador",
        "PC1"
      );

      camparePlayers(
        opJogador,
        opComp2,
        setContJog,
        setContComp2,
        "Jogador",
        "PC2"
      );
      camparePlayers(
        opComp1,
        opComp2,
        setContComp1,
        setContComp2,
        "PC1",
        "PC2"
      );
    }
  }, [setOpJogador, opComp1, opComp2]);

  const camparePlayers = (
    a: number,
    b: number,
    setA: (prev: any) => void,
    setB: (prev: any) => void,
    op1: string,
    op2: string
  ) => {
    if ((a === 0 && b === 2) || (a === 1 && b === 0) || (a === 2 && b === 1)) {
      setA((prev: number) => prev + 1);
      // const newRodada = rodadas.concat([`${op1} venceu`]);
      setRodadas([`${op1} venceu de ${op2}`]);
      console.log("vim no A");
    }

    if ((b === 0 && a === 2) || (b === 1 && a === 0) || (b === 2 && a === 1)) {
      setB((prev: number) => prev + 1);
      // const newRodada = rodadas.concat([`${op2} venceu`]);
      setRodadas([`${op2} venceu de ${op1}`]);
      console.log("vim no B");
    }
  };

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
          PC 1:
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
          PC 2:
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

      {rodadas.length > 0 && (
        <>
          <Divider />
          <Box3>
            {rodadas.map((rod) => (
              <ul>
                <li>{rod}</li>
              </ul>
            ))}
          </Box3>
        </>
      )}
    </Box>
  );
}

export default App;
