const http = require('http');
const hostname = 'localhost'; // 127.0.0.1
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello FPT University');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
