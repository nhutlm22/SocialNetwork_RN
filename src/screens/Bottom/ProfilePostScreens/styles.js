import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    position: 'relative',
  },

  modalBG: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  viewBody: {
    backgroundColor: theme.colors.white,
    borderTopStartRadius: 16,
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

  textContent: {
    fontSize: 16,
    fontWeight: '400',
    color: theme.colors.text,
    textAlign: 'center',
  },
  textSC: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.primary,
    marginTop: 16,
    alignSelf: 'center',
  },

  viewHeader: {
    height: 200,
    backgroundColor: theme.colors.primary,
    padding: 16,
  },

  viewAvatar: {
    width: 148,
    height: 148,
    backgroundColor: theme.colors.primary,
    alignSelf: 'center',
    position: 'absolute',
    top: 127,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: theme.colors.white,
  },

  textTitle: {
    fontSize: 30,
    fontWeight: '500',
    color: theme.colors.black,
    marginTop: 16,
    marginBottom: 8,
  },

  viewSwitch: {
    flexDirection: 'row',
    backgroundColor: theme.colors.bgInput,
    borderWidth: 1,
    borderColor: theme.colors.borderInput,
    margin: 16,
    borderRadius: 50,
  },

  viewContentSwitch: {
    backgroundColor: theme.colors.white,
    paddingVertical: 16,
    margin: 2,
    width: '50%',
    alignItems: 'center',
    borderRadius: 50,
  },

  viewContentSwitched: {
    backgroundColor: theme.colors.white,
    paddingVertical: 16,
    margin: 2,
    width: '50%',
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: '49.5%',
  },

  textSwitch: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.primary,
  },
});
