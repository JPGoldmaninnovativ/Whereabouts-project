import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import {
    Auth
} from 'aws-amplify';


import { Icon, Button, Container, Header, Content, Left }  from  'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'

class LogoutScreen extends Component {
    static navigationOptions = {
        drawerIcon:(
            <Image source={require('./../../images/logout.png')}
            style={{height:24,width:24}}/>
        )
    }

    signOut() {
        Auth.signOut();
    }

    render() {
        return (
            <Container>
             <Header>
                <Left>
                <Ionicons name='md-menu' size={24} onPress={()=>this.props.navigation.navigate('DrawerOpen')}/>
                </Left>
            </Header>
               <Content contentContainerStyle={{ flex:1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
               {/* <Button title='log out' onPress={() => this.props.screenProps.navigation.navigate('WelcomeScreen')}/> */}
                <Button active primary onPress={this.signOut}>
                  <Text>Sign Out</Text>
                </Button>
                </Content>
            </Container>
        );
    }
}
export default LogoutScreen;
