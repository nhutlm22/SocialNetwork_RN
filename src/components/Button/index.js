import React from 'react';
import {Pressable, View, Text} from 'react-native';
import styles from './styles';
const Button = ({title, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.titleButton}>{title}</Text>
    </Pressable>
  );
};
export default Button;
