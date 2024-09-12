import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {blue, white} from '../config/colors';
import {_fonts, _ms, _s, _vs} from './utils/Responsive';

const Header = ({navigation}) => {
  return (
    <View style={styles.body}>
      {/* left bell icon */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Notification');
        }}
        style={styles.bellButton}>
        <Image
          style={styles.bellIcon}
          source={require('../assets/icons/bell.png')}
        />
        <View style={styles.bellDot} />
      </TouchableOpacity>

      {/* name icon */}
      <View style={styles.titleCon}>
        <Text style={styles.title}>10 Cents Air</Text>
      </View>

      {/* right icon */}
      <View style={styles.rightWrap}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChartScreen');
          }}
          style={styles.beaconWrap}>
          <Image
            style={styles.bellIcon}
            source={require('../assets/icons/beacon.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('ProfileScreen');
            navigation.navigate('Account');
          }}
          style={styles.piWrap}>
          <Text style={styles.pi}>KV</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  body: {
    marginTop: _vs(40),
    marginHorizontal: _s(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    paddingVertical: _ms(5),
  },

  bellIcon: {
    width: _s(22),
    height: _s(22),
    resizeMode: 'contain',
  },

  bellButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    position: 'relative',
    zIndex: 1,
  },

  bellDot: {
    backgroundColor: blue,
    width: 10,
    height: 10,
    borderRadius: 12,
    position: 'absolute',
    top: 1,
    right: 3,
  },

  rightWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },

  piWrap: {
    width: _s(30),
    height: _s(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: _s(30),
    borderWidth: 1.5,
    borderColor: white,
  },

  pi: {
    color: white,
    fontSize: _ms(12),
    fontFamily: _fonts.londonBetween,
  },

  beaconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },

  titleCon: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  title: {
    color: white,
    fontSize: _ms(22),
    fontFamily: _fonts.londonBetween,
  },
});
