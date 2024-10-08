import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import SearchButton from '../../SearchButton';
import {b1, b2, b3, black, blue, white} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import HotelPromoOffers from '../hotels/HotelPromoOffers';
import commonStyles from '../../../assets/css/CommonFonts';
import {_fonts, _ms, _s, _vs} from '../../utils/Responsive';
import OneWayFlightPlusHotels from './sub_com/OneWayFlightPlusHotels';
import RoundTripFlightPlusHotels from './sub_com/RoundTripFlightPlusHotels';
import HotelPlusCar from './sub_com/HotelPlusCar';

const FlightAndHotels = ({
  navigation,
  data,
  // one way
  oneWayHandler,
  setOneWayHandler,
  // round trip
  roundTripHandler,
  setRoundTripHandler,
}) => {
  const [selectedMidMenu, setSelectedMidMenu] = useState('r');
  const [selectedTopMenu, setSelectedTopMenu] = useState('f&h');

  const [isClass, setIsClass] = useState(false);
  const [isTravel, setIsTravel] = useState(false);

  const handleTravellers = childData => {
    setIsClass(false);
    setIsTravel(!isTravel);
  };

  const handleClassType = childData => {
    setIsTravel(false);
    setIsClass(!isClass);
  };

  const topMenuOptions = [
    {key: 'f&h', label: 'Flight + Hotel'},
    {key: 'h&c', label: 'Hotel + Car'},
  ];

  const midMenuOptions = [
    {key: 'o', label: 'One-way'},
    {key: 'r', label: 'Round-trip'},
  ];

  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{paddingBottom: _ms(60)}}
      showsVerticalScrollIndicator={false}>
      {/* trip option nav bar */}

      <View style={[styles.subComWrapper]}>
        {/* Top Menu */}
        <View
          style={[
            styles.buttonsContainer,
            {borderRadius: 0, borderTopLeftRadius: 5, borderTopRightRadius: 5},
          ]}>
          {[
            {key: 'f&h', label: 'Flight + Hotel'},
            {key: 'h&c', label: 'Hotel + Car'},
          ].map(option => (
            <TouchableOpacity
              key={option.key}
              style={
                selectedTopMenu == option.key
                  ? styles.mmBtnActive
                  : styles.mmBtn
              }
              onPress={() => setSelectedTopMenu(option.key)}>
              <Text
                style={
                  selectedTopMenu == option.key
                    ? styles.mmBtnTxtActive
                    : styles.mmBtnTxt
                }>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Mid Menu */}
        {selectedTopMenu == 'f&h' && (
          <View style={styles.buttonsContainer}>
            {midMenuOptions.map(option => (
              <TouchableOpacity
                key={option.key}
                style={
                  selectedMidMenu == option.key
                    ? styles.mmBtnActive
                    : styles.mmBtn
                }
                onPress={() => setSelectedMidMenu(option.key)}>
                <Text
                  style={
                    selectedMidMenu == option.key
                      ? styles.mmBtnTxtActive
                      : styles.mmBtnTxt
                  }>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* trip option content */}
        {selectedTopMenu == 'f&h' && (
          <View>
            {selectedMidMenu === 'o' && (
              <OneWayFlightPlusHotels
                navigation={navigation}
                oneWayHandler={oneWayHandler}
                setOneWayHandler={setOneWayHandler}
                roundTripHandler={roundTripHandler}
                setRoundTripHandler={setRoundTripHandler}
                handleTravellers={handleTravellers}
                handleClassType={handleClassType}
                isClass={isClass}
                isTravel={isTravel}
              />
            )}
            {selectedMidMenu === 'r' && (
              <RoundTripFlightPlusHotels
                navigation={navigation}
                oneWayHandler={oneWayHandler}
                setOneWayHandler={setOneWayHandler}
                roundTripHandler={roundTripHandler}
                setRoundTripHandler={setRoundTripHandler}
              />
            )}
          </View>
        )}

        {selectedTopMenu == 'h&c' && (
          <View style={styles.allCarSizeCon}>
            <TouchableOpacity style={styles.allCarSizeBtn}>
              <Text
                style={[commonStyles.ns400, {fontSize: _ms(14), color: b3}]}>
                All Car Sizes
              </Text>
              <Image style={styles.dropIcon} source={icon.rightArrow} />
            </TouchableOpacity>
            {/* <RoundTrip navigation={navigation} dest={'opt2'} src={'h&c'} /> */}
            <HotelPlusCar />
          </View>
        )}
      </View>

      {/* search button */}

      <SearchButton
        navigation={navigation}
        name="Search"
        navigationScreen="fhsearch"
        selectedTopMenu={selectedTopMenu}
        // yaha pe selectedTopMenu pass kiya hai as a route flight + hotel AND hotel + car ke screen manage karne ke liye
      />

      {/* prifile option */}

      <View style={styles.profileButtonContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: _s(15),
          }}>
          <Image style={styles.profileIconStyle} source={icon.prologo} />
          <Text style={styles.welcomeBackTxt}>Welcome Back, Kevin!</Text>
        </View>

        <Image style={styles.greaterArrowIcon} source={icon.rightArrow} />
      </View>

      {/* calling option */}

      <View
        style={[
          styles.profileButtonContainer,
          {
            gap: _s(5),
            paddingHorizontal: _s(5),
            marginBottom: _vs(20),
            borderRadius: 0,
          },
        ]}>
        <Image style={styles.profileIconStyle} source={icon.proimg} />

        <View style={{flex: 1}}>
          <Text style={styles.TxtOne}>Looking for last-minute deals?</Text>
          <Text style={styles.TxtTwo}>
            Speak to a travel expert and a get assistance 24/7
          </Text>
        </View>

        <TouchableOpacity style={styles.callIconCon}>
          <Image style={styles.callIconStyle} source={icon.mobile} />
        </TouchableOpacity>
      </View>

      {/* deals option */}
      {selectedMidMenu === 'r' && (
        <View style={styles.dealWrap}>
          <Text style={styles.dealHeadTxt}>Flight + Hotel Packages</Text>

          <View style={styles.dealContWrap}>
            {data.map((_, i) => (
              <View key={i}>
                <HotelPromoOffers origin={'f&h'} />
              </View>
            ))}
          </View>

          <View style={styles.wrapper}>
            <Text style={styles.detailsTxt}>
              *All fares above were last found on:
              <Text style={styles.redTxt}> Oct 02, 2023 at 12:10:59 AM</Text>.
              These are based on average nightly rates and airfare includes all
              fuel surcharges, taxes & fees and our service fees. Hotels, rental
              cars and activities may have additional taxes and fees. Displayed
              rates are based on historical data, are subject to change, and
              cannot be guaranteed at the time of booking. See all booking{' '}
              <Text onPress={() => Alert.alert('t&c')} style={styles.blueTxt}>
                terms and conditions
              </Text>
            </Text>

            {/* view all btn */}
            <TouchableHighlight
              onPress={() =>
                Alert.alert('TouchableHighlight', 'Button Pressed!')
              }
              underlayColor={blue}
              style={styles.viewall}>
              <Text
                style={[commonStyles.lbB1, {fontSize: _ms(16), color: blue}]}>
                View All
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default FlightAndHotels;

const styles = StyleSheet.create({
  subComWrapper: {
    backgroundColor: white,
    paddingBottom: 5,
    marginHorizontal: _ms(8),
    borderRadius: 5,
    elevation: 20,
    shadowColor: black,
    // zIndex: 1,
  },

  buttonsContainer: {
    flexDirection: 'row',
    backgroundColor: white,
    overflow: 'scroll',
    gap: _s(6),
    padding: 5,
  },

  mmBtn: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _ms(4),
    paddingHorizontal: _ms(20),
    borderRadius: 4,
    borderWidth: 1.5,
    // borderColor: 'red',
    borderColor: 'transparent',
  },

  mmBtnActive: {
    backgroundColor: 'rgba(33, 180, 226, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _ms(4),
    paddingHorizontal: _ms(20),
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#21B4E2',
  },

  mmBtnTxtActive: {
    color: blue,
    // color: 'rgba(33, 180, 226, 1)',
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(14),
  },

  mmBtnTxt: {
    color: b3,
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(14),
  },

  profileButtonContainer: {
    marginHorizontal: _s(10),
    margin: _ms(15),
    backgroundColor: white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    paddingVertical: _vs(9),
    paddingHorizontal: _s(8),
    elevation: 10,
    shadowColor: 'gray',

    zIndex: 1,
  },

  profileIconStyle: {
    width: _s(35),
    height: _s(35),
    resizeMode: 'contain',
  },

  greaterArrowIcon: {
    width: _s(12),
    height: _s(12),
    resizeMode: 'contain',
    tintColor: b3,
  },

  welcomeBackTxt: {
    color: black,
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(14),
  },

  TxtOne: {
    color: b1,
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(12),
  },

  TxtTwo: {
    color: b1,
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(9),
  },

  callIconCon: {
    width: _s(35),
    height: _s(35),
    backgroundColor: blue,
    borderRadius: _s(35),
    alignItems: 'center',
    justifyContent: 'center',
  },

  callIconStyle: {
    width: _s(20),
    height: _s(20),
  },

  // ----------------------------

  dealWrap: {
    backgroundColor: white,
    flex: 1,
    marginTop: _vs(10),
  },

  dealHeadTxt: {
    fontFamily: _fonts.nunitoSansBold,
    fontSize: _ms(16),
    color: b1,
    textAlign: 'center',
    marginTop: _ms(20),
  },

  dealContWrap: {
    marginTop: _ms(15),
    marginHorizontal: _ms(10),
    flex: 1,
    rowGap: 20,
  },

  // roundTripStyles

  wrapper: {
    marginHorizontal: _ms(18),
    marginVertical: _ms(15),
    backgroundColor: white,
    alignItems: 'center',
  },

  detailsTxt: {
    fontFamily: _fonts.nunitoSansRegular,
    color: b2,
    fontSize: _ms(11),
    lineHeight: _ms(18),
  },

  redTxt: {
    color: '#CB3926',
    fontFamily: _fonts.nunitoSansRegular,
  },

  blueTxt: {
    color: blue,
    textDecorationLine: 'underline',
  },

  viewall: {
    borderWidth: 2,
    borderColor: blue,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _ms(7),
    width: '85%',
    marginVertical: _ms(10),
  },

  // h&c style

  allCarSizeCon: {
    // backgroundColor: 'red',
    // marginHorizontal: _ms(10),
  },

  dropIcon: {
    width: _ms(10),
    height: _ms(10),
    tintColor: b3,
    transform: [{rotate: '90deg'}],
  },

  allCarSizeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
    alignSelf: 'flex-start',
    marginLeft: _ms(5),
    padding: _ms(5),

    // backgroundColor: 'red',
  },
});
