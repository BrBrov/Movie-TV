import { type Serve } from 'bun';

const apiRoutes: Serve.Routes<undefined, string> = {
  '/api': {
    POST: (req) => {
      if (!req.body) {
        return Response.json({ requestData: 'Empty body!!!' });
      }

      return req.body.json()
        .then(data => {
          if (!data || !data.data) {
            return Response.json({ requestData: 'Wrong body!!!' });
          }
          return Response.json({ requestData: 'You request ' + data.data + '!!!' });
        })
    }
  }
}

export default apiRoutes;