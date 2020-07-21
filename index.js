var button = document.getElementById("enter");
var input = document.getElementById("userinput")

button.addEventListener("click", function(){
  if (input.value === "player.moveRight()") {
    console.log("player.moveRight()");
  } else {
    alert("Wrong move, try again")
  }
})