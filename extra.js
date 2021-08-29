// For an experimental chatting feature - makes live chat possibe during gameplay
// TThis feature contains a loop bug: 
// After each message is sent, the connection and messages get one extra instance due to the extra call of the whole setupInput function.
// Need to find an alternative to that in order to get back to gameplay from chat.
// Steps:
// 1. Put at the top of client.js file -> const readline = require('readline'); 
// 2. Put the below code inside the handleUserInput function after the last if condition ->

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
