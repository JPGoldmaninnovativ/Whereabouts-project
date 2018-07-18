/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
  
} from 'react-native'

// import { StackNavigator } from 'react-navigation'
// import WelcomeScreen from  './screens/WelcomeScreen'
// import LoginScreen from './screens/LoginScreen'
// import SignUpScreen from './screens/SignUpScreen'
// import DrawerNavigator from './screens/DrawerNavigator'

import { DrawerNavigator, DrawerItems } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreens'
import GroupScreen from './screens/GroupScreen'
import BugsScreen from './screens/BugsScreen'
import LogoutScreen from './screens/LogoutScreen'


import { Container, Header, Content, Body, Icon } from 'native-base';

class App extends Component {
  render() {
    return (
         <MyApp/>
    );
  }
}

const CustomDrawerContentComponent = (props) => (

  <Container>
      <Header style={{ height: 200, backgroundColor: 'white' }}>
      <Body>
          <Image style={styles.drawerImage} source={require('./screens/assets/profile.jpg')}  />
       </Body>
      </Header>
      <Content> 
            <DrawerItems {...props} />
      </Content>
    </Container>
)

const MyApp = DrawerNavigator ({

  Home : { 
       screen: HomeScreen,
  },
  Activity : { 
    screen: GroupScreen,
  },
  Bugs: { 
    screen: BugsScreen,
  },
  Settings: { 
    screen: SettingsScreen,
  },
  Logout: { 
    screen: LogoutScreen,
  }

  
  },{ 
      initialRouteName: 'Home',
      drawerPosition: 'left',
      contentComponent: CustomDrawerContentComponent,
      drawerOpenRoute:'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggle: 'DrawerToggle'
   });

export default App;

 styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  drawerImage:{  
    height: 150,
    width: 150,
    borderRadius: 75
  }
});

