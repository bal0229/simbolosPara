export class Game7 extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'Game7'});
        //window.Game7 = this;
        let info0;
        let info1;
        let info2;
        let timer;
        let letra='';
        this.cantSimbolos;
        this.cantAlfabeto;
        this.cantNumeros;
        //let cantSimbolos=10;
        this.todosSimbolosNumericos=new Map();
        this.todosSimbolosAlfabeticos=new Map();
        this.todosSimbolosCaracteresEspeciales=new Map();
        this.musicPerdiste;
        this.musicReventar;
        this.musicLetra=new Map();
        this.controls;
        this.letrass ='';
        this.text;
        this.debug;
        this.tiempo;
        this.tiempoLimite;
        var timedEvent;
    }
 preload ()
{
    this.load.audio('themeF','assets/audio/neriakX_-_Enigma_Gun_Extended_Mix.mp3');
    this.cantSimbolos=0;
    this.cantAlfabeto=0;
    this.cantNumeros=0;
    this.load.image('donuts', 'image/alfa3.png');
    this.load.image('fork', 'image/bola2.png');
    
            this.letra='0';
            this.load.audio('perdiste','sound/perdiste.mp3');
            this.load.audio('reventar','sound/popp.mp3');

            this.load.atlas('sea', 'assets/animations/seacreatures_json.png', 'assets/animations/seacreatures_json.json');

            //  Just a few images to use in our underwater scene
            this.load.image('undersea', 'assets/pics/undersea.jpg');
            this.load.image('coral', 'assets/pics/seabed.png');    
}

 create ()
{
    this.add.image(0, 0, 'undersea').setOrigin(0)
    this.add.image(0, 466, 'coral').setOrigin(0);

    this.anims.create({ key: 'crab', frames: this.anims.generateFrameNames('sea', { prefix: 'crab1', end: 25, zeroPad: 4 }), repeat: -1 });

    const bigCrab = this.add.sprite(550, 480, 'seacreatures').setOrigin(0).play('crab');
        const smallCrab = this.add.sprite(730, 515, 'seacreatures').setScale(0.5).setOrigin(0).play('crab');

    this.musicPerdiste=this.sound.add('perdiste');
            this.musicReventar=this.sound.add('reventar');
    //  Mmm, donuts
    this.add.image(0, 0, 'donuts').setOrigin(0);
    //this.octopus2.setAlpha(0.5);
    //  A little fork sprite
    //var fork = this.add.image(1024, 600, 'fork').setOrigin(0.5, 0).setAngle(-20);

    var label = this.add.text(0, 0, '', { font: "48px Arial Black", fill: "#c51b7d" });
    label.setStroke('#de77ae', 8);
////////////numeros
    for(var i=48; i<58;i++){
        var x = Phaser.Math.Between(100, 600);
        var y = Phaser.Math.Between(0, 150);
        //  Rainbow Text
        this.text1 = this.add.text(x, y, String.fromCharCode(i), { font: "74px Arial Black", fill: "#fff" }).setInteractive();
        this.text1.setStroke('#00f', 16);
        this.text1.setShadow(2, 2, "#333333", 2, true, true);
        //console.log(String.fromCharCode(i));

        this.input.setDraggable(this.text1);
        this.cantNumeros++;
        this.text1.name =  '2';
        
        this.todosSimbolosNumericos.set(String.fromCharCode(i),this.text1);
    }
    ///////////////////////SIMBOLOS
   for(var i=33; i<48;i++){
        var x = Phaser.Math.Between(100, 600);
        var y = Phaser.Math.Between(0, 150);
        //  Rainbow Text
        this.text1 = this.add.text(x, y, String.fromCharCode(i), { font: "74px Arial Black", fill: "#fff" }).setInteractive();
        this.text1.setStroke('#00f', 16);
        this.text1.setShadow(2, 2, "#333333", 2, true, true);
        //console.log(String.fromCharCode(i));

        this.input.setDraggable(this.text1);
//this.cantSimbolos++;
        this.text1.name =  '1';
        this.todosSimbolosCaracteresEspeciales.set(String.fromCharCode(i),this.text1);
    }
 for(var i=58; i<65;i++){
    var x = Phaser.Math.Between(100, 600);
    var y = Phaser.Math.Between(0, 150);
    //  Rainbow Text
    this.text1 = this.add.text(x, y, String.fromCharCode(i), { font: "74px Arial Black", fill: "#fff" }).setInteractive();
    this.text1.setStroke('#00f', 16);
    this.text1.setShadow(2, 2, "#333333", 2, true, true);
    //console.log(String.fromCharCode(i));

    this.input.setDraggable(this.text1);
    //this.cantSimbolos++;
    this.text1.name =  '1';
    this.todosSimbolosCaracteresEspeciales.set(String.fromCharCode(i),this.text1);
 }
for(var i=123; i<127;i++){
    var x = Phaser.Math.Between(100, 600);
    var y = Phaser.Math.Between(0, 150);
    //  Rainbow Text
    this.text1 = this.add.text(x, y, String.fromCharCode(i), { font: "74px Arial Black", fill: "#fff" }).setInteractive();
    this.text1.setStroke('#00f', 16);
    this.text1.setShadow(2, 2, "#333333", 2, true, true);
    //console.log(String.fromCharCode(i));

    this.input.setDraggable(this.text1);
    //this.cantSimbolos++;
    this.text1.name =  '1';
    this.todosSimbolosCaracteresEspeciales.set(String.fromCharCode(i),this.text1);
    }
    
    for(var i=91; i<97;i++){
        var x = Phaser.Math.Between(100, 600);
        var y = Phaser.Math.Between(0, 150);
        //  Rainbow Text
        this.text1 = this.add.text(x, y, String.fromCharCode(i), { font: "74px Arial Black", fill: "#fff" }).setInteractive();
        this.text1.setStroke('#00f', 16);
        this.text1.setShadow(2, 2, "#333333", 2, true, true);
        //console.log(String.fromCharCode(i));
    
        this.input.setDraggable(this.text1);
    //this.cantAlfabeto++;
        this.text1.name =  '1';
        this.todosSimbolosCaracteresEspeciales.set(String.fromCharCode(i),this.text1);
        }
        
        ///////////////////letras mayusculas
    for (var i = 65; i < 91; i++)
            {
                var x = Phaser.Math.Between(100, 600);
                var y = Phaser.Math.Between(0, 150);
    
               // var box = this.add.image(x, y, 'crate');

               
                //  Rainbow Text
                this.text1 = this.add.text(x, y, String.fromCharCode(i), { font: "74px Arial Black", fill: "#fff" }).setInteractive();
                this.text1.setStroke('#00f', 16);
                this.text1.setShadow(2, 2, "#333333", 2, true, true);
                //console.log(String.fromCharCode(i));

                this.input.setDraggable(this.text1);
                this.cantAlfabeto++;
                this.text1.name =  '0';
                this.todosSimbolosAlfabeticos.set(String.fromCharCode(i),this.text1);
            }
   
    var zone1 = this.add.zone(0, 250, 250, 430).setOrigin(0).setName('0').setRectangleDropZone(300, 300).setInteractive();
    var zone2 = this.add.zone(285, 250, 520, 440).setOrigin(0).setName('1').setRectangleDropZone(300, 300).setInteractive();
    var zone3 = this.add.zone(550, 250, 800, 430).setOrigin(0).setName('2').setRectangleDropZone(300, 300).setInteractive();

    zone1.input.dropZone = true;
    zone2.input.dropZone = true;
    zone3.input.dropZone = true;
    //  And some events

this.input.on('gameobjectdown', function (pointer, gameObject) {

if(gameObject.name==='0')
{
    label.setText('Caracter\nAlfabetico');
}else{
    if(gameObject.name==='1'){
        label.setText('Caracter\nEspecial');
    }
    else{
        label.setText('Caracter\nNumérico');
    }
}
    
    label.x = gameObject.x;
    label.y = gameObject.y;
    

});
            

            ////////////**************** */
            var zone = this.add.zone(0, 0, 10, 10).setRectangleDropZone(10, 10);
            var graphics = this.add.graphics();
            this.input.on('dragstart', function (pointer, gameObject) {

                this.children.bringToTop(gameObject);
        
            }, this);
        
            this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        
                gameObject.x = dragX;
                gameObject.y = dragY;
        
            });
        
            this.input.on('dragenter', function (pointer, gameObject, dropZone) {
        
                graphics.clear();
                graphics.lineStyle(2, 0x00ffff);
                graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        
            });
        
            this.input.on('dragleave', function (pointer, gameObject, dropZone) {
        
                graphics.clear();
                graphics.lineStyle(2, 0xffff00);
                graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        
            });
