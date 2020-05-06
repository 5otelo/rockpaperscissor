var winner= "nobody";
var player1 ="";
var player2 ="";
document.getElementById("rock1").onclick = function(){
 player1 = "Rock";
}
document.getElementById("paper1").onclick = function(){
 player1 = "Paper";
}
document.getElementById("scissor1").onclick = function(){
 player1 = "Scissor";
}
document.getElementById("rock2").onclick = function(){
 player2 = "Rock";
}
document.getElementById("paper2").onclick = function(){
 player2 = "Paper";
}
document.getElementById("scissor2").onclick = function(){
 player2 = "Scissor";
}
document.getElementById("check").onclick = function(){
if(player1=="Rock" && player2=="Rock"){
winner="Tie! Try again.";
document.getElementById("winner").innerHTML = winner;
}
else if(player1=="Rock" && player2=="Paper"){
winner="Player 2 wins!";
document.getElementById("winner").innerHTML = winner;
}else if(player1=="Rock" && player2=="Scissor"){
winner="Player 1 wins!";
document.getElementById("winner").innerHTML = winner;
}else if(player1=="Paper" && player2=="Rock"){
winner="Player 1 wins!";
document.getElementById("winner").innerHTML = winner;
}else if(player1=="Paper" && player2=="Paper"){
winner="Tie! Try again.";
document.getElementById("winner").innerHTML = winner;
}else if(player1=="Paper" && player2=="Scissor"){
winner="Player 2 wins!";
document.getElementById("winner").innerHTML = winner;
}else if(player1=="Scissor" && player2=="Rock"){
winner="Player 2 wins!";
document.getElementById("winner").innerHTML = winner;
}else if(player1=="Scissor" && player2=="Paper"){
winner="Player 1 wins!";
document.getElementById("winner").innerHTML = winner;
}else if(player1=="Scissor" && player2=="Scissor"){
winner="Tie! try again.";
document.getElementById("winner").innerHTML = winner;
}

}
