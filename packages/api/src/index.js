const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const compress = require('compression');
const cors = require('cors');
const app = express();
require('./mongoose');

// Enable CORS, security, compression, favicon and body parsing
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// --------------------------------------------------------------------------
// Routes
// --------------------------------------------------------------------------
app.use('/', require('./routes'));

app.listen(8080, () => {
  console.log('Server listening at 8080');
});
