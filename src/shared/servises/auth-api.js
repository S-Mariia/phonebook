import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const signup = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  console.log(result);
  setAuthHeader(result.token);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/users/login', data);
  console.log(result);
  setAuthHeader(result.token);
  return result;
};

export const logout = async data => {
  await instance.post('/users/logout');
  clearAuthHeader();
};

export const refreshUser = async token => {
  try {
    setAuthHeader(token);
    const { data: result } = await instance.get('/users/current');
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
