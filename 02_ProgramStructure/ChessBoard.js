var size = prompt("Size of the board?");

var s = parseInt(size); // not sure if needed :/

var board = "";

for (var i = 0; i < s; i++) {
  for (var n = 0; n < s; n++) {
    if ((i + n) % 2 == 0) 
      board += " ";
   else 
      board += "#";
  }
  board += "\n";
}
console.log(board);