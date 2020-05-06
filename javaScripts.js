var winner= "nobody";
var player1 ="";
var player2 ="";
document.getElementById("rock1").onclick = function(){
 player1 = "Rock";
}
document.getElementById("rock1").onclick = function(){
 player1 = "Paper";
}
document.getElementById("rock1").onclick = function(){
 player1 = "Scissor";
}
document.getElementById("rock1").onclick = function(){
 player1 = "Rock";
}
document.getElementById("rock1").onclick = function(){
 player1 = "Paper";
}
document.getElementById("rock1").onclick = function(){
 player1 = "Scissor";
}
document.getElementById("check") = function(){
if(player1=="Rock" && player2=="Rock"){
winner="Tie! Try again.";
}else if(player1=="Rock" && player2=="Paper"){
winner="Player 2 wins!";
}else if(player1=="Rock" && player2=="Scissor"){
winner="Player 1 wins!";
}else if(player1=="Paper" && player2=="Rock"){
winner="Player 1 wins!";
}else if(player1=="Paper" && player2=="Paper"){
winner="Tie! Try again.";
}else if(player1=="Paper" && player2=="Scissor"){
winner="Player 2 wins!";
}else if(player1=="Scissor" && player2=="Rock"){
winner="Player 2 wins!";
}else if(player1=="Scissor" && player2=="Paper"){
winner="Player 1 wins!";
}else if(player1=="Scissor" && player2=="Scissor"){
winner="Tie! try again.";
}
 document.getElementById("winner").innerHTML=winner;
}
