import styled from "@emotion/styled";
import { Button, Box } from "@mui/material";

export const Btn = styled(Button)`
  display: flex;
  border-radius: 50%;
  margin: 2 auto;
  padding: 2px;
  // background: white;

  &:hover {
    background: white;
  }
`;

export const BoxApp = styled(Box)`
  display: flex;
  border: 0.5px solid black;
  border-radius: 5%;
  margin: 15px 0;
  padding: 6px;
  justify-content: space-around;
  background: gray;
  color: white;
`;

export const Box2 = styled(Box)`
  display: flex;
  border: 0.5px solid black;
  border-radius: 5%;
  margin: 15px 0;
  padding: 6px;
  justify-content: space-around;
`;
