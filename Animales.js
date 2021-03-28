export class Animales extends Phaser.Scene{
    constructor ()
    {
        super({ key: 'animales' });
        this.item;
        this.i = 0;
        this.yy;
        this.text11;
this.cadena;
        this.frases;
        this.musicPasarNivel;
        /////////////////
        let info;
            this.temporizador;
            let letra='';
            this.alive = 0;
            let cantSimbolos;
            this.simbolos=new Map();
            this.musicPerdiste;
            this.musicReventar;
            this.musicLetra=new Map();
            this.debug;
            this.text;
            this.tiempo;
            this.tiempoLimite;
            var timedEvent;
            /////////////////////////////
            ////////////////////
            var jellyfish;
this.crab;
this.greenJellyfish;
this.octopus;
this.purpleFish;
this.seahorse;
this.squid;
this.stingray;
this.flyingfish;

        /////////////////////
    }


 preload() {
         //  Here we load the Starling Texture Atlas and XML file
    this.load.atlasXML('octopus', 'assets/sprites/octopus.png', 'assets/sprites/octopus.xml');


   /* //  Here we load the Starling Texture Atlas and XML file
    this.load.atlasXML('seacreatures', 'assets/sprites/seacreatures.png', 'assets/sprites/seacreatures.xml');
    //  Here is the exact same set of animations but as a JSON file instead
     //this.load.atlas('seacreatures', 'assets/sprites/seacreatures_json.png', 'assets/sprites/seacreatures_json.json');

    //  Just a few images to use in our underwater scene
    this.load.image('undersea', 'assets/pics/undersea.jpg');
    this.load.image('coral', 'assets/pics/seabed.png');
*/
}



 create() {
      //  A more suitable underwater background color
    //this.stage.backgroundColor = '#1873CE';

    //  Create our octopus
    this.octopus = this.add.sprite(300, 200, 'octopus');

    //  Create an animation called 'swim', the fact we don't specify any frames means it will use all frames in the atlas
    octopus.animations.add('swim');

    //  Play the animation at 30fps on a loop
    octopus.animations.play('swim', 30, true);

    //  Bob the octopus up and down with a tween
    this.add.tween(octopus).to({ y: 300 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
 }
/*
    this.add.image(0, 0, 'undersea');

    this.jellyfish = this.add.sprite(670, 20, 'seacreatures');

    //  In the texture atlas the jellyfish uses the frame names blueJellyfish0000 to blueJellyfish0032
    //  So we can use the handy generateFrameNames function to create this for us.
    this.jellyfish.animations.add('swim', Phaser.Animation.generateFrameNames('blueJellyfish', 0, 32, '', 4), 30, true);
    this.jellyfish.animations.play('swim');

    //  Let's make some more sea creatures in the same way as the jellyfish

    this.crab = this.add.sprite(550, 480, 'seacreatures');
    this.crab.animations.add('swim', Phaser.Animation.generateFrameNames('crab1', 0, 25, '', 4), 30, true);
    this.crab.animations.play('swim');

    this.greenJellyfish = this.add.sprite(330, 100, 'seacreatures');
    this.greenJellyfish.animations.add('swim', Phaser.Animation.generateFrameNames('greenJellyfish', 0, 39, '', 4), 30, true);
    this.greenJellyfish.animations.play('swim');

    this.octopus = this.add.sprite(160, 400, 'seacreatures');
    this.octopus.animations.add('swim', Phaser.Animation.generateFrameNames('octopus', 0, 24, '', 4), 30, true);
    this.octopus.animations.play('swim');

    this.purpleFish = this.add.sprite(800, 413, 'seacreatures');
    this.purpleFish.animations.add('swim', Phaser.Animation.generateFrameNames('purpleFish', 0, 20, '', 4), 30, true);
    this.purpleFish.animations.play('swim');

    this.seahorse = this.add.sprite(491, 40, 'seacreatures');
    this.seahorse.animations.add('swim', Phaser.Animation.generateFrameNames('seahorse', 0, 5, '', 4), 30, true);
    this.seahorse.animations.play('swim');

    this.squid = this.add.sprite(610, 215, 'seacreatures', 'squid0000');

    this.stingray = this.add.sprite(80, 190, 'seacreatures');
    this.stingray.animations.add('swim', Phaser.Animation.generateFrameNames('stingray', 0, 23, '', 4), 30, true);
    this.stingray.animations.play('swim');

    this.flyingfish = this.add.sprite(60, 40, 'seacreatures', 'flyingFish0000');


    this.add.image(0, 466, 'coral');

    // to: function ( properties, duration, ease, autoStart, delay, repeat, yoyo ) {

        this.add.tween(purpleFish).to({ x: -200 }, 7500, Phaser.Easing.Quadratic.InOut, true, 0, 1000, false);
        this.add.tween(octopus).to({ y: 530 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        this.add.tween(greenJellyfish).to({ y: 250 }, 4000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        this.add.tween(jellyfish).to({ y: 100 }, 8000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

}
*/
}