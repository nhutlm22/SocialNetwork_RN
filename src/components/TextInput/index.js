import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {theme} from '../../theme';
import {icons} from '../../assets';

const Input = ({placeholder, issecure, placeholderColor, style}) => {
  const [isCheck, setCheck] = useState(true);

  return (
    <View style={{...styles.container,...style}}>
      <TextInput
        secureTextEntry={issecure ? isCheck : false}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        style={styles.textInput}
      />
      {issecure && (
        <Pressable onPress={() => setCheck(!isCheck)}>
          {isCheck ? (
            <Text style={{color: theme.colors.primary, padding: 16}}>
              Show
            </Text>
          ) : (
            <Text style={{color: theme.colors.black, padding: 16}}>Close</Text>
          )}
        </Pressable>
      )}
      {/* {issecure && (
        <Pressable onPress={() => setCheck(!isCheck)}>
          <Image
            source={isCheck ? icons.x : icons.back}
            style={{width: 20, height: 20}}
          />
        </Pressable>
      )} */}
    </View>
  );
};

export default Input;
