import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

import Navigation from './Navigation/Navigation';
import AuthNav from './AuthNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';

import { Header } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </Header>
  );
};

export default AppBar;
