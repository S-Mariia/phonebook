import items from './items';

import { List, StyledLink } from '../AppBar.styled.js';

const Navigation = () => {
  return (
    <nav>
      <List>
        {items.map(({ id, link, text }) => (
          <li key={id}>
            <StyledLink to={link}>{text}</StyledLink>
          </li>
        ))}
      </List>
    </nav>
  );
};

export default Navigation;
