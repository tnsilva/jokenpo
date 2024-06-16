import { Navigate, Route, Routes } from "react-router-dom";
import Jokenpo from "../pages/Jokenpo";
import Scores from "../pages/Scores";
import History from "../pages/History";
import Rules from "../pages/Rules";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Jokenpo />} />
      <Route path="/scores" element={<Scores />} />
      <Route path="/history" element={<History />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
