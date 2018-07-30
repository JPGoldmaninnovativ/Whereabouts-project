import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { LoadingScreen } from '../../components/commons';
import { ActivitiesList, GroupPicker } from './components';

import { fetchActivities, fetchGroups, setGroup } from './actions';
import styles from './styles/ActivitiesScreen';

@connect(
  state => ({
    activities: state.activities.activities,
  }),
  { fetchActivities }
)

@connect(
  state => ({
    groups: state.activities.groups,
  }),
  { fetchGroups }
)

@connect(
  state => ({
    currentGroup: state.activities.currentGroup,
  }),
  { setGroup }
)

class ActivitiesScreen extends Component {
  componentDidMount() {
    this.props.fetchGroups();
    this.props.fetchActivities();
  }

  render() {
    const {
      activities,
      currentGroup,
      groups,
    } = this.props;
    if (!groups.isFetched && !activities.isFetched) {
      return <LoadingScreen />;
    } else if (groups.error.on) {
      return (
        <View>
          <Text>{groups.error.message}</Text>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <GroupPicker groups={groups.data} value={currentGroup.title} onValueChange={(itemValue, itemIndex) => {
            this.props.setGroup(itemValue);
            this.props.fetchActivities(itemValue.id);
          }} />
        </View>
        <View style={styles.bottomContainer}>
          <ActivitiesList activities={activities.data} />
        </View>
      </View>
    );
  }
}

export default ActivitiesScreen;
