import React from 'react';
import { useContext } from 'react';

import { QuizContext } from '../../context/quiz';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);

  const currentQuestion = quizState.questions[quizState.currentQuestion];
  return (
    <div id="question">
      <h1>Quiz de Programação</h1>
      <p>
        Pergunta de {quizState.currentQuestion + 1} de{' '}
        {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        <p>Opções</p>
      </div>
      <button>Continuar</button>
    </div>
  );
};

export default Question;
