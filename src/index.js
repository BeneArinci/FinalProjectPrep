import Input from './input.js';


var btnEnterMove = document.getElementById("enter");
var userInput = document.getElementById("userinput")
var list = document.querySelector("ul")

var btnDeleteMoves = document.getElementById("delete");

var input = new Input()

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
