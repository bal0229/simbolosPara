export class Nivel1 extends Phaser.Scene{
    constructor ()
    {
        super({ key: 'Nivel1' });
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
    }

    preload ()
    {
        //this.load.audio('theme','assets/audio/audio1.mp3');

this.load.audio('paseNivel','assets/audio/ganador.mp3');
        
        //////////////////////
        this.cantSimbolos=26;
        this.yy=1;
       // this.cadena='UNO';
        this.frases=['UN PULPO ESTA ENAMORADO  DE UNA ESTRELLITA DE MAR  Y SUS TRES CORAZONCITOS NO DEJAN DE PALPITAR POR SU LADO LA ESTRELLITA ALTIVA Y MUY PRESUMIDA','TAN SOLO UN PRINCIPE AZUL QUIERE TENER EN SU VIDA EL PULPO BAILA EN EL MAR DELANTE DE LA ESTRELLITA Y DE PRONTO UN CORAZON MUCHO MAS FUERTE PALPITA','EL PULPO NADA EN EL MAR  ESTIRANDO SUS TENTACULOS PERO LA ESTRELLA NO MIRA PARA ELLA ES SOLO UN OBSTACULO','CON FUERZA AL VER A LA ESTRELLA LATEN SUS TRES CORAZONES Y AUNQUE QUIERE EN SU INTERIOR NO ATIENDE EL PULPO A RAZONES AL SANGRARLE UN CORAZON','SE HA IDO ALEJANDO DE ELLA SU SANGRE ES COLOR AZUL LO VE ENSEGUIDA LA ESTRELLA POR ESO LE LLAMA A GRITOS CORRIENDO VA DETRAS DE EL PERO EL PULPO ENTRISTECIDO NO QUIERE VOLVERLA A VER','FIN'];
        this.cadena=this.frases[0];
            this.letra='0';
            this.alive=0;
            this.load.audio('perdiste','sound/perdiste.mp3');
            this.load.audio('reventar','sound/popp.mp3');

            for (var i = 0; i < this.cantSimbolos; i++)
            {
                this.load.audio(String.fromCharCode(65+i),'sound/'+String.fromCharCode(97+i)+'.mp3');
            }
        /////////////////////////

        this.load.atlas('sea', 'assets/animations/seacreatures_json.png', 'assets/animations/seacreatures_json.json');
        this.load.image('undersea', 'assets/pics/undersea.jpg');
        this.load.image('coral', 'assets/pics/seabed.png');
    }

    create ()
    {

        this.musicPasarNivel = this.sound.add('paseNivel');

        this.add.image(400, 300, 'undersea');


        this.anims.create({ key: 'jellyfish', frames: this.anims.generateFrameNames('sea', { prefix: 'blueJellyfish', end: 32, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'crab', frames: this.anims.generateFrameNames('sea', { prefix: 'crab1', end: 25, zeroPad: 4 }), repeat: -1 });

        this.anims.create({ key: 'octopus', frames: this.anims.generateFrameNames('sea', { prefix: 'octopus', end: 24, zeroPad: 4 }), repeat: -1 });
        
        this.anims.create({ key: 'purpleFish', frames: this.anims.generateFrameNames('sea', { prefix: 'purpleFish', end: 20, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: 'stingray', frames: this.anims.generateFrameNames('sea', { prefix: 'stingray', end: 23, zeroPad: 4 }), repeat: -1 });

        const jellyfish = this.add.sprite(400, 300, 'seacreatures').play('jellyfish');
        const bigCrab = this.add.sprite(550, 480, 'seacreatures').setOrigin(0).play('crab');
        const smallCrab = this.add.sprite(730, 515, 'seacreatures').setScale(0.5).setOrigin(0).play('crab');
        
        this.octopus1 = this.add.sprite(300, 100, 'seacreatures').play('octopus');
        this.octopus2 = this.add.sprite(400, 100, 'seacreatures').play('octopus');
        this.octopus3 = this.add.sprite(500, 100, 'seacreatures').play('octopus');
        this.octopus4 = this.add.sprite(600, 100, 'seacreatures').play('octopus');
        this.octopus5 = this.add.sprite(700, 100, 'seacreatures').play('octopus');
        
        this.octopus1.setTintFill(0xffffff);        
        this.octopus1.setAlpha(0.5);
        this.octopus2.setTintFill(0xffffff);        
        this.octopus2.setAlpha(0.5);
        this.octopus3.setTintFill(0xffffff);        
        this.octopus3.setAlpha(0.5);
        this.octopus4.setTintFill(0xffffff);        
        this.octopus4.setAlpha(0.5);
        this.octopus5.setTintFill(0xffffff);        
        this.octopus5.setAlpha(0.5);
        
        

        const fish = this.add.sprite(600, 200, 'seacreatures').play('purpleFish');
        const ray = this.add.sprite(100, 300, 'seacreatures').play('stingray');

        this.add.image(0, 466, 'coral').setOrigin(0);
        ///////////////////////////////////////
        this.musicPerdiste=this.sound.add('perdiste');
        this.musicReventar=this.sound.add('reventar');
        for (var i = 0; i < 26; i++)
            {
                this.musicLetra.set(String.fromCharCode(65+i),this.sound.add(String.fromCharCode(65+i)));
            }

        this.cargarAlfabeto();

this.reiniciarTemporizador();

this.colocarFrase();
       
    }
    colocarFrase(){
        
             /////////////////////////////////////
             this.hsv = Phaser.Display.Color.HSVColorWheel();

             //  Rainbow Text
             this.text1 = this.add.text(10, 400, this.cadena, { font: "50px Arial Black", fill: "#fff" });
             this.text1.setStroke('#00f', 16);
             this.text1.setShadow(2, 2, "#333333", 2, true, true);
             ///////////////////////////////////////////
    }
    reiniciarTemporizador(){

this.debug = this.add.graphics();
this.temporizador=this.frases.length *5;
            this.tiempo=1;
            this.text = this.add.text(32, 32);

    this.timedEvent = this.time.addEvent({ delay: 1000,  onEvent ()
        {
            this.tiempo+=1;
        }, callbackScope: this, repeat: 10*this.temporizador });

this.timer = this.time.addEvent({ delay: 10000*this.temporizador, callback: this.gameOver, callbackScope: this });

//////////*********
    }
    cargarAlfabeto(){
        /////////////cargar burbujas de letras
        
            this.alive=0;
            
            var x = 50;
            var y = 150;
            
            for (var i = 0; i < this.cantSimbolos; i++)
            {
                
                if(x>=750){
y=y+80;
x=50;
                }

                this.text11 = this.add.text(x, y, String.fromCharCode(65+i), { font: "74px Arial Black", fill: "#fff" });
                this.text11.setStroke('#00f', 16);
                this.text11.setShadow(2, 2, "#333333", 2, true, true);
x=x+70;
                
                this.text11.setInteractive();
    
                
                console.log(' cad= '+this.cadena+"  tamaño = "+this.cadena.length);
                for(var a=0;a<this.cadena.length;a++){
                    if(this.cadena.charAt(a)===String.fromCharCode(65+i)){
                        this.text11.on('clicked', this.clickHandler, this);
                        this.alive++;
                    }
                    else{
                        this.text11.setAlpha(1);
                    }
                }
                
                this.simbolos.set(String.fromCharCode(65+i),this.text11);
            }
    
            this.input.on('gameobjectup', function (pointer, gameObject)
            {
                gameObject.emit('clicked', gameObject);
            }, this);
    
    }

    update ()
    {
        const top = this.hsv[this.i].color;
        const bottom = this.hsv[359 - this.i].color;

        this.text1.setTint(top, top, bottom, bottom);
        
        this.i++;

        if (this.i === 360)
        {
            this.i = 0;
        }
        /////////////////////////////////////
        if(this.alive==0){
            
            this.letra='0';
            this.alive=0;
            for (var i = 0; i < this.cantSimbolos; i++)
            {
                var text11=this.simbolos.get(String.fromCharCode(65+i));
                text11.off('clicked', this.clickHandler);
                text11.input.enabled = false;
                text11.setVisible(false);
                
                
            }
          
            this.tiempo=0;
            this.tiempoLimite=0;
            this.musicPasarNivel.play();
            //console.log('aumentar pulpos.....');
            if(this.yy==1)
            {
                this.octopus1.clearTint();      
                this.octopus1.setAlpha(1);
            }else{
                if(this.yy==2)
                {
                    this.octopus2.clearTint();      
                this.octopus2.setAlpha(1);
                }else{
                    if(this.yy==3)
                    {
                        this.octopus3.clearTint();      
                    this.octopus3.setAlpha(1);
                    }else{
                        if(this.yy==4)
                        {
                            this.octopus4.clearTint();      
                        this.octopus4.setAlpha(1);
                        }else{
                            
                                this.octopus5.clearTint();      
                            this.octopus5.setAlpha(1);
                            this.gameOver();
                                
                        }
                    }
                }
            }
            this.yy++;
            this.cadena=this.frases[this.yy-1];
            
            this.cargarAlfabeto();


this.colocarFrase();

            
        }

        this.tiempoLimite=this.timedEvent.repeatCount;
            this.text.setText('Pendiente: ' + this.alive + '\nTiempo: ' +this.tiempoLimite + '\nELIMINADO : ' +this.letra );
            
            const size = 700;

        this.debug.fillStyle(0x2d2d2d);
        this.debug.fillRect(50,10, size, 20);
//console.log('es el ..  '+this.timedEvent.repeatCount);
        this.debug.fillStyle(0x2dff2d);
        this.debug.fillRect(50, 10, size-(this.timedEvent.repeatCount)*this.temporizador*10, 20);
        ///////////////////////////////////////////
        
    }
    clickHandler (text11)
        {
            this.musicReventar.play();

            this.alive--;
            for (var i = 0; i < this.cantSimbolos; i++)
            {
                if(this.simbolos.get(String.fromCharCode(65+i))==text11){
                    text11.off('clicked', this.clickHandler);
                text11.input.enabled = false;
                text11.setVisible(false);
                this.letra=String.fromCharCode(65+i);
                this.musicLetra.get(String.fromCharCode(65+i)).play();

                var vector=this.cadena.split('');
            
            this.cadena=this.cadena.replace(String.fromCharCode(65+i),'');
            
            this.text1.setText(this.cadena);
                }
            }
            
        }
        gameOver ()
        {
            this.input.off('gameobjectup');
        
console.log(this.alive+'   ooo game over 222 ooo  '+this.tiempoLimite);
        this.registry.set('score', this.alive);
        this.registry.set('tiempo', this.tiempoLimite);

        this.scene.pause();
        this.scene.run('gameOver2');

        }
}