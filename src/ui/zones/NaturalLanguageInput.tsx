import React, { useState } from 'react';
// ♠️ Nyro: Ritual zone 1 — Natural Language Input Panel
// Allows user to enter composition, lyrics, emotion cues

const NaturalLanguageInput: React.FC = () => {
  const [text, setText] = useState('Describe your music, lyrics, or emotion...');
  return (
    <div>
      <label htmlFor="nl-input" style={{ fontWeight: 600, color: '#FFD700' }}>🗣️ Natural Language Input</label>
      <textarea
        id="nl-input"
        value={text}
        onChange={e => setText(e.target.value)}
        rows={4}
        style={{ width: '100%', borderRadius: 8, marginTop: 8, padding: 8, background: '#23272f', color: '#fff', fontSize: 16 }}
      />
    </div>
  );
};
export default NaturalLanguageInput;
