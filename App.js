import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  KeyboardAvoidingView,
} from 'react-native';
import { Font } from 'expo';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import { Styles } from  './src/themes/theme'
import Main from './src/Main';
import Wallpaper from './src/components/Wallpaper';
import Logo from './src/components/Logo';
import Dashboard from './src/components/dashboard/Dashboard';
import UserInput from './src/components/login/UserInput';
import UserButton from './src/components/login/UserButton';

import usernameImg from './src/images/ic_account_circle_black_48dp/web/ic_account_circle_black_48dp_2x.png';
import passwordImg from './src/images/ic_lock_black_48dp/web/ic_lock_black_48dp_2x.png';
import eyeImg from './src/images/ic_account_circle_black_48dp/web/ic_account_circle_black_48dp_2x.png';

// redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/components/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

// Amplify
import Amplify from 'aws-amplify-react-native';
import config from './src/aws-exports';
import {
  Authenticator,
  SignIn,
  SignUp,
  ConfirmSignUp,
  ForgotPassword,
  VerifyContact,
  Greetings } from 'aws-amplify-react-native';
import { I18n } from 'aws-amplify';
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
            onPress={this.send}
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
          onPress={this.submit}
          disabled={!this.state.username}
        />
      </View>
    )
  }

  showComponent(theme) {
    return (
      <KeyboardAvoidingView behavior="padding" style={Styles.section}>
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
        <View style={Styles.errorRow}>
          <Text style={Styles.erroRowText}>{this.state.error}</Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

class MyConfirmSignUp  extends ConfirmSignUp  {
  showComponent(theme) {
    return (
      <KeyboardAvoidingView behavior="padding" style={Styles.section}>
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
              onPress={this.confirm}
              disabled={!this.state.username || !this.state.code}
          />
          <UserButton
              title={I18n.get('Resend a Code')}
              onPress={this.resend}
              disabled={!this.state.username}
          />
        </View>
        <View style={Styles.sectionFooter}>
          <LinkCell onPress={() => this.changeState('signIn')}>
              {I18n.get('Back to Sign In')}
          </LinkCell>
        </View>
        <View style={Styles.errorRow}>
          <Text style={Styles.erroRowText}>{this.state.error}</Text>
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
  }

  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

  showComponent(theme) {
    return (
      <KeyboardAvoidingView behavior="padding" style={Styles.section}>
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
              onPress={this.signUp}
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
        <View style={Styles.errorRow}>
          <Text style={Styles.erroRowText}>{this.state.error}</Text>
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
  }

  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

  showComponent(theme) {
    return (
      <KeyboardAvoidingView behavior="padding" style={Styles.section}>
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
              onPress={this.signIn}
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
        <View style={Styles.errorRow}>
          <Text style={Styles.erroRowText}>{this.state.error}</Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

class Authentication extends Component {

  handleAuthStateChange(state) {
    console.log(state)
    if (state === 'signedIn') {
        Actions.dashboard();
    }
  }

  render() {
    return (
        <Authenticator
            hideDefault={true}
            onStateChange={this.handleAuthStateChange}
            federated={federated}
            sceneStyle={Styles.container}>
          <Logo/>
          <MySignIn/>
          <MySignUp/>
          <MyConfirmSignUp/>
          <MyForgotPassword/>
          <VerifyContact/>
          <Greetings/>
        </Authenticator>
    );
  }
}


export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = { fontLoaded: false };
    }

  async componentDidMount() {
    await Font.loadAsync({
        'Lato-Regular': require('./src/fonts/Lato-Regular.ttf'),
        'Lato-Light': require('./src/fonts/Lato-Light.ttf'),
        'Lato-Hairline': require('./src/fonts/Lato-Hairline.ttf'),
        'Lato-Bold': require('./src/fonts/Lato-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <Wallpaper>
          <Router sceneStyle={styles.sceneStyle}
            navigationBarStyle={{backgroundColor: 'transparent', borderBottomWidth: 0 }}
            getSceneStyle={()=>styles.sceneStyle}>
            <Scene key="root">
              <Scene key="loginScreen"
                component={Authentication}
                animation='fade'
                hideNavBar={true}
                initial={true}
              />
              <Scene key="dashboard"
                component={Dashboard}
                animation='fade'
                hideNavBar={true}
              />
            </Scene>
          </Router>
        </Wallpaper>
      );
    }
    return null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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
  signIn: {

  },
});

AppRegistry.registerComponent('WhereAbouts', () => App);
