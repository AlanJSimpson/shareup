import axios from 'axios';

export default async () => {
  const result = await axios.get('http://localhost:3001/user/userinfo', {
    withCredentials: true,
  });
  return result;
};
