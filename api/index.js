const express = require('express');
const app = express();
require('./db');
const cors = require('cors');
const morgan = require('morgan');
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods',  'GET, POST, OPTIONS, PUT, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if ('OPTIONS' == req.method) {
     res.sendStatus(200);
   }
   else {
     next();
   }});
app.use(express());
app.use(express.json());
app.use(morgan('tiny'));
const memberRouter = require('./routes/router');
app.use(memberRouter);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`SERVER Running ON ${PORT}`);
});
