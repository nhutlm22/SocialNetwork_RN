import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar';
import { routes } from './routes';
import {bottom} from '../screens/Bottom';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        keyboardHidesTabBar: true,
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name={routes.HOMESCREENS}
        component={bottom.HOMESCREENS}
        options={{tabBarLabel: 'Trang chủ'}}
      />
      <Tab.Screen
        name={routes.CONTENTSCREENS}
        component={bottom.CONTENTSCREENS}
        options={{tabBarLabel: 'Danh mục'}}
      />

      <Tab.Screen
        name={routes.MARKETSCREENS}
        component={bottom.MARKETSCREENS}
        options={{tabBarLabel: 'Giỏ hàng'}}
      />
      <Tab.Screen
        name={routes.SEARCHSCREENS}
        component={bottom.SEARCHSCREENS}
        options={{tabBarLabel: 'Tìm kiếm'}}
      />
      <Tab.Screen
        name={routes.PROFILEPOSTSCREENS}
        component={bottom.PROFILEPOSTSCREENS}
        options={{tabBarLabel: 'Cá nhân'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
