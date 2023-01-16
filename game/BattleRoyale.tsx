import React, { useEffect, useState } from 'react';
import Phaser from 'phaser';

function BattleRoyale() {
  const [ game, setGame ] = useState<Phaser.Game>();

  // Creat the game inside a useEffect to create it only one
  useEffect(() => {
    async function initPhaser() {
      const Phaser = await import('phaser');
      const { default: GridEngine } = await import('grid-engine');


      // const { default: Preloader } = await import('../scenes/Preloader');
      // const { default: TestScene } = await import('../scenes/TestScene');

      const phaserGame = new Phaser.Game({
        type: Phaser.AUTO,
        title: 'some-game-title',
        parent: 'game-content',
        width: 500,
        height: 500,
        pixelArt: true, 
        // scale: {
        //   zoom: 2
        // }
        scene: [],
        physics: {
          default: 'arcade',
          arcade: {
            // debug set to true to see character hitbox
            debug: true,
          }
        },
        plugins: {
          scene: [
            {
              key: 'gridEngine',
              plugin: GridEngine,
              mapping: 'gridEngine',
            }
          ]
        },
        backgroundColor: '#000000',
      });

      setGame(phaserGame);
    }
    initPhaser();
  }, [])

  return (
    <div id="game-content" key="game-content">
      {/* render game canvas here */}
    </div>
  )
}