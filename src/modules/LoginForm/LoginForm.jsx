import { useState } from 'react';

import TextField from 'shared/components/TextField/TextField';
import PasswordInput from 'shared/components/PasswordInput/PasswordInput';
import Button from 'shared/components/Button/Button';

import fields from './fields';
import initialState from './initialState';

const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('login');

    onSubmit({ ...state });
    setState({ ...initialState });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        onChange={handleChange}
        value={state.email}
        {...fields.email}
      />
      <PasswordInput
        onChange={handleChange}
        value={state.password}
        {...fields.password}
      />
      <Button type="submit">Sign up</Button>
    </form>
  );
};

export default LoginForm;
