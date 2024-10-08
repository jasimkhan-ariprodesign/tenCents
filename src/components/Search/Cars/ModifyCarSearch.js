import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {b1, b3, blue} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import {_fonts, _ms, _mvs, checkIconStyle} from '../../utils/Responsive';

const ModifyCarSearch = ({navigation}) => {
  return (
    <View style={styles.main}>
      {/* top selection row */}
      <View style={[commonStyles.commWrapTwo, {gap: _ms(10)}]}>
        <View style={styles.left}>
          <Text style={styles.tbTxt}>PickUp</Text>

          <TouchableOpacity>
            <Text style={styles.midTxt}>Calgary, Alberta</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.right}>
          <Text style={styles.tbTxt}>Drop- Off</Text>

          <TouchableOpacity>
            <Text style={styles.midTxt}>Enter Location</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.btmBrdr} />

      {/* middle selection row */}
      <View
        style={[commonStyles.commWrapTwo, {marginTop: _mvs(10), gap: _ms(10)}]}>
        <View style={styles.left}>
          <Text style={styles.tbTxt}>PickUp Date</Text>

          <TouchableOpacity onPress={() => navigation.navigate('traveldate')}>
            <Text style={styles.midTxt}>Select Date</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
            <Text style={styles.tbTxt}>Time</Text>
            <Image
              style={[checkIconStyle, {transform: [{rotate: '90deg'}]}]}
              tintColor={b3}
              source={icon.rightArrow}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.right}>
          <Text style={styles.tbTxt}>Drop-Off Date</Text>

          <TouchableOpacity onPress={() => navigation.navigate('traveldate')}>
            <Text style={styles.midTxt}>Select Date</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
            <Text style={styles.tbTxt}>Time</Text>
            <Image
              style={[checkIconStyle, {transform: [{rotate: '90deg'}]}]}
              tintColor={b3}
              source={icon.rightArrow}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.btmBrdr]} />
    </View>
  );
};

export default ModifyCarSearch;

const styles = StyleSheet.create({
  main: {},

  topWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  img: {
    width: 20,
    height: 20,
    tintColor: blue,
  },

  tbTxt: {
    color: b3,
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(13),
  },

  midTxt: {
    color: b1,
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(14),
    marginVertical: _mvs(8),
  },

  left: {
    flex: 1.2,
  },

  right: {
    flex: 1,
    // alignItems: 'flex-end',
  },

  btmBrdr: {
    backgroundColor: 'silver',
    height: 2,
    marginTop: _mvs(4),
  },

  imgCls: {
    width: 10,
    height: 10,
    transform: [{rotate: '90deg'}],
    tintColor: b3,
    marginLeft: 4,
  },
});
