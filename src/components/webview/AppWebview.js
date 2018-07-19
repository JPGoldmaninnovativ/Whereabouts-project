
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, NetInfo, ScrollView } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Button from 'apsl-react-native-button'
import Ionicons from 'react-native-vector-icons/Ionicons'


import WebviewScreenABF from './WebviewScreenABF'
import WebviewScreenFor from './WebviewScreenFor'
import WebviewScreenIS from './WebviewScreenIS'
import WebviewScreenLan from './WebviewScreenLan'
import WebviewScreenMig from './WebviewScreenMig'
import WebviewScreenPol from './WebviewScreenPol'
import WebviewScreenRIKS from './WebviewScreenRIKS'
import WebviewScreenTrans from './WebviewScreenTrans'
import WebviewScreenUK from './WebviewScreenUK'
import WebviewScreenUU from './WebviewScreenUU'
import WebviewScreenUT from './WebviewScreenUT'
import WebviewScreenVLL from './WebviewScreenVLL'
import WebviewScreenVU from './WebviewScreenVU'
import DetailsScreen from './DetailsScreen'

class HomeWebView extends Component {
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
  _handleOpeningWebview_6 = () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('WebviewABF')
    }
  };
  _handleOpeningWebview_7 = () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('WebviewFor')
    }
  };
  _handleOpeningWebview = () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('Webview')
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
  _handleOpeningWebview_3 = () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('WebviewMig')
    }
  };
  _handleOpeningWebview_5 = () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('WebviewPol')
    }
  };
  _handleOpeningWebview_11 = () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('WebviewRIKS')
    }
  };
  _handleOpeningWebview_12 = () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('WebviewTrans')
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
  _handleOpeningWebview_10 = () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('WebviewUU')
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
  _handleOpeningWebview_8 = () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('WebviewVU')
    }
  };
  _handleOpeningWebview_9 = () => {
    if (this.state.isConnected === false) {
      alert('Sorry! No internet connection');
      return;
    }
    if (this.state.isConnected === true) {
      this.props.navigation.navigate('WebviewVLL')
    }
  };
  static navigationOptions = {
    title: 'Live & Stay',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>

          <Button style={styles.ABFStyle} textStyle={{ fontSize: 18, color: 'white', overflow: 'hidden' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_6() }}>
            <Ionicons name='ios-briefcase' size={25} color='rgba(255,255,255, 1)' style={{ height: 25, width: 25 }} />
            {'Arbetsförmedligen'}
          </Button>
          <Button style={styles.ForStyle} textStyle={{ fontSize: 18, color: 'ivory', overflow: 'hidden' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_7() }}>
            <Ionicons name='ios-people' size={25} color='rgba(255,255,255, 1)' style={{ height: 25, width: 25 }} />
            {'Försäkringskassan'}
          </Button>
          <Button style={styles.ISStyle} textStyle={{ fontSize: 18, color: 'white', overflow: 'hidden' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview() }}>
            <Ionicons name='ios-at' size={25} color='rgba(255,255,255, 1)' style={{ height: 25, width: 25 }} />
            {'Information Sverige'}
          </Button>
          <Button style={styles.LanStyle} textStyle={{ fontSize: 18, color: 'black', overflow: 'hidden' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_4() }}>
            <Ionicons name='ios-home' size={25} color='rgba(2,4,0, 1)' style={{ height: 25, width: 25 }} />
            {'Länsstyrelsen'}
          </Button>
          <Button style={styles.MigStyle} textStyle={{ fontSize: 18, color: 'white', overflow: 'hidden' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_3() }}>
            <Ionicons name='ios-hand' size={25} color='rgba(255,255,255, 1)' style={{ height: 25, width: 25 }} />
            {'Migrationsverket'}
          </Button>
          <Button style={styles.PolStyle} textStyle={{ fontSize: 18, color: 'red', overflow: 'hidden' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_5() }}>
            <Ionicons name='ios-warning' size={25} color='rgba(255,0,0, 1)' style={{ height: 25, width: 25 }} />
            {'Polis'}
          </Button>
          <Button style={styles.RIKSStyle} textStyle={{ fontSize: 18, color: 'blue', overflow: 'hidden' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_11() }}>
            <Ionicons name='ios-folder-open' size={25} color='rgba(0,0,128, 1)' style={{ height: 25, width: 25 }} />
            {'Sveriges Riksdag'}
          </Button>
          <Button style={styles.TransStyle} textStyle={{ fontSize: 18, color: 'blue', overflow: 'hidden' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_12() }}>
            <Ionicons name='ios-bus' size={25} color='rgba(0,0,128, 1)' style={{ height: 25, width: 25 }} />
            {'Transportstyrelsen'}
          </Button>
          <Button style={styles.UKStyle} textStyle={{ fontSize: 18, color: 'white', overflow: 'hidden' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_1() }}>
            <Ionicons name='ios-leaf' size={25} color='rgba(255,255,255, 1)' style={{ height: 25, width: 25 }} />
            {'Umeå Kommun'}
          </Button>
          <Button style={styles.UUStyle} textStyle={{ fontSize: 16, color: 'black', overflow: 'hidden' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_10() }}>
            <Ionicons name='ios-school' size={25} color='rgba(2,4,0, 1)' style={{ height: 25, width: 25 }} />
            {'Umeå Universitet'}
          </Button>
          <Button style={styles.UTStyle} textStyle={{ fontSize: 18, color: 'black', overflow: 'hidden' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_2() }}>
            <Ionicons name='ios-paper' size={25} color='rgba(2,4,0, 1)' style={{ height: 25, width: 25 }} />
            {'Umeå Tidning'}
          </Button>
          <Button style={styles.VUStyle} textStyle={{ fontSize: 18, color: 'white', overflow: 'hidden' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_8() }}>
            <Ionicons name='ios-bicycle' size={25} color='rgba(255,255,255, 1)' style={{ height: 25, width: 25 }} />
            {'Visit Umeå'}
          </Button>
          <Button style={styles.VLLStyle} textStyle={{ fontSize: 16, color: 'white', overflow: 'hidden' }} activeOpacity={1} onPress={() => { this._handleOpeningWebview_9() }}>
            <Ionicons name='ios-medkit' size={25} color='rgba(255,255,255, 1)' style={{ height: 25, width: 25 }} />
            {'VLL'}
          </Button>

        </ScrollView>
      </View>
    );
  }
}
const HomeStack = StackNavigator({
  Home: { screen: HomeWebView },
  WebviewABF: { screen: WebviewScreenABF },
  WebviewFor: { screen: WebviewScreenFor },
  Webview: { screen: WebviewScreenIS },
  WebviewLan: { screen: WebviewScreenLan },
  WebviewMig: { screen: WebviewScreenMig },
  WebviewPol: { screen: WebviewScreenPol },
  WebviewRIKS: { screen: WebviewScreenRIKS },
  WebviewTrans: { screen: WebviewScreenTrans },
  WebviewUK: { screen: WebviewScreenUK },
  WebviewUU: { screen: WebviewScreenUU },
  WebviewUT: { screen: WebviewScreenUT },
  WebviewVU: { screen: WebviewScreenVU },
  WebviewVLL: { screen: WebviewScreenVLL },
  WebviewInfo: { screen: DetailsScreen },
}, {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'rgba(138,184,243, 1)',
      },
      headerTintColor: 'rgba(255,255,255, 1)',
    }
  });

export default TabNavigator(
  {
    Website: { screen: HomeStack },
    Info: { screen: DetailsScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Website') {
          iconName = `ios-globe${focused ? '' : '-outline'}`;
        } else if (routeName === 'Info') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: 'rgba(255,0,0, 1)',
      activeBackgroundColor: 'rgba(138,184,243, 1)',
      inactiveBackgroundColor: 'rgba(176,224,230, 1)',
      inactiveTintColor: 'rgba(128,128,128, 1)',
    }

  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,128,0, .1)',
    justifyContent: 'center',
    alignItems: 'center',

  },
  contentContainer: {
    paddingVertical: 20,
    flexDirection: 'column'


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
  RIKSStyle: {
    alignItems: 'center',
    paddingTop: 9,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    width: 250,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgba(205, 173, 0, 1)'
  },
  TransStyle: {
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
  },
  UUStyle: {
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
  },

});

