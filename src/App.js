
import React, { useState } from 'react';
import Game from './components/Game';
import PlayerJoin from './components/PlayerJoin';
import './App.css';
function App() {
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [playerName, setPlayerName] = useState(''); // State for player name
    const [score, setScore] = useState(0); // State for score

    return (
        <div className="App">
            {!isGameStarted ? (
                <PlayerJoin setIsGameStarted={setIsGameStarted} setPlayerName={setPlayerName} />
            ) : (
                <Game playerName={playerName} setScore={setScore} /> 
            )}
            {/* Display score on home page */}
            {score > 0 && (
                <div>
                    <h2>Welcome back, {playerName}!</h2>
                    <h3>Your last score was: {score}/{10}</h3> 
                </div>
            )}
        </div>
    );
}

export default App;