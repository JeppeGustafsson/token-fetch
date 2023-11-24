import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3002;

const KEY =
  'Basic ZWJqNVRJS1o0UlF0emlnQVFMYUVkNkxGblk4YTpWQ284YlJHYjU3d1RRNEZaMmVJTzBCcDRoYmNh';

const options = {
  origin: 'https://julbord-countdown.web.app',
};

app.use(cors(options));

app.get('/', async (req, res) => {
  const response = await fetch(
    'https://ext-api.vasttrafik.se/token',
    {
      method: 'POST',
      headers: {
        Authorization: KEY,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    }
  );
  const data = await response.json();
  res.send(data);
});

app.listen(port, () => {
  console.log('listening on port: ' + port);
});
