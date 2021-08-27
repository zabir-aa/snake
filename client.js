const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding("utf8");   // interpret incoming data as text
  conn.on('connect', () => {
    console.log("Successfully connected to the server");
    conn.write('Name: AAZ');
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = {connect};
