const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log("Successfully connected to the server");
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = {connect};
