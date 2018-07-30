export const createGroupValidations = values => {
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
  if (values.description && values.description.length < 16) {
    errors.description = needLonger;
  }

  return errors;
};
