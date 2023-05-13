import { useContext } from 'react';
import Quiz from '../../assets/img/quiz.svg';
import { ButtonInitial, WelcomeContainer } from './style';
import { QuizContext } from '../../context/quiz';

export default function Welcome() {
  const { nameApp } = useContext(QuizContext);
  return (
    <WelcomeContainer>
      <h1>{nameApp}</h1>
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar a jogar.</p>
      <ButtonInitial type="button">Jogar</ButtonInitial>
      <img src={Quiz} alt="Inicio do Quiz" />
    </WelcomeContainer>
  );
}