import options from './options';

function startServer(port: string) {
  options.port = port;
  return Bun.serve(options);
}

export default startServer;