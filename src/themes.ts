import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "medium",
      },
    },
  },
  typography: {
    button: {
      textTransform: "initial",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "medium",
      },
    },
    MuiTable: {
      defaultProps: {
        color: "#c1c1c1"
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: 'inherit',
          color: '#c1c1c1'
        }
      }
    }
  },
  typography: {
    allVariants: {
      color: "#c1c1c1",
    },
    button: {
      textTransform: "initial",
    },
  },
});

export { lightTheme, darkTheme };
