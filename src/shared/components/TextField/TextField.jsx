import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { Input, Label, InputContainer } from './TextField.styled';

const TextField = ({ label, onChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} onChange={onChange} {...props} />
    </InputContainer>
  );
};

export default TextField;
