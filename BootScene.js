class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    init() {
        console.log("===BootScene started");
    }

    preload() {
        console.log("preloading");
        // load images
        this.loadImages();
        // load spritesheets
        this.loadSpriteSheets();
        // load audio
        this.loadAudio();
    }

    loadImages() {
        // load images
        this.load.image('title', '/assets/tupacFontTitle.png');
        this.load.image('titlePlay', '/assets/playTitle.png');
        this.load.image('titleHelp', '/assets/helpTitle.png');
        this.load.image('helpFont', '/assets/helpPageHelpFont.png');
        this.load.image('controls', '/assets/helpPageControls.png');
        this.load.image('titleBackground', '/assets/tupacTitleImage.png');
        this.load.image('lvl1Background', '/assets/gameBackgroundLvl1.png');
        this.load.image('lvl2Background', '/assets/gameBackgroundLvl2.png');
        this.load.image('gameOverBackground', '/assets/gameOverBackground.png');
        this.load.image('gameOverFont', '/assets/gameOverFont.png');
        this.load.image('levelPageFont', '/assets/levelPageLevelFont.png');
//        this.load.image('tupac', '/assets/TupacPlayer.png');
        this.load.image('button1', '/assets/red_button01.png');
        this.load.image('button2', '/assets/red_button02.png');
        this.load.image('playButton1', '/assets/red_buttonPlay01.png');
        this.load.image('playButton2', '/assets/red_buttonPlay02.png');
        this.load.image('helpButton1', '/assets/red_buttonHelp01.png');
        this.load.image('helpButton2', '/assets/red_buttonHelp02.png');
        this.load.image('backButton1', '/assets/red_buttonBack01.png');
        this.load.image('backButton2', '/assets/red_buttonBack02.png');
        this.load.image('levelSelectButton1', '/assets/red_buttonLevelSelect01.png');
        this.load.image('levelSelectButton2', '/assets/red_buttonLevelSelect02.png');
        this.load.image('level1Button1', '/assets/red_buttonLevel101.png');
        this.load.image('level1Button2', '/assets/red_buttonLevel102.png');
        this.load.image('level2Button1', '/assets/red_buttonLevel201.png');
        this.load.image('level2Button2', '/assets/red_buttonLevel202.png');
        this.load.image('cars1', '/assets/cars1.png');
        this.load.image('bandana1', '/assets/bandana.png');
        this.load.image('barrier', '/assets/barrier.png');
    }

    loadSpriteSheets() {
        this.load.spritesheet('goldCoin', '/assets/goldCoins1.png', {
            frameWidth: 33,
            frameHeight: 28.64
        });

        this.load.spritesheet('cars', '/assets/cars.png', {
            frameWidth: 454,
            frameHeight: 417
        });
        
        this.load.spritesheet('tupac', '/assets/BodyForTupacAnim.png', { frameWidth: 79, frameHeight: 115 });
    }

    loadAudio() {
        // Adding Sounds
        this.load.audio("lvl1Music", ["/assets/CaliforniaLove.mp3", "/assets/CaliforniaLove.ogg"]);
        this.load.audio("lvl2Music", ["/assets/HitEmUp.mp3", "/assets/HitEmUp.ogg"]);
        this.load.audio("coinSound", ["/assets/CollectCoin.mp3", "/assets/CollectCoin.ogg"]);
        this.load.audio("deathSound", ["/assets/DeathSound.mp3", "/assets/DeathSound.ogg"]);
    }

    create() {
        this.scene.start('Title');
        this.bg = this.add.sprite(580, 140, 'controls');

    }
}
