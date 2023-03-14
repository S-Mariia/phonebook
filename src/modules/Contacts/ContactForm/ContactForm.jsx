import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IoMdPerson } from 'react-icons/io';
import { BsTelephoneFill } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

import Button from 'shared/components/Button/Button';
import Loader from 'shared/components/Loader/Loader';
import { Form, Wrap, ClearButton, ButtonContainer } from './ContactForm.styled';

import {
  selectContacts,
  selectIsAddingLoading,
} from 'redux/contacts/contacts-selectors';

import { addContact } from 'redux/contacts/contacts-operations';
import TextField from 'shared/components/TextField/TextField';

import { toast } from 'react-toastify';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsAddingLoading);

  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();

    const alreadyInList = Boolean(
      contacts.find(
        contact => contact.name?.toLowerCase() === state.name?.toLowerCase()
      )
    );

    if (alreadyInList) {
      toast(`${state.name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name: state.name, number: state.number }));

    setState({
      name: '',
      number: '',
    });
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Wrap>
        <TextField
          label={
            <Wrap>
              <IoMdPerson size={20} />
              Name
            </Wrap>
          }
          onChange={handleInputChange}
          type="text"
          name="name"
          value={state.name}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ClearButton
          type="button"
          onClick={() => {
            setState(prevState => ({ ...prevState, name: '' }));
          }}
        >
          <GrClose size={20} />
        </ClearButton>
      </Wrap>

      <Wrap>
        <TextField
          label={
            <Wrap>
              <BsTelephoneFill size={20} />
              Phone
            </Wrap>
          }
          onChange={handleInputChange}
          type="tel"
          name="number"
          value={state.number}
          placeholder="Enter phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ClearButton
          type="button"
          onClick={() => {
            setState(prevState => ({ ...prevState, number: '' }));
          }}
        >
          <GrClose size={20} />
        </ClearButton>
      </Wrap>
      <ButtonContainer>
        <Button type="submit">
          Add contact
          {isLoading && <Loader size={30} shift="175" />}
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export default ContactForm;
