import React, {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from './Search';
import Deals from './Deals';
import MyTrips from './MyTrips';
import Rewards from './Rewards';
import CustomTabBar from './CustomTabBar';

const BottomStack = createBottomTabNavigator();

const TabNavigation = () => {
  const [isTabBarVisible, setTabBarVisible] = useState(true);

  useEffect(() => {
    // Listens to keyboard events to hide/show the tab bar
    const showSubscription = Keyboard.addListener('keyboardDidShow', () =>
      setTabBarVisible(false),
    );
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () =>
      setTabBarVisible(true),
    );

    // Cleanup subscriptions on unmount
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <BottomStack.Navigator
      initialRouteName="Search"
      tabBar={props => isTabBarVisible && <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <BottomStack.Screen name="Search" component={Search} />
      <BottomStack.Screen name="Deals" component={Deals} />
      <BottomStack.Screen name="My Trips" component={MyTrips} />
      <BottomStack.Screen name="Rewards" component={Rewards} />
    </BottomStack.Navigator>
  );
};

export default TabNavigation;

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import React from 'react';
// import Icon from '../../utility/Icon';
// import Search from './Search';
// import Deals from './Deals';
// import MyTrips from './MyTrips';
// import Rewards from './Rewards';
// import {b1, black} from '../../config/colors';
// import Label from '../../utility/Label';
// import {_ms, _vs} from '../../components/utils/Responsive';

// const BottomStack = createBottomTabNavigator();

// const TabNavigation = () => {
//   return (
//     <BottomStack.Navigator
//       initialRouteName="search"
//       screenOptions={({route}) => ({
//         headerShown: false,
//         tabBarHideOnKeyboard: true,
//         tabBarIcon: focused => {
//           let rn = route.name;
//           return <Icon name={rn} size={_ms(24)} iconColor={b1} />;
//         },
//         tabBarStyle: {
//           position: 'absolute',
//           bottom: 0,
//           height: 60,
//           minHeight: 60,
//           width: '100%',
//           backgroundColor: '#56AFFF',
//           borderTopLeftRadius: 15,
//           borderTopRightRadius: 15,
//           borderColor: '#56AFFF',

//           paddingBottom: 3,
//         },
//         tabBarLabel: ({focused, children}) => (
//           <Label focused={focused} children={children} label={route.name} />
//         ),
//       })}>
//       <BottomStack.Screen name="Search" component={Search} />
//       <BottomStack.Screen name="Deals" component={Deals} />
//       <BottomStack.Screen name="My Trips" component={MyTrips} />
//       <BottomStack.Screen name="Rewards" component={Rewards} />
//     </BottomStack.Navigator>
//   );
// };

// export default TabNavigation;
