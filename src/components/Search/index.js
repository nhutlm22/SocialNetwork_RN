import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

const Search = ({onPress, style}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[{...styles.container, ...style}]}>
        <Text style={styles.textInput}>Search something...</Text>
      </View>
    </Pressable>
  );
};

export default Search;
