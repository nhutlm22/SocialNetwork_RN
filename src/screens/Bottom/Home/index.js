import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../navigation/routes';
import {theme} from '../../../theme';
import Search from '../../../components/Search';
import {icons} from '../../../assets';
import CardFeed from '../../../components/Card/CardFeed';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        titleLeft={'Back'}
        pressLeft={() => {
          navigation.navigate(routes.SIGNINSCREENS);
        }}
        title={'Feed'}
        titleRight={'Filter'}
      />
      <Search
        onPress={() => {
          navigation.navigate(routes.SEARCHSCREENS);
        }}
      />
      <View style={{backgroundColor: theme.colors.white, height: 420}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={data}
            renderItem={({item}) => <CardFeed item={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </ScrollView>
      </View>
      <View style={{backgroundColor: theme.colors.bgInput, height: 200, borderRadius: 4, marginTop: 16}}/>
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

export default Home;
