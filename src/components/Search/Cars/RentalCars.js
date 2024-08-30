import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {formatDate} from '../../../config/CurrentDate';
import icon from '../../../config/IconAssets';
import {b1, b3, black, blue, w1, white} from '../../../config/colors';
import {_fonts, _ms, _s, _vs} from '../../utils/Responsive';

const RentalCars = ({navigation, handleTravellers, isTravel}) => {
  // all data's are wrong and does not relate to this compo

  return (
    <View style={styles.main}>
      {/*  */}

      <View style={styles.topWrap}>
        <TouchableOpacity
          style={[
            styles.allCarRentalBtn,
            {marginLeft: _ms(-5), marginRight: _ms(15)},
          ]}>
          <Text style={styles.allCarRentalTxt}>All Car Rental Companies</Text>
          <Image style={styles.downArrow} source={icon.rightArrow} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.allCarRentalBtn}>
          <Text style={styles.allCarRentalTxt}>All Car Sizes</Text>
          <Image style={styles.downArrow} source={icon.rightArrow} />
        </TouchableOpacity>
      </View>

      {/* top selection row */}
      <View style={styles.topWrap}>
        <View style={styles.left}>
          <Text style={styles.fromTxt}>PickUP</Text>

          <TouchableOpacity
            onPress={() => {
              //
            }}
            style={styles.enterLocBtn}>
            <Text style={styles.enterLocTxt}>Enter Location</Text>
          </TouchableOpacity>

          <Text style={styles.fromTxt}>PickUP</Text>
        </View>

        <View style={styles.right}>
          <Text style={[styles.fromTxt, {textAlign: 'right'}]}>Drop-Off</Text>

          <TouchableOpacity
            onPress={() => {
              //
            }}
            style={styles.enterLocBtn}>
            <Text style={[styles.enterLocTxt, {textAlign: 'right'}]}>
              Enter Location
            </Text>
          </TouchableOpacity>

          <Text style={[styles.fromTxt, {textAlign: 'right'}]}>Drop-Off</Text>
        </View>
      </View>

      <View style={styles.horizontalLine} />

      {/* middle selection row */}
      <View style={[styles.topWrap, {paddingTop: 5}]}>
        <View style={styles.left}>
          <Text style={styles.fromTxt}>PickUP Date</Text>

          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('traveldate');
            }}>
            <Text style={styles.enterLocTxt}>Select Date</Text>
          </TouchableOpacity>

          <Text style={styles.fromTxt}>Time</Text>
        </View>

        <View style={styles.right}>
          <Text style={[styles.fromTxt, {textAlign: 'right'}]}>
            Drop-Off Date
          </Text>

          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('traveldate');
            }}>
            <Text style={[styles.enterLocTxt, {textAlign: 'right'}]}>
              Select Date
            </Text>
          </TouchableOpacity>

          <Text style={[styles.fromTxt, {textAlign: 'right'}]}>Time</Text>
        </View>
      </View>

      <View style={styles.horizontalLine} />

      {/* bottom selection row */}

      <View style={[styles.travellersAndClassCon]}>
        <View style={styles.travellersCon}>
          <Text style={styles.fromTxt}>Travellers</Text>

          <TouchableOpacity
            onPress={() => {
              handleTravellers();
            }}
            style={styles.travellersBtn}>
            <Text style={[styles.enterLocTxt]}>1 Adult</Text>
          </TouchableOpacity>
        </View>

        {/* travellers sellection ---------------------------------------------------------- */}

        {isTravel && (
          <View style={styles.travlOptnsWrap}>
            <TouchableOpacity
              onPress={() => {
                handleTravellers();
              }}
              style={styles.closeButton}>
              <Image source={icon.cross} style={styles.closeIcon} />
            </TouchableOpacity>

            <View style={styles.travelContWrap}>
              <View style={{backgroundColor: 'transparent'}}>
                <Text style={styles.travelHdTxt}>Adults</Text>
                <Text style={styles.travelSubHdTxt}>Aged 12+ years</Text>
              </View>

              <View style={styles.btn}>
                <TouchableOpacity
                  onPress={() => {
                    //
                  }}
                  style={styles.minusButton}>
                  <Image source={icon.minus} style={styles.minusIconStyle} />
                </TouchableOpacity>

                <Text numberOfLines={1} style={styles.btnTxt}>
                  0
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    //
                  }}
                  style={styles.minusButton}>
                  <Image source={icon.plus} style={styles.minusIconStyle} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.travelContWrap}>
              <View>
                <Text style={styles.travelHdTxt}>Children</Text>
                <Text style={styles.travelSubHdTxt}>Aged 2-12 years</Text>
              </View>

              <View style={styles.btn}>
                <TouchableOpacity
                  onPress={() => {
                    //
                  }}
                  style={styles.minusButton}>
                  <Image source={icon.minus} style={styles.minusIconStyle} />
                </TouchableOpacity>

                <Text numberOfLines={1} style={styles.btnTxt}>
                  0
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    //
                  }}
                  style={styles.minusButton}>
                  <Image source={icon.plus} style={styles.minusIconStyle} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.travelContWrap}>
              <View>
                <Text style={styles.travelHdTxt}>Infants</Text>
                <Text style={styles.travelSubHdTxt}>Bellow 2 years</Text>
              </View>

              <View style={styles.btn}>
                <TouchableOpacity
                  onPress={() => {
                    //
                  }}
                  style={styles.minusButton}>
                  <Image source={icon.minus} style={styles.minusIconStyle} />
                </TouchableOpacity>

                <Text numberOfLines={1} style={styles.btnTxt}>
                  0
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    //
                  }}
                  style={styles.minusButton}>
                  <Image source={icon.plus} style={styles.minusIconStyle} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default RentalCars;

