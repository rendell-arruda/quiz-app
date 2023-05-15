import React, { useContext } from 'react';
import './options.css';
import { QuizContext } from '../../context/quiz.jsx';

export const Options = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div
      className={`options ${
        quizState.answerSelected && option === answer ? 'correct' : ''
      } ${quizState.answerSelected && option !== answer ? 'wrong' : ''} `}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};
