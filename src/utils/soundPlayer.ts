import { Audio } from 'expo-av';
import SoundLibrary from 'database/sounds/SoundLibrary';

const SOUNDS: {
  [key: string]: Audio.Sound;
} = {};

export async function initAudio() {
  await Audio.setIsEnabledAsync(true);
  await Audio.setAudioModeAsync({
    playsInSilentModeIOS: true,
    shouldDuckAndroid: true,
    interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
    interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
  });
}

export async function playSound(name: string) {
  if (SOUNDS[name]) {
    await SOUNDS[name].unloadAsync();
  } else {
    SOUNDS[name] = new Audio.Sound();
  }
  await SOUNDS[name].loadAsync(SoundLibrary[name]);
  await SOUNDS[name].replayAsync();
}
