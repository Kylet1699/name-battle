import Phaser, { Scene } from 'phaser';

export default class TestScene extends Scene {
  private gridEngine!: any;

  constructor() {
    super('testscene');
  }

  preload() {
    // Preload assets for the splash and title screens
  }

  create() {
    // using the key defined in preloader.tsx
    const map = this.make.tilemap({ key: 'testmap' });
    map.addTilesetImage('ZeldaLike', 'tiles');
    map.layers.forEach((layer, index) => {
      map.createLayer(index, 'ZeldaLike', 0, 0);
    });

    const heroSprite = this.physics.add.sprite(0, 0, 'hero');

    this.cameras.main.startFollow(heroSprite, true);
    this.cameras.main.setFollowOffset(-heroSprite.width, -heroSprite.height);

    const gridEngineConfig = {
      characters: [
        {
          id: 'hero',
          sprite: heroSprite,
          startPosition: { x: 8, y: 8 }
        }
      ]
    };

    this.gridEngine.create(map, gridEngineConfig);
  }

  update() {
    const cursors = this.input.keyboard.createCursorKeys();
    if (cursors.left.isDown) {
      this.gridEngine.move('hero', 'left');
    } else if (cursors.right.isDown) {
      this.gridEngine.move('hero', 'right');
    } else if (cursors.up.isDown) {
      this.gridEngine.move('hero', 'up');
    } else if (cursors.down.isDown) {
      this.gridEngine.move('hero', 'down');
    }
  }
}