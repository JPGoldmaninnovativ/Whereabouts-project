import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles/GroupsList';

const GroupsList = ({ groups }) => (
  <View style={styles.root}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>My Groups</Text>
    </View>
    <View style={styles.contentContainer}>
      <ScrollView horizontal>
        {groups.map((group, i) => (
          <View key={i} style={styles.groupCard}>
            <View style={styles.groupCardTopContainer}>
              <Text style={styles.groupCardTitle}>
                {group.title}
              </Text>
              <Text style={styles.groupCardMetaDate}>
                {group.category}
              </Text>
            </View>
            <View style={styles.groupCardBottomContainer}>
              <Text style={styles.groupCardMetaName}>
                {group.description}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  </View>
);

export default GroupsList;
