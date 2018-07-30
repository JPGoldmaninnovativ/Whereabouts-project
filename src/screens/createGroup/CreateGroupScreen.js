import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import { CreateGroupForm } from './components';
import { LoadingScreen } from '../../components/commons';
import { createGroup } from './actions';
import styles from './styles/CreateGroupScreen';

@connect(
  state => ({
    group: state.createGroup,
  }),
  { createGroup }
)
export default class CreateGroupScreen extends Component {
  state = {
    isDateTimePickerVisible: false,
    date: moment(),
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  _handleDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _handleDatePicked = date => {
    this.setState({ date });
    this._handleDateTimePicker();
  }

  _checkTitle() {
    const { date } = this.state;
    if (date > moment()) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
    return 'Pick a group date';
  }

  _checkIfButtonSubmitDisabled() {
    const { date } = this.state;

    if (date > moment()) {
      return false;
    }
    return true;
  }

  _createGroup = async values => {
    await this.props.createGroup(values);
    this.props.navigation.goBack();
  }

  render() {
    const {
      group,
    } = this.props;
    if (group.isLoading) {
      return (
        <View style={styles.root}>
          <LoadingScreen />
        </View>
      );
    } else if (group.error.on) {
      return (
        <View style={styles.root}>
          <Text>{group.error.message}</Text>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <CreateGroupForm
          createGroup={this._createGroup}
          showDateTimePicker={this._showDateTimePicker}
          checkTitle={this._checkTitle()}
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._handleDateTimePicker}
          mode="datetime"
        />
      </View>
    );
  }
}
