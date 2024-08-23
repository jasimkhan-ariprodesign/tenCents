import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {b1, b3, green, white} from '../../../config/colors';
import LinearGradient from 'react-native-linear-gradient';
import image from '../../../config/ImageAssets';
import {_fonts, _ms, _s} from '../../utils/Responsive';

const {width} = Dimensions.get('window');

const DealItem = () => {
  const price = '$80.99';
  const [dollars, cents] = price.split('.');
  return (
    <View style={styles.main}>
      <Image style={styles.img} resizeMode="cover" source={image.dealpic} />

      <View style={styles.contWrap}>
        <View style={styles.topItemWrap}>
          <View style={{flex: 1, paddingHorizontal: _ms(5)}}>
            <Text style={[styles.ns700]}>San Diego</Text>
            <Text style={[styles.ns400, {}]}>SJC - SAN</Text>
          </View>

          <View style={{paddingHorizontal: 5}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.priceTxt}>{dollars}</Text>
              <Text style={styles.priceTxtTwo}>.{cents}*</Text>
            </View>

            <Text style={[styles.roundTripTxt]}>Round Trip</Text>
          </View>
        </View>

        <Text style={[styles.dateTxt]}>Oct 28 - Oct 30</Text>

        <View
          style={{
            marginHorizontal: _s(20),
            marginTop: _ms(8),
            // backgroundColor: 'red',
          }}>
          <LinearGradient
            style={{height: _ms(12), borderRadius: _ms(12)}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[
              'rgba(49, 154, 52, 1)',
              'rgba(244, 222, 25, 1)',
              'rgba(245, 172, 86, 1)',
              'rgba(202, 18, 18, 1)',
            ]}
          />

          <View style={styles.moneyRangeTxtWrap}>
            <Text style={styles.moneyRangeTxt}>$126</Text>
            <Text style={styles.moneyRangeTxt}>$96</Text>
          </View>
        </View>

        <Text
          style={[
            styles.dateTxt,
            {textAlign: 'center', color: b1, marginLeft: 0},
          ]}>
          Similar trip cost to San Diego
        </Text>
      </View>
    </View>
  );
};

export default DealItem;

const styles = StyleSheet.create({
  main: {
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: white,
    elevation: 10,
    shadowColor: 'gray',
    paddingBottom: 20,
  },

  img: {
    borderTopRightRadius: 40,
    width: '100%',
  },

  contWrap: {
    marginTop: _ms(12),
    // backgroundColor: '#f1f1f1', // '''''''''''''''''
  },

  topItemWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
  },

  ns700: {
    fontFamily: _fonts.nunitoSansBold,
    color: b1,
    fontSize: _ms(18),
  },

  ns400: {
    fontFamily: _fonts.nunitoSansRegular,
    color: b1,
    fontSize: _ms(13),
    marginTop: _ms(8),
    marginLeft: 2,
  },

  priceTxt: {
    color: green,
    fontFamily: _fonts.nunitoSansBold,
    fontSize: _ms(20),
  },

  priceTxtTwo: {
    color: green,
    fontSize: _ms(11),
    fontFamily: _fonts.nunitoSansBold,
    textAlignVertical: 'top',
    top: 2,
  },

  roundTripTxt: {
    fontSize: _ms(9),
    fontFamily: _fonts.nunitoSansRegular,
    color: b3,
    textAlign: 'center',
    marginTop: _ms(3),
  },

  dateTxt: {
    fontFamily: _fonts.nunitoSansRegular,
    color: b3,
    fontSize: _ms(14),
    marginLeft: _ms(7),
    marginTop: _ms(8),
  },

  moneyRangeTxt: {
    color: b3,
    fontSize: 15,
    fontFamily: 'Arial',
  },

  moneyRangeTxtWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: _ms(8),
  },
});
