const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hola desde el servidor Node!');
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Servidor corriendo en http://0.0.0.0:3000');
});
