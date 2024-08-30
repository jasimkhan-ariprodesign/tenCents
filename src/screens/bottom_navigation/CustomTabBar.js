import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from '../../utility/Icon'; // Adjust the path according to your project structure
import {_fonts, _ms} from '../../components/utils/Responsive';
import {b1, blue} from '../../config/colors';

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          {
            /* navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            }); */
          }

          console.log('long press');
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}
            key={index}>
            <Icon
              name={route.name}
              size={index == 2 ? _ms(24) : _ms(22)}
              // iconColor={isFocused ? '#2F6291' : b1}
              iconColor={isFocused ? b1 : b1}
            />
            <View style={styles.labelAndIndiCon}>
              <Text
                style={[styles.label, isFocused ? styles.activeLabel : null]}>
                {route.name}
              </Text>

              <View
                style={[
                  styles.indicator,
                  {backgroundColor: isFocused ? '#2F6291' : 'transparent'},
                ]}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: _ms(66),
    backgroundColor: '#56AFFF',
    // backgroundColor: blue,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: _ms(4),
    gap: _ms(7),
  },

  label: {
    color: b1,
    fontFamily: _fonts.londonTwo,
    fontSize: _ms(11),
  },

  activeLabel: {
    color: '#2F6291',
    fontSize: _ms(11),
    fontFamily: _fonts.londonTwo,
  },

  indicator: {
    height: 2,
    width: _ms(22),
    backgroundColor: '#2F6291',
    borderRadius: 5,
  },

  labelAndIndiCon: {
    // backgroundColor: 'lime',
    alignItems: 'center',
    gap: _ms(2),
  },
});
