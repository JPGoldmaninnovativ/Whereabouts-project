import React from 'react';
import { View, Text, Picker } from 'react-native';
import styles from './styles/GroupPicker';

const GroupPicker = ({ groups, value, onValueChange }) => (
  <View style={styles.root}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Group:</Text>
    </View>
    <View style={styles.contentContainer}>
        <Picker
            mode={'dropdown'}
            style={styles.picker}
            selectedValue={value}
            onValueChange={(itemValue, itemIndex) => {
                onValueChange(itemValue, itemIndex);
            }}>
            {groups.map((group, i) => (
              <Picker.Item key={i} label={group.title} value={group.title} style={styles.pickerItem} />
            ))}
        </Picker>
    </View>
  </View>
);

export default GroupPicker;
