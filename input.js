let connection; // A global scope variable to be used in multiple functions

const handleUserInput = function(data) { // User input mapping function
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write('Move: up');
  }
  if (data === 'a') {
    connection.write("Move: left");
  }
  if (data === 's') {
    connection.write("Move: down");
  }
  if (data === 'd') {
    connection.write("Move: right");
  }
  if (data === '1') {
    connection.write("Say: gotcha");
  }
  if (data === '2') {
    connection.write("Say: I win");
  }
  if (data === '3') {
    connection.write("Say: see ya");
  }
};

const setupInput = function(conn) { // User input framework
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
};