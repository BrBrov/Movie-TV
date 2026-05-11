import startServer from './src/server';

const port = process.env.PORT || '3000';

const server = startServer(port);

console.log('Listening on : http://' + server.url.host);