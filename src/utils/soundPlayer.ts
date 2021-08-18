import { Audio } from 'expo-av';
import SoundLibrary from 'database/sounds/SoundLibrary';

const loadedSounds: {
  [key: string]: Audio.Sound;
} = {};

export function loadSounds() {
  Object.entries(SoundLibrary).forEach(([id, sound]) => {
    loadedSounds[id] = new Audio.Sound();
    loadedSounds[id].loadAsync(sound);
  });
}

export async function playSound(name: string) {
  if (loadedSounds[name]) {
    await loadedSounds[name].replayAsync().catch(console.warn);
  }
}
