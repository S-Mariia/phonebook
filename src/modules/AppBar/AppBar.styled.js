import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 30px;
  border-bottom: 1px solid black;

  margin-bottom: 20px;
`;

export const StyledLink = styled(NavLink)`
  &.active {
    color: darkgreen;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 12px;

  & > li {
    padding: 4px;
  }
`;
