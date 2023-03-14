import styled from 'styled-components';
import { accentColor } from 'shared/colors';

export const StyledButton = styled.button`
  position: relative;
  font-size: 17px;
  font-weight: 700;
  width: 180px;
  padding: 8px 30px;
  line-height: 1.2rem;
  background: ${accentColor};

  border: none;
  border-radius: 4px;
  color: #fff;
  height: 36px;
  box-shadow: none;
  transition: all 250ms ease-in-out;
  :hover {
    box-shadow: 0 2px 4px rgb(0 0 0 / 30%);
    cursor: pointer;
  }
`;
