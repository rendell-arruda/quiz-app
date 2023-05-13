import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes/index.jsx';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
