import { useDispatch } from 'react-redux';

import LoginForm from 'modules/LoginForm/LoginForm';
import { login } from 'redux/auth/auth-operations';

const SignUpPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(login(data));
  };

  return <LoginForm onSubmit={handleSubmit} />;
};

export default SignUpPage;
