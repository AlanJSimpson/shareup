const axios = require("axios");

const url = "http://localhost:3001/user/profile/edit";

export const getProile = async () => {};

export const updateProfile = async (updatedData) => {
  const result = await axios.patch(url, updatedData);
  return result;
};
