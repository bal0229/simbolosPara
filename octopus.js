export class Octopus extends Phaser.Scene{
    constructor ()
    {
        super({ key: 'Octopus' });

    }


     preload() {

        //  Here we load the Starling Texture Atlas and XML file
        this.load.atlasXML('octopus', 'assets/sprites/octopus.png', 'assets/sprites/octopus.xml');
    
    }
    
     create() {
    
        //  A more suitable underwater background color
        //this.stage.backgroundColor = '#1873CE';
    
        //  Create our octopus
        var octopus = this.add.sprite(300, 200, 'octopus');
    
        //  Create an animation called 'swim', the fact we don't specify any frames means it will use all frames in the atlas
        octopus.animations.add('swim');
    
        //  Play the animation at 30fps on a loop
        octopus.animations.play('swim', 30, true);
    
        //  Bob the octopus up and down with a tween
        game.add.tween(octopus).to({ y: 300 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
    
    }
}