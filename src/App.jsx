import GameStateProvider from "./context/GameState";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import GameView from "./routes/GameView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GameView />,
  },
]);

function App() {
  return (
    <GameStateProvider>
      <RouterProvider router={router} />
    </GameStateProvider>
  );
}

export default App;
