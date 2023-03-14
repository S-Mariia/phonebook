import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSignupError } from 'redux/auth/auth-selectors';

import { resetSignupError } from 'redux/auth/auth-slice';

import TextField from 'shared/components/TextField/TextField';
import PasswordInput from 'shared/components/PasswordInput/PasswordInput';
import Button from 'shared/components/Button/Button';

import { ButtonContainer } from 'modules/LoginForm/LoginForm.styled';
import { toast } from 'react-toastify';

import fields from './fields';
import initialState from './initialState';

const SignUpForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });
  const error = useSelector(selectSignupError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetSignupError());
  }, [dispatch]);

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
      toast('The password is incorrect');
      setState(prevState => ({ ...prevState, confirmedPassword: '' }));
      return;
    }

    const { name, email, password } = state;
    const signedUp = onSubmit({ name, email, password });
    if (signedUp) {
      setState({ ...initialState });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          value={state.name}
          {...fields.name}
        />
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
        <ButtonContainer>
          <Button type="submit">Sign up</Button>
        </ButtonContainer>
      </form>
      {error && dispatch(resetSignupError()) && toast(error)}
    </>
  );
};

export default SignUpForm;
