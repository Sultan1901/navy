const express = require('express');
const app = express();
require('./db');
const cors = require('cors');
const morgan = require('morgan');
app.use(cors());
app.use(express());
app.use(express.json());
app.use(morgan('tiny'));
const memberRouter = require('./routes/router');
app.use(memberRouter);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`SERVER Running ON ${PORT}`);
});
