import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { Font } from 'expo';

import Main from './src/Main';

// redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/components/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

// Amplify
import config from './src/aws-exports'
import Amplify from 'aws-amplify'
Amplify.configure(config);

/*
export default class loginAnimation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}
*/

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
        <Provider store={store}>
          <View style={styles.container}>
            <Main />
          </View>
        </Provider>
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
});


AppRegistry.registerComponent('WhereAbouts', () => App);
