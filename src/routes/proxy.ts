const express = require('express');
const https = require('https');

function responseHandler(res) {
  return (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.send(data);
    });
  };
}

export const proxyRouter = express.Router();

proxyRouter.route('/').get( async (req, res) => {
  await https.get(`https://www.freeforexapi.com/api/live?pairs=USD${req.query.curr},USDRUB,USDEUR`, responseHandler(res))
});
