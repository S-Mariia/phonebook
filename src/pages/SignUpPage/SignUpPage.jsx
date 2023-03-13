import { useDispatch } from 'react-redux';

import SignUpForm from 'modules/SignUpForm/SignUpForm';
import { signup } from 'redux/auth/auth-operations';

const SignUpPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(signup(data));
  };

  return <SignUpForm onSubmit={handleSubmit} />;
};

export default SignUpPage;
