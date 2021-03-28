import { Game4 } from './game4.js';
import { Game5 } from './game5.js';
import {Game6}from './game6.js'
import {Game7}from './game7.js'
import {Game8} from './game8.js'
import {Game3}from './game3.js';
import { Nivel1 } from './Nivel1.js';
import {Boot} from './Boot.js';
import { Instructions } from "./Instructions.js";
import { StackerGame } from "./StackerGame.js";
import { GameOver } from "./GameOver.js";
import {Nivel2} from "./Nivel2.js";
import {Nivel3} from "./Nivel3.js";
import {Animales} from "./Animales.js";
import { Octopus } from './octopus.js';
import { GameOver2 } from './GameOver2.js';
import { GameOver3 } from './GameOver3.js';
import { GameOver4 } from './GameOver4.js';
import { Fin } from './fin.js';
const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    //scene:[Game7]
    //CONSTRUIR PALABRAS
    //
    //scene:[Fin]
    //scene:[Animales]
   //
    //scene:[Game7,GameOver4,Fin]
    //scene:[Nivel1,GameOver2]
    //scene:[GameOver]
    //scene: [Game8,Game4,Nivel1,Game7]
    scene: [ Boot, Instructions, StackerGame, GameOver,Nivel1,GameOver2,Nivel2,GameOver3,Game7,GameOver4,Fin]
};

const game = new Phaser.Game(config);
