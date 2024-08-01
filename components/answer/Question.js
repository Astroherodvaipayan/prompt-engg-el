// src/components/Question.js
import React, { useState } from 'react';
import TypingEffect from './TypingEffect';

const Question = ({ question, questionId, handleChange }) => {
    return (
        <div className="question">
            <TypingEffect steps={[question, 1000]} />
            <input
                type="text"
                onChange={(e) => handleChange(questionId, e.target.value)}
            />
        </div>
    );
};

export default Question;
