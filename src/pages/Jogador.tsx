import { BoxApp, Btn } from "../styles/styles";

interface JogadorProps {
  bgBox1: string;
  jogar: (numb: number) => Promise<void>;
}
export const Jogador = ({ bgBox1, jogar }: JogadorProps) => {
  return (
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
    </BoxApp>
  );
};
