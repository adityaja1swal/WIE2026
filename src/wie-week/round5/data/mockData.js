/* ── Round 5 — The Cypher Trail — Mock Data ─────────────────────────────── */

// ── Among Us–style avatar colors for each crewmate ──
const COLORS = {
  1: '#3ed94e', // green
  2: '#f17d2a', // orange
  3: '#1d9bf0', // blue
  4: '#e23636', // red  (the impostor!)
  5: '#d9d926', // yellow
};

// ── Crewmate roster ──
export const CREWMATES = [
  { id: 1, name: 'Crewmate 1', displayName: 'James Carter', role: 'Captain', color: COLORS[1], suspicious: false },
  { id: 2, name: 'Crewmate 2', displayName: 'Lena Okafor', role: 'Engineer', color: COLORS[2], suspicious: false },
  { id: 3, name: 'Crewmate 3', displayName: 'Raj Malhotra', role: 'Medic', color: COLORS[3], suspicious: false },
  { id: 4, name: 'Crewmate 4', displayName: 'Viktor Kozlov', role: 'Security Officer', color: COLORS[4], suspicious: true },
  { id: 5, name: 'Crewmate 5', displayName: 'Mei-Lin Chen', role: 'Navigator', color: COLORS[5], suspicious: false },
];

// ── File / folder metadata shown in the explorer ──
export const FILE_FOLDERS = [
  { key: 'taskHistory', name: 'Task History', type: 'File Folder', size: '—', dateModified: '2-06-2026 11:05 PM' },
  { key: 'personalProfile', name: 'Personal Profile', type: 'File Folder', size: '—', dateModified: '2-06-2026 11:05 PM' },
  { key: 'messageHistory', name: 'Message History', type: 'File Folder', size: '—', dateModified: '2-06-2026 11:05 PM' },
  { key: 'accessLog', name: 'Access Log', type: 'File Folder', size: '—', dateModified: '2-06-2026 11:05 PM' },
];

/* ═══════════════════════════════════════════════════════════════════════════
   TASK HISTORY
   ═══════════════════════════════════════════════════════════════════════════ */

const TASK_HISTORY = {
  1: [
    { id: 'T-101', task: 'Calibrate Navigation System', location: 'Bridge', status: 'Completed', date: '2026-06-01' },
    { id: 'T-102', task: 'Run Diagnostic on Engines', location: 'Engine Room', status: 'Completed', date: '2026-06-01' },
    { id: 'T-103', task: 'Submit Crew Roster Report', location: 'Admin', status: 'Completed', date: '2026-06-02' },
    { id: 'T-104', task: 'Inspect Shield Generator', location: 'Shields', status: 'Pending', date: '2026-06-02' },
  ],
  2: [
    { id: 'T-201', task: 'Repair Wiring Panel A', location: 'Electrical', status: 'Completed', date: '2026-06-01' },
    { id: 'T-202', task: 'Replace O2 Filters', location: 'O2 Room', status: 'Completed', date: '2026-06-01' },
    { id: 'T-203', task: 'Override Thruster Bypass Protocol', location: 'Engine Room', status: 'Completed', date: '2026-06-02' },
    { id: 'T-204', task: 'Reboot Communication Array', location: 'Comms', status: 'Pending', date: '2026-06-02' },
  ],
  3: [
    { id: 'T-301', task: 'Distribute Medical Supplies', location: 'MedBay', status: 'Completed', date: '2026-06-01' },
    { id: 'T-302', task: 'Conduct Crew Health Screening', location: 'MedBay', status: 'Completed', date: '2026-06-01' },
    { id: 'T-303', task: 'Update Medical Records', location: 'Admin', status: 'Completed', date: '2026-06-02' },
    { id: 'T-304', task: 'Inspect Specimen Samples', location: 'Laboratory', status: 'Pending', date: '2026-06-02' },
  ],
  4: [
    { id: 'T-401', task: 'Patrol Lower Deck', location: 'Lower Engine', status: 'Completed', date: '2026-06-01', suspicious: false },
    { id: 'T-402', task: 'Upload Virus to Mainframe', location: 'Admin', status: 'Completed', date: '2026-06-01', suspicious: true },
    { id: 'T-403', task: 'Override Security Locks', location: 'Weapons', status: 'Completed', date: '2026-06-02', suspicious: true },
    { id: 'T-404', task: 'Disable Emergency Alarm', location: 'Reactor', status: 'Completed', date: '2026-06-02', suspicious: true },
  ],
  5: [
    { id: 'T-501', task: 'Chart Star Course', location: 'Navigation', status: 'Completed', date: '2026-06-01' },
    { id: 'T-502', task: 'Log Asteroid Coordinates', location: 'Navigation', status: 'Completed', date: '2026-06-01' },
    { id: 'T-503', task: 'Calibrate Telescope Array', location: 'Navigation', status: 'Completed', date: '2026-06-02' },
    { id: 'T-504', task: 'Submit Flight Path Report', location: 'Admin', status: 'Pending', date: '2026-06-02' },
    { id: 'T-505', task: 'Purge Outdated Navigation Backups', location: 'Navigation', status: 'Completed', date: '2026-06-02' },
  ],
};

