import axios from 'axios';

const url = 'http://localhost:3001/user/profile';

export const getProfile = async () => {
  const result = await axios(`${url}/getprofile`, { withCredentials: true });
  return result;
};

export const getRegisteredUser = async () => {
  const result = await axios(`${url}/getregistereduser`, {
    withCredentials: true,
  });
  return result;
};

export const updateProfile = async updatedData => {
  const result = await axios.patch(`${url}/edit`, updatedData, {
    withCredentials: true,
  });
  return result;
};

export const logout = async () => {
  try {
    await axios(`${url}/logout`, { withCredentials: true });
  } catch (error) {
    console.log(error);
  }
};
