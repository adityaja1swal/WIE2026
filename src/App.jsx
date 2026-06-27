import HackAmongUs from './wie-week/Transition_pages/HackAmongUs';

function App() {
  return <HackAmongUs />;
}

export default App;

/* ── RESTORE WHEN DONE TESTING ──────────────────────────────────────────────
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './wie-week/Landing/LandingPage';
import Round1 from './wie-week/round1/round1';
import Round2 from './wie-week/round2/round2';
import Round3 from './wie-week/round3/round3';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"       element={<LandingPage />} />
        <Route path="/round1" element={<Round1 />} />
        <Route path="/round2" element={<Round2 />} />
        <Route path="/round3" element={<Round3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
──────────────────────────────────────────────────────────────────────────── */

