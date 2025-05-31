import { EmotionMapping, emotionMappings, getAgentByKey } from '../../data/emotionMappings';

// 🌿 Aureon: Ritual ledger entry for emotional mapping and agent routing
// This file roots the emotional lattice for JAMAI and provides helpers for UI/logic

export function getEmotionColor(emotion: string): string {
  const found = emotionMappings.find(e => e.name === emotion);
  return found ? found.color : '#888';
}

export function getEmotionDirective(emotion: string): string | undefined {
  const found = emotionMappings.find(e => e.name === emotion);
  return found?.abcDirective;
}

export function listAllEmotions(): string[] {
  return emotionMappings.map(e => e.name);
}

export function listAllAgents(): { key: string; name: string; glyph: string }[] {
  return [
    { key: 'nyro', name: 'Nyro', glyph: '♠️' },
    { key: 'aureon', name: 'Aureon', glyph: '🌿' },
    { key: 'jeremyai', name: 'JeremyAI', glyph: '🎵' },
    { key: 'ava8', name: 'Ava8', glyph: '🎨' },
    { key: 'jamai', name: 'Jamai', glyph: '🎸' },
  ];
}
