import './App.css';
import { useState } from "react";



function Scoreboard() {

  
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });


   
  function handlePlusClick() {
    //The first bug was here when we try to update the score value {player.score++;} its increment without change it with usestate
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }
function handleFirstNameChange(e) {
  // No changes
  setPlayer({
    ...player,
    firstName: e.target.value,
  });
}

function handleLastNameChange(e) {
  // {...player,} was not used so its dont have the prev data 
  setPlayer({
    ...player,
    lastName: e.target.value,
});
}

return (
  <>
    <label>
      Score: <b>{player.score}</b>{" "}
      <button onClick={handlePlusClick }>+1</button>
    </label>
    <label>
      First name:
      <input value={player.firstName} onChange={handleFirstNameChange} />
    </label>
    <label>
      Last name:
      <input value={player.lastName} onChange={handleLastNameChange} />
</label>
</>
);
}


function App() {
  return (
    <div className="App">
      <Scoreboard/>
    </div>
  );
}

export default App;
