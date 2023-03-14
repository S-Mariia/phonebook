import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactItem from 'modules/Contacts/ContactItem/ContactItem';
import Loader from 'shared/components/Loader/Loader';
import { Table, Container } from './ContactList.styled';

import {
  selectIsLoading,
  selectWithError,
} from 'redux/contacts/contacts-selectors';
import { selectFilteredContacts } from 'redux/filter/filter-selectors';

import { fetchContacts } from 'redux/contacts/contacts-operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectWithError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {error !== null && <p>{error}</p>}

      <Table>
        <tbody>
          {filteredContacts.map(contact => (
            <ContactItem key={contact.id} item={contact} />
          ))}
        </tbody>
        {isLoading && <Loader yShift={-10} />}
      </Table>
    </Container>
  );
};

export default ContactList;
