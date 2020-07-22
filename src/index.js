import Player from "./player.js";
import Input from './input.js';

let btnEnterMove = document.getElementById("enter");
let userInput = document.getElementById("userinput")
let list = document.querySelector("ul")
let btnDeleteMoves = document.getElementById("delete");
let canvas = document.getElementById("gameArea");
let ctx = canvas.getContext("2d");
let btnPlay = document.getElementById("play")

// define game area size
const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

// modify canvas size
canvas.height = GAME_HEIGHT;
canvas.width = GAME_WIDTH;


let player = new Player(GAME_HEIGHT, GAME_WIDTH);
let input = new Input()

// placeholder data
// let mockData = [
//   "player.moveRight()",
//   "player.moveRight()",
//   "player.moveRight()",
//   "player.moveLeft()",
//   "player.moveLeft()",
//   "player.moveLeft()",
//   "player.moveRight()"
// ];

// player.start(mockData);

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

btnEnterMove.addEventListener("click", function(){

  if (userInput.value === "player.moveRight()") {
    input.addInput("player.moveRight()")
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(userInput.value))
    list.appendChild(li)
    console.log(input);
    userInput.value = ""
  } else {
    alert("Wrong move, try again")
  }
})

btnDeleteMoves.addEventListener("click", function(){
  input.restore()
  list.innerHTML = '';
  console.log(input.inputs)
});

btnPlay.addEventListener("click", function(){
  player.start(input.inputs)
});
