import { AppLoading } from 'expo';
import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  KeyboardAvoidingView,
  UIManager,
  Platform,
} from 'react-native';
import { Font } from 'expo';
import DropdownAlert from 'react-native-dropdownalert';

import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';

EStyleSheet.build(Colors);

import { Styles } from  './src/themes/theme';
import Wallpaper from './src/components/Wallpaper';
import Logo from './src/components/Logo';
import Dashboard from './src/components/dashboard/Dashboard';
import UserInput from './src/components/login/UserInput';
import UserButton from './src/components/login/UserButton';
import DismissKeyboardHOC from './src/components/DismissKeyboardHOC';
import DropdownAlertComp from './src/components/DropdownAlertComp';

import usernameImg from './src/images/ic_account_circle_black_48dp/web/ic_account_circle_black_48dp_2x.png';
import passwordImg from './src/images/ic_lock_black_48dp/web/ic_lock_black_48dp_2x.png';
import eyeImg from './src/images/ic_account_circle_black_48dp/web/ic_account_circle_black_48dp_2x.png';

// redux
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { fontAssets } from './helpers';
import store from './src/redux/store';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Amplify
import Amplify, { I18n } from 'aws-amplify';
import config from './src/aws-exports';
import {
  Authenticator,
  SignIn,
  SignUp,
  ConfirmSignUp,
  ForgotPassword,
  Greetings } from 'aws-amplify-react-native';
Amplify.configure(config);

const federated = {
    google_client_id: 'yourGoogleClientID',
    facebook_app_id: 'yourFacebookClientID',
    amazon_client_id: 'yourAmazonClientID'
};

const LinkCell = (props) => {
  const theme = props.theme || Styles;
  return (
    <View style={theme.cell}>
      <TouchableHighlight onPress={props.onPress}>
        <Text style={theme.sectionFooterLink}>{props.children}</Text>
      </TouchableHighlight>
    </View>
  )
}

class MyForgotPassword extends ForgotPassword {
  constructor(props) {
    super(props);
    this.mySend = this.mySend.bind(this);
    this.mySubmit = this.mySubmit.bind(this);
  }

  mySend() {
    this.send()
  }

