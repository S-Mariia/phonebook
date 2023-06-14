import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const instance = axios.create({
  baseURL: `${BASE_URL}/api`,
});

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const signup = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  setAuthHeader(result.token);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/users/login', data);
  setAuthHeader(result.token);
  return result;
};

export const logout = async () => {
  await instance.post('/users/logout');
  clearAuthHeader();
};

export const refreshUser = async token => {
  try {
    setAuthHeader(token);
    const { data: result } = await instance.get('/users/current');
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
