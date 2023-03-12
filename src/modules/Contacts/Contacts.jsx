import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { Title } from './Contacts.styled';

const Contacts = () => {
  return (
    <>
      <ContactForm />

      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
