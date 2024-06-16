import { Box } from "@mui/material";

type MainProps = {
  children: React.ReactNode;
};

export const MainPage = ({ children }: MainProps) => {
  return <Box>{children}</Box>;
};
