import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {b1, b2, b3, white} from '../config/colors';
import {genCurrentDate} from '../config/CurrentDate';
import {_fonts, _ms, _mvs} from '../components/utils/Responsive';

const FareBreakSheet = ({fareRef}) => {
  return (
    <RBSheet
      ref={fareRef}
      animationType="slide"
      openDuration={300}
      closeDuration={200}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: '#4C4C4C',
          opacity: 0.8,
        },
        draggableIcon: {
          display: 'none',
        },
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: _mvs(350),
          minHeight: 350,
          backgroundColor: white,
        },
      }}>
      <View style={styles.parent}>
        {/* nav */}
        <View style={styles.navWrap}>
          <Text style={[styles.ns600, {textTransform: 'uppercase'}]}>
            Fare Breakup
          </Text>

          <TouchableOpacity
            style={styles.cross}
            onPress={() => fareRef.current.close()}>
            <Image
              style={styles.iconStyle}
              source={require('../assets/icons/cross.png')}
            />
          </TouchableOpacity>
        </View>

        {/* destination */}
        <View style={{alignItems: 'flex-start'}}>
          <View style={styles.right}>
            <Text style={styles.navHeadTxt}>Dhaka</Text>
            <Image
              style={styles.rightImg}
              source={require('../assets/icons/next.png')}
            />
            <Text style={styles.navHeadTxt}>Dubai</Text>
          </View>
          <Text style={styles.navSubHeadTxt}>{genCurrentDate()} | 1 Adult</Text>
        </View>

        {/* fares */}
        <View style={{marginTop: _mvs(20), rowGap: _mvs(10)}}>
          <View style={styles.commonCon}>
            <View style={styles.commonConTwo}>
              <Image
                style={{width: _ms(18), height: _ms(18), tintColor: b1}}
                source={require('../assets/icons/tag.png')}
              />
              <Text style={[styles.ns400]}>Base Fare</Text>
            </View>
            <Text style={[styles.ns400]}>$ 215</Text>
          </View>

          <View style={styles.commonCon}>
            <View style={styles.commonConTwo}>
              <Image
                style={{width: _ms(18), height: _ms(18), tintColor: b1}}
                source={require('../assets/icons/users.png')}
              />
              <Text style={[styles.ns400]}>1 Adult</Text>
            </View>
            <Text style={[styles.ns400]}>$ 215</Text>
          </View>
        </View>

        {/* divider */}
        <View style={styles.divider} />

        <View style={[styles.commonCon, {paddingLeft: _ms(25)}]}>
          <Text style={[styles.ns400]}>Taxes & Surcharges</Text>
          <Text style={[styles.ns400]}>$ 215</Text>
        </View>

        {/* divider */}
        <View style={styles.divider} />

        <View style={[styles.commonCon, {paddingLeft: _ms(25)}]}>
          <Text style={[styles.ns400, {fontSize: _ms(12), color: b2}]}>
            Donate $15 towards flood relief efforts
          </Text>
          <TouchableOpacity style={styles.check}>
            <Image
              style={{width: _ms(12), height: _ms(12), tintColor: white}}
              source={require('../assets/icons/check.png')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.commonCon,
            {paddingLeft: _ms(25), marginTop: _mvs(20)},
          ]}>
          <Text style={[styles.ns400, {}]}>Grand Total</Text>
          <Text style={[styles.ns400, {}]}>$ 495</Text>
        </View>
      </View>
    </RBSheet>
  );
};

export default FareBreakSheet;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: _ms(20),
    backgroundColor: white,
  },

  navWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: _mvs(10),
  },

  cross: {
    backgroundColor: '#D9D9D9',
    padding: _ms(5),
    borderRadius: 100,
  },

  iconStyle: {width: _ms(18), height: _ms(18), tintColor: b3},

  lbB1: {
    fontFamily: _fonts.londonBetween,
    color: b1,
  },

  ns600: {
    fontFamily: _fonts.nunitoSansSemiBold,
    color: b1,
    fontSize: _ms(16),
  },

  ns400: {
    fontFamily: _fonts.nunitoSansRegular,
    color: b1,
    fontSize: _ms(15),
  },

  navHeadTxt: {
    color: b1,
    fontSize: _ms(15),
    fontFamily: _fonts.londonBetween,
  },

  navSubHeadTxt: {
    color: b2,
    fontSize: _ms(13),
    fontFamily: _fonts.londonBetween,
  },

  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rightImg: {
    width: _ms(15),
    height: _ms(15),
    marginHorizontal: _ms(10),
    resizeMode: 'contain',
    transform: [{rotate: '180deg'}],
  },

  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: _mvs(12),
  },

  check: {
    backgroundColor: b2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: _ms(22),
    height: _ms(22),
  },

  commonCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  commonConTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: _ms(10),
  },
});
