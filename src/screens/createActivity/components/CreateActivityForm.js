import React from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';

import { TextInputWithValidations } from '../../../components/commons';
import { GroupPicker } from '../../activities/components/GroupPicker';
import { createActivityValidations } from '../validations';
import Colors from '../../../../constants/Colors';
import styles from './styles/CreateActivityForm';

const CreateActivityForm = ({
  createActivity,
  checkTitle,
  showDateTimePicker,
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
    <View style={styles.item}>
      <Button
        raised
        fontFamily="montserrat"
        onPress={showDateTimePicker}
        title={checkTitle}
      />
    </View>
    <Field
      component={TextInputWithValidations}
      name="group"
      label="Group"
      selectionColor={Colors.redColor}
      containerStyle={styles.item}
    />
    <View style={styles.buttonCreate}>
      <Button
        backgroundColor={Colors.blackBlueColor}
        title="Create Activity"
        raised
        fontFamily="montserrat"
        disabled={invalid || submitting}
        onPress={handleSubmit(createActivity)}
      />
    </View>
  </View>
);

export default reduxForm({
  form: 'createActivity',
  validate: createActivityValidations,
})(CreateActivityForm);
