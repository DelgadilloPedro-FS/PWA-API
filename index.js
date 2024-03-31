const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require("./routers/user.js");
const swaggerRouter = require("./routers/swagger.js");

const app = express()
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', userRouter)
app.use('/',swaggerRouter)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

