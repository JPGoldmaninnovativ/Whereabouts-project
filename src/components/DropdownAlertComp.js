import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

export default class DropdownAlertComp extends Component {

  constructor(props) {
    super(props)

    this.onInfo = this.onInfo.bind(this);
    this.onWarn = this.onWarn.bind(this);
    this.onError = this.onError.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onDefault = this.onDefault.bind(this);
  }

  onInfo = message => {
    if (message) {
      this.dropdown.alertWithType('info', 'Info', message);
    }
  };

  onWarn = message => {
    if (message) {
      this.dropdown.alertWithType('warn', 'Warn', message);
    }
  };

  onError = message => {
    if (message) {
      this.dropdown.alertWithType('error', 'Error', message);
    }
  };

  onSuccess = message => {
    if (message) {
      this.dropdown.alertWithType('success', 'Success', message);
    }
  };

  onDefault = message => {
    if (message) {
      this.dropdown.alertWithType('default', 'Default', message);
    }
  };

  onClose = data => {
    // data = {type, title, message, action}
    // action means how the alert was closed.
    // returns: automatic, programmatic, tap, pan or cancel
  }

  onCancel = data => {
    // data = {type, title, message, action}
    // action means how the alert was canceled.
  }

  showDropdownAlert() {
    return (
      <DropdownAlert
          ref={ref => this.dropdown = ref}
          onClose={data => this.onClose(data)}
          onCancel={data => this.onCancel(data)}
          elevation={1}
          showCancel={true}
          titleStyle={styles.titleStyle}
          closeInterval={60000} />
    );
  }

  render() {
    return (
      <View>
        {this.props.children}
        {this.showDropdownAlert()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    paddingTop: 20,
  },
  messageStyle: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: 'normal',
    color: 'white',
    backgroundColor: 'transparent',
  },
});