/* ═══════════════════════════════════════════════════════════════════════════
   PERSONAL PROFILES
   ═══════════════════════════════════════════════════════════════════════════ */

const PERSONAL_PROFILES = {
  1: {
    crewId: 'CRW-0421',
    dateJoined: '2024-03-15',
    gender: 'Male',
    bloodType: 'O+',
    rank: 'Captain',
    homePlanet: 'Earth — Houston Sector',
    level: 17,
    xp: 1260,
    maxXp: 2000,
    rating: 1000,
    ratingPct: 'TOP 50%',
    certification: 'Level-5 Command Authority',
    gameStats: { gamesPlayed: 142, wins: 98, tasksCompleted: 1847 },
  },
  2: {
    crewId: 'CRW-0587',
    dateJoined: '2024-06-22',
    gender: 'Female',
    bloodType: 'A-',
    rank: 'Engineer',
    homePlanet: 'Mars — Olympus Colony',
    level: 14,
    xp: 920,
    maxXp: 1500,
    rating: 880,
    ratingPct: 'TOP 60%',
    certification: 'Class-3 Engineering License',
    gameStats: { gamesPlayed: 110, wins: 72, tasksCompleted: 1350 },
  },
  3: {
    crewId: 'CRW-0293',
    dateJoined: '2024-01-10',
    gender: 'Male',
    bloodType: 'B+',
    rank: 'Medic',
    homePlanet: 'Earth — Mumbai Sector',
    level: 15,
    xp: 1100,
    maxXp: 1800,
    rating: 950,
    ratingPct: 'TOP 55%',
    certification: 'Xeno-Biology Medical License',
    gameStats: { gamesPlayed: 128, wins: 85, tasksCompleted: 1620 },
  },
  4: {
    crewId: 'CRW-0666',
    dateJoined: '2025-11-01',
    gender: 'Male',
    bloodType: 'AB-',
    rank: 'Security Officer',
    homePlanet: 'Unknown — CLASSIFIED',
    level: 9,
    xp: 450,
    maxXp: 1000,
    rating: 320,
    ratingPct: 'TOP 90%',
    certification: 'UNAUTHORIZED — FORGED CREDENTIALS',
    certSuspicious: true,
    gameStats: { gamesPlayed: 34, wins: 31, tasksCompleted: 98 },
  },
  5: {
    crewId: 'CRW-0815',
    dateJoined: '2024-09-03',
    gender: 'Female',
    bloodType: 'O-',
    rank: 'Navigator',
    homePlanet: 'Titan — Kraken Station',
    level: 13,
    xp: 780,
    maxXp: 1400,
    rating: 820,
    ratingPct: 'TOP 62%',
    certification: 'Stellar Navigation Grade-4',
    gameStats: { gamesPlayed: 96, wins: 63, tasksCompleted: 1180 },
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   MESSAGE HISTORY
   ═══════════════════════════════════════════════════════════════════════════ */

const ALL_CREW_GC_MESSAGES = [
  { sender: 'Crewmate 1', senderId: 1, text: 'Reminder: mandatory briefing at 0800.', time: '12:02' },
  { sender: 'Crewmate 2', senderId: 2, text: 'I will be there.', time: '12:05' },
  { sender: 'Crewmate 4', senderId: 4, text: 'Copy that, Captain.', time: '12:10' },
  { sender: 'Crewmate 3', senderId: 3, text: 'On my way.', time: '12:15' },
  { sender: 'Crewmate 5', senderId: 5, text: 'See you all at the bridge.', time: '12:20' },
  { sender: 'Crewmate 1', senderId: 1, text: 'Has anyone seen the admin logs from last night?', time: '13:00' },
  { sender: 'Crewmate 4', senderId: 4, text: 'No, why? Is something missing?', time: '13:05' },
  { sender: 'Crewmate 2', senderId: 2, text: 'I was in electrical, I did not check.', time: '13:10' },
  { sender: 'Crewmate 5', senderId: 5, text: 'I was updating star charts, did not notice anything.', time: '13:12' },
  { sender: 'Crewmate 3', senderId: 3, text: 'Everything was fine when I was in the MedBay.', time: '13:15' },
  { sender: 'Crewmate 1', senderId: 1, text: 'Keep your eyes open, something feels off.', time: '13:20' },
  { sender: 'Crewmate 5', senderId: 5, text: 'Wait, did the lights just flicker for anyone else?', time: '14:15' },
  { sender: 'Crewmate 2', senderId: 2, text: 'Yeah, just saw that in O2 as well. Let me check the power grid.', time: '14:16' },
  { sender: 'Crewmate 3', senderId: 3, text: 'I hope it’s just a glitch, we don’t need a blackout right now.', time: '14:18' },
  { sender: 'Crewmate 4', senderId: 4, text: 'I’m heading down to reactor to see if everything is stable.', time: '14:20' },
  { sender: 'Crewmate 1', senderId: 1, text: 'Good idea. Keep communications open.', time: '14:22' },
  { sender: 'Crewmate 2', senderId: 2, text: 'Power grid shows a minor surge, but nothing critical.', time: '14:25' },
  { sender: 'Crewmate 4', senderId: 4, text: 'Reactor is stable. No signs of tampering.', time: '14:30' },
  { sender: 'Crewmate 5', senderId: 5, text: 'Alright, back to normal then. I’m almost done with the navigation calibration.', time: '14:32' },
  { sender: 'Crewmate 1', senderId: 1, text: 'Has anyone seen Crewmate 3 recently?', time: '15:10' },
  { sender: 'Crewmate 2', senderId: 2, text: 'He was in MedBay earlier, I think he was doing health screenings.', time: '15:12' },
  { sender: 'Crewmate 3', senderId: 3, text: 'I’m still here, Captain. Just finished updating the medical records.', time: '15:15' },
  { sender: 'Crewmate 1', senderId: 1, text: 'Good. Just making sure everyone is accounted for.', time: '15:18' },
  { sender: 'Crewmate 4', senderId: 4, text: 'I’m moving from Weapons to Admin for my next patrol.', time: '15:25' },
  { sender: 'Crewmate 5', senderId: 5, text: 'Hey, speaking of Admin... I just noticed a strange file export in the logs.', time: '16:05' },
  { sender: 'Crewmate 1', senderId: 1, text: 'What kind of file export?', time: '16:07' },
  { sender: 'Crewmate 5', senderId: 5, text: 'It looks like the crew manifest was downloaded. Over 2GB of data.', time: '16:10' },
  { sender: 'Crewmate 4', senderId: 4, text: 'That’s weird. Who would need the whole manifest?', time: '16:12' },
  { sender: 'Crewmate 2', senderId: 2, text: 'Could it be an automated backup?', time: '16:15' },
  { sender: 'Crewmate 1', senderId: 1, text: 'I didn’t authorize any backups today. Everyone, stay alert.', time: '16:20' },
  { sender: 'Crewmate 3', senderId: 3, text: 'This is getting creepy. I’m locking the MedBay doors.', time: '16:22' },
  { sender: 'Crewmate 4', senderId: 4, text: 'Don’t panic, I’ll check the security cameras.', time: '16:25' },
  { sender: 'Crewmate 5', senderId: 5, text: 'Let us know if you find anything.', time: '16:28' },
  { sender: 'Crewmate 3', senderId: 3, text: 'Crewmate 5, how did you know the export was exactly 2GB? That is very specific.', time: '16:35' },
  { sender: 'Crewmate 5', senderId: 5, text: 'I saw it in the logs. Anyone can check, it is right there.', time: '16:38' },
  { sender: 'Crewmate 4', senderId: 4, text: 'She has a point though. Why were you checking the admin logs at all?', time: '16:40' },
  { sender: 'Crewmate 1', senderId: 1, text: 'Everyone calm down. We investigate properly, no accusations without proof.', time: '16:42' },
  { sender: 'Crewmate 4', senderId: 4, text: 'Crewmate 2, you were near electrical during the surge. That seems suspicious.', time: '16:50' },
  { sender: 'Crewmate 2', senderId: 2, text: 'I was fixing the wiring panel. That is literally my assigned task.', time: '16:52' },
  { sender: 'Crewmate 3', senderId: 3, text: 'I can confirm, I saw Crewmate 2 in electrical earlier.', time: '16:54' },
  { sender: 'Crewmate 5', senderId: 5, text: 'What about the weapons manifest access? Someone pulled that file at midnight.', time: '17:01' },
  { sender: 'Crewmate 1', senderId: 1, text: 'Who accessed weapons?', time: '17:03' },
  { sender: 'Crewmate 3', senderId: 3, text: 'I was reviewing emergency protocols. The medic needs to know where the weapons are stored in case of a breach.', time: '17:05' },
  { sender: 'Crewmate 4', senderId: 4, text: 'That sounds like a stretch to me.', time: '17:07' },
  { sender: 'Crewmate 2', senderId: 2, text: 'Viktor you have been deflecting this whole time. What were YOU doing at 3am?', time: '17:10' },
  { sender: 'Crewmate 4', senderId: 4, text: 'Patrolling. It is my job as Security Officer.', time: '17:12' },
  { sender: 'Crewmate 5', senderId: 5, text: 'The logs show you in Admin at 3:45am. That is not a patrol route.', time: '17:15' },
  { sender: 'Crewmate 4', senderId: 4, text: 'I got a false alarm alert. I went to check it out.', time: '17:17' },
  { sender: 'Crewmate 1', senderId: 1, text: 'There is no record of any alert at that time.', time: '17:20' },
];

// Helper to get chat for a specific contact (filters GC messages for what they typed)
function get1on1Chat(idA, idB) {
  return ALL_CREW_GC_MESSAGES.filter(msg => msg.senderId === idB);
}

// Dynamically generate message history for a specific crewmate
function generateMessageHistoryForPOV(crewmateId) {
  const history = {
    conversations: [],
    chatMessages: {} // now a map of contactId -> messages array
  };

  // Add ALL CREW GC
  history.conversations.push({
    contactId: 0,
    contactName: 'ALL CREW GC',
    lastMsg: ALL_CREW_GC_MESSAGES[ALL_CREW_GC_MESSAGES.length - 1]?.text || '',
    time: ALL_CREW_GC_MESSAGES[ALL_CREW_GC_MESSAGES.length - 1]?.time || '00:00'
  });
  history.chatMessages[0] = ALL_CREW_GC_MESSAGES;

  // Add all other crewmates
  CREWMATES.forEach(otherCrew => {
    if (otherCrew.id !== crewmateId) {
      const messages = get1on1Chat(crewmateId, otherCrew.id);
      const lastMsgObj = messages[messages.length - 1];

      history.conversations.push({
        contactId: otherCrew.id,
        contactName: otherCrew.name,
        lastMsg: lastMsgObj ? lastMsgObj.text : 'No recent messages',
        time: lastMsgObj ? lastMsgObj.time : ''
      });
      history.chatMessages[otherCrew.id] = messages;
    }
  });

  return history;
}

/* ═══════════════════════════════════════════════════════════════════════════
   ACCESS LOGS
   ═══════════════════════════════════════════════════════════════════════════ */

const ACCESS_LOGS = {
  1: [
    { timestamp: '2026-06-01 08:00:12', action: 'LOGIN', location: 'Bridge', detail: 'Standard authentication', level: 'INFO' },
    { timestamp: '2026-06-01 09:15:33', action: 'FILE_ACCESS', location: 'Admin', detail: 'Opened crew roster file', level: 'INFO' },
    { timestamp: '2026-06-01 14:22:01', action: 'SYSTEM_CHECK', location: 'Bridge', detail: 'Routine diagnostics passed', level: 'INFO' },
    { timestamp: '2026-06-02 07:55:44', action: 'LOGIN', location: 'Bridge', detail: 'Standard authentication', level: 'INFO' },
    { timestamp: '2026-06-01 02:44:10', action: 'FILE_ACCESS', location: 'Admin', detail: 'Reviewed crew manifest — routine captain audit', level: 'WARNING' },
  ],
  2: [
    { timestamp: '2026-06-01 08:10:05', action: 'LOGIN', location: 'Electrical', detail: 'Standard authentication', level: 'INFO' },
    { timestamp: '2026-06-01 10:30:20', action: 'REPAIR_LOG', location: 'Electrical', detail: 'Wiring Panel A — repaired', level: 'INFO' },
    { timestamp: '2026-06-01 15:45:12', action: 'FILE_ACCESS', location: 'Comms', detail: 'Accessed comm array specs', level: 'INFO' },
    { timestamp: '2026-06-02 08:05:30', action: 'LOGIN', location: 'Engine Room', detail: 'Standard authentication', level: 'INFO' },
    { timestamp: '2026-06-01 03:58:44', action: 'SYSTEM_ACCESS', location: 'Electrical', detail: 'Emergency panel override — power fluctuation response', level: 'WARNING' },
  ],
  3: [
    { timestamp: '2026-06-01 07:45:00', action: 'LOGIN', location: 'MedBay', detail: 'Standard authentication', level: 'INFO' },
    { timestamp: '2026-06-01 11:20:15', action: 'FILE_ACCESS', location: 'MedBay', detail: 'Updated medical records', level: 'INFO' },
    { timestamp: '2026-06-01 16:00:45', action: 'SCAN_COMPLETE', location: 'Laboratory', detail: 'Specimen analysis complete', level: 'INFO' },
    { timestamp: '2026-06-02 07:50:10', action: 'LOGIN', location: 'MedBay', detail: 'Standard authentication', level: 'INFO' },
    { timestamp: '2026-06-01 23:58:02', action: 'FILE_ACCESS', location: 'Weapons', detail: 'Accessed weapons manifest — reason unlogged', level: 'WARNING' },
  ],
  4: [
    { timestamp: '2026-06-01 03:12:44', action: 'LOGIN', location: 'Lower Engine', detail: 'Standard authentication', level: 'INFO', suspicious: false },
    { timestamp: '2026-06-01 03:45:09', action: 'UNAUTHORIZED', location: 'Admin', detail: 'Accessed restricted database', level: 'CRITICAL', suspicious: true },
    { timestamp: '2026-06-01 03:46:02', action: 'FILE_DELETE', location: 'Admin', detail: 'Deleted file: engineer_lena_personal_comms.zip — 340MB', level: 'CRITICAL', suspicious: true },
    { timestamp: '2026-06-01 04:02:33', action: 'DATA_EXPORT', location: 'Admin', detail: 'Exported crew manifest — 2.4GB', level: 'WARNING', suspicious: true },
    { timestamp: '2026-06-01 04:18:57', action: 'CAMERA_DISABLE', location: 'Deck 7', detail: 'Disabled surveillance feed', level: 'CRITICAL', suspicious: true },
    { timestamp: '2026-06-01 04:30:22', action: 'FILE_DELETE', location: 'Security', detail: 'Purged access log backups', level: 'CRITICAL', suspicious: true },
    { timestamp: '2026-06-01 04:55:10', action: 'FORCE_LOGOUT', location: 'System', detail: 'Session terminated abnormally', level: 'WARNING', suspicious: true },
  ],
  5: [
    { timestamp: '2026-06-01 08:20:00', action: 'LOGIN', location: 'Navigation', detail: 'Standard authentication', level: 'INFO' },
    { timestamp: '2026-06-01 12:10:30', action: 'FILE_ACCESS', location: 'Navigation', detail: 'Updated star charts', level: 'INFO' },
    { timestamp: '2026-06-01 17:30:05', action: 'COURSE_UPDATE', location: 'Navigation', detail: 'Applied course correction', level: 'INFO' },
    { timestamp: '2026-06-02 08:15:22', action: 'LOGIN', location: 'Navigation', detail: 'Standard authentication', level: 'INFO' },
    { timestamp: '2026-06-01 04:08:33', action: 'FILE_ACCESS', location: 'Admin', detail: 'Accessed admin terminal — unscheduled', level: 'WARNING' },
    { timestamp: '2026-06-01 04:11:20', action: 'DATA_VIEW', location: 'Admin', detail: 'Viewed crew manifest export log', level: 'WARNING' },
  ],
};

/* ═══════════════════════════════════════════════════════════════════════════
   PUBLIC DATA GETTERS
   ═══════════════════════════════════════════════════════════════════════════ */

export function getTaskHistory(crewmateId) { return TASK_HISTORY[crewmateId] ?? []; }
export function getPersonalProfile(crewmateId) { return PERSONAL_PROFILES[crewmateId] ?? {}; }
export function getMessageHistory(crewmateId) { return generateMessageHistoryForPOV(crewmateId); }
export function getAccessLog(crewmateId) { return ACCESS_LOGS[crewmateId] ?? []; }
