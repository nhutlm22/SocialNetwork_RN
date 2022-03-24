import {StyleSheet, Dimensions} from 'react-native';
import { theme } from '../../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  viewBody: {
    backgroundColor: theme.colors.yellow,
    borderTopStartRadius:16,
    borderTopEndRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  viewContent: {
    alignItems: 'center',
  },
  viewFooter: {
    marginTop: 32,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: '500',
    color: theme.colors.black,
    marginBottom: 16,
  },
  textContent: {
    fontSize: 16,
    fontWeight: '400',
    color: theme.colors.text,
    textAlign: 'center'
  },
  textSC: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.primary,
    marginTop: 16,
    alignSelf: 'center',
  },
});
