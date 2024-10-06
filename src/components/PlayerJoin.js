// src/components/PlayerJoin.js

import React, { useState } from 'react';

function PlayerJoin({ setIsGameStarted, setPlayerName }) {
    const [name, setName] = useState('');

    const handleJoin = () => {
        if (name) {
            setPlayerName(name); // Set player name in parent component
            setIsGameStarted(true);
        }
    };

    return (
        <div className="App">
            <h1>Join the Game</h1>
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <button onClick={handleJoin}>Join</button>
        </div>
    );
}

export default PlayerJoin;