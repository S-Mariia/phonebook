import { List, StyledLink } from '../AppBar.styled.js';

const AuthNav = () => {
  return (
    <List>
      <li>
        <StyledLink to="/login">Log In</StyledLink>
      </li>
      <li>
        <StyledLink to="/register">Sign Up</StyledLink>
      </li>
    </List>
  );
};

export default AuthNav;
