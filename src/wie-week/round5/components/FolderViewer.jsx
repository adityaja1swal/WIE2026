import { useState, useEffect, useRef } from 'react';
import { CREWMATES, FILE_FOLDERS, getTaskHistory, getPersonalProfile, getMessageHistory, getAccessLog } from '../data/mockData';
import TaskHistoryView from './viewers/TaskHistoryView';
import PersonalProfileView from './viewers/PersonalProfileView';
import MessageHistoryView from './viewers/MessageHistoryView';
import AccessLogView from './viewers/AccessLogView';
import AmongUsIcon from './AmongUsIcon';
import '../styles/FolderViewer.css';
import '../styles/Viewers.css';

const REACTOR_CODE = '6430';
const COUNTDOWN_SECONDS = 3 * 60; // 3 minutes

const VIEWER_LABELS = {
  taskHistory: 'TASK HISTORY',
  personalProfile: 'CREW PROFILE',
  messageHistory: 'MESSAGE HISTORY',
  accessLog: 'ACCESS LOG',
};

const HINTS = [
  { label: 'DIGIT 1', text: "Viktor's Crew ID is CRW-0666 — what is the 4th character?" },
  { label: 'DIGIT 2', text: "Count the suspicious (⚠) tasks in Viktor's Task History." },
  { label: 'DIGIT 3', text: "Check Viktor's Access Log — what hour did the UNAUTHORIZED entry occur? (0_:12:44)" },
  { label: 'DIGIT 4', text: "Viktor's rating is TOP 90% — what is the last digit of 90?" },
];

const EVIDENCE_HINTS = [
  { file: 'TASK HISTORY', tip: 'Look for incomplete or suspicious tasks.' },
  { file: 'CREW PROFILE', tip: 'Check Crew ID, rating, and personal details.' },
  { file: 'MESSAGE HISTORY', tip: 'Review private messages for anything incriminating.' },
  { file: 'ACCESS LOG', tip: 'Unauthorised entries reveal suspicious activity.' },
];

function getViewerData(crewmateId, folderKey) {
  switch (folderKey) {
    case 'taskHistory': return getTaskHistory(crewmateId);
    case 'personalProfile': return getPersonalProfile(crewmateId);
    case 'messageHistory': return getMessageHistory(crewmateId);
    case 'accessLog': return getAccessLog(crewmateId);
    default: return null;
  }
}