var cantA=this.cantAlfabeto;

            this.input.on('drop', function (pointer, gameObject, dropZone) {
                
                if(gameObject.name==zone1.name && pointer.x<280 && pointer.y>250 && pointer.y<440 ||gameObject.name==zone2.name && pointer.x>280 && pointer.x<550 && pointer.y>250&& pointer.y<440|| gameObject.name==zone3.name && pointer.x>550 && pointer.y>250 && pointer.y<440){
                    gameObject.x = dropZone.x;
                gameObject.y = dropZone.y;

                gameObject.input.enabled = false;
//console.log('VEAMOS DE QUE SE TRATA  '+gameObject.name+'  '+zone1.name);
        
                gameObject.input.enabled = false;
                
                }
               
            });
        
            this.input.on('dragend', function (pointer, gameObject, dropped) {
        
            if (!dropped )
            {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
    
            graphics.clear();
            graphics.lineStyle(2, 0xffff00);
            graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
        
                
        
            });


this.reiniciarTemporizador();

}
reiniciarTemporizador(){
this.debug = this.add.graphics();
//this.temporizador=4;
this.temporizador=(this.cantAlfabeto+this.cantSimbolos+this.cantNumeros);
        this.tiempo=1;
        this.text = this.add.text(32, 32);

this.timedEvent = this.time.addEvent({ delay: 1000,  onEvent ()
    {
        this.tiempo+=1;
    }, callbackScope: this, repeat: 10*this.temporizador });

this.timer = this.time.addEvent({ delay: 10000*this.temporizador, callback: this.gameOver, callbackScope: this });

//////////*********
}
verificar()
{
    var ss=0;
            for (var [clave, valor] of this.todosSimbolosNumericos) {
                //console.log(clave + " *  = " + valor.input.enabled);
                if(!valor.input.enabled){
                    ss++;
                    //console.log(clave + " *  = " + valor.input.enabled);
                }
                this.cantNumeros=this.todosSimbolosNumericos.size-ss;
                //this.alive=this.cantNumeros;
              }

              var ee=0;
              for (var [clave, valor] of this.todosSimbolosCaracteresEspeciales) {
                //console.log(clave + " *  = " + valor.input.enabled);
                if(!valor.input.enabled){
                    ee++;
                    //console.log(clave + " *  = " + valor.input.enabled);
                }
                this.cantSimbolos=this.todosSimbolosCaracteresEspeciales.size-ee;
               // this.alive=this.cantSimbolos;
              }

              var aa=0;
              for (var [clave, valor] of this.todosSimbolosAlfabeticos) {
                //console.log(clave + " *  = " + valor.input.enabled);
                if(!valor.input.enabled){
                    aa++;
                    //console.log(clave + " *  = " + valor.input.enabled);
                }
                this.cantAlfabeto=this.todosSimbolosAlfabeticos.size-aa;
                //this.alive=this.cantAlfabeto;
              }

              if(ss==this.todosSimbolosNumericos.size&&ee==this.todosSimbolosCaracteresEspeciales.size&&aa==this.todosSimbolosAlfabeticos.size)
              {
                console.log(' termino el juego ************************');
                  this.gameOver();
              }
}
update ()
        {
            this.verificar();
            
            
           this.tiempoLimite=this.timedEvent.repeatCount;
            this.text.setText('Tiempo: ' +this.tiempoLimite +'\nCANTIDAD DE NÚMEROS: '+this.cantNumeros+'\nCANTIDAD DE SÍMBOLOS: '+this.cantSimbolos+'\nCANTIDAD DE LETRAS: '+this.cantAlfabeto);
            
            const size = 700;

        this.debug.fillStyle(0x2d2d2d);
        this.debug.fillRect(50,10, size, 20);
//console.log('es el ..  '+this.timedEvent.repeatCount);
        this.debug.fillStyle(0x2dff2d);
        this.debug.fillRect(50, 10, size-(this.timedEvent.repeatCount)*this.temporizador*10, 20);
//////////////

        }
    

        gameOver ()
        {
            
            this.input.off('gameobjectup');
            
            this.timer.remove(false);


console.log(this.alive+'   ooo game over 4444 ooo  '+this.tiempoLimite);
        this.registry.set('score', this.cantAlfabeto+this.cantNumeros+this.cantSimbolos);
        this.registry.set('tiempo', this.tiempoLimite);

        this.scene.pause();
        this.scene.run('gameOver4');
        }

    }

