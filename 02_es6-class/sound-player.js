// sound-player.js
import a from '../01_module-mocks/sample1';
console.log(a);

export default class SoundPlayer {
  constructor() {
    this.foo = 'bar';
  }

  playSoundFile(fileName) {
    console.log('Playing sound file ' + fileName);
  }
}