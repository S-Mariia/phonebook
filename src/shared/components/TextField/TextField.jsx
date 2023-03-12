import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { Input, Label, InputContainer } from './TextField.styled';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} onChange={handleChange} {...props} />
    </InputContainer>
  );
};

export default TextField;
