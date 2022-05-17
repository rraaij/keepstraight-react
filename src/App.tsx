import GameSetup from "./components/GameSetup";
import GameContextProvider from "./store/game-context";

function App() {
  return (
    <GameContextProvider>
      <GameSetup />
    </GameContextProvider>
  );
}

export default App;
