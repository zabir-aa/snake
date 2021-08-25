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
    conn.write('Name: AAZ');
  });
 /* conn.on('connect', () => {
    conn.write('Move: up');
    setInterval(() => conn.write('Move: left'),1000);
    setInterval(() => conn.write('Move: down'),3000);
    setInterval(() => conn.write('Move: right'),6000);
    setInterval(() => conn.write('Move: up'),9000);
  }); */
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = {connect};
