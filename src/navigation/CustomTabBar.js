import React from 'react';
import {Image, Platform, Pressable, StyleSheet, View, Text} from 'react-native';
import {Badge} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { icons } from '../assets';
import { theme } from '../theme';


const CustomTabBar = ({state, descriptors, navigation}) => {
  const {bottom} = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: theme.colors.white,
        paddingBottom: Platform.OS === 'ios' ? bottom : 10,
        paddingTop: 10,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const icon =
          index === 0
            ? icons.home
            : index === 1
            ? icons.content
            : index === 2
            ? icons.market
            : index === 3
            ? icons.search
            : icons.profile;
        const iconselect =
          index === 0
            ? icons.home
            : index === 1
            ? icons.content
            : index === 2
            ? icons.market
            : index === 3
            ? icons.search
            : icons.profile;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.btn}>
            {/* {index === 3 && (
              <Badge
                status="error"
                containerStyle={styles.containerStyle}
                badgeStyle={styles.badgeStyle}
                textProps={{allowFontScaling: false}}
                value="4"
              />
            )} */}
            <Image
              source={isFocused ? iconselect : icon}
              style={styles.iconstyle(isFocused)}
            />
            <Text style={styles.textlabel(isFocused)}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};
export default CustomTabBar;
const styles = StyleSheet.create({
  btn: {flex: 1, alignItems: 'center'},
  textlabel: isFocused => ({
    color: isFocused ? theme.colors.primary : theme.colors.grey,
    marginTop: 12.6 / 2,
    fontSize: 10,
  }),
  iconstyle: isFocused => ({
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: isFocused ? theme.colors.primary : theme.colors.grey,
  }),
  containerStyle: {
    position: 'absolute',
    zIndex: 10,
    top: -7,
    right: 21,
  },
  badgeStyle: {borderColor: theme.colors.white, borderWidth: 1},
});
