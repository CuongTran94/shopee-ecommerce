export const matchRule = [
  {
    required: true,
    message: 'Please confirm your password!'
  },
  ({ getFieldValue }) => ({
    validator(rule, value) {
      if (!value || getFieldValue('newPassword') === value) {
        return Promise.resolve();
      }
      return Promise.reject('The two passwords that you entered do not match!');
    }
  })
];

export const ruleRequired = [
  {
    required: true,
    message: 'Please input your password!'
  }
];
