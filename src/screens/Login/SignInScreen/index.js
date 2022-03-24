import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {icons} from '../../../assets';
import {theme} from '../../../theme';
import styles from './styles';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import {routes} from '../../../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import TextInput from '../../../components/TextInput';
import Title from '../../../components/Title';

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header titleLeftCheck={true} title={'Log In'} titleRight={'Sign Up'}
      pressRight={() => {navigation.navigate(routes.SIGNUPSCREENS)}}/>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" issecure />
      <View style={styles.body}>
        <View style={{width: '100%'}}>
          <Button
            onPress={() => {
              navigation.navigate(routes.HOMESCREENS);
            }}
            title={'Log in'}
          />
          <Text
            onPress={() => {
              navigation.navigate(routes.SIGNUPSCREENS);
            }}
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: theme.colors.primary,
              marginTop: 16,
              alignSelf: 'center'
            }}>
            Forgot password?
          </Text>
        </View>
      </View>
      {/* <Text style={{fontSize: 30, color: theme.colors.black, fontWeight: '500'}}>Log In</Text> */}
      {/* <Button title={'Log in'}/> */}
    </View>
  );
};

export default SignIn;
