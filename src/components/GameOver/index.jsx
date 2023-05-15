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
      <p>Pontuação:x</p>
      <p>Voce acertou y de z perguntas</p>
      <img src={WellDone} alt="Fim do Quiz" />

      <Btn>Reiniciar</Btn>
    </GameOverContainer>
  );
};
