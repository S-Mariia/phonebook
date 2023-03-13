import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const signup = async data => {
  try {
    const { data: result } = await instance.post('/users/signup', data);
    console.log(result);
    setAuthHeader(result.token);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async data => {
  try {
    const { data: result } = await instance.post('/users/login', data);
    console.log(result);
    setAuthHeader(result.token);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = async data => {
  try {
    await instance.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    console.log(error.message);
  }
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
