import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../../components/Header';
import {theme} from '../../../theme';
import CardSearch from '../../../components/Card/CardSearch';

const SearchScreens = () => {
  return (
    <View style={styles.container}>
      <Header
        titleLeft={'Back'}
        pressLeft={() => {
          navigation.navigate(routes.SIGNINSCREENS);
        }}
        title={'Search'}
        titleRight={'Filter'}
      />
      <CardSearch />
      <View style={{flex: 1, margin: 16}}>
        {data?.map(
          render
        )}
      </View>
    </View>
  );
};

const render = () => {
  return <Text
  style={styles.textTitle}>
  Search result
</Text>;
};

const data = [
  {
    id: 1,
    title: 'Search result',
  },
  {
    id: 2,
    title: 'Search result',
  },
  {
    id: 3,
    title: 'Search result',
  },
  {
    id: 4,
    title: 'Search result',
  },
  {
    id: 5,
    title: 'Search result',
  },
  {
    id: 6,
    title: 'Search result',
  },
  {
    id: 7,
    title: 'Search result',
  },
  {
    id: 8,
    title: 'Search result',
  },
];

export default SearchScreens;
