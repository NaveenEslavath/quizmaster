// src/components/Game.js

import React, { useState } from 'react';
import QRCode from './QRCode';
import QuestionDisplay from './QuestionDisplay';

const questions = [
    { question: "What is the capital of Japan?", options: ["A) Beijing", "B) Seoul", "C) Tokyo", "D) Bangkok"], answer: "C" },
    { question: "Which planet is known as the Red Planet?", options: ["A) Venus", "B) Mars", "C) Jupiter", "D) Saturn"], answer: "B" },
    { question: "Who wrote the play 'Romeo and Juliet'?", options: ["A) Charles Dickens", "B) William Shakespeare", "C) Mark Twain", "D) Jane Austen"], answer: "B" },
    { question: "What is the largest mammal in the world?", options: ["A) African Elephant", "B) Blue Whale", "C) Giraffe", "D) Great White Shark"], answer: "B" },
    { question: "In which year did the Titanic sink?", options: ["A) 1910", "B) 1912", "C) 1914", "D) 1916"], answer: "B" },
    { question: "What is the chemical symbol for gold?", options: ["A) Au", "B) Ag", "C) Pb", "D) Fe"], answer: "A" },
    { question: "Who painted the Mona Lisa?", options: ["A) Vincent van Gogh", "B) Pablo Picasso", "C) Leonardo da Vinci", "D) Claude Monet"], answer: "C" },
    { question: "What is the smallest prime number?", options: ["A) 0", "B) 1", "C) 2", "D) 3"], answer: "C" },
    { question: "Which gas is most abundant in the Earth's atmosphere?", options: ["A) Oxygen", "B) Carbon Dioxide", "C) Nitrogen", "D) Hydrogen"], answer: "C" },
    { question: "What is the main ingredient in guacamole?", options: ["A) Tomato", "B) Avocado", "C) Onion", "D) Pepper"], answer: "B" },
];

function Game({ playerName, setScore }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [playerAnswer, setPlayerAnswer] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [score, setScoreInternal] = useState(0); // Track score

    const handleAnswerSubmit = () => {
        if (playerAnswer === questions[currentQuestionIndex].answer) {
            setFeedback("Correct!");
            setScoreInternal(prev => prev + 1); // Increment score
        } else {
            setFeedback("Wrong answer!");
        }
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prev) => prev + 1);
        setPlayerAnswer(null); // Reset player answer for the next question
        setFeedback('');
    };

    const handleHome = () => {
        setScore(score); // Set final score before going home
        window.location.reload(); // Reloads the page
    };

    return (
        <div className="App">
            <QRCode />
            <h2>Welcome, {playerName}!</h2>
            <div className="question-container">
                {currentQuestionIndex < questions.length ? (
                    <QuestionDisplay 
                        question={questions[currentQuestionIndex]} 
                        playerAnswer={playerAnswer} 
                        setPlayerAnswer={setPlayerAnswer} 
                        handleAnswerSubmit={handleAnswerSubmit} 
                        feedback={feedback}
                    />
                ) : (
                    <div>
                        <h2>Game Over! Thanks for playing!</h2>
                        <h3>Your Score: {score}/{questions.length}</h3>
                        <button onClick={handleHome}>Home</button>
                    </div>
                )}
            </div>
            {currentQuestionIndex < questions.length && (
                <>
                    <button onClick={handleAnswerSubmit}>Submit Answer</button>
                    <button onClick={handleNextQuestion}>Next Question</button>
                </>
            )}
        </div>
    );
}

export default Game;