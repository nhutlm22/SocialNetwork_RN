import {Platform} from 'react-native';

export const theme = {
  colors: {
    primary: '#007F6A',
    secondary: '#46B3F6',
    aqua: '#77C8EB',
    thirdy: '#e7f5fe',
    background: '#f5f5f5',
    orange: '#FE930F',
    lightGray: '#A5A5A5',
    gray: '#424242',
    smoke: '#E6E6E6',
    white: '#ffffff',
    grey: '#A5A5A5',
    black: '#000000',
    placeholder: '#707070',
    blue: '#0d5cb6',
    red: '#E83625',
    green: '#088A08',
    lightGreen: '#29bb89',
    yellow: '#FFDF00',
    bgInput: '#F6F6F6',
    borderInput: '#E8E8E8',
    textInput: '#BDBDBD',
    text: '#666666'
  },

  fonts: {
    fontWeight: {
      heavy: '700',
      bold: 'bold',
      semibold: Platform.OS === 'android' ? 'bold' : '600',
      regular: 'normal',
      light: '300',
    },
    fontFamily: {
      default: Platform.OS === 'ios' ? 'System' : 'Roboto',
    },
  },
};
