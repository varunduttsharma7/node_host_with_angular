# Sample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.
This lets you serve the angular code + routing the API requuests from the angular code.

const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

const PORT = process.env.PORT || 3000;

app.use(express.static(\_\_dirname + '/dist/sample'));

app.use('/api/\*', createProxyMiddleware({
target: 'https://jsonplaceholder.typicode.com/', changeOrigin: true, pathRewrite: {
[`^/api`]: ''
}
}));

app.get('/\*', (req, res) => {
return res.sendFile(path.join(\_\_dirname));
});

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server running on ${PORT}....`));

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
