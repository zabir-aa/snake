// const readline = require('readline'); // For an experimental chatting feature (function below)

let connection;

const handleUserInput = function(data) {
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
// A chatting option while playing/ has a minor bug - but functional
/*if (data === '\`') {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('type message: ', (answer) => {
      connection.write(`Say: ${answer}`);
      rl.close();
      setupInput(connection);
    });
  } */
};

const setupInput = function(conn) {
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