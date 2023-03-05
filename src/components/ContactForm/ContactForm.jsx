import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IconContext } from 'react-icons';
import { IoMdPerson } from 'react-icons/io';
import { BsTelephoneFill } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

import Loader from 'components/Loader/Loader';
import {
  Form,
  Label,
  Input,
  Button,
  Wrap,
  ClearButton,
} from './ContactForm.styled';

import {
  selectContacts,
  selectIsAddingLoading,
} from 'redux/contacts/contacts-selectors';

import { addContact } from 'redux/contacts/contacts-operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsAddingLoading);

  const [state, setState] = useState({
    name: '',
    phone: '',
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
      alert(`${state.name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name: state.name, phone: state.phone }));

    setState({
      name: '',
      phone: '',
    });
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Label>
        <Wrap>
          <IconContext.Provider
            value={{
              size: 20,
            }}
          >
            <IoMdPerson />
          </IconContext.Provider>
          Name
        </Wrap>
        <Wrap>
          <Input
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
              console.log('Click');
            }}
          >
            <GrClose size={20} />
          </ClearButton>
        </Wrap>
      </Label>
      <Label>
        <Wrap>
          <IconContext.Provider
            value={{
              size: 20,
            }}
          >
            <BsTelephoneFill />
          </IconContext.Provider>
          Phone
        </Wrap>
        <Wrap>
          <Input
            onChange={handleInputChange}
            type="tel"
            name="phone"
            value={state.phone}
            placeholder="Enter phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ClearButton
            type="button"
            onClick={() => {
              console.log('Click');
            }}
          >
            <GrClose size={20} />
          </ClearButton>
        </Wrap>
      </Label>
      <Button type="submit">
        Add contact
        {isLoading && <Loader size={30} shift="175" />}
      </Button>
    </Form>
  );
};

export default ContactForm;