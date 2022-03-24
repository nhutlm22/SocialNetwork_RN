import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../theme';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: theme.colors.borderInput,
    backgroundColor: theme.colors.bgInput,
    marginTop: 16,
  },
  textInput: {
    padding: 16,
    fontSize: 16,
    color: theme.colors.textInput,
    flex: 1,
  }
});
