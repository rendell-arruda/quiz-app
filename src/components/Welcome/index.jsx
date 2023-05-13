import React from 'react';
import Quiz from '../../assets/img/quiz.svg';
import { ButtonInitial } from './style';

export default function Welcome() {
  return (
    <div>
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar a jogar.</p>
      <ButtonInitial type="button">Jogar</ButtonInitial>
      <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  );
}
