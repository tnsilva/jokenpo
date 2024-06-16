import {
  AppBar,
  Box,
  Stack,
  Switch as MuiSwitch,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "../../../contexts/ThemeContext";

export const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();

  const style = {
    textDecoration: "none",
    color: "#fff",
  };

  return (
    <Stack flexDirection="row">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/" style={style}>
              Jokenpo
            </Link>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button color="inherit" component={Link} to="/scores">
              Pontuações
            </Button>
            <Button color="inherit" component={Link} to="/history">
              Histórico
            </Button>
            <Button color="inherit" component={Link} to="/rules">
              Regras
            </Button>
            <MuiSwitch
              checked={darkMode}
              onChange={toggleDarkMode}
              icon={<Brightness4Icon />}
              checkedIcon={<Brightness7Icon />}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Stack>
  );
};
