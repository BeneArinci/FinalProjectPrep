import Player from "./player.js";

let canvas = document.getElementById("gameArea");
let ctx = canvas.getContext("2d");

// define game area size
const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

// modify canvas size
canvas.height = GAME_HEIGHT;
canvas.width = GAME_WIDTH;


let player = new Player(GAME_HEIGHT, GAME_WIDTH);

// placeholder data
let mockData = [
  "player.moveRight()",
  "player.moveRight()",
  "player.moveRight()",
  "player.moveLeft()",
  "player.moveLeft()",
  "player.moveLeft()",
  "player.moveRight()"
];

player.start(mockData);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  player.update(deltaTime);
  player.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();