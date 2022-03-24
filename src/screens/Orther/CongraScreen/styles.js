import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    padding: 16,
    justifyContent: 'center',
  },
  viewBody: {
    backgroundColor: theme.colors.white,
    borderRadius:8,
    paddingHorizontal: 16,
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
