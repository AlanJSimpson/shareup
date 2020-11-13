const axios = require("axios");

const url = "http://localhost:3001/user/profile/edit";

export const getProfile = async () => {
  const result = await axios('http://localhost:3001/user/profile/getprofile', { withCredentials: true })
  return result
};

export const getRegisteredUser = async () => {
  const result = await axios('http://localhost:3001/user/profile/getregistereduser', { withCredentials: true })
  return result
};


export const updateProfile = async (updatedData) => {
  const result = await axios.patch(url, updatedData, { withCredentials: true });
  return result;
};

export const logout = async () => {
  try {
    await axios("http://localhost:3001/user/logout", { withCredentials: true })
  } catch (error) {
    console.log('aaaaaa',error)
  }

}
