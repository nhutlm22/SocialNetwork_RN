import {StyleSheet} from 'react-native';
import { theme } from '../../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  viewImage: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.bgInput,
    borderRadius: 8,
  },
  viewTitle: {
    marginLeft: 16,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderInput,
  },
});