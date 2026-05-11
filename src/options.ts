import { type Serve } from 'bun';
import staticRoutes from './routes/staicRoutes';
import apiRoutes from './routes/apiRoutes';

const options: Serve.Options<undefined, string> = {
  routes: {
    ...staticRoutes,
    ...apiRoutes
  }
}

export default options;