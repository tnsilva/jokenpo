import { Box } from "@mui/material";
import { Content, Footer, Header, MainPage } from "../components";

export const Home = () => {
  return (
    <Box>
      <Header />
      <MainPage>
        <Content />
      </MainPage>
      <Footer />
    </Box>
  );
};
