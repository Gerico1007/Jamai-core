# Portail Symphonique Detailed Roadmap & Progress Checklist

_Use [ ] for incomplete and [x] for completed tasks. Update this file frequently as progress is made._

## Frontend (React.js + abcjs)
- [ ] **Implement ScoreViewer Component** (High, 8h): Render ABC notation via abcjs, support zoom and lyrics.
- [ ] **Integrate musescore.com Viewer** (Medium, 12h): Embed cloud-based score viewer in React.
- [ ] **Build MusicianSelector Dropdown** (High, 6h): Select virtual musicians with instrument and avatar.
- [ ] **Create ComposerChat Interface** (High, 10h): Chat UI with auto-completion for musical terms.
- [ ] **Add Playback Controls** (Medium, 6h): Play/pause/stop, tempo, transposition controls.
- [ ] **Implement DocumentationManager** (High, 8h): In-app help overlays for guides, accessible.
- [ ] **Develop LearningModule** (High, 12h): Interactive tutorials for onboarding and developers.

## Backend (FastAPI + music21 + MuseScore)
- [ ] **Develop /partition Endpoint** (High, 10h): Process music21 scores, refine with MuseScoreCLI, return ABC.
- [ ] **Implement music21-to-MuseScore Pipeline** (High, 8h): Convert streams to MusicXML, refine via MuseScore.
- [ ] **Create Emotional Command Parser** (High, 12h): Parse natural language into MusicXML modifications.
- [ ] **Set Up MuseScore Command-Line Automation** (Medium, 6h): Headless MuseScore for batch processing.
- [ ] **Integrate musescore.com API** (Medium, 10h): Cloud storage for scores and collaboration.
- [ ] **Implement DeveloperDocsGenerator** (Medium, 6h): Auto-generate API and plugin guides.
- [ ] **Link SessionRecorder to Documentation** (Medium, 4h): Log commands for tutorial content.

## Agents
- [ ] **Define MusicianAgent Base Class** (High, 10h): Instrument, style, memory, part generation.
- [ ] **Implement EmotionAgent** (High, 8h): Parse emotional inputs, modulate scores.
- [ ] **Enable Agent Communication** (Medium, 8h): WebSocket/JSON for real-time updates.

## Session Management
- [ ] **Build SessionStateManager** (High, 10h): Track scores and commands.
- [ ] **Implement SessionRecorder** (Medium, 8h): Log interactions for history.
- [ ] **Develop PromptReplayEngine** (Medium, 10h): Replay session versions.

## Export
- [ ] **Enable Multi-Format Export** (High, 6h): MIDI, MusicXML, PDF, SVG via MuseScore.
- [ ] **Implement Direct Printing** (Low, 4h): PDF export and browser printing.

## Multimodality
- [ ] **Add Audio Input Processing** (Medium, 12h): Convert audio to MIDI.
- [ ] **Implement Image-to-Note Conversion** (Low, 10h): Scan handwritten scores to MusicXML.
- [ ] **Enhance Accessibility** (Medium, 8h): Screen reader and keyboard support.

---

## Progress Tracking
- **High Priority:** 84 hours
- **Medium Priority:** 64 hours
- **Low Priority:** 14 hours
- **Total:** 162 hours

_Notes:_
- Update [ ] to [x] as you complete each task.
- Add comments or links to PRs/issues as needed for each item.
- Use this checklist to coordinate team progress and sprint planning.
