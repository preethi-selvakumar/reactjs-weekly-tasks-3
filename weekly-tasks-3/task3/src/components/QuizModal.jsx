import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default function QuizModal({ quizData, onClose }) {
    const [selectedOption, setSelectedOption] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleSubmit = () => {
        if (!selectedOption) {
            alert('Please select an option.');
            return;
        }
        setIsCorrect(selectedOption === quizData.answer);
        setSubmitted(true);
    };

    return ReactDOM.createPortal(
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>Quiz: {quizData.quizId}</h3>
                <p>{quizData.question}</p>
                <ul className="quiz-options">
                    {quizData.options.map((opt, idx) => (
                        <li key={idx}>
                            <label>
                                <input
                                    type="radio"
                                    name="quiz-option"
                                    value={opt}
                                    checked={selectedOption === opt}
                                    onChange={() => setSelectedOption(opt)}
                                />
                                {opt}
                            </label>
                        </li>
                    ))}
                </ul>

                {!submitted ? (
                    <button className="btn" onClick={handleSubmit}>Submit</button>
                ) : (
                    <p>{isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</p>
                )}
                <button className="btn" onClick={onClose}>Close Quiz</button>
            </div>
        </div>,
        document.body
    );
}
