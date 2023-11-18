const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-type', 'text/html');

    if (req.url === '/home') {
        res.write('<html><head><title>Welcome Home</title></head><body><h1>Welcome home</h1></body></html>');
    } else if (req.url === '/about') {
        res.write('<html><head><title>About Us</title></head><body><h1>Welcome to About Us page</h1></body></html>');
    } else if (req.url === '/node') {
        res.write('<html><head><title>Node.js Project</title></head><body><h1>Welcome to my Node.js project</h1></body></html>');
    } else {
        res.write('<html><head><title>My First Page</title></head><body><h1>Hello From my node.js server</h1></body></html>');
    }

    res.end();
});

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});
