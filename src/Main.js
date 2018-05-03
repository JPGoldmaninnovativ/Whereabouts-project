// src/App.js

import React from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import { connect } from 'react-redux'
import { Auth } from 'aws-amplify'

import Tabs from './components/auth/Tabs'
import Nav from './components/nav/Nav'

import LoginScreen from './components/login/LoginScreen';
import AuthenticateScreen from './components/login/AuthenticateScreen';
import Dashboard from './components/dashboard/Dashboard';
import Wallpaper from './components/Wallpaper';

class Main extends React.Component {
  state = {
    user: {},
    isLoading: true
  }
  async componentDidMount() {
    StatusBar.setHidden(true)
    try {
      const user = await Auth.currentAuthenticatedUser()
      this.setState({ user, isLoading: false })
    } catch (err) {
      this.setState({ isLoading: false })
    }
  }
  async componentWillReceiveProps(nextProps) {
    try {
      const user = await Auth.currentAuthenticatedUser()
      this.setState({ user })
    } catch (err) {
      this.setState({ user: {} })
    }
  }
  render() {
    if (this.state.isLoading) return null
    let loggedIn = false
    if (this.state.user.username) {
      loggedIn = true
    }
    if (loggedIn) {
      return (
        <Nav />
      )
    }
    return (
      <Wallpaper>
        <Router sceneStyle={styles.sceneStyle}
          navigationBarStyle={{backgroundColor: 'transparent', borderBottomWidth: 0 }}
          getSceneStyle={()=>styles.sceneStyle}>
  	      <Scene key="root">
  	        <Scene key="loginScreen"
  	          component={LoginScreen}
  	        	animation='fade'
  	          hideNavBar={true}
  	          initial={true}
  	        />
  	        <Scene key="authenticateScreen"
  	          component={AuthenticateScreen}
  	          animation='fade'
  	          hideNavBar={true}
  	        />
            <Scene key="dashboard"
  	          component={Dashboard}
  	          animation='fade'
  	          hideNavBar={true}
  	        />
  	      </Scene>
  	    </Router>
      </Wallpaper>
    )
  }
}

const styles = StyleSheet.create({
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
  }
});

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Main)
