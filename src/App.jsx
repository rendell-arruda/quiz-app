import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes/index.jsx';
import GlobalStyle from './styles/global';
import { QuizProvider } from './context/quiz';

function App() {
  return (
    <BrowserRouter>
      <QuizProvider>
        <GlobalStyle />
        <RoutesApp />
      </QuizProvider>
    </BrowserRouter>
  );
}

export default App;
