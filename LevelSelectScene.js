class LevelSelectScene extends Phaser.Scene {
    constructor() {
        super('Level');
    }

    init() {
        console.log("===HelpScene started");
        this.scaleW = this.sys.game.config.width;
        this.scaleH = this.sys.game.config.height;
    }

    create() {
        //create title background image
        // create bg sprite
        this.bg = this.add.sprite(0, 0, 'titleBackground');
        // change the origin to the top-left corner
        this.bg.setOrigin(0, 0);
        this.bg.setScale(2.1);
        
        this.bg = this.add.sprite(1250, 100, 'levelPageFont');
        // change the origin to the top-left corner
        this.bg.setOrigin(0, 0);
        this.bg.setScale(1.3);

        // create the Play game button
        this.startGameButton = new UiButton(this, this.scaleW / 1.15, this.scaleH * 0.55, 'level1Button1', 'level1Button2', '', this.startScene.bind(this, 'Game1'));
        
        this.startGameButton = new UiButton(this, this.scaleW / 1.15, this.scaleH * 0.65, 'level2Button1', 'level2Button2', '', this.startScene.bind(this, 'Game2'));
        
        this.startGameButton = new UiButton(this, this.scaleW / 1.15, this.scaleH * 0.75, 'backButton1', 'backButton2', '', this.startScene.bind(this, 'Title'));
    }

    startScene(targetScene) {
        this.scene.start(targetScene);
    }
}