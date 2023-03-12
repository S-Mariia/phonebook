import { useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import { BiShow } from 'react-icons/bi';

import { Input, Label } from '../TextField/TextField.styled';
import { Wrap } from './PasswordInput.styled';

const PasswordInput = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  const [shownPassword, setShownPassword] = useState(false);
  const handleClick = () => setShownPassword(prevState => !prevState);

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Wrap>
        <Input
          id={id}
          onChange={handleChange}
          type={shownPassword ? 'text' : 'password'}
          {...props}
        />
        <BiShow size={20} style={{ marginLeft: -30 }} onClick={handleClick} />
      </Wrap>
    </div>
  );
};

export default PasswordInput;
