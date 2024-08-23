import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from '../../utility/Icon';
import Search from './Search';
import Deals from './Deals';
import MyTrips from './MyTrips';
import Rewards from './Rewards';
import {black} from '../../config/colors';
import Label from '../../utility/Label';

const BottomStack = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <BottomStack.Navigator
      initialRouteName="search"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: focused => {
          let rn = route.name;
          return <Icon name={rn} size={25} iconColor={black} />;
        },
        tabBarStyle: {
          backgroundColor: 'rgba(86, 175, 255, 1)',
          height: 68,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        tabBarLabel: ({focused, children}) => (
          <Label focused={focused} children={children} />
        ),
      })}>
      <BottomStack.Screen name="Search" component={Search} />
      <BottomStack.Screen name="Deals" component={Deals} />
      <BottomStack.Screen name="My Trips" component={MyTrips} />
      <BottomStack.Screen name="Rewards" component={Rewards} />
    </BottomStack.Navigator>
  );
};

export default TabNavigation;
