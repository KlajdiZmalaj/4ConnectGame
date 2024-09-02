import { useGameStateContext } from "../context/GameState";

export default ({ columnData, columnIndex }) => {
  const { isPlayerOne, handleColumnClick } = useGameStateContext();

  return (
    <div
      onClick={() => handleColumnClick(columnIndex)}
      className={`gameBoard-column${isPlayerOne ? " playerOne" : " playerTwo"}`}
    >
      {columnData.map((socketData, index) => {
        return <div key={index} className={`gameBoard-socket ${socketData}`}></div>;
      })}
    </div>
  );
};
