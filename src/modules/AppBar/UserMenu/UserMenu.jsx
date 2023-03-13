import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from 'redux/auth/auth-selectors';

import { logout } from 'redux/auth/auth-operations';

import { Wrap } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <Wrap>
      <p>Hello, {userName}</p>
      <button onClick={() => dispatch(logout())}>Log out</button>
    </Wrap>
  );
};

export default UserMenu;
