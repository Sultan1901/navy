const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('./db');

const cors = require('cors');
app.use(cors());
app.use(express());
app.use(express.json());
const memberRouter = require('./routes/router');
app.use(memberRouter);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`SERVER UNDER ATT4CK ON ${PORT}`);
});
