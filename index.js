const express = require("express");
const app = express();
const userRouter = require("./routers/user.js");
const PORT = 3000;

app.use(express.json());
app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
