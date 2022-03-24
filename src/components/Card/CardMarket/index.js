import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {theme} from '../../../theme';

const CardMarket = ({item, title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* {data?.slice(0, 2)?.map(CardMarkett)} */}
        {data?.map(CardMarkett)}
      </ScrollView>
    </View>
  );
};

const CardMarkett = (item, index) => {
  return (
    <View style={{marginLeft: index === 0 ? 0 : 16, ...styles.viewContent}}>
      <View style={styles.viewImage} />
      <Text style={styles.textTitle}>{item.title}</Text>
      <Text style={styles.textPrice}>${item.price}</Text>
    </View>
  );
};

const data = [
  {
    id: 1,
    title: 'Item #1 Name Goes Here',
    price: 19.99,
  },

  {
    id: 2,
    title: 'Item #1 Name Goes Here',
    price: 19.99,
  },
  {
    id: 3,
    title: 'Item #1 Name Goes Here',
    price: 19.99,
  },

  {
    id: 4,
    title: 'Item #1 Name Goes Here',
    price: 19.99,
  },
  {
    id: 5,
    title: 'Item #1 Name Goes Here',
    price: 19.99,
  },

  {
    id: 6,
    title: 'Item #1 Name Goes Here',
    price: 19.99,
  },
];

export default CardMarket;
