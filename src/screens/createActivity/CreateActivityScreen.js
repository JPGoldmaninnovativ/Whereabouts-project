import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import { CreateActivityForm } from './components';
import { LoadingScreen } from '../../components/commons';
import { createActivity } from './actions';
import styles from './styles/CreateActivityScreen';

@connect(
  state => ({
    activity: state.createActivity,
  }),
  { createActivity }
)
export default class CreateActivityScreen extends Component {
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
    return 'Pick a activity date';
  }

  _checkIfButtonSubmitDisabled() {
    const { date } = this.state;

    if (date > moment()) {
      return false;
    }
    return true;
  }

  _createActivity = async values => {
    values.startdate = this.state.date;
    console.log("HEHJ");
    console.log(values);
    await this.props.createActivity(values);
    this.props.navigation.goBack();
  }

  render() {
    const {
      activity,
    } = this.props;
    if (activity.isLoading) {
      return (
        <View style={styles.root}>
          <LoadingScreen />
        </View>
      );
    } else if (activity.error.on) {
      return (
        <View style={styles.root}>
          <Text>{activity.error.message}</Text>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <CreateActivityForm
          createActivity={this._createActivity}
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
