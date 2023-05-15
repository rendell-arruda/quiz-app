import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import './style.js';
import { Btn, DesafioContainer } from './style.js';
import { Options } from '../Options/index.jsx';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);

  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = option => {
    dispatch({
      type: 'CHECK-ANSWER',
      payload: { answer: currentQuestion.answer, option }
    });
  };

  return (
    <DesafioContainer id="question">
      <h1>Quiz de Química</h1>
      <p>
        Pergunta de {quizState.currentQuestion + 1} de{' '}
        {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map(option => (
          <Options
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <Btn onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}>
          Continuar
        </Btn>
      )}
    </DesafioContainer>
  );
};

export default Question;
