const express = require("express"),
  LoginRouter = require("./routers/loginRouter"),
  RegisterRouter = require("./routers/registerRouter"),
  app = express();

app.use(express.json());

app.use("/login", LoginRouter);
app.use("/register", RegisterRouter);

app.listen(3000, () => console.log("Api Started!"));
