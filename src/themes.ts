import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    allVariants: {
      color: '#c1c1c1'
    }
  }
});

export { lightTheme, darkTheme };
