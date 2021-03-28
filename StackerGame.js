export class StackerGame extends Phaser.Scene {

    constructor ()
    {
        super('game');

        
        this.timer;

        
        /////////////
        this.musicLetra=new Map();
        this.simbolos=new Map();
        this.cantSimbolos;
    }

    init ()
    {
        this.cantSimbolos=26;
        this.temporizador=this.cantSimbolos/5;
        this.alive=0;
        
        for (var i = 0; i < 26; i++)
        {
            this.musicLetra.set(String.fromCharCode(65+i),this.sound.add(String.fromCharCode(65+i)));
        }
    }


    create ()
    {
        this.add.image(400, 300, 'bg');
        //this.add.image(400, 430, 'grid').setDisplaySize(800, 376);
        this.add.image(0, 466, 'grid').setOrigin(0);
        //this.add.text(720, 0, 'S\n t\na\n c\nk\n e\nr', { fontFamily: 'bebas', fontSize: 74, color: '#ffffff', lineSpacing: -10 }).setShadow(2, 2, "#333333", 2, false, true);

        

        //this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        
        //this.timer = this.time.addEvent({ delay: this.speed, callback: this.moveBlocks, callbackScope: this, loop: true });

        //this.input.keyboard.on('keydown_SPACE', this.drop, this);
        //this.input.on('pointerdown', this.drop, this);
        ////////////////////////////////////*********** */

        this.musicPerdiste=this.sound.add('perdiste');
        this.musicReventar=this.sound.add('reventar');

        
        //  How many crates can you click on in 10 seconds?
        //this.add.image(400, 300, 'bg');

        //  Create a bunch of images
        for (var i = 0; i < this.cantSimbolos; i++)
        {
            var x = Phaser.Math.Between(100, 700);
            var y = Phaser.Math.Between(100, 400);

           // var box = this.add.image(x, y, 'crate');

           
            //  Rainbow Text
            this.text1 = this.add.text(x, y, String.fromCharCode(65+i), { font: "74px Arial Black", fill: "#fff" });
            this.text1.setStroke('#00f', 16);
            this.text1.setShadow(2, 2, "#333333", 2, true, true);

            //  Make them all input enabled
            //box.setInteractive();
            this.text1.setInteractive();

            //  The images will dispatch a 'clicked' event when they are clicked on
            this.text1.on('clicked', this.clickHandler, this);

            this.alive++;
            this.simbolos.set(String.fromCharCode(65+i),this.text1);
        }

        //  If a Game Object is clicked on, this event is fired.
        //  We can use it to emit the 'clicked' event on the game object itself.
        this.input.on('gameobjectup', function (pointer, gameObject)
        {
            gameObject.emit('clicked', gameObject);
        }, this);

/////////////////////////////////

// this.gem is a local variable.

this.debug = this.add.graphics();
//this.temporizador=3;
        this.tiempo=1;
        this.text= this.add.text(32, 32);

this.timedEvent = this.time.addEvent({ delay: 1000,  onEvent ()
    {
        this.tiempo+=1;
    }, callbackScope: this, repeat: 10*this.temporizador });

this.timer = this.time.addEvent({ delay: 10000*this.temporizador, callback: this.gameOver, callbackScope: this });

//////////*********



    }

    drop ()
    {
        this.timer.remove(false);
        //this.scene.run('gameOver');
        if(this.alive==0){
            this.gameOver();
        }
        
    }

    

    gameOver ()
    {
        //this.text.setText('.');
        this.timer.remove(false);

        this.input.keyboard.off('keydown_SPACE', this.drop);
        this.input.off('pointerdown', this.drop);
console.log(this.alive+'   ooo game over ooo  '+this.tiempoLimite);
        this.registry.set('score', this.alive);
        this.registry.set('tiempo', this.tiempoLimite);

        this.scene.pause();
        this.scene.run('gameOver');
    }
   
    /*gameOver ()
    {
        //this.input.keyboard.off('keydown_SPACE', this.drop);
        
        this.registry.set('score', this.tiempoLimite);

        this.input.off('gameobjectup');
        this.musicPerdiste.play();
        //this.scene.start('Game4');
        this.scene.pause();
        this.scene.run('gameOver');
    }*/
    
    update ()
    {//console.log(this.alive+'   update  '+this.tiempoLimite);
    
    
    if(this.alive==0){

            //console.log('cambiando de escena');
            //this.scene.start('Nivel1');
            this.scene.pause();
            this.gameOver();
        //this.scene.run('gameOver');
            
        }else{
            if(this.tiempoLimite==0){
                /*var red = Phaser.Math.Between(50, 255);
                var green = Phaser.Math.Between(50, 255);
                var blue = Phaser.Math.Between(50, 255);
            
                this.cameras.main.fade(2000, red, green, blue);*/

                //this.scene.start('Game4');
                //  Get a random color
                
                
            }

        }
        /*this.text.setText('Event.progress: ' + this.timedEvent.getProgress().toString().substr(0, 4) + '\nEvent.repeatCount: ' + this.timedEvent.repeatCount);
        */
       this.tiempoLimite=this.timedEvent.repeatCount;
        this.text.setText('Pendiente: ' + this.alive + '\nTiempo: ' +this.tiempoLimite + '\nELIMINADO : ' +this.letra );
        
        const size = 700;

    this.debug.fillStyle(0x2d2d2d);
    this.debug.fillRect(50,10, size, 20);
//console.log('es el ..  '+this.timedEvent.repeatCount);
    this.debug.fillStyle(0x2dff2d);
    this.debug.fillRect(50, 10, size-(this.timedEvent.repeatCount)*this.temporizador*10, 20);
    }


    clickHandler (text1)
    {
        this.musicReventar.play();

        this.alive--;
        for (var i = 0; i < this.cantSimbolos; i++)
        {
            if(this.simbolos.get(String.fromCharCode(65+i))==text1){
                text1.off('clicked', this.clickHandler);
            text1.input.enabled = false;
            text1.setVisible(false);
            this.letra=String.fromCharCode(65+i);
            this.musicLetra.get(String.fromCharCode(65+i)).play();
            }
        }
        
        
    }

    

}

