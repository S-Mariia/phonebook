import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { mainTextColor, accentColor } from 'shared/colors';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 20px;
  border-bottom: thick double ${mainTextColor};

  margin-bottom: 30px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 600;
  font-size: 18px;
  &.active {
    color: ${accentColor};
    font-size: 19px;
    font-weight: 700;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 12px;

  & > li {
    padding: 4px;
  }
`;
