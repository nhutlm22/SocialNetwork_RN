import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import {routes} from '../../../navigation/routes';

const Drawer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewBody}>
        <View style={styles.viewContent}>
          <Text style={styles.textTitle}>Congratulations!</Text>
          <Text style={styles.textContent}>
            Consequat velit qui adipisicing sunt do reprehenderit ad laborum
            tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate
            duis sit esse aliqua esse ex dolore esse. Consequat velit qui
            adipisicing sunt.
          </Text>
        </View>
        <View style={styles.viewFooter}>
          <Button title={'Click Me'} />
          <Text
            onPress={() => {
              navigation.navigate(routes.SIGNINSCREENS);
            }}
            style={styles.textSC}>
            Forgot Password?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Drawer;
