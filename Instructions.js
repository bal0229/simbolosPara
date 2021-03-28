export class Instructions extends Phaser.Scene {

    constructor ()
    {
        super('instructions');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');
        //this.add.image(400, 430, 'grid').setDisplaySize(800, 376);
        this.add.image(0, 466, 'grid').setOrigin(0);
        //this.add.image(0, 466, 'coral').setOrigin(0)
        this.add.image(400, 450, 'click1').setDisplaySize(800, 376);
        this.add.image(400, 300, 'click2').setDisplaySize(800, 600);

        this.add.image(300, 400, 'buscar');
        this.add.image(700, 200, 'caballoInfo');
        

        //this.add.text(720, 0, 'S\n t\na\n c\nk\n e\nr', { fontFamily: 'bebas', fontSize: 74, color: '#ffffff', lineSpacing: -10 }).setShadow(2, 2, "#333333", 2, false, true);

        this.add.text(20, 40, 'Instrucciones', { fontFamily: 'bebas', fontSize: 70, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);

        var help = [
            'Repetir el sonido de acuerdo de cada letra'
            
        ];

        this.add.text(20, 170, help, { fontFamily: 'bebas', fontSize: 30, color: '#ffffff', lineSpacing: 6 }).setShadow(2, 2, "#333333", 2, false, true);

        //this.add.text(400, 550, 'Click o Barra Espacio', { fontFamily: 'bebas', fontSize: 40, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);

        this.input.keyboard.once('keydown_SPACE', this.start, this);
        this.input.once('pointerdown', this.start, this);
    }

    start ()
    {
        this.scene.start('game');
    }
   
}
