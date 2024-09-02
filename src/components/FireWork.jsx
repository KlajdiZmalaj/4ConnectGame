import { useGameStateContext } from "../context/GameState";

export default () => {
  const { winner, handleResetGameClick } = useGameStateContext();
  return (
    <div className="fireWorkWrapper">
      <div className="winMessage">
        <h1>Player {winner.player ? " One" : "Two"} Won</h1>
        <h2>{winner.message}</h2>
        <button onClick={handleResetGameClick}> Reset Game 🚀 </button>
      </div>
      <div class="firework"></div>
      <div class="firework"></div>
      <div class="firework"></div>
    </div>
  );
};
