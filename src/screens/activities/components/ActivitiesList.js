import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles/ActivitiesList';

const ActivitiesList = ({ activities }) => (
  <View style={styles.root}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>My Activities</Text>
    </View>
    <View style={styles.contentContainer}>
      <ScrollView horizontal>
        {activities.map((activity, i) => (
          <View key={i} style={styles.activityCard}>
            <View style={styles.activityCardTopContainer}>
              <Text style={styles.activityCardTitle}>
                {activity.title}
              </Text>
            </View>

            <View style={styles.activityCardBottomContainer}>
              <Text style={styles.activityCardMetaName}>
                {activity.description}
              </Text>
              <Text style={styles.activityCardMetaDate}>
                {activity.startdate}
              </Text>
            </View>

          </View>
        ))}
      </ScrollView>
    </View>
  </View>
);

export default ActivitiesList;
