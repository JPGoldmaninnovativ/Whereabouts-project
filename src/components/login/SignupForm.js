import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';

import { Auth } from 'aws-amplify'
import { connect } from 'react-redux'

import { fonts, colors } from '../../themes/theme'
import { createUser, confirmUserSignUp, logOut } from '../../actions'

import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';
import Button from '../Button'

import usernameImg from '../../images/ic_account_circle_black_48dp/web/ic_account_circle_black_48dp_2x.png';
import passwordImg from '../../images/ic_lock_black_48dp/web/ic_lock_black_48dp_2x.png';
import eyeImg from '../../images/ic_account_circle_black_48dp/web/ic_account_circle_black_48dp_2x.png';

const initialState = {
  username: '',
  password: '',
  email: '',
  authCode: ''
}

class SignupForm extends Component<{}> {
  state = initialState

  onChangeText = (key, value) => {
    console.log(key);
    console.log(value);
    this.setState({
      [key]: value
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
    };
    this.showPass = this.showPass.bind(this);
  }

  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

  signUp() {
    const { username, password, email } = this.state
    this.props.dispatchCreateUser(username, password, email)
  }

  confirm() {
    const { authCode, username } = this.state
    this.props.dispatchConfirmUser(username, authCode)
  }

  logout() {
    this.props.dispatchLogOut()
  }

  componentWillReceiveProps(nextProps) {
    const { auth: { showSignUpConfirmationModal }} = nextProps
    if (!showSignUpConfirmationModal && this.props.auth.showSignUpConfirmationModal) {
      this.setState(initialState)
    }
  }

  render() {
    const { auth: {
      showSignUpConfirmationModal,
      isAuthenticating,
      signUpError,
      signUpErrorMessage
    }} = this.props
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <UserInput
          value={this.state.username}
          source={usernameImg}
          placeholder="Username"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          type='username'
          autoCorrect={false}
          onChangeText={(text) => this.setState({
            ['username']: text
          })}
        />
        <UserInput
          value={this.state.email}
          source={usernameImg}
          placeholder="Email"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          type='email'
          autoCorrect={false}
          onChangeText={(text) => this.setState({
            ['email']: text
          })}
        />
        <UserInput
          value={this.state.password}
          source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder="Password"
          returnKeyType={'done'}
          type='password'
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeText={(text) => this.setState({
            ['password']: text
          })}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this.showPass}>
        </TouchableOpacity>
        <ButtonSubmit value="REGISTER"
          onPress={() => {
            this.signUp();
            }
          }
        />
        {
          showSignUpConfirmationModal && (
            <Modal onRequestClose={() => null} transparent>
              <View style={styles.modal}>
                <UserInput
                  source={passwordImg}
                  placeholder="Authorization Code"
                  type='authCode'
                  keyboardType='numeric'
                  onChangeText={(text) => this.setState({
                    ['authCode']: text
                  })}
                  value={this.state.authCode}
                  keyboardType='numeric'
                />
                <Button
                  title='Confirm'
                  onPress={this.confirm.bind(this)}
                  isLoading={isAuthenticating}
                />
                <Button
                  title='Close'
                  onPress={this.logout.bind(this)}
                  isLoading={isAuthenticating}
                />
              </View>
            </Modal>
          )
        }
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  dispatchConfirmUser: (username, authCode) => confirmUserSignUp(username, authCode),
  dispatchCreateUser: (username, password, email) => createUser(username, password, email),
  dispatchLogOut: () => logOut()
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
  modal: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(0,0,0,0.8)',
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT
  },
  inputContainer: {
    marginTop: 20
  },
  greeting: {
    marginTop: 20,
    fontFamily: fonts.light,
    fontSize: 24
  },
  greeting2: {
    fontFamily: fonts.light,
    color: '#666',
    fontSize: 24,
    marginTop: 5
  },
  heading: {
    flexDirection: 'row'
  },
  headingImage: {
    width: 38,
    height: 38
  },
  errorMessage: {
    fontFamily: fonts.base,
    fontSize: 12,
    marginTop: 10,
    color: 'transparent'
  }
});
