import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import { LoadingScreen } from '../../components/commons';

import { createProfile, fetchProfiles, setAlias, setSex, } from './actions';
import styles from './styles/ProfileScreen';

@connect(
  state => ({
    profile: state.profile.profile,
  }),
  { createProfile }
)

@connect(
  state => ({
    profile: state.profile.profile,
  }),
  { fetchProfiles }
)

@connect(
  state => ({
    profile: state.profile.profile,
  }),
  { setAlias }
)

@connect(
  state => ({
    profile: state.profile.profile,
  }),
  { setSex }
)

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alias: '',
            sex: ''
        };
    }

  componentDidMount() {
    this.props.fetchProfiles();
  }

  _createProfile = async () => {
    await this.props.createProfile(this.props.profile.data);
  }

  render() {
    const {
      profile: {
        isFetched,
        error,
      },
    } = this.props;
    if (!isFetched) {
      return <LoadingScreen />;
    } else if (error.on) {
      return (
        <View>
          <Text>{error.message}</Text>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>ProfileScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <TextInput
              style={styles.input}
              placeholder={"Alias"}
              autoCorrect={false}
              autoCapitalize={"characters"}
              returnKeyType={"done"}
              onChangeText={(alias) => { this.setState({alias}); this.props.setAlias({alias}); }}
              value={this.state.alias}
          />
          <TextInput
              style={styles.input}
              placeholder={"Sex"}
              autoCorrect={false}
              autoCapitalize={"none"}
              returnKeyType={"done"}
              onChangeText={(sex) => { this.setState({sex}); this.props.setSex({sex}); }}
              value={this.state.sex}
          />
          <Button
            title="Save"
            raised
            fontFamily="montserrat"
            onPress={this._createProfile}
          />
        </View>
      </View>
    );
  }
}

export default ProfileScreen;

