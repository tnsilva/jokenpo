import {
  AppBar,
  Box,
  Stack,
  Switch as MuiSwitch,
  Toolbar,
  Typography,
  Grid,
  MenuItem,
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
            <Grid container justifyContent="center">
              <Grid item>
                <MenuItem onClick={() => navigate("/pontuacoes")}>
                  Pontuações
                </MenuItem>
              </Grid>
              <Grid item>
                <MenuItem onClick={() => navigate("/historico")}>
                  Histórico
                </MenuItem>
              </Grid>
              <Grid item>
                <MenuItem onClick={() => navigate("/regras")}>Regras</MenuItem>
              </Grid>
            </Grid>
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
