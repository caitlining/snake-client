const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.43.245',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  //event handler to handle incoming data and console log it for me, the player
  conn.on('data', (data) => {
    console.log('Server says:', data);
  });

  return conn;
}

module.exports = { connect };