import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import {routes} from '../../../navigation/routes';
import styles from './styles';
import { icons } from '../../../assets';
import { theme } from '../../../theme';

const Rating = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewBody}>
        <View style={styles.viewContent}>
          <View style={{flexDirection: 'row', marginBottom: 16}}>
            <Image source={icons.star}/>
            <Image style={{marginLeft: 8}} source={icons.star}/>
            <Image style={{marginLeft: 8}} source={icons.star}/>
            <Image style={{marginLeft: 8}} source={icons.star}/>
            <Image style={{marginLeft: 8}} source={icons.star}/>
          </View>
          <Text style={styles.textTitle}>Rate our app</Text>
          <Text style={styles.textContent}>
            Consequat velit qui adipisicing sunt do reprehenderit ad laborum
            tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate
            duis sit esse aliqua esse ex dolore esse. Consequat velit qui
            adipisicing sunt.
          </Text>
        </View>
        <View style={styles.viewFooter}>
          <Button title={'I love it!'} />
          <Text
            onPress={() => {
              navigation.navigate(routes.SIGNINSCREENS);
            }}
            style={styles.textSC}>
            Don’t like the app? Let us know
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Rating;
