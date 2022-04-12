import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { AppRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Home>
        <AppRoutes />
      </Home>
    </BrowserRouter>
  );
}

export default App;
