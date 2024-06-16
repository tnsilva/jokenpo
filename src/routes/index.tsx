import { Navigate, Route, Routes } from "react-router-dom";
import Jokenpo from "../pages/Jokenpo";
import Pontuacoes from "../pages/Pontuacoes";
import HistoricoPartidas from "../pages/HistoricoPartidas";
import RegrasDoJogo from "../pages/RegrasDoJogo";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Jokenpo />} />
      <Route path="/pontuacoes" element={<Pontuacoes />} />
      <Route path="/historico" element={<HistoricoPartidas />} />
      <Route path="/regras" element={<RegrasDoJogo />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
