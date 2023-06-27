//connecting with remot mongo DB
const mongoose = require('mongoose');

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopolgy: true,
// };
mongoose
  .connect('mongodb+srv://r0x:012774@cluster0.cxdsd.mongodb.net')
  .then(() => {
    console.log('DB OK');
  });
