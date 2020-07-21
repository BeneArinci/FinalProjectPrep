import Input from './input.js';


var button = document.getElementById("enter");
var userInput = document.getElementById("userinput")
var list = document.querySelector("ul")

var input = new Input()


button.addEventListener("click", function(){

  if (userInput.value === "player.moveRight()") {
    input.addInput("player.moveRight()")
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(userInput.value))
    list.appendChild(li)
    console.log(input);
  } else {
    alert("Wrong move, try again")
  }
})
