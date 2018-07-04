import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NetInfo,
  ScrollView
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import WebviewScreen from './WebviewScreen'
import WebviewScreenUK from './WebviewScreenUK'
import WebviewScreenUT from './WebviewScreenUT'
import WebviewScreenMig from './WebviewScreenMig'
import WebviewScreenLan from './WebviewScreenLan'
import WebviewScreenPol from './WebviewScreenPol'
import WebviewScreenABF from './WebviewScreenABF'
import WebviewScreenFor from './WebviewScreenFor'
import WebviewScreenVU from  './WebviewScreenVU'
import WebviewScreenVLL from './WebviewScreenVLL'

import Button from 'apsl-react-native-button'


class HomeScreen extends React.Component {
  state = { isConnected: null };

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this._handleConnectivityChange);
    NetInfo.isConnected.fetch().done((isConnected) => { this.setState({ isConnected }); });
  }
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectChange', this._handleConnectivityChange);
  }
  _handleConnectivityChange = (isConnected) => {
    this.setState({ isConnected, });
  }

  _handleOpeningWebview = () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('Webview') 
    }
  };
  _handleOpeningWebview_1 = () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('WebviewUK') 
    }
  };
  _handleOpeningWebview_2 = () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('WebviewUT') 
    }
  };
 _handleOpeningWebview_3 = () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('WebviewMig') 
    }
  };
  _handleOpeningWebview_4 = () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('WebviewLan') 
    }
  };
  _handleOpeningWebview_5= () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('WebviewPol') 
    }
  };
  _handleOpeningWebview_6= () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('WebviewABF') 
    }
  };
  _handleOpeningWebview_7= () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('WebviewFor') 
    }
  };
  _handleOpeningWebview_8= () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('WebviewVU') 
    }
  };
  _handleOpeningWebview_9= () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('WebviewVLL') 
    }
  };

  static navigationOptions = {
    title: 'Live & Stay'
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View >
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Button style={styles.ISStyle} textStyle={{ fontSize: 18, color: 'yellow', overflow: 'hidden', fontWeight: 'bold' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview() }}>
            {'Information Sverige'}
          </Button>
          <Button style={styles.UKStyle} textStyle={{ fontSize: 18, color: 'white', overflow: 'hidden', fontWeight: 'bold' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_1() }}>
            {'Umeå Kommun'}
          </Button>
          <Button style={styles.UTStyle} textStyle={{ fontSize: 18, color: 'black', overflow: 'hidden', fontWeight: 'bold' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_2() }}>
            {'Umeå Tidning'}
          </Button>
          <Button style={styles.MigStyle} textStyle={{ fontSize: 18, color: 'white', overflow: 'hidden', fontWeight: 'bold' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_3() }}>
            {'Migrationsverket'}
          </Button>
          <Button style={styles.LanStyle} textStyle={{ fontSize: 18, color: 'black', overflow: 'hidden', fontWeight: 'bold' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_4() }}>
            {'Länsstyrelsen'}
          </Button>
          <Button style={styles.PolStyle} textStyle={{ fontSize: 18, color: 'red', overflow: 'hidden', fontWeight: 'bold' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_5() }}>
            {'Polis'}
          </Button>
          <Button style={styles.ABFStyle} textStyle={{ fontSize: 18, color: 'green', overflow: 'hidden', fontWeight: 'bold' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_6() }}>
            {'Arbetsförmedligen'}
          </Button>
          <Button style={styles.ForStyle} textStyle={{ fontSize: 18, color: 'ivory', overflow: 'hidden', fontWeight: 'bold' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_7() }}>
            {'Försäkringskassan'}
          </Button>
          <Button style={styles.VUStyle} textStyle={{ fontSize: 18, color: 'lightblue', overflow: 'hidden', fontWeight: 'bold' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_8() }}>
            {'Visit Umeå'}
          </Button>
          <Button style={styles.VLLStyle} textStyle={{ fontSize: 16, color: 'white', overflow: 'hidden', fontWeight: 'bold' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_9() }}>
            {'Västerbottens läns landsting'}
          </Button>
          </ScrollView>
        </View>
      </View>

    );
  }
}

const WebviewApp = StackNavigator({
  Home: { screen: HomeScreen },
  Webview: { screen: WebviewScreen },
  WebviewUK: { screen: WebviewScreenUK },
  WebviewUT: { screen: WebviewScreenUT },
  WebviewMig: { screen: WebviewScreenMig },
  WebviewLan: { screen: WebviewScreenLan },
  WebviewPol: { screen: WebviewScreenPol },
  WebviewABF: { screen: WebviewScreenABF },
  WebviewFor: { screen: WebviewScreenFor },
  WebviewVU: { screen: WebviewScreenVU },
  WebviewVLL: { screen: WebviewScreenVLL },

},{
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'rgba(138,184,243, 1)',
      },
      headerTintColor: 'rgba(255,255,255, 1)',
    }
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,128,0, .1)',
    justifyContent: 'center',
    alignItems: 'center',

  },
  contentContainer:{
    paddingVertical: 20,
    flexDirection: 'column'
    
  },
  ISStyle: {
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    width: 250,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,255, 1)',
    elevation: 2

  },
  UKStyle: {
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    width: 250,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgba(3,139,60, 0.53)',
    elevation: 2

  },
  UTStyle: {
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    width: 250,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgba(249,190,113, 1)',
    elevation: 2

  },
  MigStyle: {
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    width: 250,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgba(247,38,41, 1)'
  },
  LanStyle: {
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    width: 250,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgba(245,243,244, 1)'
  },
  PolStyle: {
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    width: 250,
    height: 50,
    borderRadius: 8,
   backgroundColor: 'rgba(245,243,244, 1)'
  },
  ABFStyle: {
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    width: 250,
    height: 50,
    borderRadius: 8,
   backgroundColor: 'rgba(4,2,0, 1)'
  },
  ForStyle: {
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    width: 250,
    height: 50,
    borderRadius: 8,
   backgroundColor: 'rgba(15,40,22, 1)'
  },
  VUStyle: {
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    width: 250,
    height: 50,
    borderRadius: 8,
   backgroundColor: 'rgba(4,2,0, 1)'
  },
  VLLStyle: {
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    width: 250,
    height: 50,
    borderRadius: 8,
   backgroundColor: 'rgba(0,0,255, 1)'
  }
});

export default class App extends Component {
  render() {
    return <WebviewApp />
  }
}

