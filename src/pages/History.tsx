import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  CheckCircleOutline,
  HighlightOff,
  RemoveCircleOutline,
} from "@mui/icons-material";
import { usePlayContext } from "../hooks";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  backgroundColor:
    theme.palette.mode === "light" ? theme.palette.grey[200] : "inherit",
}));

const History = () => {
  const { history } = usePlayContext();

  return (
    <Container maxWidth="md" sx={{ pb: 2, height: "100%" }}>
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          Histórico de Rodadas
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Aqui você pode ver o histórico das suas partidas jogadas.
        </Typography>
      </Box>

      {history.length < 1 ? (
        <Typography mt={2}>
          ** Você precisa jogar primeiro. Clique em "Jokenpo"!
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Rodada</StyledTableCell>
                <StyledTableCell>Usuário</StyledTableCell>
                <StyledTableCell>Computador 1</StyledTableCell>
                <StyledTableCell>Computador 2</StyledTableCell>
                <StyledTableCell>Resultado</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {history.map((game, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{game.userChoice}</TableCell>
                  <TableCell>{game.computerChoice1}</TableCell>
                  <TableCell>{game.computerChoice2}</TableCell>
                  <TableCell>
                    {game.result === "win" && (
                      <Tooltip title="Vitória">
                        <IconButton>
                          <CheckCircleOutline color="success" />
                        </IconButton>
                      </Tooltip>
                    )}
                    {game.result === "lose" && (
                      <Tooltip title="Derrota">
                        <IconButton>
                          <HighlightOff color="error" />
                        </IconButton>
                      </Tooltip>
                    )}
                    {game.result === "draw" && (
                      <Tooltip title="Empate">
                        <IconButton>
                          <RemoveCircleOutline color="warning" />
                        </IconButton>
                      </Tooltip>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default History;
