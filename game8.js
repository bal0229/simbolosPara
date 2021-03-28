export class Game8 extends Phaser.Scene
{
    constructor ()
    {
        super('Game8');
        //super({ key: 'Game8', active: false });
            
    }
/*
    preload ()
    {
        this.load.audio('themeF','assets/audio/neriakX_-_Enigma_Gun_Extended_Mix.mp3');
        //this.load.audio('theme','assets/audio/audio1.mp3');

        this.load.atlas('sea', 'assets/animations/seacreatures_json.png', 'assets/animations/seacreatures_json.json');

        //  Just a few images to use in our underwater scene
        this.load.image('undersea', 'assets/pics/undersea.jpg');
        this.load.image('coral', 'assets/pics/seabed.png');
    }*/

    create ()
    {
        
        var music = this.sound.add('themeF');
        music.play();
        music.volume=1;
    //music.play();

        this.add.image(400, 300, 'undersea');

        //  Create the Animations
        //  These are stored globally, and can be used by any Sprite

        //  In the texture atlas the jellyfish uses the frame names blueJellyfish0000 to blueJellyfish0032
        //  So we can use the handy generateFrameNames function to create this for us (and so on)
       this.anims.create({ key: 'jellyfish', frames: this.anims.generateFrameNames('sea', { prefix: 'blueJellyfish', end: 32, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'crab', frames: this.anims.generateFrameNames('sea', { prefix: 'crab1', end: 25, zeroPad: 4 }), repeat: -1 });
        //this.anims.create({ key: 'octopus', frames: this.anims.generateFrameNames('sea', { prefix: 'octopus', end: 24, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'purpleFish', frames: this.anims.generateFrameNames('sea', { prefix: 'purpleFish', end: 20, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'stingray', frames: this.anims.generateFrameNames('sea', { prefix: 'stingray', end: 23, zeroPad: 4 }), repeat: -1 });

        const jellyfish = this.add.sprite(400, 300, 'seacreatures').play('jellyfish');
        const bigCrab = this.add.sprite(550, 480, 'seacreatures').setOrigin(0).play('crab');
        const smallCrab = this.add.sprite(730, 515, 'seacreatures').setScale(0.5).setOrigin(0).play('crab');
        //const octopus = this.add.sprite(100, 100, 'seacreatures').play('octopus');
        const fish = this.add.sprite(600, 200, 'seacreatures').play('purpleFish');
        const ray = this.add.sprite(100, 300, 'seacreatures').play('stingray');

        this.add.image(0, 466, 'coral').setOrigin(0);
        //////////////////////
        

    this.texto.setText('Press down arrow keys to move the tileSprite');
    }
    update() {

console.log("game 88888888888888888888888888888888888888 ");
    
    }
}


