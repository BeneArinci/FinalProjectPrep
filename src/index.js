import Player from './player.js'

let canvas = document.getElementById('gameArea');
let ctx = canvas.getContext('2d');

// define game area size
const GAME_HEIGHT = canvas.height;
const GAME_WIDTH = canvas.width;

//ctx.fillRect(0, 600 - 30, 30, 30)
let player = new Player(GAME_HEIGHT, GAME_WIDTH)
player.draw(ctx)