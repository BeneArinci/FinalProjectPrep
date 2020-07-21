import Input from './input.js';


var button = document.getElementById("enter");
var userInput = document.getElementById("userinput")

var input = new Input()


button.addEventListener("click", function(){

  if (userInput.value === "player.moveRight()") {
    console.log("player.moveRight()");
    input.addInput("player.moveRight()")
    console.log(input);
  } else {
    alert("Wrong move, try again")
  }
})
