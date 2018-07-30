export const createActivityValidations = values => {
  const errors = {};
  const requiredFields = ['title', 'description'];
  const needLonger = 'Need to be longer';
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.title && values.title.length < 4) {
    errors.title = needLonger;
  }

  return errors;
};
