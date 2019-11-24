var config = {
    type: Phaser.AUTO,
    width: 1700,
    height: 900,
    scene: [
    BootScene,
    TitleScene,
    GameScene1,
    GameScene2,
    HelpScene,
    LevelSelectScene,
    GameOverScene
  ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                y: 0,
            },
        },
    },
};

console.log("Tupac-Man has started");
var game = new Phaser.Game(config);
