import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

import LoginForm from 'modules/LoginForm/LoginForm';
import { login } from 'redux/auth/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = data => {
    dispatch(login(data));
    return isLoggedIn;
  };

  return <LoginForm onSubmit={handleSubmit} />;
};

export default LoginPage;
