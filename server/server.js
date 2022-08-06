'use strict';
const app = require('./routes');

const PORT = 3000;
app.listen(process.env.PORT || PORT, (req, res) => {
  console.log(`Server is running on port: ${process.env.PORT || PORT}`);
});
