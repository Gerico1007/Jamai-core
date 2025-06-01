# Portail Symphonique SpecLang Specification

## Introduction
The Portail Symphonique is an AI-driven platform for real-time music creation. Users interact via a chat interface to compose scores, with virtual musicians interpreting commands emotionally and technically. The system supports score rendering, playback, and export, with multimodal inputs (text, audio, image).

## System Architecture
- **Frontend**: A React.js app with components for score display (ScoreViewer), chat input (ComposerChat), musician selection (MusicianSelector), and playback controls. Uses abcjs for rendering ABC notation and optionally musescore.com for cloud-based scores.
- **Backend**: A FastAPI server processes commands using music21 for score generation and MuseScoreCLI for refinement. Exports scores as ABC, MusicXML, or PDF.
- **Agents**: Virtual musicians (MusicianAgent) generate parts, and EmotionAgent adjusts scores based on emotional inputs (e.g., “play sadly”).
- **Session Management**: Tracks state, logs actions, and replays sessions.
- **Export**: Supports MIDI, MusicXML, PDF, SVG outputs.
- **Multimodality**: Converts audio to MIDI, images to MusicXML, and ensures accessibility.

## User Interface
- **ComposerChat**: Users type commands like “add C major chord” or “play softly.” The system parses these and updates the score.
- **ScoreViewer**: Displays musical scores in real time, with zoom and lyric support.
- **MusicianSelector**: Lets users choose virtual musicians (e.g., violin, piano) and styles (e.g., jazz).
- **PlaybackControls**: Includes play/pause/stop, tempo adjustment, and transposition.
- **DocumentationManager**: Shows in-app help overlays for user and developer guides.
- **LearningModule**: Offers interactive tutorials for onboarding and developer training.

## Backend Functionality
- Commands are sent to FastAPI’s /partition endpoint, which uses music21 to generate MusicXML, refined by MuseScoreCLI, and converted to ABC for frontend rendering.
- Emotional commands (e.g., “make it sadder”) adjust dynamics or keys via EmotionAgent.

## Next Steps
- Refine this specification with detailed examples for each component.
- Contact GitHub Next (@GitHubNext, next@github.com) for SpecLang beta access.
- Implement Prototypes: Start with the /partition endpoint or DocumentationManager from the To-Do Board to test the pipeline.
