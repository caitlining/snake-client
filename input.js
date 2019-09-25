let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function (key) {

 if (key === '\u0003' || key === 'q') {
 process.exit();
 }; 

 if (key === 'w') {
   connection.write("Move: up");
 };

 if (key === "a") {
   connection.write("Move: left");
 };

 if (key === "s") {
   connection.write("Move: down");
 };

 if (key === "d") {
   connection.write("Move: right");
 };

 if (key === "r") {
   connection.write("Say: I WIN NOW");
 };

 if (key === "t") {
   connection.write("Say: EEEP!");
 };

 if (key === "e") {
   connection.write("Say: PLEASE MOVE");
 };

 if (key === "g") {
   connection.write("Say: I'm SO HUNGRY");
 }
}

module.exports = { setupInput };