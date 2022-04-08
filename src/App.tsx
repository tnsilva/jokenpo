import { Typography, Divider, Box, Grid, Paper } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { api } from "./services";
import { Box2, Box4, BoxApp, Btn } from "./styles";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [opJogador, setOpJogador] = useState(0);
  const [opComp1, setOpComp1] = useState(0);
  const [opComp2, setOpComp2] = useState(0);
  const [msg, setMsg] = useState<string>("");
  const [contJog, setContJog] = useState(0);
  const [contComp1, setContComp1] = useState(0);
  const [contComp2, setContComp2] = useState(0);
  const [rodadas, setRodadas] = useState([
    { id: "", jogador: 0, pc1: 0, pc2: 0, rodada: 0 },
  ]);
  const [n, setN] = useState(0);
  const [print, setPrint] = useState(0);
  const [bgBox1, setBgBox1] = useState("#e3e3e3");
  const [bgBox2, setBgBox2] = useState("#e3e3e3");
  const [bgBox3, setBgBox3] = useState("#e3e3e3");

  const prevJog = useRef(0);
  const prevPc1 = useRef(0);
  const prevPc2 = useRef(0);

  const [cores, setCores] = useState(["#e3e3e3", "#32a4a8", "#155052"]);

  useEffect(() => {
    if (n > 0) {
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

      prevJog.current = contJog;
      prevPc1.current = contComp1;
      prevPc2.current = contComp2;

      setPrint((prev) => prev + 1);
    }
  }, [opJogador, opComp1, opComp2, n]);

  useEffect(() => {
    if (print > 0) {
      let ptsJog = contJog - prevJog.current;
      let ptsPc1 = contComp1 - prevPc1.current;
      let ptsPc2 = contComp2 - prevPc2.current;
      setRodadas([
        {
          id: uuidv4(),
          rodada: n,
          jogador: ptsJog,
          pc1: ptsPc1,
          pc2: ptsPc2,
        },
        ...rodadas,
      ]);

      ptsJog === 1
        ? setBgBox1(cores[1])
        : ptsJog === 2
        ? setBgBox1(cores[2])
        : setBgBox1(cores[0]);

      ptsPc1 === 1
        ? setBgBox2(cores[1])
        : ptsPc1 === 2
        ? setBgBox2(cores[2])
        : setBgBox2(cores[0]);

      ptsPc2 === 1
        ? setBgBox3(cores[1])
        : ptsPc2 === 2
        ? setBgBox3(cores[2])
        : setBgBox3(cores[0]);
    }
  }, [print]);

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
  };

  const jogar = (numb: number) => {
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

    setOpJogador(numb);

    setN((prev) => prev + 1);
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
          <BoxApp bgcolor={bgBox1}>
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
          <Box>
            PC 1:
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
                {opComp1}
              </BoxApp>
            )}
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box>
            PC 2:
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

                {opComp2}
              </BoxApp>
            )}
          </Box>
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
              rod.rodada > 0 && (
                <Box4 key={rod.id}>
                  <Paper>
                    <Typography variant="h6">Rodada: {rod.rodada}</Typography>
                    <Box>Jogador: {rod.jogador}</Box>
                    <Box>PC1: {rod.pc1}</Box>
                    <Box>PC2: {rod.pc2}</Box>
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
