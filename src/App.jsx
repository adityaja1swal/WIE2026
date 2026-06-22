import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './wie-week/Landing/LandingPage';
import Round1 from './wie-week/round1/round1';
import Round2 from './wie-week/round2/round2';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/round1" element={<Round1 />} />
        <Route path="/round2" element={<Round2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

