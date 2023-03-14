import styled from 'styled-components';

export const Tr = styled.tr`
  height: 36px;
  font-size: 17px;
  font-weight: 600;
  color: #2a2a2a;
  background-color: #d8d9b0;
  &:nth-child(2n) {
    background-color: rgb(188, 189, 128);
  }
`;

export const Td = styled.td`
  position: relative;
  text-align: center;
  padding: ${({ children }) => {
    if (children?.props?.type === 'button') {
      return '0px';
    }
    return '5px 10px';
  }};

  min-width: ${({ children }) => {
    if (children?.props?.type === 'button') {
      return '50px';
    }
    return '175px';
  }};
`;

export const Btn = styled.button`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3px;
  padding-bottom: 3px;
  fill: #2a2a2a;
  transition: fill 250ms linear;

  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
    fill: rgb(158, 44, 44);
  }
`;
