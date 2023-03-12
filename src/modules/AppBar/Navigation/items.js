import { nanoid } from '@reduxjs/toolkit';

const items = [
  {
    id: nanoid(),
    text: 'Home',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Contacts',
    link: '/contacts',
  },
];

export default items;