const styles = StyleSheet.create({
  main: {
    backgroundColor: white,
    paddingVertical: _vs(5),
    paddingHorizontal: _ms(10),
  },

  allCarRentalBtn: {
    // backgroundColor: 'silver',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: _ms(10),
    marginBottom: _ms(15),
    paddingVertical: _ms(4),
    gap: _ms(10),
  },

  allCarRentalTxt: {
    color: b3,
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(12),
  },

  downArrow: {
    width: _ms(10),
    height: _ms(10),
    transform: [{rotate: '90deg'}],
    tintColor: b3,
    top: 2,
  },

  topWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  fromTxt: {
    color: b3,
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(11),
  },

  left: {
    flex: 1,
  },

  enterLocBtn: {
    // backgroundColor: 'red',
    paddingVertical: _vs(5),
  },

  enterLocTxt: {
    color: '#232020',
    fontSize: _ms(14),
    fontFamily: _fonts.nunitoSansSemiBold,
    marginVertical: _ms(5),
  },

  reverseBtn: {
    width: _s(26),
    height: _s(26),
    backgroundColor: w1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: _s(4),
  },

  reverseIcon: {
    width: _s(12),
    height: _s(12),
    tintColor: blue,
    resizeMode: 'contain',
  },

  right: {
    flex: 1,
  },

  horizontalLine: {
    backgroundColor: b3,
    height: 1,
    marginTop: 5,
  },

  //  ---

  travellersAndClassCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    gap: 5,

    // backgroundColor: 'aliceblue',
  },

  travellersCon: {
    alignItems: 'flex-start',
    maxWidth: '50%',

    // backgroundColor: 'pink',
  },

  travellersBtn: {
    // backgroundColor: 'red',
    paddingVertical: _vs(5),
    paddingHorizontal: _s(2),
    borderRadius: 5,
    flexDirection: 'row',
    // backgroundColor: 'blue',
  },

  classCon: {
    alignItems: 'flex-end',
    maxWidth: '50%',

    // backgroundColor: 'lime',
  },

  classChildCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: _s(4),
  },

  imgCls: {
    width: _s(9),
    height: _s(9),
    resizeMode: 'contain',
    transform: [{rotate: '90deg'}],
    tintColor: b3,
  },

  // ------

  travlOptnsWrap: {
    backgroundColor: white,
    position: 'absolute',
    zIndex: 100,
    top: _vs(10),
    left: _s(70),
    borderRadius: 3,
    padding: _s(5),
    paddingVertical: _vs(15),

    elevation: 20,
    shadowColor: black,
    gap: _vs(5),
    borderWidth: 1,
    borderColor: 'aliceblue',
  },

  closeButton: {
    width: _s(35),
    height: _s(35),
    borderRadius: _s(30),
    backgroundColor: blue,
    elevation: 1,
    shadowColor: black,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    top: -20,
    right: -22,
    borderWidth: 0.6,
    borderColor: blue,
  },

  closeIcon: {
    width: _s(15),
    height: _s(15),
    resizeMode: 'contain',
    tintColor: white,
  },

  travelContWrap: {
    // backgroundColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: _vs(10),
  },

  travelHdTxt: {
    color: b1,
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(11),
  },

  travelSubHdTxt: {
    color: b3,
    fontFamily: _fonts.nunitoSansBold,
    fontSize: _ms(9),
  },

  btn: {
    flexDirection: 'row',
    // alignItems: 'center',
    borderColor: blue,
    borderWidth: 0.7,
    borderRadius: 4,
    // backgroundColor: 'green',
    gap: 5,
  },

  minusButton: {
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: _s(9),
    paddingHorizontal: _s(15),
  },

  minusIconStyle: {
    width: _s(8),
    height: _s(8),
    resizeMode: 'contain',
    tintColor: blue,
  },

  btnTxt: {
    color: blue,
    fontFamily: _fonts.nunitoSansBold,
    fontSize: _ms(12),
    textAlignVertical: 'center',
    // backgroundColor: 'red',
    maxWidth: 50,
  },

  // -----------------------------

  classOptnsWrap: {
    backgroundColor: white,
    position: 'absolute',
    zIndex: 99,
    top: 5,
    right: _s(60),
    elevation: 20,
    shadowColor: black,
  },

  classOptnTxt: {
    fontFamily: _fonts.nunitoSansRegular,
    color: b1,
    fontSize: _ms(12),
  },

  classOptnTxtActive: {
    // fontFamily: _fonts.nunitoSansSemiBold,
    fontFamily: _fonts.nunitoSansRegular,
    color: white,
    fontSize: _ms(12),
  },

  classOptnTxtWrap: {
    paddingVertical: _vs(8),
    paddingHorizontal: _s(15),
    backgroundColor: white,
  },

  classOptnTxtWrapActive: {
    paddingVertical: _vs(8),
    paddingHorizontal: _s(15),
    backgroundColor: blue,
  },

  //  ---- search preferred airline

  preferredAirLineCon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingLeft: _ms(5),
    overflow: 'hidden',
    alignSelf: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#DEDEDE',

    zIndex: -1,

    // FbackgroundColor: 'blue',
  },

  searchIconStyle: {
    width: _ms(15),
    height: _ms(15),
    resizeMode: 'contain',
    tintColor: blue,
  },

  searchPreferredAirLineInput: {
    color: b3,
    padding: 0,
    paddingHorizontal: _ms(15),
    fontSize: _ms(10),

    // backgroundColor: 'red',
    // fontFamily: _fonts.nunitoSansRegular,
  },

  R_F_A_cityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: _ms(15),
    paddingLeft: _ms(5),
    gap: _ms(5),
    zIndex: -1,
  },

  radioButton: {
    borderWidth: 1,
    borderColor: blue,
    padding: 3,
    borderRadius: _ms(15),
  },

  radio: {
    width: _ms(10),
    height: _ms(10),
    borderRadius: _ms(15),
    // borderWidth: 1,
    // borderColor: blue,
    backgroundColor: blue,
  },

  searchTxt: {
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(10),
    color: b3,
  },

  arrow: {
    width: _ms(8),
    height: _ms(8),
    transform: [{rotate: '90deg'}],
    marginLeft: _ms(10),
    tintColor: b1,
  },
});
