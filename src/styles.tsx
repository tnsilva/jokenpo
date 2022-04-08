import styled from "@emotion/styled";
import { Button, Box, Paper } from "@mui/material";

interface BgProps {
  bg: string;
}

export const Btn = styled(Button)`
  display: flex;
  border-radius: 50%;
  margin: 2 auto;
  padding: 2px;
  background: white;

  &:hover {
    background: blue;
  }
`;


export const BoxApp = styled((props : any) => (
  <Box sx = {{ bgcolor: { className: 'bg' } }} {...props} />
))`
  display: flex;
  // border: 0.5px solid black;
  border-radius: 5%;
  margin: 15px 0;
  padding: 6px;
  justify-content: space-around;
  background: ${props => props.bgcolor};
 
`;

export const Box2 = styled(Box)`
  display: flex;
  border: 0.5px solid black;
  border-radius: 5%;
  margin: 15px 0;
  padding: 6px;
  justify-content: space-around;
`;

export const Box3 = styled(Box)`
  // display: flex;
  border: 0.5px solid black;
  border-radius: 5%;
  margin: 15px 0;
  padding: 6px;
`;

export const Box4 = styled(Box)`
  // display: flex;
  border-radius: 5%;
  margin: 15px 0;
  padding: 6px;
`;
