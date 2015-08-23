var _Robot = require('./robot.js');
var _Table = require('./table.js');


var table = new _Table(5);
var jed = new _Robot(table);

jed.place(0, 0, 'NORTH');
jed.move();
// jed.place(-1, 6, 'WEST');

// jed.place(4, 4, 'NORTH');

jed.place(0, 0, 'NORTH');
jed.left();

jed.place(1, 2, 'EAST');
jed.move();
jed.move();
jed.left();
jed.move();

console.log(jed.report().x +  " " + jed.report().y + " " + jed.report().f);