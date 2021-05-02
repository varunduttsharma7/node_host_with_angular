const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/sample'));

app.use('/api/*', createProxyMiddleware({
    target: 'https://jsonplaceholder.typicode.com/', changeOrigin: true, pathRewrite: {
        [`^/api`]: ''
    }
}));

app.get('/*', (req, res) => {
    return res.sendFile(path.join(__dirname));
});

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server running on ${PORT}....`));