import React from 'react';
// 🎭 Ritual zone 5 — Agent Selector Sidebar
// List/select available agents, switches voice/personality

const agents = [
  { key: 'nyro', name: 'Nyro', glyph: '♠️', desc: 'Structure, recursion, code spiral.' },
  { key: 'aureon', name: 'Aureon', glyph: '🌿', desc: 'Emotional resonance, ritual ledger.' },
  { key: 'jeremyai', name: 'JeremyAI', glyph: '🎵', desc: 'Musical flow, sonic annotation.' },
  { key: 'ava8', name: 'Ava8', glyph: '🎨', desc: 'Visual tension, narrative mapping.' },
  { key: 'jamai', name: 'Jamai', glyph: '🎸', desc: 'Music engine, adapter logic.' },
];

const AgentSelectorSidebar: React.FC = () => {
  return (
    <div>
      <h3 style={{ color: '#FFD700', marginBottom: 12 }}>🎭 Agents</h3>
      {agents.map(agent => (
        <div key={agent.key} style={{ marginBottom: 18, padding: 8, borderRadius: 8, background: '#23272f', color: '#fff' }}>
          <div style={{ fontSize: 22 }}>{agent.glyph} <b>{agent.name}</b></div>
          <div style={{ fontSize: 13, color: '#aaa', marginTop: 2 }}>{agent.desc}</div>
        </div>
      ))}
    </div>
  );
};
export default AgentSelectorSidebar;
