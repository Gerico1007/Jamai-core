import React, { useState } from 'react';
// ♠️ Nyro: Ritual zone 2 — ABC Notation Editor
// Allows user to view/edit ABC notation, sync with natural language

const AbcNotationEditor: React.FC = () => {
  const [abc, setAbc] = useState('X:1\nT:Untitled\nM:4/4\nK:C\nC D E F | G A B c |');
  return (
    <div>
      <label htmlFor="abc-editor" style={{ fontWeight: 600, color: '#6A5ACD' }}>🎼 ABC Notation Editor</label>
      <textarea
        id="abc-editor"
        value={abc}
        onChange={e => setAbc(e.target.value)}
        rows={6}
        style={{ width: '100%', borderRadius: 8, marginTop: 8, padding: 8, background: '#23272f', color: '#fff', fontFamily: 'monospace', fontSize: 15 }}
      />
    </div>
  );
};
export default AbcNotationEditor;
