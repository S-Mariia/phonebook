import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

import SignUpForm from 'modules/SignUpForm/SignUpForm';
import { signup } from 'redux/auth/auth-operations';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = data => {
    dispatch(signup(data));
    return isLoggedIn;
  };

  return <SignUpForm onSubmit={handleSubmit} />;
};

export default SignUpPage;
