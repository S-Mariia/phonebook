import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

import items from './items';

import { List, StyledLink } from '../AppBar.styled.js';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const allowedLinks = isLoggedIn ? items : items.filter(item => !item.private);

  return (
    <nav>
      <List>
        {allowedLinks.map(({ id, link, text }) => (
          <li key={id}>
            <StyledLink to={link}>{text}</StyledLink>
          </li>
        ))}
      </List>
    </nav>
  );
};

export default Navigation;
