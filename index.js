const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = 5000;

app.use(express.json());
routes(app);

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
