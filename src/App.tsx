import { BrowserRouter, Routes } from "react-router-dom";
import { useRoutes } from "./routes/useRoutes";

function App() {
  const ROUTES = useRoutes();

  return (
    <BrowserRouter>
      <Routes>{ROUTES}</Routes>
    </BrowserRouter>
  );
}

export default App;
