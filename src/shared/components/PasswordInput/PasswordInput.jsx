import { useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import { BiShow } from 'react-icons/bi';

import { Input, Label, InputContainer } from '../TextField/TextField.styled';
import { Wrap } from './PasswordInput.styled';

const PasswordInput = ({ label, onChange, type, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  const [shownPassword, setShownPassword] = useState(false);
  const handleClick = () => setShownPassword(prevState => !prevState);

  if (type !== 'password') {
    return;
  }

  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <Wrap>
        <Input
          id={id}
          onChange={onChange}
          type={shownPassword ? 'text' : 'password'}
          {...props}
        />
        <BiShow
          size={20}
          style={{ marginLeft: -30, cursor: 'pointer' }}
          onClick={handleClick}
        />
      </Wrap>
    </InputContainer>
  );
};

export default PasswordInput;
