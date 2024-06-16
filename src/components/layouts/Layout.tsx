import { Stack } from "@mui/material";
import { Header } from "./Header";
import { MainPage } from "./Main";
import { Footer } from "./Footer";
import { useTheme } from "../../contexts";

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  const { darkMode } = useTheme();
  console.log("Mode: ", darkMode);
  return (
    <Stack
      m={0}
      p={0}
      sx={{ background: darkMode ? "black" : "white", height: "100vh" }}
    >
      <Header />
      <MainPage>{children}</MainPage>
      <Footer />
    </Stack>
  );
};
