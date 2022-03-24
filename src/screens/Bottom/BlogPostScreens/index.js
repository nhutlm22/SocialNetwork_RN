import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {theme} from '../../../theme';

const BlogPost = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            height: 196,
            backgroundColor: theme.colors.bgInput,
            borderRadius: 8,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '500',
              color: theme.colors.black,
              marginTop: 16,
              marginBottom: 8,
            }}>
            Post Title Here...
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: theme.colors.black,
              marginBottom: 16,
            }}>
            Author
          </Text>
          <Text
            style={{fontSize: 16, fontWeight: '400', color: theme.colors.text, marginBottom: 16}}>
            Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt
            cillum elit ex ut. Dolore exercitation nulla tempor consequat
            aliquip occaecat. Nisi id ipsum irure aute. Deserunt sit aute irure
            quis nulla eu consequat fugiat Lorem sunt magna et consequat labore.
            Laboris incididunt id Lorem est duis deserunt nisi dolore eiusmod
            culpa exercitation consectetur. Fugiat do aliqua laboris cillum sint
            dolor officia adipisicing excepteur fugiat officia. Cupidatat ut
            elit consequat ea laborum occaecat laborum aute consectetur Lorem
            exercitation. Lorem anim minim officia aliquip commodo deserunt
            mollit. Duis deserunt quis cillum voluptate duis ipsum quis
            incididunt elit excepteur excepteur labore duis cillum. Voluptate
            sint nulla minim eiusmod in nulla. Ea id ad duis esse adipisicing
            culpa ex esse ea dolore consequat. Reprehenderit eu minim veniam
            aliquip do ipsum duis do qui adipisicing aliquip ad occaecat.
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 196,
            backgroundColor: theme.colors.bgInput,
            borderRadius: 8,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '500',
              color: theme.colors.black,
              marginTop: 16,
              marginBottom: 8,
            }}>
            Post Title Here...
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: theme.colors.black,
              marginBottom: 16,
            }}>
            Author
          </Text>
          <Text
            style={{fontSize: 16, fontWeight: '400', color: theme.colors.text}}>
            Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt
            cillum elit ex ut. Dolore exercitation nulla tempor consequat
            aliquip occaecat. Nisi id ipsum irure aute. Deserunt sit aute irure
            quis nulla eu consequat fugiat Lorem sunt magna et consequat labore.
            Laboris incididunt id Lorem est duis deserunt nisi dolore eiusmod
            culpa exercitation consectetur. Fugiat do aliqua laboris cillum sint
            dolor officia adipisicing excepteur fugiat officia. Cupidatat ut
            elit consequat ea laborum occaecat laborum aute consectetur Lorem
            exercitation. Lorem anim minim officia aliquip commodo deserunt
            mollit. Duis deserunt quis cillum voluptate duis ipsum quis
            incididunt elit excepteur excepteur labore duis cillum. Voluptate
            sint nulla minim eiusmod in nulla. Ea id ad duis esse adipisicing
            culpa ex esse ea dolore consequat. Reprehenderit eu minim veniam
            aliquip do ipsum duis do qui adipisicing aliquip ad occaecat.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default BlogPost;
