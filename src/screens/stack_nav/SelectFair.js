import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import {b1, b3, gs1, white} from '../../config/colors';
import {_fonts, _ms, _s, _vs} from '../../components/utils/Responsive';

const SelectFair = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent={true} barStyle={'dark-content'} />
      <View style={styles.Wrap}>
        {/* nav */}
        <View style={styles.nav}>
          <Text style={[styles.lbB1, {fontSize: _ms(18)}]}>
            Please select a fare for Indigo
          </Text>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.cross}>
            <Image
              style={{width: _ms(16), height: _ms(16), tintColor: b1}}
              source={require('../../assets/icons/cross.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.fair}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: _ms(10),
            }}>
            <View
              style={{
                flex: 1,
                marginHorizontal: _s(10),
              }}>
              {/* saver */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <View style={styles.check}>
                  <Image
                    style={{width: _ms(10), height: _ms(10), tintColor: white}}
                    source={require('../../assets/icons/check.png')}
                  />
                </View>
                <Text style={[styles.ns600, {textTransform: 'uppercase'}]}>
                  saver
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: _ms(10),
                    gap: _ms(10),
                  }}>
                  <Image
                    style={{width: _ms(17), height: _ms(17), tintColor: b3}}
                    source={require('../../assets/icons/seat.png')}
                  />
                  <Text style={[styles.lbB1, {color: b3, fontSize: _ms(16)}]}>
                    Seat
                  </Text>
                </View>

                <Text style={[styles.lbB1, {color: b3, fontSize: _ms(16)}]}>
                  Limited{' '}
                  <Text style={[styles.lbB1, {color: gs1, fontSize: _ms(16)}]}>
                    FREE
                  </Text>{' '}
                  seats
                </Text>
              </View>
            </View>

            <Text
              style={[
                styles.ns600,
                {
                  textTransform: 'uppercase',
                  marginTop: _ms(10),
                  maxWidth: _s(80),
                },
              ]}>
              $430
            </Text>
          </View>

          <View style={styles.bottom}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                gap: _ms(10),
              }}>
              <Image
                style={{width: _ms(18), height: _ms(18), tintColor: '#306D3F'}}
                source={require('../../assets/icons/discount-solid.png')}
              />
              <Text style={[styles.lbB1, {color: gs1, fontSize: _ms(14)}]}>
                Get $50 OFF on CASUPER
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: _vs(30), alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.bookNow}
            onPress={() => navigation.replace('flightreview')}>
            <Text style={[styles.ns600, {color: white, fontSize: _ms(16)}]}>
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectFair;

const styles = StyleSheet.create({
  Wrap: {
    flex: 1,
    marginHorizontal: 12,
    marginTop: _ms(30),
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: _ms(20),
    marginBottom: _ms(10),
  },
  lbB1: {
    fontFamily: _fonts.londonBetween,
    color: b1,
  },
  cross: {
    backgroundColor: '#D9D9D9',
    padding: _ms(6),
    borderRadius: 100,
  },
  fair: {
    borderRadius: 8,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    marginTop: _ms(30),
    paddingTop: _ms(5),
  },
  check: {
    backgroundColor: '#435970',
    borderRadius: 20,
    marginRight: _ms(15),
    alignItems: 'center',
    justifyContent: 'center',
    width: _ms(20),
    height: _ms(20),
    resizeMode: 'contain',
  },
  ns600: {
    fontFamily: 'NunitoSans_10pt-Bold',
    color: b1,
    fontSize: _ms(16),
  },
  bottom: {
    marginTop: _vs(2),
    backgroundColor: '#E9F7EA',
    paddingLeft: _ms(20),
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: 'center',
  },
  bookNow: {
    borderRadius: 4,
    backgroundColor: '#435970',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _ms(9),
    paddingHorizontal: _s(60),
  },
});
