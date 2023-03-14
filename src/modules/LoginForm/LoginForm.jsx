import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoginError } from 'redux/auth/auth-selectors';

import { resetLoginError } from 'redux/auth/auth-slice';
import { ButtonContainer } from './LoginForm.styled';

import TextField from 'shared/components/TextField/TextField';
import PasswordInput from 'shared/components/PasswordInput/PasswordInput';
import Button from 'shared/components/Button/Button';

import { toast } from 'react-toastify';

import fields from './fields';
import initialState from './initialState';

const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });
  const error = useSelector(selectLoginError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetLoginError());
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

    const loggedIn = onSubmit({ ...state });
    if (loggedIn) {
      setState({ ...initialState });
    }
  };

  return (
    <div>
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
        <ButtonContainer>
          <Button type="submit">Log In</Button>
        </ButtonContainer>
      </form>
      {error && dispatch(resetLoginError()) && toast(error)}
    </div>
  );
};

export default LoginForm;
