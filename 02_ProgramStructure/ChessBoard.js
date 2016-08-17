/*
Chess board

Write a program that creates a string that represents an 88 grid, using
newline characters to separate lines. At each position of the grid there
is either a space or a “#” character. The characters should form a chess
board.
Passing this string to console.log should show something like this:
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
When you have a program that generates this pattern, define a variable
size = 8 and change the program so that
*/



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