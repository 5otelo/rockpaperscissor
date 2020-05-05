var winner= "nobody";
  

  var a = document.getElementById("rockButton").value;
  var b = document.getElementById("paperButton").value;
  var c = document.getElementById("scissorButton").value;
  var x = document.getElementById("rockButton2").value;
  var y = document.getElementById("paperButton2").value;
  var z = document.getElementById("scissorButton2").value;

function dosomething(){
if(val.id == "rockButton" && val.id == "rockButton2"){
  document.getElementById("winner").innerHTML=winner = "tie";
}else if(val.id == "rockButton" && val.id == "paperButton2"){
  document.getElementById("demo").innerHTML="Player 2 Wins!";
}else if(val.id == "rockButton" && val.id == "scissorsButton2"){
  document.getElementById("demo").innerHTML="Player 1 Wins!";
}else if(val.id == "paperButton" && val.id == "paperButton2"){
  document.getElementById("demo").innerHTML="Tie, play again";
}else if(val.id == "paperButton" && val.id == "rockButton2"){
  document.getElementById("demo").innerHTML="Player 1 Wins!";
}else if(val.id == "paperButton" && val.id == "scissorButton2"){
  document.getElementById("demo").innerHTML="Player 2 Wins!";
}else if(val.id == "scissorButton" && val.id == "scissorButton2"){
  document.getElementById("demo").innerHTML="Tie, play again";
}else if(val.id == "scissorButton" && val.id == "rockButton2"){
  document.getElementById("demo").innerHTML="Player 2 Wins!";
}else if(val.id == "scissorButton" && val.id == "paperButton2"){
  document.getElementById("demo").innerHTML="Player 1 Wins!";
}
}
