import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { Title, Wrap, Frame } from './Contacts.styled';

const Contacts = () => {
  return (
    <Wrap>
      <Frame>
        <Title>Add contact</Title>
        <ContactForm />
      </Frame>

      <Frame>
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Frame>
    </Wrap>
  );
};

export default Contacts;
