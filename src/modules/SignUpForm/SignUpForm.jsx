import { useState } from 'react';

import TextField from 'shared/components/TextField/TextField';
import PasswordInput from 'shared/components/PasswordInput/PasswordInput';
import Button from 'shared/components/Button/Button';

import fields from './fields';
import initialState from './initialState';

const SignUpForm = ({ onSubmit }) => {
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

    if (state.password !== state.confirmedPassword) {
      alert('The password is incorrect');
      setState(prevState => ({ ...prevState, confirmedPassword: '' }));
      return;
    }

    const { name, email, password } = state;
    onSubmit({ name, email, password });
    setState({ ...initialState });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField onChange={handleChange} value={state.name} {...fields.name} />
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
      <PasswordInput
        onChange={handleChange}
        value={state.confirmedPassword}
        {...fields.confirmedPassword}
      />
      <Button type="submit">Sign up</Button>
    </form>
  );
};

export default SignUpForm;
