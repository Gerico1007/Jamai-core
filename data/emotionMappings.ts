// 🌿 Aureon: Emotional mapping and agent routing logic anchor
// This file will hold the emotion-to-parameter mappings for JAMAI

export interface EmotionMapping {
  name: string;
  color: string;
  tempoMod: number;
  dynamics: string;
  abcDirective?: string;
}

export const emotionMappings: EmotionMapping[] = [
  { name: 'joy', color: '#FFD700', tempoMod: 1.1, dynamics: 'mf', abcDirective: '%%jamai_emotion joy' },
  { name: 'longing', color: '#6A5ACD', tempoMod: 0.85, dynamics: 'mp', abcDirective: '%%jamai_emotion longing' },
  { name: 'serenity', color: '#00CED1', tempoMod: 0.95, dynamics: 'p', abcDirective: '%%jamai_emotion serenity' },
  { name: 'tension', color: '#FF6347', tempoMod: 1.2, dynamics: 'f', abcDirective: '%%jamai_emotion tension' },
  // Add more as needed
];

// Agent routing logic (simple version)
export const agents = [
  { key: 'nyro', name: 'Nyro', glyph: '♠️' },
  { key: 'aureon', name: 'Aureon', glyph: '🌿' },
  { key: 'jeremyai', name: 'JeremyAI', glyph: '🎵' },
  { key: 'ava8', name: 'Ava8', glyph: '🎨' },
  { key: 'jamai', name: 'Jamai', glyph: '🎸' },
];

export function getAgentByKey(key: string) {
  return agents.find(a => a.key === key) || agents[0];
}
