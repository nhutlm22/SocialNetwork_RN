import {StyleSheet} from 'react-native';
import {theme} from '../../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    color: theme.colors.black,
    fontWeight: '500',
    marginBottom: 16,
  },
  viewImage: {
    width: 120,
    height: 120,
    backgroundColor: theme.colors.bgInput,
    borderRadius: 8,
  },
  viewContent: {},
  textTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
    color: theme.colors.black,
    width: 120,
  },
  textPrice: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.black,
  },
});
