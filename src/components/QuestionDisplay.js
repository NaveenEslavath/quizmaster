// src/components/QuestionDisplay.js

import React from 'react';

function QuestionDisplay({ question, playerAnswer, setPlayerAnswer, handleAnswerSubmit, feedback }) {
    return (
        <div className="question-container">
            <h2>{question.question}</h2>
            <div className="options">
                {question.options.map((option) => (
                    <div key={option}>
                        <input 
                            type="radio" 
                            value={option.charAt(0)} 
                            checked={playerAnswer === option.charAt(0)} 
                            onChange={(e) => setPlayerAnswer(e.target.value)} 
                            disabled={playerAnswer !== null} // Disable other options if one is selected
                        />
                        {option}
                    </div>
                ))}
            </div>
            {feedback && <p className="feedback">{feedback}</p>}
        </div>
    );
}

export default QuestionDisplay;