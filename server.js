const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.write('<html><head><title>Welcome Home</title></head><body>');
        res.write('<form action="/message" method="POST">');
        res.write('Enter Your Message<input type="text" name="message">');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body></html>');
        res.end();
    }


    if (req.url === "/message" && req.method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]; 

            res.write(`<p>Entered Message: ${message}</p>`);

            res.write('<html><head><title>Welcome Home</title></head><body>');
            res.write('<form action="/message" method="POST">');
            res.write('Enter Your Message<input type="text" name="message">');
            res.write('<button type="submit">Submit</button>');
            res.write('</form>');
            res.write('</body></html>');
            res.end();

            


            res.end();
        });
    }
});

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});