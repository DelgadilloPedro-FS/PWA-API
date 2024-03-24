const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./routers/user')

const app = express()
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', userRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

