import { Scene } from 'phaser';

export default class Preloader extends Scene {
  constructor() {
    super('preloader');
  }
  preload() {
    this.load.image('tiles', '../game/assets/tiles/Overworld.png');
    this.load.tilemapTiledJSON('testmap', '../game/assets/tiles/testmap.json');
    this.load.spritesheet('hero', '../game/assets/characters/character.png', {
      frameWidth: 16,
      frameHeight: 32,
    });
  }

  create() {
    this.scene.start('testscene');
  }
}