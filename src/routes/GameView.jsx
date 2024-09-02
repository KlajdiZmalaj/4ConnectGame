import { useEffect } from "react";
import GameBoardColumn from "../components/GameBoardColumn";
import { useGameStateContext } from "../context/GameState";
import FireWork from "../components/FireWork";

const GameView = () => {
  const { gameBoardData, winner } = useGameStateContext();

  return (
    <div className="GameView">
      {winner && <FireWork />}
      <div className="gameBoard">
        {gameBoardData.map((columnData, i) => {
          return <GameBoardColumn columnIndex={i} key={i} columnData={columnData} />;
        })}
      </div>
    </div>
  );
};

export default GameView;
