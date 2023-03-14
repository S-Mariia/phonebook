import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { selectIsDeletingLoading } from 'redux/contacts/contacts-selectors';

import { IconContext } from 'react-icons';
import { MdDelete } from 'react-icons/md';

import Loader from 'shared/components/Loader/Loader';

import { Tr, Td, Btn } from './ContactItem.styled';

const ContactItem = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsDeletingLoading);
  const deletedId = useRef(null);

  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{number}</Td>
      <Td>
        <Btn
          onClick={() => {
            deletedId.current = id;
            dispatch(deleteContact(id));
          }}
          type="button"
        >
          <IconContext.Provider
            value={{
              size: 20,
            }}
          >
            {isLoading && deletedId.current === id ? (
              <Loader size={30} />
            ) : (
              <MdDelete />
            )}
          </IconContext.Provider>
        </Btn>
      </Td>
    </Tr>
  );
};

export default ContactItem;
