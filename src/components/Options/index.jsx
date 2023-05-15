import React, { useContext } from 'react';
import { OptionsContainer } from './style.js';
import { QuizContext } from '../../context/quiz.jsx';

export const Options = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <OptionsContainer onClick={() => selectOption()}>
      <p>{option}</p>
    </OptionsContainer>
  );
};
