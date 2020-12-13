const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    if (req.url === '/Q&A') {
        fs.readFile('./WebPageQ&A.html', function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }


        })
    }
});

server.listen(3500);