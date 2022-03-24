import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: theme.colors.primary,
    
  },
  titleButton: {
    fontSize: 16,
    color: theme.colors.white,
    fontWeight: '500',
    paddingVertical: 16,
  },
});
