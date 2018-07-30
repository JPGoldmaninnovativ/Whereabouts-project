import React from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';

import { TextInputWithValidations } from '../../../components/commons';
import { createGroupValidations } from '../validations';
import Colors from '../../../../constants/Colors';
import styles from './styles/CreateGroupForm';

const CreateGroupForm = ({
  createGroup,
  checkTitle,
  handleSubmit,
  invalid,
  submitting,
}) => (
  <View style={styles.container}>
    <Field
      component={TextInputWithValidations}
      name="title"
      label="Title"
      selectionColor={Colors.redColor}
      containerStyle={styles.item}
    />
    <Field
      component={TextInputWithValidations}
      name="description"
      label="Description"
      multiline
      selectionColor={Colors.redColor}
      containerStyle={styles.item}
    />
    <View style={styles.buttonCreate}>
      <Button
        backgroundColor={Colors.blackBlueColor}
        title="Create Group"
        raised
        fontFamily="montserrat"
        disabled={invalid || submitting}
        onPress={handleSubmit(createGroup)}
      />
    </View>
  </View>
);

export default reduxForm({
  form: 'createGroup',
  validate: createGroupValidations,
})(CreateGroupForm);
