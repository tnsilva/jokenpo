import { BrowserRouter } from "react-router-dom";
import { PlayProvider } from "./contexts";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Layout } from "./components/layouts/Layout";

function App() {
  return (
    <ThemeProvider>
      <PlayProvider>
        <BrowserRouter>
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </PlayProvider>
    </ThemeProvider>
  );
}

export default App;
