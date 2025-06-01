import React, { useState, useEffect } from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { useAria } from 'react-aria';
import '@reach/dialog/styles.css';
import './DocumentationManager.css';

const DocumentationManager = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [guides, setGuides] = useState({});
  const { buttonProps, dialogProps } = useAria();

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const response = await fetch('/api/docs');
        const data = await response.json();
        setGuides(data);
      } catch (error) {
        console.error('Failed to fetch guides:', error);
      }
    };
    fetchGuides();
  }, []);

  const fallbackGuides = {
    ComposerChat: {
      title: 'Using ComposerChat',
      content: (
        <>
          <h2>ComposerChat Guide</h2>
          <p>Type commands like <code>"play softly"</code> to adjust dynamics or <code>"add C major chord"</code> to modify the score.</p>
          <ul>
            <li><strong>Emotional Commands</strong>: Use words like "sad," "joyful" to influence the mood.</li>
            <li><strong>Musical Terms</strong>: Supports chords (e.g., "Cmaj7"), dynamics (e.g., "piano"), and tempo (e.g., "120 bpm").</li>
          </ul>
        </>
      ),
    },
    MusicianSelector: {
      title: 'Selecting Musicians',
      content: (
        <>
          <h2>MusicianSelector Guide</h2>
          <p>Choose virtual musicians (e.g., GuitarAgent, VocalAgent) to customize your ensemble.</p>
          <ul>
            <li><strong>Instrument Selection</strong>: Pick from violin, piano, etc.</li>
            <li><strong>Style</strong>: Apply styles like baroque or jazz.</li>
          </ul>
        </>
      ),
    },
    DeveloperDocs: {
      title: 'API and Plugin Guide',
      content: (
        <>
          <h2>Developer Guide</h2>
          <p>Use the <code>/partition</code> endpoint to fetch ABC scores or <code>/edit/measure</code> to modify specific measures.</p>
          <p>Create MuseScore plugins in QML/JavaScript for custom dynamics.</p>
        </>
      ),
    },
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const currentGuide = guides[section] || fallbackGuides[section] || { title: 'Help', content: <p>No guide available for this section.</p> };

  return (
    <div className="documentation-manager">
      <button
        {...buttonProps}
        aria-label={`Open help for ${section}`}
        onClick={handleOpen}
        className="help-button"
      >
        Help
      </button>
      <DialogOverlay isOpen={isOpen} onDismiss={handleClose}>
        <DialogContent {...dialogProps} aria-label={currentGuide.title}>
          <h1>{currentGuide.title}</h1>
          {currentGuide.content}
          <button
            {...buttonProps}
            aria-label="Close help dialog"
            onClick={handleClose}
            className="close-button"
          >
            Close
          </button>
        </DialogContent>
      </DialogOverlay>
    </div>
  );
};

export default DocumentationManager;
