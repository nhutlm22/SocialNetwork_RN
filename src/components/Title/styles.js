import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export default StyleSheet.create({
  title: (
    fontSize,
    fontWeight,
    color,
  ) => ({
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: color,
  }),
});
