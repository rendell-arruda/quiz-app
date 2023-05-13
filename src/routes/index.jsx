import { Routes, Route } from 'react-router-dom';
import Welcome from '../components/Welcome';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
}
