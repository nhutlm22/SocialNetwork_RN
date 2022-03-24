import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const Title = ({
  title,
  fontSize,
  fontWeight,
  color,
}) => {
  return (
    <View>
      <Text
        style={styles.title(
          fontSize,
          fontWeight,
          color, 
        )}>
        {title}
      </Text>
    </View>
  );
};

export default Title;
