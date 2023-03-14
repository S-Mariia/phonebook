import styled from 'styled-components';
import { accentColor } from 'shared/colors';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 18px;
`;

export const Button = styled.button`
  display: inline-block;
  outline: 0;
  border: none;
  cursor: pointer;
  line-height: 1.2rem;
  font-weight: 700;
  background: ${accentColor};
  padding: 8px 14px 9px;
  font-size: 15px;
  border-radius: 4px;
  color: #fff;
  height: 36px;
  box-shadow: none;
  transition: all 250ms ease-in-out;
  :hover {
    box-shadow: 0 2px 4px rgb(0 0 0 / 30%);
  }
`;
