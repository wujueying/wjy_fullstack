const mime = require('mime-types')
const http = require('http');
const fs = require('fs')
const server = http.createServer((req, res) => {
    const url = new URL('http://root:123456@1.2.3.4:8080/pathxxxx?query=123&query2=456#hhh')
    res.write(`protocol:${url.protocol}\n`);;
    res.write(`username:${url.username}\n`);
    res.write( `password: ${url.password}\n`);
    res.write(`host: ${url.host}\n`);
    res.write(`port: ${url.port}\n`);
    res.write(`pathname: ${url.pathname}\n`);
    res.write(`search: ${url.search}\n`);
    res.write(`hash: ${url.hash}\n`);
    res.end();
});

server.listen(9527, () => {
  console.log('Web Server started at port 9527');
});
