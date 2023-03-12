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
  },
};

export default fields;
