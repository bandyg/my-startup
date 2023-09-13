const fs = require('fs');
const https = require('https');
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const options = {
  key: fs.readFileSync('./keyNCert/RootCA.key'),
  cert: fs.readFileSync('./keyNCert/RootCA.pem'),
  ca: [fs.readFileSync('./keyNCert/RootCA.crt')],
};

// Create the Next.js app
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

// Create the HTTPS server
https
  .createServer(options, (req, res) => {
    // Parse request URL
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  })
  .listen(443, (err) => {
    if (err) {
      throw err;
    }
    console.log('HTTPS server started on port 443');
  });

// Create an HTTP server to redirect to HTTPS
//   createServer((req, res) => {
//     res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
//     res.end();
//   }).listen(80, (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log('HTTP server started on port 80');
//   });

// Start the Next.js app
app.prepare().then(() => {
  console.log('Next.js app started');
});

//https://github.com/FiloSottile/mkcert
//https://gist.github.com/cecilemuller/9492b848eb8fe46d462abeb26656c4f8
