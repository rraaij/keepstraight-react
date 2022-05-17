import GameSetup from "./components/GameSetup";
import GameContextProvider from "./store/game-context";
import Game from "./components/Game";

function App() {
  return (
    <GameContextProvider>
      <GameSetup />
      <Game />
    </GameContextProvider>
  );
}

export default App;
