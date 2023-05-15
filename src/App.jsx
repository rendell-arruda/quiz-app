import { useContext, useEffect } from 'react';
import GlobalStyle from './styles/global';

import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome/index.jsx';
import Question from './components/Question/index.jsx';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  //embaralhar as questões
  useEffect(() => {
    dispatch({ type: 'REORDER_QUESTIONS' });
  }, []);

  return (
    <>
      <GlobalStyle />
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Question />}
    </>
  );
}

export default App;
