const { Sequelize } = require("sequelize");
require("dotenv").config();
const connection = new Sequelize(
  "ShareUp",
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      options: {
        validateBulkLoadParameters: true,
      },
    },
  }
);
module.exports = {
  connection,
  testConnection: async () => {
    try {
      await connection.authenticate();
      console.log("funcionou");
    } catch (error) {
      console.error({ error: error.message });
    }
  },
};
