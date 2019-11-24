class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    init() {
        console.log("===GameOverScene started");
        this.scaleW = this.sys.game.config.width;
        this.scaleH = this.sys.game.config.height;
    }

    create() {
        // create title text
        //    this.titleText = this.add.text(this.scaleW / 2, this.scaleH / 2, 'Game Over', { fontSize: '64px', fill: '#fff' });
        //    this.titleText.setOrigin(0.5);

        this.bg = this.add.sprite(0, 0, 'gameOverBackground');
        this.bg.setScale(2.1);
        // change the origin to the top-left corner
        this.bg.setOrigin(0, 0);

        this.bg = this.add.sprite(1100, 100, 'gameOverFont');
        // change the origin to the top-left corner
        this.bg.setOrigin(0, 0);
        this.bg.setScale(1.3);

        // create the Play game button
        this.startGameButton = new UiButton(this, this.scaleW / 1.15, this.scaleH * 0.65, 'backButton1', 'backButton2', '', this.startScene.bind(this, 'Title'));
    }

    startScene(targetScene) {
        this.scene.start(targetScene);
    }
}
