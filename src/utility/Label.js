import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {_fonts, _ms} from '../components/utils/Responsive';

const Label = ({focused, children, label}) => {
  return (
    <Text style={focused ? styles.active : styles.common}>{children}</Text>
  );
};

export default Label;

const styles = StyleSheet.create({
  active: {
    // color: 'rgba(47, 98, 145, 1)',
    color: '#2F6291',
    fontSize: _ms(12),
    fontFamily: _fonts.londonBetween,
    borderBottomWidth: 2,
    borderColor: '#2F6291',
  },
  common: {
    color: 'rgba(35, 32, 32, 1)',
    fontFamily: _fonts.londonBetween,
    fontSize: _ms(13),
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
});
