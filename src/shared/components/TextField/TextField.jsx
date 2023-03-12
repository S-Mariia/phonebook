import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { Input, Label } from './TextField.styled';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} onChange={handleChange} {...props} />
    </div>
  );
};

export default TextField;
