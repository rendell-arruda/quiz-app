import React from 'react';
import { useContext } from 'react';

import { QuizContext } from '../../context/quiz';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);
  return (
    <div>
      <h1>Quiz de Programação</h1>
      Questions
    </div>
  );
};

export default Question;
