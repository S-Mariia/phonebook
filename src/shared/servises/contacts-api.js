import { instance } from './auth-api';

export const getAllContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const deleteContact = async id => {
  await instance.delete(`/contacts/${id}`);
  return id;
};

export const addContact = async ({ name, phone }) => {
  const { data } = await instance.post('/contacts', { name, phone });
  return data;
};