  mySubmit() {
    this.submit()
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevState.error != this.state.error) && (this.state.error != undefined)) {
      this.props.onError(this.state.error);
    }
  }

  forgotBody(theme) {
    return (
      <View style={theme.sectionBody}>
        <UserInput
            source={usernameImg}
            autoCorrect={false}
            placeholder={I18n.get('Username')}
            autoCapitalize="none"
            style={theme.input}
            onChangeText={(text) => this.setState({ username: text })}
        />
        <UserButton
            title={I18n.get('Resend a Code')}
            style={theme.button}
            onPress={this.mySend}
            disabled={!this.state.username}
        />
      </View>
    )
  }

  submitBody(theme) {
    return (
      <View style={theme.sectionBody}>
        <UserInput
          source={eyeImg}
          autoCorrect={false}
          placeholder={I18n.get('Code')}
          autoCapitalize="none"
          style={theme.input}
          onChangeText={(text) => this.setState({ code: text })}
        />
        <UserInput
          source={passwordImg}
          autoCorrect={false}
          secureTextEntry={this.state.showPass}
          placeholder={I18n.get('New Password')}
          autoCapitalize="none"
          style={theme.input}
          onChangeText={(text) => this.setState({ password: text })}
        />
        <UserButton
          title={I18n.get('Submit')}
          style={theme.button}
          onPress={this.mySubmit}
          disabled={!this.state.username}
        />
      </View>
    )
  }

  showComponent(theme) {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    return (
      <KeyboardAvoidingView behavior="padding" style={Styles.section} keyboardVerticalOffset={keyboardVerticalOffset} disabled>
        <Text style={Styles.sectionHeaderText}>
          {I18n.get('Forgot Password')}
        </Text>
        <View style={Styles.sectionBody}>
          { !this.state.delivery && this.forgotBody(Styles) }
          { this.state.delivery && this.submitBody(Styles) }
        </View>
        <View style={Styles.sectionFooter}>
          <LinkCell onPress={() => this.changeState('signIn')}>
              {I18n.get('Back to Sign In')}
          </LinkCell>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

class MyConfirmSignUp  extends ConfirmSignUp  {
  constructor(props) {
    super(props);
    this.myConfirm = this.myConfirm.bind(this);
    this.myResend = this.myResend.bind(this);
  }

  myConfirm() {
    this.confirm()
  }

  myResend() {
    this.resend()
  }

  showComponent(theme) {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    return (
      <KeyboardAvoidingView behavior="padding" style={Styles.section} keyboardVerticalOffset={keyboardVerticalOffset} disabled>
        <Text style={Styles.sectionHeaderText}>
          {I18n.get('Confirm Sign Up')}
        </Text>
        <View style={Styles.sectionBody}>
          <UserInput
              source={usernameImg}
              autoCorrect={false}
              placeholder={I18n.get('Username')}
              autoCapitalize="none"
              style={Styles.input}
              onChangeText={(text) => this.setState({ username: text })}
          />
          <UserInput
              source={eyeImg}
              autoCorrect={false}
              placeholder={I18n.get('Code')}
              autoCapitalize="none"
              style={Styles.input}
              onChangeText={(text) => this.setState({ code: text })}
          />
          <UserButton
              title={I18n.get('Confirm')}
              onPress={this.myConfirm}
              disabled={!this.state.username || !this.state.code}
          />
          <UserButton
              title={I18n.get('Resend a Code')}
              onPress={this.myResend}
              disabled={!this.state.username}
          />
        </View>
        <View style={Styles.sectionFooter}>
          <LinkCell onPress={() => this.changeState('signIn')}>
              {I18n.get('Back to Sign In')}
          </LinkCell>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

class MySignUp extends SignUp {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
    };
    this.showPass = this.showPass.bind(this);
    this.mySignUp = this.mySignUp.bind(this);
  }

  mySignUp() {
    this.signUp()
  }

  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevState.error != this.state.error) && (this.state.error != undefined)) {
      this.props.onError(this.state.error);
    }
  }

  showComponent(theme) {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    return (
      <KeyboardAvoidingView behavior="padding" style={Styles.section} keyboardVerticalOffset={keyboardVerticalOffset} disabled>
        <Text style={Styles.sectionHeaderText}>
          {I18n.get('Sign Up')}
        </Text>
        <View style={Styles.sectionBody}>
          <UserInput
              source={usernameImg}
              autoCorrect={false}
              placeholder={I18n.get('Username')}
              autoCapitalize="none"
              style={Styles.input}
              onChangeText={(text) => this.setState({ username: text })}
          />
          <UserInput
              source={passwordImg}
              autoCorrect={false}
              secureTextEntry={this.state.showPass}
              placeholder={I18n.get('Password')}
              autoCapitalize="none"
              style={Styles.input}
              onChangeText={(text) => this.setState({ password: text })}
          />
          <UserInput
              source={passwordImg}
              autoCorrect={false}
              placeholder={I18n.get('Email')}
              autoCapitalize="none"
              keyboardType="email-address"
              style={Styles.input}
              onChangeText={(text) => this.setState({ email: text })}
          />
          <UserButton
              title={I18n.get('Sign Up')}
              onPress={this.mySignUp}
              disabled={!this.state.username || !this.state.password}
          />
        </View>
        <View style={Styles.sectionFooter}>
          <LinkCell onPress={() => this.changeState('confirmSignUp')}>
              {I18n.get('Confirm a Code')}
          </LinkCell>
          <LinkCell onPress={() => this.changeState('signIn')}>
              {I18n.get('Sign In')}
          </LinkCell>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

class MySignIn extends SignIn {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
    };
    this.showPass = this.showPass.bind(this);
    this.mySignIn = this.mySignIn.bind(this);
  }

  mySignIn() {
    this.signIn()
  }

  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevState.error != this.state.error) && (this.state.error != undefined)) {
      this.props.onError(this.state.error);
    }
  }

  showComponent(theme) {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    return (
      <KeyboardAvoidingView behavior="padding" style={Styles.section} keyboardVerticalOffset={keyboardVerticalOffset} disabled>
        <Text style={Styles.sectionHeaderText}>
          {I18n.get('Sign In')}
        </Text>
        <View style={Styles.sectionBody}>
          <UserInput
              source={usernameImg}
              autoCorrect={false}
              placeholder={I18n.get('Username')}
              autoCapitalize="none"
              style={Styles.input}
              onChangeText={(text) => this.setState({ username: text })}
          />
          <UserInput
              source={passwordImg}
              autoCorrect={false}
              secureTextEntry={this.state.showPass}
              placeholder={I18n.get('Password')}
              autoCapitalize="none"
              style={Styles.input}
              onChangeText={(text) => this.setState({ password: text })}
          />
          <UserButton
              title={I18n.get('Sign In')}
              onPress={this.mySignIn}
              disabled={!this.state.username || !this.state.password}
          />
        </View>
        <View style={Styles.sectionFooter}>
          <LinkCell onPress={() => this.changeState('forgotPassword')}>
              {I18n.get('Forgot Password')}
          </LinkCell>
          <LinkCell onPress={() => this.changeState('signUp')}>
              {I18n.get('Sign Up')}
          </LinkCell>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

class Authentication extends DropdownAlertComp {

  handleAuthStateChange(state) {
    //if (state === 'signedIn') {
    //    Actions.dashboard();
    //}
  }

  render() {
    const DismissKeyboardAuthenticator = DismissKeyboardHOC(Authenticator);
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset} enabled>
            <DismissKeyboardAuthenticator
                hideDefault={true}
                onStateChange={this.handleAuthStateChange}
                federated={federated}
                sceneStyle={Styles.container}>
              <Logo/>
              <MySignIn onSuccess={this.onSuccess} onError={this.onError}/>
              <MySignUp onSuccess={this.onSuccess} onError={this.onError}/>
              <MyConfirmSignUp onSuccess={this.onSuccess} onError={this.onError}/>
              <MyForgotPassword onSuccess={this.onSuccess} onError={this.onError}/>
              <Dashboard/>
              {this.showDropdownAlert()}
            </DismissKeyboardAuthenticator>
        </KeyboardAvoidingView>
    );
  }
}


export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        fontLoaded: false,
        ready: false,
      };
    }

  componentDidMount() {
    this._loadAssetsAsync();
    persistStore(
      store,
      {
        storage: AsyncStorage,
        whitelist: [
          'user',
        ],
      },
      () => this.setState({ ready: true })
    );
  }

  async _loadAssetsAsync() {
    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
  }

  render() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    if (!this.state.fontLoaded || !this.state.ready) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <Wallpaper>
          <Authentication>
          </Authentication>
        </Wallpaper>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  sceneStyle: {
    opacity: 1,
    flex: 1,
    backgroundColor: 'transparent',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%'
  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%'
  },
});

AppRegistry.registerComponent('WhereAbouts', () => App);
