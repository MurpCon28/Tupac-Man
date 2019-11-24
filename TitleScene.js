class TitleScene extends Phaser.Scene {
    constructor() {
        super('Title');
    }

    init() {
        console.log("===TitleScene started");
        this.scaleW = this.sys.game.config.width;
        this.scaleH = this.sys.game.config.height;
    }

    create() {
        // create title text
        //        this.titleText = this.add.text(this.scaleW / 2, this.scaleH / 3, 'JP game', {
        //            fontSize: '64px',
        //            fill: '#0f0'
        //        });
        //        this.titleText.setOrigin(0.5);

        //create title background image
        // create bg sprite
        this.bg = this.add.sprite(0, 0, 'titleBackground');
        this.bg.setScale(2.1);
        // change the origin to the top-left corner
        this.bg.setOrigin(0, 0);

        //title font
        this.bg = this.add.sprite(1220, 100, 'title');
        // change the origin to the top-left corner
        this.bg.setOrigin(0, 0);
        this.bg.setScale(1.3);

        //        //title play font
        //        this.bg = this.add.sprite(630, 240, 'titlePlay');
        //        // change the origin to the top-left corner
        //        this.bg.setOrigin(0, 0);
        //        
        //        //title help font
        //        this.bg = this.add.sprite(630, 330, 'titleHelp');
        //        // change the origin to the top-left corner
        //        this.bg.setOrigin(0, 0);

        // create the Play game button
        this.startGameButton = new UiButton(this, this.scaleW / 1.15, this.scaleH * 0.45, 'playButton1', 'playButton2', '', this.startScene.bind(this, 'Game1'));

        // create the level game button
        this.startLevelButton = new UiButton(this, this.scaleW / 1.15, this.scaleH * 0.55, 'levelSelectButton1', 'levelSelectButton2', '', this.startScene.bind(this, 'Level'));

        // create the Help game button
        this.startHelpButton = new UiButton(this, this.scaleW / 1.15, this.scaleH * 0.65, 'helpButton1', 'helpButton2', '', this.startScene.bind(this, 'Help'));
    }

    startScene(targetScene) {
        console.log("ready to start: ", targetScene)
        this.scene.start(targetScene);
    }
}
