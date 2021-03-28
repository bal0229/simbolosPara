export class Nivel3 extends Phaser.Scene{
    constructor ()
    {
        super({ key: 'Nivel3' });
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
            this.octopus1;
            this.octopus2;
            this.octopus3;
            this.octopus4;
            this.octopus5;
            this.octopus6;

        /////////////////////
        this.sprite1;
        this.tilesprite;
this.cursors;
this.count = 0;
    }



preload() {
    //this.load.image('starfield', 'assets/misc/starfield.jpg');
    //this.load.spritesheet('mummy', 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);
    this.load.atlas('seacreatures', 'assets/sprites/seacreatures_json.png', 'assets/sprites/seacreatures_json.json');
}

create() {
    //this.sprite = this.add.tileSprite(0, 0, 800, 600, 'mummy');
    //this.sprite.animations.add('walk');
    //this.sprite.animations.play('walk', 20, true);

     this.sprite1 = this.add.tileSprite(0, 0, 800, 600, 'seacreatures', 'octopus0002');
     //this.sprite1.animations.add('swim', Phaser.Animation.generateFrameNames('octopus', 0, 24, '', 4), 30, true);
     //this.sprite1.animations.play('swim');

    this.cursors = this.input.keyboard.createCursorKeys();

}

 update() {

    this.count += 0.005;

    this.sprite1.tileScale.x = 2 + Math.sin(this.count);
    this.sprite1.tileScale.y = 2 + Math.cos(this.count);


}

 render() {

    // game.debug.renderText(sprite.frame, 32, 32);

}

}
