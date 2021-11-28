const app = require('express')();
const https = require('https');
const cors = require('cors');


app.use(cors());

app.get('/search/:query', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  https.get(
    `https://suggestqueries.google.com/complete/search?client=chrome&q=${req.params.query}`
  , {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 's-max-age=1, stale-while-revalidate'
  }, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      const suggestions = JSON.parse(data)[1];

      res.json(suggestions)
    })
  });
});

app.listen(80, () => console.log('Server started at http://localhost:80'))
