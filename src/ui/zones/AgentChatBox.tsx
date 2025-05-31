import React, { useState } from 'react';
// 🗨️ Ritual zone 4 — Chat Box with Agent Prompt
// Agents respond to user input, prompt-based modification

const agents = [
  { key: 'nyro', name: 'Nyro', glyph: '♠️' },
  { key: 'aureon', name: 'Aureon', glyph: '🌿' },
  { key: 'jeremyai', name: 'JeremyAI', glyph: '🎵' },
  { key: 'ava8', name: 'Ava8', glyph: '🎨' },
  { key: 'jamai', name: 'Jamai', glyph: '🎸' },
];

const AgentChatBox: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [activeAgent, setActiveAgent] = useState('nyro');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', content: input }]);
    // Simple agent echo
    setTimeout(() => {
      setMessages(msgs => [...msgs, { sender: activeAgent, content: `(${agents.find(a => a.key === activeAgent)?.glyph}) Ritual echo: ${input}` }]);
    }, 400);
    setInput('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 1, overflowY: 'auto', marginBottom: 8 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ margin: '0.3rem 0', color: msg.sender === 'user' ? '#FFD700' : '#6A5ACD' }}>
            <b>{msg.sender === 'user' ? 'You' : agents.find(a => a.key === msg.sender)?.name}:</b> {msg.content}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <select value={activeAgent} onChange={e => setActiveAgent(e.target.value)} style={{ borderRadius: 4, padding: 2 }}>
          {agents.map(a => <option key={a.key} value={a.key}>{a.glyph} {a.name}</option>)}
        </select>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
          placeholder="Ask an agent..."
          style={{ flex: 1, borderRadius: 4, padding: 6, background: '#23272f', color: '#fff' }}
        />
        <button onClick={handleSend} style={{ borderRadius: 6, background: '#FFD700', color: '#23272f', fontWeight: 700, padding: '0.4rem 1.2rem' }}>Send</button>
      </div>
    </div>
  );
};
export default AgentChatBox;
