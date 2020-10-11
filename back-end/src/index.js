const express = require("express");

const userRouter = require("./Router/UsersRouter");
const { testConnection } = require("./database/connection.js");

testConnection();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", userRouter);

app.listen(3001);
