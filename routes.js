const fs = require('fs')

const requestHandler = (req, res) => {
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
            fs.writeFile('message.txt',message,err=>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end()
            })

            res.write(`<p>Entered Message: ${message}</p>`);

            res.write('<html><head><title>Welcome Home</title></head><body>');
            res.write('<form action="/message" method="POST">');
            res.write('Enter Your Message<input type="text" name="message">');
            res.write('<button type="submit">Submit</button>');
            res.write('</form>');
            res.write('</body></html>');
            // res.end();

            res.end();
        });
    }
}

// module.exports={
//     handler: requestHandler,
//     someText:'some hard coded text'
// };

// module.exports.handler=requestHandler;
// module.exports.someText='some hard coded text'

exports.handler=requestHandler;
exports.someText='some hard coded text'