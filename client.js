const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  //event handler to handle incoming data and console log it for me, the player
  conn.on('data', (data) => {
    console.log('Server says:', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: CCI');
  });

  return conn;
}

module.exports = { connect };