import React, { useContext } from 'react';
import { GameOverContainer } from './style.js';
import { QuizContext } from '../../context/quiz';
import WellDone from '../../assets/img/welldone.svg';
import { Btn } from '../Question/style.js';

export const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <GameOverContainer>
      <h2>Fim de Jogo</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Voce acertou {quizState.score} de {quizState.questions.length} perguntas
      </p>
      <img src={WellDone} alt="Fim do Quiz" />

      <Btn onClick={() => dispatch({ type: 'NEW_GAME' })}>Reiniciar</Btn>
    </GameOverContainer>
  );
};
