import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import TextInput from '../../TextInput'

const CardSearch = ({onPress, style}) => {
  return (
    <Pressable onPress={onPress}>
      <TextInput placeholder={'Search something...'} style={{borderRadius: 50}}/>
    </Pressable>
  );
};

export default CardSearch;
