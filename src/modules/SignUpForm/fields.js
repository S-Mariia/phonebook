const fields = {
  name: {
    type: 'text',
    name: 'name',
    required: true,
    label: 'Name',
    placeholder: 'Enter your name',
  },
  email: {
    type: 'email',
    name: 'email',
    required: true,
    label: 'Email',
    placeholder: 'Enter your email',
  },
  password: {
    type: 'password',
    name: 'password',
    required: true,
    label: 'Password',
    placeholder: 'Create a password',
    autoComplete: 'off',
  },
  confirmedPassword: {
    type: 'password',
    name: 'confirmedPassword',
    required: true,
    label: 'Confirm your password',
    placeholder: 'Enter created password',
    autoComplete: 'off',
  },
};

export default fields;
