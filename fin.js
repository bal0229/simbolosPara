export class Fin extends Phaser.Scene
{
    constructor ()
    {
        super('final');
        
    }

  

   
    preload ()
    {
        this.load.atlas('sea', 'assets/animations/seacreatures_json.png', 'assets/animations/seacreatures_json.json');
        this.load.image('esecenaInicio', 'assets/pics/reiniciar.png');
        this.load.audio('happyM','assets/audio/happy.mp3');
        
        this.load.image('undersea1', 'assets/pics/undersea.jpg');

        this.load.image('caballito', 'assets/sprites/caballito.png');
        this.load.image('caballito1', 'assets/sprites/caballito1.png');
        this.load.image('tortuga', 'assets/sprites/tortuga.png');
        this.load.image('can1', 'assets/sprites/can1.png');
        this.load.image('happy1', 'assets/sprites/happy1.png');
        this.load.image('happy2', 'assets/sprites/happy2.png');
        this.load.image('happy3', 'assets/sprites/happy3.png');
        this.load.image('undersea', 'assets/pics/undersea.jpg');
            this.load.image('coral', 'assets/pics/seabed.png'); 

            
    }

    
        create ()
        {
             var music = this.sound.add('happyM');
        music.play();
        music.volume=1;
     music.play();

        this.add.image(400, 300, 'undersea1');
        ///////////////////////
        this.anims.create({ key: 'jellyfish', frames: this.anims.generateFrameNames('sea', { prefix: 'blueJellyfish', end: 32, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'crab', frames: this.anims.generateFrameNames('sea', { prefix: 'crab1', end: 25, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'octopus', frames: this.anims.generateFrameNames('sea', { prefix: 'octopus', end: 24, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'purpleFish', frames: this.anims.generateFrameNames('sea', { prefix: 'purpleFish', end: 20, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'stingray', frames: this.anims.generateFrameNames('sea', { prefix: 'stingray', end: 23, zeroPad: 4 }), repeat: -1 });

        const jellyfish = this.add.sprite(400, 300, 'seacreatures').play('jellyfish');
        const bigCrab = this.add.sprite(550, 480, 'seacreatures').setOrigin(0).play('crab');
        const smallCrab = this.add.sprite(730, 515, 'seacreatures').setScale(0.5).setOrigin(0).play('crab');
        const octopus = this.add.sprite(100, 100, 'seacreatures').play('octopus');
        const fish = this.add.sprite(600, 200, 'seacreatures').play('purpleFish');
        const ray = this.add.sprite(100, 300, 'seacreatures').play('stingray');

        this.add.image(0, 466, 'coral').setOrigin(0);
        this.add.image(100, 100, 'caballito').setOrigin(0).setDisplaySize(150, 150);
        
        ////////////////////////////
            this.graphics = this.add.graphics();
    
            this.shapes = new Array(15).fill(null).map(
                () => new Phaser.Geom.Circle(Phaser.Math.Between(0, 800), Phaser.Math.Between(0, 600), Phaser.Math.Between(25, 75))
            );
    
            this.rect = Phaser.Geom.Rectangle.Clone(this.cameras.main);

            //////
            this.add.image(300, 300, 'happy1').setOrigin(0).setDisplaySize(150, 150);
        this.add.image(250, 100, 'happy2').setOrigin(0);
        this.add.image(400, 100, 'happy3').setOrigin(0);
        ///////////////////
        var escenaIni=this.add.image(700, 400, 'esecenaInicio').setDisplaySize(150, 150);
        escenaIni.setInteractive();

        escenaIni.once('pointerup', function () {
            console.log('%%%%%%%%%%%%%%%  reiniciando ... %%%%%%%%%%%%%%%%%%%%%!');

            this.scene.pause();
            this.scene.start('Game7');
  
        }, this);
        }
    
        update ()
        {
            this.shapes.forEach(function (shape, i) {
                shape.x += (1 + 0.1 * i);
                shape.y += (1 + 0.1 * i);
            });
    
            Phaser.Actions.WrapInRectangle(this.shapes, this.rect, 72);
    
            this.draw();
        }
    
        color (i)
        {
            return 0x001100 * (i % 15) + 0x000033 * (i % 5);
        }
    
        draw ()
        {
            this.graphics.clear();
    
            this.shapes.forEach((shape, i) => {
                this.graphics
                .fillStyle(this.color(i), 0.5)
                .fillCircleShape(shape);
            }, this);
        }
}


