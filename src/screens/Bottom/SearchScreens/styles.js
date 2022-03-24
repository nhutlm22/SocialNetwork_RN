import {StyleSheet, Dimensions} from 'react-native';
import { theme } from '../../../theme';

export default StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: 16,
  },
  
  textTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.black,
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderInput,
  },
});
