const express = require("express");
const { Sequelize } = require("sequelize");

const userRouter = require("./Router/UsersRouter");

const app = express();

app.use("user", userRouter);

/* conexão com o banco de dados*/

const sequelize = new Sequelize("shareUp", "allanjsimpson", "290807", {
  host: "localhost",
  dialect: "mssql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("funcionou");
  } catch (error) {
    console.error({ error: error.message });
  }
})();

app.listen(3001);
