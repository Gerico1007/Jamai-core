// 🎵 JeremyAI: JamaiAdapter interface for music engine integration

export interface JamaiAdapter {
  // Accepts natural language or symbolic input, returns ABC notation
  parseInputToAbc(input: string, emotion?: string): Promise<string>;

  // Converts ABC to MIDI (returns base64 or binary)
  abcToMidi(abc: string, emotion?: string): Promise<ArrayBuffer>;

  // Converts ABC to MusicXML
  abcToMusicXml(abc: string): Promise<string>;

  // Converts ABC to tablature (future)
  abcToTablature(abc: string): Promise<string>;

  // Renders ABC to audio (using abcjs or other)
  renderAbcAudio(abc: string, options?: { emotion?: string; tempo?: number }): Promise<void>;

  // Applies emotion mapping to ABC or playback
  applyEmotion(abc: string, emotion: string): string;
}

// Adapter implementations will be provided in /libs and /renderPlayback
