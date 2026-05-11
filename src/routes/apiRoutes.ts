import {type Serve} from 'bun';

const apiRoutes: Serve.Routes<undefined, string> = {
  '/api': {
    POST: async (req) => {
      if(!req.body) {
        return Response.error();
      }

      const data = await req.body.json();

      if (!data || !data.data) {
        return Response.json({requestData: 'error'});
      }

      return Response.json({requestData: 'You request ' + data.data + '!!!'});
    }
  }
}

export default apiRoutes;