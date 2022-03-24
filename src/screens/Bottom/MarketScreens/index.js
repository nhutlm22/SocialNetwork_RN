import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {theme} from '../../../theme';
import Header from '../../../components/Header';
import Search from '../../../components/Search';
import CardMarket from '../../../components/Card/CardMarket';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../navigation/routes';

const Market = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        titleLeft={'Back'}
        pressLeft={() => {
          navigation.navigate(routes.HOMESCREENS);
        }}
        title={'Feed'}
        titleRight={'Filter'}
      />
      <Search />
      <View style={{marginTop: 32, flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CardMarket title={'Hot Deals'} />
          <CardMarket title={'Trending'} />
          <CardMarket title={'Sales'} />
        </ScrollView>
      </View>
    </View>
  );
};
export default Market;
