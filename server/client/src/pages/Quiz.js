import React, { useState } from 'react';

export default function Quiz() {
    const questions = [
        {
            questionText: 'Which STI is affectionately known as "the clap"??',
            answerOptions: [
                { answerText: 'Hepatitis', isCorrect: false },
                { answerText: 'Shigella', isCorrect: false },
                { answerText: 'Gonorrhoea', isCorrect: true }
            ],
        },
        {
            questionText: 'What is the name given to a sexual fetish for cheating?',
            answerOptions: [
                { answerText: 'Edging', isCorrect: false },
                { answerText: 'Cuckolding', isCorrect: true },
                { answerText: 'Switching', isCorrect: false }
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className="quiz_body bg-secondary text-white">
            <div className='quiz_app bg-secondary'>
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
