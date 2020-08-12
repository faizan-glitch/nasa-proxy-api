const express = require('express');
const dotenv = require('dotenv');
const logger = require('morgan');
const insightAPI = require('./api/insight');

dotenv.config();

const app = express();

app.set('trust proxy', 1);

if(process.env.NODE_ENV === 'development') {
  app.use(logger('dev')); 
}

app.get('/api/insight', insightAPI);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

