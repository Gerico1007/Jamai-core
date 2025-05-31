import React from 'react';
import NaturalLanguageInput from './zones/NaturalLanguageInput';
import AbcNotationEditor from './zones/AbcNotationEditor';
import MusicRenderer from './zones/MusicRenderer';
import AgentChatBox from './zones/AgentChatBox';
import AgentSelectorSidebar from './zones/AgentSelectorSidebar';
import './JamaiPortal.css';

// ♠️ Nyro: Ritual scaffold for the 5-zone JAMAI portal UI
const JamaiPortal: React.FC = () => {
  return (
    <div className="jamai-portal-root">
      <div className="jamai-portal-main">
        <div className="zone zone-nl-input">
          <NaturalLanguageInput />
        </div>
        <div className="zone zone-abc-editor">
          <AbcNotationEditor />
        </div>
        <div className="zone zone-music-renderer">
          <MusicRenderer />
        </div>
        <div className="zone zone-agent-chat">
          <AgentChatBox />
        </div>
      </div>
      <div className="zone zone-agent-sidebar">
        <AgentSelectorSidebar />
      </div>
    </div>
  );
};

export default JamaiPortal;
