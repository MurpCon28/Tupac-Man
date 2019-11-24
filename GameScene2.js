class GameScene2 extends Phaser.Scene {
    constructor() {
        super('Game2');
    }

    init() {
        console.log("===GameScene2 started");

        this.cars1MaxY = 280;
        this.cars1MinY = 80;

        //        this.score = 0;

        this.scaleW = this.sys.game.config.width;
        this.scaleH = this.sys.game.config.height;
        //        this.iter = 0;

    }

    create() {
        this.createAudio();
        this.createInput();
        this.createBackground();
        this.createPlayer();
        this.createCars1();
        this.createGoldCoins();
        this.createBarrier();
        this.createText()
        this.createBandana()
        //        this.turnGoldCoin();
        //        this.myCam = this.cameras.main;
        //        this.myCam.setBounds(0, 0, game.config.width * 3, game.config.height);
    }


    createAudio() {
        //play background loopFull
        // Adding Sounds
        this.music = this.sound.add('lvl2Music');
        this.music.play();
        this.coinSound = this.sound.add('coinSound');
        this.deathSound = this.sound.add('deathSound');
    }

    createInput() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    createBackground() {
        // create bg sprite
        this.lvl1Background = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'lvl2Background');
        // change the origin to the top-left corner
        this.lvl1Background.setOrigin(0, 0);
        this.lvl1Background.setScale(2.1);
        this.lvl1Background.setScrollFactor(0);

        //        this.tween = this.tweens.addCounter({
        //            from: 1,
        //            to: 2,
        //            duration: 5000,
        //            ease: 'Sine.easeInOut',
        //            yoyo: true,
        //            repeat: -1
        //        });
    }
    
    createBandana() {
        this.bandana1 = this.physics.add.sprite(400, 700, 'bandana1');
        this.bandana1.setScale(0.5);
        this.physics.add.overlap(this.bandana1, this.tupac, this.collideCoins, null, this);
        
    }

    createPlayer() {
        this.tupac = this.physics.add.sprite(0, this.scaleH, 'tupac');
        this.tupac.speed = 4;
        //        this.tupac.setOrigin(0, 0);
        this.tupac.setScale(1.4);
        this.tupac.body.setGravityY(130);
        this.tupac.score = 0;
        this.tupac.isAlive = true;
        this.tupac.setCollideWorldBounds(true);


        //        // set workd bounds to allow camera to follow the player
        //        this.myCam = this.cameras.main;
        //        this.myCam.setBounds(0, 0, game.config.width * 3, game.config.height);
        //        this.cameras.main.startFollow(this.tupac);
        //
        //        // making the camera follow the player
        
        // animation states
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('tupac', {
        start: 5,
        end: 0
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{
        key: 'tupac',
        frame: 6
      }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('tupac', {
        start: 7,
        end: 12
      }),
      frameRate: 10,
      repeat: -1
    });

    }

    createCars1() {

        //        this.cars1 = this.add.sprite(450, 400, 'cars1');
        //        this.cars1.setScale(1.1);
        //        this.cars1.setScaleY = 10;

        this.cars1 = this.physics.add.group({
            key: 'cars1',
            repeat: 25,
            setXY: {
                x: 1500,
                y: 830,
                stepX: 900,
                stepY: 0,

            }
        });

        //            // scale enemies down
        Phaser.Actions.ScaleXY(this.cars1.getChildren(), 0.5, 0.5);
        //
        // set random speeds for all children of enemies group
        Phaser.Actions.Call(this.cars1.getChildren(), function (car) {
            car.speed = Math.random() * 520 + 520;
        }, this);
        //
        //            //10 add a collider between player and enemies
        this.physics.add.overlap(this.tupac, this.cars1, this.collisionCheck, null, this);
        console.log(this.cars1);
    }



    createGoldCoins() {
        // goal
//        this.GoldCoin = this.add.sprite(this.scaleW - 80, this.scaleH / 2, 'goldCoin');
//        this.GoldCoin.setScale(0.6);

        this.goldCoins = this.physics.add.group({
            key: 'goldCoin',
            repeat: 55,
            score: Math.round(Math.random() * 10 + 1),
            setXY: {
                x: 700,
                y: this.scaleH / 1.5,
                stepX: 700,
                stepY: 15
            }
        });

        // scale coins down
        Phaser.Actions.ScaleXY(this.goldCoins.getChildren(), 0.2, 0.2);

        // set random speeds for all children of enemies group
        //        Phaser.Actions.Call(this.goldCoins.getChildren(), function (GoldCoin) {
        //            GoldCoin.score = Math.round(Math.random() * 10 + 1);
        //        }, this);

        //        Phaser.Actions.Call(this.coins.getChildren(), function (coin) {
        //            let sprite = this.coins.create(coin.x, coin.y, 'money');
        //            sprite.anchor.set(0.5, 0.5);
        //        }, this);


        //        this.anims.create({
        //            key: 'right',
        //            frames: this.anims.generateFrameNumbers('goldCoin', {
        //                start: 0,
        //                end: 11
        //            }),
        //            frameRate: 15,
        //            repeat: -1
        //        });
        
        Phaser.Actions.Call(this.goldCoins.getChildren(), function (goldCoin) {
            goldCoin.speed = Math.random() * 250 + 250;
        }, this);

        this.physics.add.overlap(this.goldCoins, this.tupac, this.collideCoins, null, this);

    }

    createBarrier() {
        this.barrier = this.physics.add.sprite(1000, this.scaleH, 'barrier');
        this.physics.add.overlap(this.tupac, this.barrier, this.collisionCheck2, null, this);
        console.log(this.barrier);
    }

    createText() {
        this.scoreText = this.add.text(16, 60, 'score: 0', {
            fontSize: '32px',
            fill: '#ffffff'
        });
    }

    //gameLoop
    update() {
        //console.log(this.tupac.isAlive);
        if (!this.tupac.isAlive) {
            return;
        }

        this.scoreText.setText('Coins: ' + this.tupac.score);


        //&& this.tupac.x < game.config.width * 3
//        if (this.cursors.right.isDown == true) {
//            //console.log("right button pressed");
//            this.lvl1Background.tilePositionX += 5;
//            //moves the xPlayer
//            //            this.tupac.scaleX = 1;
//            this.tupac.x += this.tupac.speed;
//
//        } else if (this.cursors.left.isDown == true) {
//            console.log("left button pressed");
//            this.tupac.scrollX = 1;
//            this.lvl1Background.tilePositionX -= 5;
//            //            moves the xPlayer
//            //            this.tupac.scaleX = 1;
//            this.tupac.x -= this.tupac.speed;
//        }
        if (this.cursors.left.isDown) {
//      this.tupac.setVelocityX(-this.tupac.speed);
      this.tupac.x -= this.tupac.speed;
      this.lvl1Background.tilePositionX -= 5;
      this.tupac.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
//      this.tupac.setVelocityX(this.tupac.speed);
        this.tupac.x += this.tupac.speed;
      this.lvl1Background.tilePositionX += 5;
      this.tupac.anims.play('right', true);
    } else {
      this.tupac.setVelocityX(0);
      this.tupac.anims.play('turn');
    }
        
        if (this.cursors.up.isDown == true) {
            //console.log("up button pressed");
            //moves the xPlayer
            this.tupac.y -= this.tupac.speed;
        }
        //        this.lvl1Background.x = Math.cos(this.iter) * 740;
        //        this.lvl1Background.Y = Math.sin(this.iter) * 370;
        //        this.lvl1Background.x = this.tween.getValue();
        //        this.lvl1Background.Y = this.tween.getValue();
        //
        //        this.lvl1Background.x = this.iter;
        //        this.iter -= 0.2;
        //        this.lvl1Background.fixedToCamera = true;

        //        this.lvl1Background.tilePositionX = this.myCam.scrollX * 2;

        let cars1 = this.cars1.getChildren();
        let numcars = cars1.length;
        //console.log(numcars)



        // cars1[1].setVelocityX(cars1[1].speed * -1);

        for (let i = 0; i < numcars; i++) {
            cars1[i].setVelocityX(cars1[i].speed * -1);
        }

        // move enemies
        //cars1[i].x -= cars1[i].speed;
        //
        // reverse movement if reached the edges
        //            if (cars1[i].y >= this.cars1MaxY && cars1[i].speed > 0) {
        //                cars1[i].speed *= -1;
        //            } else if (enemies[i].y <= this.cars1MinY && cars1[i].speed < 0) {
        //                cars1[i].speed *= -1;
        //            }
        //}
        
        let goldCoins = this.goldCoins.getChildren();
        let numgoldCoins = goldCoins.length;



        // cars1[1].setVelocityX(cars1[1].speed * -1);

        for (let i = 0; i < numgoldCoins; i++) {
            goldCoins[i].setVelocityX(goldCoins[i].speed * -1);
        }


    }

    collisionCheck(tupac, cars1) {
//        console.log("bump");
//                this.tupac.isAlive = false;
//                this.deathSound.play();
//     
//                this.gameOver();
    }

    collisionCheck2(tupac, barriers) {
        console.log("Invisable wall");
        this.tupac.x -= 5;
        //
        //        this.gameOver();
    }

    collideCoins(goldCoins, player) {
        //this.goldCoins.destroy();

        player.destroy();
        this.tupac.score += 10;
        this.coinSound.play();

        console.log("score:! " + this.tupac.score);
    }
    
    collideBandana1(bandana1, tupac) {
        //this.goldCoins.destroy();

        tupac.destroy();
//        this.tupac.score += 50;
        this.coinSound.play();

        console.log("score:!" + this.tupac.score);
        if (this.tupac.score >= 200) {
        this.nextLevel();
    } else {
        this.gameOver();
    }
    }


    //    turnGoldCoin() {
    //        let goldCoinSpin = this.goldCoins.getChildren();
    //        let numGoldCoinSpin = goldCoinSpin.length;
    //
    //        for (let i = 0; i < numGoldCoinSpin; i++) {
    //            goldCoinSpin[i].anims.play('right', true);
    //        }
    //    }

    gameOver() {
        this.scene.start('GameOver');
        this.music.stop();
    }
    
    nextLevel() {
        this.scene.start('Game2');
        this.music.stop();
    }
}
