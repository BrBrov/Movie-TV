import {type Serve} from 'bun';
import indexHTML from '../client/index.html';

const staticRoutes: Serve.Routes<undefined, string> = {
  '/index.html': indexHTML,
  '/': async () => Response.redirect('/index.html', 307)
}

export default staticRoutes;