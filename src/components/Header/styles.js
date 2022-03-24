import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export default StyleSheet.create({
  container: bgPrimary => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: !bgPrimary ? theme.colors.white : theme.colors.primary,
    alignItems: 'center',
  }),
  titleMain: (titleRight,titleMainWhite) => ({
    fontSize: 30,
    fontWeight: '500',
    color: !titleMainWhite ? theme.colors.black : theme.colors.white,
    marginRight: !titleRight ? 20 : 0,
  }),
  title: titleColorWhite=> ({fontSize: 16, fontWeight: '400', color: !titleColorWhite ? theme.colors.primary : theme.colors.white}),
});
