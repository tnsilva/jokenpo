import { Grid, Box, Divider, Alert } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Comp1, Comp2, Jogador, Placar, Rodadas } from "../pages";
import { api } from "../services";

export const Content = () => {
  const [rodadas, setRodadas] = useState([
    { id: "", jogador: 0, pc1: 0, pc2: 0, rodada: 0 },
  ]);
  const [opJogador, setOpJogador] = useState(null);
  const [opComp1, setOpComp1] = useState(null);
  const [opComp2, setOpComp2] = useState(null);
  const [msg, setMsg] = useState("");
  const [contJog, setContJog] = useState(0);
  const [contComp1, setContComp1] = useState(0);
  const [contComp2, setContComp2] = useState(0);
  const [n, setN] = useState(0);
  const [print, setPrint] = useState(0);
  const [bgBox1, setBgBox1] = useState("#e3e3e3");
  const [bgBox2, setBgBox2] = useState("#e3e3e3");
  const [bgBox3, setBgBox3] = useState("#e3e3e3");

  const prevJog = useRef(0);
  const prevPc1 = useRef(0);
  const prevPc2 = useRef(0);

  const [cores, setCores] = useState(["#FF8A8A", "#32a4a8", "#155052"]);

  useEffect(() => {
    console.log("Vim no effect1");
    if (n > 0) {
      if (opJogador === opComp1 && opComp1 === opComp2) {
        setMsg("Empate");
      } else {
        setMsg("");
        comparePlayers(
          opJogador,
          opComp1,
          setContJog,
          setContComp1,
          "Jogador",
          "PC1"
        );

        comparePlayers(
          opJogador,
          opComp2,
          setContJog,
          setContComp2,
          "Jogador",
          "PC2"
        );
        comparePlayers(
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
    console.log("Vim no effect2");
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

  const comparePlayers = (
    a: number,
    b: number,
    setA: (prev: any) => void,
    setB: (prev: any) => void,
    op1: string,
    op2: string
  ) => {
    console.log("Vim no compare");

    if ((a === 0 && b === 2) || (a === 1 && b === 0) || (a === 2 && b === 1)) {
      setA((prev: number) => prev + 1);
    }

    if ((b === 0 && a === 2) || (b === 1 && a === 0) || (b === 2 && a === 1)) {
      setB((prev: number) => prev + 1);
    }
  };

  const jogar = async (numb: number) => {
    console.log("Vim no jogar");

    await api
      .get("")
      .then((response) => {
        setOpComp1(response.data[0]);
        setOpComp2(response.data[1]);
      })
      .catch((error) => {
        console.log(error);
      });

    setOpJogador(numb);

    setN((prev) => prev + 1);
  };

  return (
    <Box sx={{ p: 2 }}>
      {msg.length > 0 && <Alert>{msg}</Alert>}

      <Grid container direction="row" spacing={1}>
        <Grid item xs={12} md={6}>
          {opComp1 === null || opComp2 === null ? (
            <Alert>Clique em um dos botões abaixo para começar!</Alert>
          ) : (
            <Box sx={{ p: 1 }}>Jogador</Box>
          )}

          <Jogador bgBox1={bgBox1} jogar={jogar} />
        </Grid>

        <Grid item xs={6} md={3}>
          <Box>
            <Box sx={{ p: 1 }}>PC 1:</Box>

            <Comp1 opComp1={opComp1} bgBox2={bgBox2} />
          </Box>
        </Grid>

        <Grid item xs={6} md={3}>
          <Box>
            <Box sx={{ p: 1 }}>PC 2:</Box>
            <Comp2 bgBox3={bgBox3} opComp2={opComp2} />
          </Box>
        </Grid>
      </Grid>

      <Divider />
      <Placar contJog={contJog} contComp1={contComp1} contComp2={contComp2} />

      <Divider />
      <Rodadas rodadas={rodadas} />
    </Box>
  );
};