/* ── Reactor Screen ────────────────────────────────────────────────────────── */
function ReactorScreen({ onSuccess, onGameOver }) {
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_SECONDS);
  const [digits, setDigits] = useState(['', '', '', '']);
  const [codeStatus, setStatus] = useState('idle'); // idle | ok | err
  const [showHints, setShowHints] = useState(false);
  const inputRefs = useRef([]);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timerRef.current); onGameOver(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [onGameOver]);

  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const secs = String(timeLeft % 60).padStart(2, '0');
  const danger = timeLeft <= 60;

  const handleDigit = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...digits];
    next[i] = val;
    setDigits(next);
    setStatus('idle');
    if (val && i < 3) inputRefs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !digits[i] && i > 0) {
      inputRefs.current[i - 1]?.focus();
    }
    if (e.key === 'Enter') handleSubmit();
  };

  const handleSubmit = () => {
    const code = digits.join('');
    if (code.length < 4) return;
    if (code === REACTOR_CODE) {
      clearInterval(timerRef.current);
      setStatus('ok');
      setTimeout(onSuccess, 1200);
    } else {
      setStatus('err');
      setTimeout(() => { setStatus('idle'); setDigits(['', '', '', '']); inputRefs.current[0]?.focus(); }, 1500);
    }
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 300,
      background: '#060008',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: '24px',
      fontFamily: "'Press Start 2P', monospace",
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,0,0,0.03) 2px, rgba(255,0,0,0.03) 4px)',
      }} />

      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        border: `3px solid ${danger ? '#ff0000' : '#cc0000'}`,
        boxShadow: `inset 0 0 80px rgba(255,0,0,${danger ? 0.25 : 0.12})`,
        animation: danger ? 'reactor-pulse 0.5s ease-in-out infinite alternate' : 'reactor-pulse 1.5s ease-in-out infinite alternate',
      }} />

      <style>{`
        @keyframes reactor-pulse {
          from { opacity: 0.6; }
          to   { opacity: 1; }
        }
        @keyframes reactor-shake {
          0%,100% { transform: translateX(0); }
          25%      { transform: translateX(-6px); }
          75%      { transform: translateX(6px); }
        }
      `}</style>

      <div style={{ fontSize: '0.5rem', letterSpacing: '0.4em', color: '#ff3333', opacity: 0.7 }}>
        ⚠ CRITICAL SYSTEM ALERT ⚠
      </div>

      <div style={{ fontSize: 'clamp(0.9rem, 3vw, 1.6rem)', color: '#ff2222', textShadow: '0 0 30px rgba(255,34,34,0.8)', textAlign: 'center', lineHeight: 1.5 }}>
        REACTOR<br />MELTDOWN
      </div>

      <div style={{
        fontSize: 'clamp(2rem, 8vw, 4rem)',
        color: danger ? '#ff0000' : '#ff6666',
        textShadow: `0 0 40px ${danger ? 'rgba(255,0,0,0.9)' : 'rgba(255,100,100,0.6)'}`,
        letterSpacing: '0.1em',
        animation: danger ? 'reactor-pulse 0.5s ease-in-out infinite alternate' : 'none',
      }}>
        {mins}:{secs}
      </div>

      <div style={{ fontSize: '0.45rem', color: '#cc4444', letterSpacing: '0.2em', textAlign: 'center', lineHeight: 2 }}>
        ENTER OVERRIDE CODE TO PREVENT MELTDOWN
      </div>

      <div style={{ display: 'flex', gap: '12px' }}>
        {digits.map((d, i) => (
          <input
            key={i}
            ref={el => inputRefs.current[i] = el}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={d}
            onChange={e => handleDigit(i, e.target.value)}
            onKeyDown={e => handleKeyDown(i, e)}
            style={{
              width: '56px', height: '72px',
              background: 'rgba(255,0,0,0.08)',
              border: `2px solid ${codeStatus === 'ok' ? '#00ff88' :
                codeStatus === 'err' ? '#ff0000' :
                  'rgba(255,60,60,0.5)'
                }`,
              borderRadius: '8px',
              color: codeStatus === 'ok' ? '#00ff88' : codeStatus === 'err' ? '#ff4444' : '#ff8888',
              fontSize: '1.8rem',
              textAlign: 'center',
              fontFamily: "'Press Start 2P', monospace",
              outline: 'none',
              boxShadow: codeStatus === 'ok' ? '0 0 20px rgba(0,255,136,0.5)' :
                codeStatus === 'err' ? '0 0 20px rgba(255,0,0,0.5)' : 'none',
              animation: codeStatus === 'err' ? 'reactor-shake 0.3s ease' : 'none',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
          />
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={digits.join('').length < 4 || codeStatus !== 'idle'}
        style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '0.55rem',
          padding: '12px 32px',
          background: digits.join('').length === 4 ? 'rgba(255,50,50,0.2)' : 'rgba(100,100,100,0.1)',
          border: `2px solid ${digits.join('').length === 4 ? '#ff4444' : '#444'}`,
          borderRadius: '8px',
          color: digits.join('').length === 4 ? '#ff6666' : '#555',
          cursor: digits.join('').length === 4 ? 'pointer' : 'not-allowed',
          transition: 'all 0.2s',
          letterSpacing: '0.1em',
        }}
      >
        ENGAGE OVERRIDE
      </button>

      {codeStatus === 'err' && (
        <div style={{ fontSize: '0.45rem', color: '#ff3333', letterSpacing: '0.15em' }}>
          ✗ INCORRECT — ACCESS DENIED
        </div>
      )}
      {codeStatus === 'ok' && (
        <div style={{ fontSize: '0.45rem', color: '#00ff88', letterSpacing: '0.15em' }}>
          ✓ CODE ACCEPTED — STABILISING...
        </div>
      )}

      <button
        onClick={() => setShowHints(h => !h)}
        style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '0.4rem',
          background: 'transparent',
          border: '1px solid rgba(255,80,80,0.3)',
          borderRadius: '6px',
          color: 'rgba(255,100,100,0.6)',
          padding: '6px 14px',
          cursor: 'pointer',
          letterSpacing: '0.1em',
        }}
      >
        {showHints ? 'HIDE HINTS' : 'SHOW HINTS'}
      </button>

      {showHints && (
        <div style={{
          background: 'rgba(255,0,0,0.06)',
          border: '1px solid rgba(255,60,60,0.2)',
          borderRadius: '10px',
          padding: '16px 20px',
          maxWidth: '480px',
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          {HINTS.map((h, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.4rem', color: '#ff4444', flexShrink: 0, marginTop: '2px' }}>
                {h.label}
              </span>
              <span style={{ fontSize: '0.7rem', color: '#cc8888', lineHeight: 1.6, fontFamily: 'Space Grotesk, sans-serif' }}>
                {h.text}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Game Over Screen ─────────────────────────────────────────────────────── */
function GameOverScreen({ onReset }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 400,
      background: '#000',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: '20px',
      fontFamily: "'Press Start 2P', monospace",
    }}>
      <div style={{ fontSize: 'clamp(0.6rem, 2vw, 1rem)', letterSpacing: '0.4em', color: '#440000' }}>
        ⚠ REACTOR MELTDOWN ⚠
      </div>
      <div style={{ fontSize: 'clamp(1.5rem, 6vw, 3rem)', color: '#ff0000', textShadow: '0 0 40px rgba(255,0,0,0.8)', textAlign: 'center', lineHeight: 1.5 }}>
        GAME<br />OVER
      </div>
      <div style={{ fontSize: '0.55rem', color: '#660000', letterSpacing: '0.2em', textAlign: 'center', lineHeight: 2 }}>
        THE SHIP HAS BEEN DESTROYED.<br />ALL CREW LOST.
      </div>
      <button
        onClick={onReset}
        style={{
          marginTop: '16px',
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '0.5rem',
          padding: '12px 28px',
          background: 'rgba(255,0,0,0.12)',
          border: '2px solid #ff0000',
          borderRadius: '8px',
          color: '#ff4444',
          cursor: 'pointer',
          letterSpacing: '0.1em',
          transition: 'all 0.2s',
        }}
        onMouseOver={e => e.currentTarget.style.background = 'rgba(255,0,0,0.25)'}
        onMouseOut={e => e.currentTarget.style.background = 'rgba(255,0,0,0.12)'}
      >
        ↺ TRY AGAIN
      </button>
    </div>
  );
}

/* ── Ship Saved Screen ────────────────────────────────────────────────────── */
function ShipSavedScreen({ onContinue }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 400,
      background: '#000a04',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: '20px',
      fontFamily: "'Press Start 2P', monospace",
      animation: 'fv-fade-in 0.6s ease',
    }}>
      <div style={{ fontSize: '3rem' }}>🛸</div>
      <div style={{ fontSize: 'clamp(0.5rem, 1.5vw, 0.8rem)', letterSpacing: '0.4em', color: '#00ff88', opacity: 0.7 }}>
        REACTOR STABILISED
      </div>
      <div style={{ fontSize: 'clamp(1.2rem, 4vw, 2rem)', color: '#00ff88', textShadow: '0 0 30px rgba(0,255,136,0.7)', textAlign: 'center', lineHeight: 1.5 }}>
        SHIP<br />SAVED
      </div>
      <div style={{ fontSize: '0.55rem', color: '#00bb66', letterSpacing: '0.15em', textAlign: 'center', lineHeight: 2, maxWidth: '400px' }}>
        OVERRIDE ACCEPTED.<br />VIKTOR KOZLOV HAS BEEN EJECTED.<br />THE CREW SURVIVES.
      </div>
      <button
        onClick={onContinue}
        style={{
          marginTop: '16px',
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '0.5rem',
          padding: '12px 28px',
          background: '#00ff88',
          border: 'none',
          borderRadius: '8px',
          color: '#001a0a',
          cursor: 'pointer',
          letterSpacing: '0.1em',
          boxShadow: '0 0 24px rgba(0,255,136,0.5)',
          transition: 'transform 0.15s',
        }}
        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        CONTINUE MISSION →
      </button>
    </div>
  );
}

/* ── Main FolderViewer ────────────────────────────────────────────────────── */
export default function FolderViewer({ crewmate, initialFolder, onBack, onRoundComplete }) {
  const [selectedCrewmate, setSelectedCrewmate] = useState(crewmate);
  const [activeFolder, setActiveFolder] = useState(initialFolder?.key || 'taskHistory');
  const [wrongFlash, setWrongFlash] = useState(false);
  const [phase, setPhase] = useState('investigate'); // investigate | reactor | gameover | saved
  const [showEvidencePrompt, setShowEvidencePrompt] = useState(false);
  const [evidenceText, setEvidenceText] = useState('');

  const viewerData = getViewerData(selectedCrewmate.id, activeFolder);

  const handleAccuse = () => {
    setShowEvidencePrompt(true);
    setEvidenceText('');
  };

  const handleEvidenceSubmit = () => {
    setShowEvidencePrompt(false);
    if (selectedCrewmate.suspicious) {
      setPhase('reactor');
    } else {
      setWrongFlash(true);
      setTimeout(() => setWrongFlash(false), 600);
    }
  };

  const handleEvidenceCancel = () => {
    setShowEvidencePrompt(false);
  };

  const handleGameOver = () => setPhase('gameover');
  const handleCodeSuccess = () => setPhase('saved');
  const handleReset = () => {
    setPhase('investigate');
    setSelectedCrewmate(crewmate);
    setActiveFolder(initialFolder?.key || 'taskHistory');
  };

  if (phase === 'reactor') {
    return <ReactorScreen onSuccess={handleCodeSuccess} onGameOver={handleGameOver} />;
  }
  if (phase === 'gameover') {
    return <GameOverScreen onReset={handleReset} />;
  }
  if (phase === 'saved') {
    return <ShipSavedScreen onContinue={onRoundComplete} />;
  }

  return (
    <div className="fv-root">
      {/* ── Sidebar ── */}
      <aside className="fv-sidebar">
        <div className="fv-sidebar-title">THE CYPHER TRAIL</div>
        <div className="fv-sidebar-sub">CREW DATABASE</div>

        <div className="fv-crew-list-title">CREW PROFILES</div>
        <ul className="fv-crew-list">
          {CREWMATES.map(cm => (
            <li key={cm.id}>
              <button
                className={`fv-crew-item ${cm.id === selectedCrewmate.id ? 'active' : ''}`}
                onClick={() => setSelectedCrewmate(cm)}
              >
                <div className="fv-crew-avatar">
                  <AmongUsIcon color={cm.color} />
                </div>
                <span>{cm.name}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="fv-crew-list-title">FILES IN THIS PROFILE</div>
        <ul className="fv-files-list">
          {FILE_FOLDERS.map(f => (
            <li key={f.key}>
              <button
                className={`fv-file-item ${activeFolder === f.key ? 'active' : ''}`}
                onClick={() => setActiveFolder(f.key)}
              >
                {f.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Evidence hints */}
        <div style={{ marginTop: '8px', padding: '0 4px' }}>
          <div className="fv-crew-list-title">LOOK FOR EVIDENCE</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
            {EVIDENCE_HINTS.map((h, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'flex-start',
                padding: '8px 10px',
                background: 'rgba(0, 212, 255, 0.04)',
                border: '1px solid rgba(0, 212, 255, 0.1)',
                borderRadius: '8px',
              }}>
                <span style={{ fontSize: '0.85rem', flexShrink: 0, marginTop: '1px' }}>{h.icon}</span>
                <div>
                  <div style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: '0.35rem',
                    color: '#00d4ff',
                    letterSpacing: '0.08em',
                    marginBottom: '3px',
                  }}>
                    {h.file}
                  </div>
                  <div style={{
                    fontSize: '0.65rem',
                    color: '#5a6c7f',
                    lineHeight: 1.5,
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}>
                    {h.tip}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fv-ai-alert">
          <div className="fv-ai-alert-title">AI System Alert</div>
          <div className="fv-ai-alert-text">
            Inconsistencies detected in multiple records.<br />
            Proceed with caution.
          </div>
        </div>
      </aside>

      {/* ── Main content ── */}
      <div className="fv-main">
        <div className="fv-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button className="fv-back-btn" onClick={onBack}>←</button>
            <div className="fv-header-left">
              <h2>{VIEWER_LABELS[activeFolder] || 'VIEWER'}</h2>
              <div className="fv-header-crewname">{selectedCrewmate.name}</div>
            </div>
          </div>
          <div className="fv-header-right">
            12:25<br />3 July 2026
          </div>
        </div>

        <div className="fv-content">
          {activeFolder === 'taskHistory' && <TaskHistoryView data={viewerData} />}
          {activeFolder === 'personalProfile' && <PersonalProfileView data={viewerData} crewmate={selectedCrewmate} />}
          {activeFolder === 'messageHistory' && <MessageHistoryView data={viewerData} crewmate={selectedCrewmate} />}
          {activeFolder === 'accessLog' && <AccessLogView data={viewerData} />}
        </div>

        <div className="fv-accuse-bar">
          <button className="fv-accuse-btn" onClick={handleAccuse}>
            ACCUSE {selectedCrewmate.name.toUpperCase()}
          </button>
        </div>
      </div>

      {/* ── Evidence Prompt ── */}
      {showEvidencePrompt && (
        <div className="fv-success-overlay">
          <div className="fv-evidence-card">
            <h2 className="fv-evidence-title">PROVIDE EVIDENCE</h2>
            <p className="fv-evidence-text">
              Why do you suspect <strong>{selectedCrewmate.name}</strong>?
              Enter the evidence supporting your accusation.
            </p>

            <textarea
              className="fv-evidence-input"
              value={evidenceText}
              onChange={e => setEvidenceText(e.target.value)}
              placeholder="E.g., They accessed the restricted database at 03:45 without authorisation..."
            />
            <div className="fv-evidence-actions">
              <button className="fv-evidence-btn cancel" onClick={handleEvidenceCancel}>
                CANCEL
              </button>
              <button
                className="fv-evidence-btn submit"
                onClick={handleEvidenceSubmit}
                disabled={!evidenceText.trim()}
                style={{
                  opacity: evidenceText.trim() ? 1 : 0.5,
                  cursor: evidenceText.trim() ? 'pointer' : 'not-allowed',
                }}
              >
                SUBMIT ACCUSATION
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Wrong accusation flash */}
      {wrongFlash && <div className="fv-wrong-flash" />}
    </div>
  );
}
