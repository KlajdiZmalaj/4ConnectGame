import { createContext, useContext, useEffect, useState } from "react";
import { checkWinner, EMPTY_BOARD } from "../../utils";

const DEFAULT = {
  gameBoardData: EMPTY_BOARD,
};
//create context
const GameStateContext = createContext({
  gameBoardData: [],
  isPlayerOne: Boolean,
  handleColumnClick: () => {},
  handleResetGameClick: () => {},
  winner: null,
});
//export as hook
export const useGameStateContext = () => useContext(GameStateContext);

const GameStateProvider = ({ children }) => {
  const [isPlayerOne, setPlayerOne] = useState(true);

  const [gameBoardData, setGameBoardData] = useState(DEFAULT["gameBoardData"]);
  const [winner, setWinner] = useState(null);

  const handleColumnClick = (columnIndex) => {
    console.log(` Player ${isPlayerOne ? "one" : "two"} clicked column ${columnIndex}`);
    const columnData = gameBoardData[columnIndex];
    const emptySlots = columnData.reduce((a, b) => a + (b == null ? 1 : 0), 0);
    const filledSlots = columnData.filter((item) => item === true || item === false) || [];

    const changedGameBoardData = gameBoardData.map((column, index) =>
      index == columnIndex ? [...Array(emptySlots - 1).fill(null), isPlayerOne, ...filledSlots] : column,
    );
    setGameBoardData(changedGameBoardData);
    //change player
    setPlayerOne(!isPlayerOne);
  };

  const handleResetGameClick = () => {
    setWinner(null);
    setGameBoardData(DEFAULT["gameBoardData"]);
  };

  useEffect(() => {
    const winner = checkWinner(gameBoardData);
    if (winner) {
      setWinner(winner);
    }
    //validate Board for winner
    console.log("gameBoardData changed", gameBoardData, winner);
  }, [gameBoardData]);
  return (
    <GameStateContext.Provider value={{ gameBoardData, handleColumnClick, isPlayerOne, winner, handleResetGameClick }}>
      {children}
    </GameStateContext.Provider>
  );
};

export default GameStateProvider;
