import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';


import HomeScreen from './HomeScreen'
import { DrawerNavigator, StackNavigator, DrawerItems } from 'react-navigation'
import HomeScreenTabNavigator from './HomeScreenTabNavigator'
import { Body, Header, Container, Icon, Content } from 'native-base'


const InnerStackNavigator = new StackNavigator({
    TabNavigator: { 
        screen: HomeScreenTabNavigator
        }
   })


const CustomDrawerContentComponent = (props) => (
    <Container>
        <Header style={styles.drawerHeader}>
            <Body>
                <Image Style={styles.drawerImage}  source={require('./assets/avatar.png')} /> 
            </Body>
        </Header>
                

        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>  
     )

// DrawerNavigator Content
const AppDrawerNavigator = new  DrawerNavigator({
 Home: { screen: InnerStackNavigator
        },
 Settings: { screen: InnerStackNavigator
        }
},{

    initialRouteName: 'Home',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });

export default AppDrawerNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    drawerHeader: { 
        height: 200,
        backgroundColor: 'white'
     },
    drawerImage: { 
        height: 256,
        width: 256,
        borderRadius: 75,

     }
})

