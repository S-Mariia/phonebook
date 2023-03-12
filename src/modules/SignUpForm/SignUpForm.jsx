import TextField from 'shared/components/TextField/TextField';
import PasswordInput from 'shared/components/PasswordInput/PasswordInput';

import fields from './fields';

const SignUpForm = () => {
  return (
    <form>
      <TextField {...fields.name} />
      <TextField {...fields.email} />
      <PasswordInput {...fields.password} />
    </form>
  );
};

export default SignUpForm;
