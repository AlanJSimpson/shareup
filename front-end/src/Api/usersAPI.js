const axios = require("axios").create({
  baseURL: "http://localhost:3000/",
});

module.exports = {
  registerUser: async () => {
    return axios.post("user/register");
  },
};
