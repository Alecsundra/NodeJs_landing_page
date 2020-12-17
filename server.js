  
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log('request made');
});

// localhost is the default value for 2nd argument
server.listen(port, 'localhost', () => {
    console.log(`Server is listening on ${port}`);
});