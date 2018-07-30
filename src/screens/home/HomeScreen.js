import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { LoadingScreen } from '../../components/commons';
import { GroupsList } from './components';

import { fetchGroups } from './actions';
import styles from './styles/HomeScreen';

@connect(
  state => ({
    groups: state.home.groups,
  }),
  { fetchGroups }
)

class HomeScreen extends Component {
  componentDidMount() {
    this.props.fetchGroups();
  }

  render() {
    const {
      groups: {
        isFetched,
        data,
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
          <Text>HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <GroupsList groups={data} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
