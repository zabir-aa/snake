const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding("utf8");   // interpret incoming data as text
  conn.on('connect', () => {
    console.log("Successfully connected to the server"); // Confirmation prompt after a new connection
    conn.write('Name: AAZ');
  });
  conn.on("data", (data) => { // To display any data received from the server
    console.log(data);
  });
  return conn;
};

module.exports = {connect};
