const { Sequelize } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(
  "ShareUp",
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mssql",
    dialectOptions: {
      options: {
        validateBulkLoadParameters: true,
      },
    },
  }
);
module.exports = {
  testConnection: async () => {
    try {
      await sequelize.authenticate();
      console.log("funcionou");
    } catch (error) {
      console.error({ error: error.message });
    }
  },
};
