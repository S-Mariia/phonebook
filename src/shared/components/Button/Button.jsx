import { StyledButton } from './Button.styled';

const Button = ({ type = 'submit', children }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

export default Button;
