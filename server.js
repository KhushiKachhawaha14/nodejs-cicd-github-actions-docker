const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Node.js Demo App!</h1><p>Successfully deployed via GitHub Actions and Docker.</p>');
});

app.listen(port, () => {
  console.log(`Demo app listening at http://localhost:${port}`);
});
