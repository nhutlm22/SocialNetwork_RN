import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';
import {login} from '../screens/Login';
import {bottom} from '../screens/Bottom';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {theme} from '../theme';
import {navigate} from './RootNavigation';
import {orther} from '../screens/Orther';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <Stack.Navigator
        initialRouteName={routes.BOTTOMTABBAR}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={routes.SIGNINSCREENS}
          component={login.SIGNINSCREENS}
        />
        <Stack.Screen
          name={routes.SIGNUPSCREENS}
          component={login.SIGNUPSCREENS}
        />
        <Stack.Screen
          name={routes.HOMESCREENS}
          component={bottom.HOMESCREENS}
        />
        <Stack.Screen
          name={routes.SEARCHSCREENS}
          component={bottom.SEARCHSCREENS}
        />
        <Stack.Screen
          name={routes.CONTENTSCREENS}
          component={bottom.CONTENTSCREENS}
        />
        <Stack.Screen
          name={routes.MARKETSCREENS}
          component={bottom.MARKETSCREENS}
        />
        <Stack.Screen
          name={routes.CONGRASCREENS}
          component={orther.CONGRASCREENS}
        />
        <Stack.Screen
          name={routes.RATINGSCREENS}
          component={orther.RATINGSCREENS}
        />
        <Stack.Screen
          name={routes.BLOGPOSTSCREENS}
          component={bottom.BLOGPOSTSCREENS}
        />
        <Stack.Screen
          name={routes.PROFILEPOSTSCREENS}
          component={bottom.PROFILEPOSTSCREENS}
        />
        <Stack.Screen
          name={routes.BOTTOMTABBAR}
          component={BottomTabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
