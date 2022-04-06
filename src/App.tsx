import { Typography, Divider, Box, Grid, Paper } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import { api } from "./services";
import { Box2, Box3, Box4, BoxApp, Btn } from "./styles";
import { v4 as uuidv4 } from "uuid";

interface RodadaProps {
  id?: string;
  rodada: number;
  jogador: string;
  pc1: string;
  pc2: string;
}

function App({ id, jogador, pc1, pc2 }: RodadaProps) {
  const [opJogador, setOpJogador] = useState(0);
  const [opComp1, setOpComp1] = useState(0);
  const [opComp2, setOpComp2] = useState(0);
  const [msg, setMsg] = useState<string>("");
  const [contJog, setContJog] = useState(0);
  const [contComp1, setContComp1] = useState(0);
  const [contComp2, setContComp2] = useState(0);
  const [rodadas, setRodadas] = useState<RodadaProps[]>([
    { rodada: 0, jogador: "", pc1: "", pc2: "" },
  ]);
  const [n, setN] = useState(0);

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
  }, [opJogador]);

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
    }

    if ((b === 0 && a === 2) || (b === 1 && a === 0) || (b === 2 && a === 1)) {
      setB((prev: number) => prev + 1);
    }

    setRodadas([
      ...rodadas,
      {
        id: uuidv4(),
        rodada: n,
        jogador: `Jogador: ${contJog} `,
        pc1: `PC1: ${contComp1}`,
        pc2: `PC2: ${contComp2}`,
      },
    ]);

    setN(n + 1);
  };

  const jogar = (n: number) => {
    // await api
    //   .get("")
    //   .then((response) => {
    //     setOpComp1(response.data[0]);
    //     setOpComp2(response.data[1]);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    setOpComp1(Math.floor(Math.random() * 3));
    setOpComp2(Math.floor(Math.random() * 3));

    setOpJogador(n);
  };

  // const atualizaRodada = (a: number, b: number, c: number) => {};

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
          {rodadas.map(
            (rod) =>
              rod.jogador !== "" && (
                <Box4>
                  <Paper key={rod.id}>
                    <Typography variant="h6">Rodada: {rod.rodada}</Typography>
                    <Box>{rod.jogador}</Box>
                    <Box>{rod.pc1}</Box>
                    <Box>{rod.pc2}</Box>
                  </Paper>
                </Box4>
              )
          )}
        </>
      )}
    </Box>
  );
}

export default App;
