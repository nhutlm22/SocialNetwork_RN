import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import { theme } from '../../../theme';

const CardFeed = ({item, onPress, title, time, content}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewImage} />
      <View style={styles.viewTitle}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: theme.colors.black,
              fontSize: 16,
              fontWeight: '500',
            }}>
            {item.title}
          </Text>
          <Text>{item.time}</Text>
        </View>
        <Text
          style={{
            marginTop: 8,
            marginBottom: 16,
            color: theme.colors.black,
            fontSize: 16,
          }}>
          {item.content}
        </Text>
      </View>
    </View>
  );
};

export default CardFeed;
