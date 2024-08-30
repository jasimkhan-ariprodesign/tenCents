import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commonStyles from '../../../assets/css/CommonFonts';
import {white} from '../../../config/colors';
import image from '../../../config/ImageAssets';
import {_ms, _s} from '../../utils/Responsive';

const HpOffers = ({data}) => {
  const {img, details} = data;
  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.pseudo2} />
      <View style={styles.pseudo1} />
      <View
        style={{
          position: 'relative',
          marginTop: -10,
        }}>
        <Image style={styles.img} source={img} />
        <View style={styles.txtOnImageCon}>
          <Text style={[commonStyles.ns700, {color: white}]}>
            {details.name}
          </Text>
          <Text style={[commonStyles.ns600, {color: white, fontSize: _ms(14)}]}>
            {details.price}
          </Text>
          <Text style={[commonStyles.ns600, {color: white, fontSize: _ms(14)}]}>
            per person
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HpOffers;

const styles = StyleSheet.create({
  img: {
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    height: _ms(240),
    width: _s(200),
    resizeMode: 'cover',
  },
  pseudo1: {
    backgroundColor: '#DCDCDC',
    height: 20,
    width: _s(170),
    borderTopRightRadius: 20,
    marginTop: -10,
  },
  pseudo2: {
    backgroundColor: '#F5F5F5',
    height: 20,
    width: _s(140),
    borderTopRightRadius: 20,
  },

  txtOnImageCon: {
    rowGap: 5,
    position: 'absolute',
    // width: _s(200),
    // height: '100%',
    // backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    left: _s(20),
    bottom: _ms(20),
  },
});
