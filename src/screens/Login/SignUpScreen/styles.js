import {StyleSheet, Dimensions} from 'react-native';
import { theme } from '../../../theme';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 16,
  },
  body: {
    flex: 1,
    justifyContent: 'flex-end',
    marginVertical: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});
