import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/Header';
import styles from './styles';
import {routes} from '../../../navigation/routes';
import TextInput from '../../../components/TextInput';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../../components/Button';
import {theme} from '../../../theme';

const SignUp = () => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        title={'Sign Up'}
        titleRight={'Login'}
        pressRight={() => {
          navigation.navigate(routes.SIGNINSCREENS);
        }}
      />
      <TextInput placeholder="Name" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" issecure />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>
          I would like to receive your newsletter and other promotional
          information
        </Text>
      </View>


      <View style={styles.body}>
          <Button
            onPress={() => {
              navigation.navigate(routes.SIGNINSCREENS);
            }}
            title={'Sign Up'}
          />
          <Text
            onPress={() => {
              navigation.navigate(routes.SIGNINSCREENS);
            }}
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: theme.colors.primary,
              marginTop: 16,
              alignSelf: 'center',
            }}>
            Forgot Password?
          </Text>
      </View>
    </View>
  );
};

export default SignUp;
