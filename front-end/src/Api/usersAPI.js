// const axios = require("axios").create({
//   baseURL: "http://localhost:3001/",
// });
const axios = require('axios')

module.exports = {
  sessionInfo: async () => {
    const result = await axios.get('http://localhost:3001/user/userinfo')
    return result
  }
};
