import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from 'redux/auth/auth-selectors';

import { logout } from 'redux/auth/auth-operations';

import { Wrap, Text, Button } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <Wrap>
      <Text>Hello, {userName}</Text>
      <Button onClick={() => dispatch(logout())}>Log out</Button>
    </Wrap>
  );
};

export default UserMenu;
