import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../theme';
import Title from '../Title';
import styles from './styles';

const Header = ({
  title,
  titleLeft,
  titleRight,
  onPress,
  pressLeft,
  pressRight,
  titleColorWhite,
  titleLeftCheck,
  titleMainWhite,
  iconLeft,
  iconStyle,
  textStyle,
  style,
  bgPrimary,
}) => {
  const [isCheck, setCheck] = useState(true);

  return (
    <View style={[{...style, ...styles.container(bgPrimary)}]}>
      <Pressable onPress={pressLeft}>
        {titleLeft ? (
          <Text style={styles.title(titleColorWhite)}>{titleLeft}</Text>
        ) : iconLeft ? (
          <Image
            source={iconLeft}
            style={{
              height: 16,
              width: 16,
              ...iconStyle,
            }}
          />
        ) : null}
      </Pressable>
      <View style={{justifyContent: 'center'}}>
        <Text style={styles.titleMain(titleRight, titleMainWhite)}>{title}</Text>
      </View>
      <Pressable onPress={pressRight}>
        <Text style={[{...textStyle, ...styles.title(titleColorWhite)}]}>{titleRight}</Text>
      </Pressable>
    </View>
  );
};

export default Header;
