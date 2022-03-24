import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../../components/Header';
import Search from '../../../components/Search';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../navigation/routes';
import CardContent from '../../../components/Card/CardContent';
import { theme } from '../../../theme';

const Content = () => {
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
      <View style={{backgroundColor: theme.colors.white}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={data}
            renderItem={({item}) => <CardContent item={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const data = [
  {
    id: 1,
    title: 'Header',
    time: '22m ago',
    content:
      'Hell want to use your yacht, and I dont want this thing smelling like fish',
  },
  {
    id: 2,
    title: 'Header',
    time: '22m ago',
    content:
      'Hell want to use your yacht, and I dont want this thing smelling like fish',
  },
  {
    id: 3,
    title: 'Header',
    time: '22m ago',
    content:
      'Hell want to use your yacht, and I dont want this thing smelling like fish',
  },
  {
    id: 4,
    title: 'Header',
    time: '22m ago',
    content:
      'Hell want to use your yacht, and I dont want this thing smelling like fish',
  },
  {
    id: 5,
    title: 'Header',
    time: '22m ago',
    content:
      'Hell want to use your yacht, and I dont want this thing smelling like fish',
  },
  {
    id: 6,
    title: 'Header',
    time: '22m ago',
    content:
      'Hell want to use your yacht, and I dont want this thing smelling like fish',
  },
  {
    id: 7,
    title: 'Header',
    time: '22m ago',
    content:
      'Hell want to use your yacht, and I dont want this thing smelling like fish',
  },
  {
    id: 8,
    title: 'Header',
    time: '22m ago',
    content:
      'Hell want to use your yacht, and I dont want this thing smelling like fish',
  },
];

export default Content;
