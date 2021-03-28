export class GameOver2 extends Phaser.Scene {

    constructor ()
    {
        super('gameOver2');
    }

    create ()
    {
        this.add.rectangle(400, 300, 640, 500, 0x000000, 0.7);
        var score = this.registry.get('score');
        var tiempo = this.registry.get('tiempo');

        console.log(score+'   *******   '+tiempo);

        var title = 'JUEGO\nTERMINADO!';

        if (score != 0 && tiempo==1)
        {
            this.sound.play('gamewon');
            this.add.image(200, 400, 'sad').setDisplaySize(200, 200);
            var refreshh=this.add.image(500, 380, 'refresh').setDisplaySize(200, 200);

            refreshh.setInteractive();

        refreshh.once('pointerup', function () {
            console.log('regresando regresando a escena Nivel1 !');
            this.scene.start('Nivel1');
           
        }, this);
        }
        else
        {
            this.sound.play('gamelost');
            
            this.add.image(200, 400, 'clap').setDisplaySize(200, 200);
            var refreshh=this.add.image(400, 380, 'refresh').setDisplaySize(150, 150);
            var nextt=this.add.image(600, 380, 'next').setDisplaySize(150, 150);

            //var bg = this.add.image(0, 0, 'next');
        //var text = this.add.image(0, 0, 'buttonText');

        //var container = this.add.container(400, 300, [ bg, text ]);

        refreshh.setInteractive();

        refreshh.once('pointerup', function () {
            console.log('regresando a escena Nivel1!');
            this.scene.start('Nivel1');
           
        }, this);
        
        nextt.setInteractive();

        nextt.once('pointerup', function () {

            console.log('ingresando a esena Nivel 2 !!!!!!!!!!');
            this.scene.start('Nivel2');

        }, this);
        
    }
        this.add.text(400, 150, title, { fontFamily: 'bebas', fontSize: 80, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true).setOrigin(0.5);
        //this.add.text(400, 200, 'Let\'s see what you have won:', { fontFamily: 'bebas', fontSize: 26, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true).setOrigin(0.5);

        
        //this.add.text(400, 500, 'Click o Barra Espacio', { fontFamily: 'bebas', fontSize: 26, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true).setOrigin(0.5);

        //this.input.keyboard.once('keydown_SPACE', this.restart, this);
        //this.input.once('pointerdown', this.restart, this);
    }

    restart ()
    {
        this.scene.start('Nivel1');
    }

}
