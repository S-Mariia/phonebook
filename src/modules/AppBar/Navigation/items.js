import { nanoid } from '@reduxjs/toolkit';

const items = [
  {
    id: nanoid(),
    text: 'Home',
    link: '/',
    private: false,
  },
  {
    id: nanoid(),
    text: 'Contacts',
    link: '/contacts',
    private: true,
  },
];

export default items;
