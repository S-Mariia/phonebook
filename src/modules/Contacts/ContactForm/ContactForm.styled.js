import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ClearButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  margin-left: 360px;
  height: 36px;
  border: none;
  color: #2a2a2a;
  transition: color 250ms linear;
  position: absolute;
  bottom: 0;
  right: left;
  z-index: 2;

  &:hover {
    color: rgb(158, 44, 44);
  }
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
  fill: #2a2a2a;
`;
