import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BgGradient from '../../../utility/BgGradient';
import SearchButton from '../../SearchButton';
import {b1, b3, black, blue, white} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import OneWay from '../flights/OneWay';
import RoundTrip from '../flights/RoundTrip';
import MultiCity from '../flights/MultiCity';
import DealItem from '../flights/DealItem';
import commonStyles from '../../../assets/css/CommonFonts';
import {_fonts, _ms, _s, _vs} from '../../utils/Responsive';

const GroupTickets = ({
  navigation,
  data,
  width,
  height, // one way
  oneWayHandler,
  setOneWayHandler,
  // round trip
  roundTripHandler,
  setRoundTripHandler,
  // multi city
  multiCityHandler,
  setMultiCityHandler,
  multiCityFlights,
  setMultiCityFlights,
}) => {
  const [selectedMidMenu, setSelectedMidMenu] = useState('r');
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

  return (
    <ScrollView
      style={{flex: 1}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: _ms(60)}}>
      {selectedMidMenu === 'm' && <View style={{marginVertical: 3}} />}
      {selectedMidMenu === 'm' && (
        <BgGradient width={width} height={height + height} />
      )}

      {/* trip option nav bar */}
      <View
        style={[
          styles.subComWrapper,
          {
            backgroundColor: selectedMidMenu == 'm' ? 'transparent' : white,
            elevation: selectedMidMenu == 'm' ? 0 : 20,
          },
        ]}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={selectedMidMenu == 'o' ? styles.mmBtnActive : styles.mmBtn}
            onPress={() => setSelectedMidMenu('o')}>
            <Text
              style={
                selectedMidMenu == 'o' ? styles.mmBtnTxtActive : styles.mmBtnTxt
              }>
              One-way
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={selectedMidMenu == 'r' ? styles.mmBtnActive : styles.mmBtn}
            onPress={() => setSelectedMidMenu('r')}>
            <Text
              style={
                selectedMidMenu == 'r' ? styles.mmBtnTxtActive : styles.mmBtnTxt
              }>
              Round-trip
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={selectedMidMenu == 'm' ? styles.mmBtnActive : styles.mmBtn}
            onPress={() => setSelectedMidMenu('m')}>
            <Text
              style={
                selectedMidMenu == 'm' ? styles.mmBtnTxtActive : styles.mmBtnTxt
              }>
              Multi-city
            </Text>
          </TouchableOpacity>
        </View>

        {/* trip option content */}
        {selectedMidMenu === 'o' && (
          <OneWay
            navigation={navigation}
            isClass={isClass}
            isTravel={isTravel}
            handleTravellers={handleTravellers}
            handleClassType={handleClassType}
            oneWayHandler={oneWayHandler}
            setOneWayHandler={setOneWayHandler}
          />
        )}
        {/*  ------------------------------------------------------------------- yaha pe */}
        {selectedMidMenu === 'r' && (
          <RoundTrip
            navigation={navigation}
            oneWayHandler={oneWayHandler}
            setOneWayHandler={setOneWayHandler}
            roundTripHandler={roundTripHandler}
            setRoundTripHandler={setRoundTripHandler}
          />
        )}
        {selectedMidMenu === 'm' && (
          <MultiCity
            navigation={navigation}
            multiCityHandler={multiCityHandler}
            setMultiCityHandler={setMultiCityHandler}
            multiCityFlights={multiCityFlights}
            setMultiCityFlights={setMultiCityFlights}
          />
        )}
      </View>

      {/* add flight button */}
      {selectedMidMenu === 'm' && (
        <View
          style={{
            alignSelf: 'center',
            marginTop: _vs(20),
          }}>
          <TouchableOpacity
            onPress={() => {
              //   addFlight();
            }}
            style={styles.addFlightBtn}>
            <Text style={styles.addFlightTxt}>Add Flight</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* search button */}
      <SearchButton
        navigation={navigation}
        navigationScreen={'gtdisclaimer'}
        name="Search"
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

      {/* customer tips1 */}
      <View style={[styles.cusTips, {backgroundColor: '#B5D8FF'}]}>
        <Text style={[commonStyles.ns400, {fontSize: 18, textAlign: 'center'}]}>
          A customized fare quote to give you savings over the available fares.
        </Text>
      </View>

      {/* customer tips2 */}
      <View style={[styles.cusTips, {backgroundColor: '#BBFFBE'}]}>
        <Text style={[commonStyles.ns400, {fontSize: 18, textAlign: 'center'}]}>
          Flexibility to add names up to 7 days before the journey
        </Text>
      </View>

      {/* customer tips3 */}
      <View style={[styles.cusTips, {backgroundColor: '#FECAFF'}]}>
        <Text style={[commonStyles.ns400, {fontSize: 18, textAlign: 'center'}]}>
          A convenient interface to book, make payment and add names of
          travelers
        </Text>
      </View>

      {/* deals option */}
      {selectedMidMenu === 'r' && (
        <View style={styles.dealWrap}>
          <Text style={styles.dealHeadTxt}>Explore Deals from San Jose</Text>

          <View style={styles.dealContWrap}>
            {data.map((_, i) => (
              <View key={i}>
                <DealItem />
                {i == data.length - 1 ? (
                  <View style={{marginBottom: 30}} />
                ) : null}
              </View>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default GroupTickets;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'gray',
    backgroundColor: white,
    overflow: 'scroll',
    gap: _s(8),
    padding: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  subComWrapper: {
    // backgroundColor: 'red',
    backgroundColor: white,
    // paddingVertical: 5,
    // padding: 5, // ----------------------
    paddingBottom: 5,
    marginHorizontal: _s(8),
    borderRadius: 5,
    elevation: 20,
    shadowColor: black,
    // shadowColor: 'red',
    zIndex: 1,
  },

  mmBtn: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _ms(4),
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },

  mmBtnActive: {
    flex: 1,
    backgroundColor: 'rgba(33, 180, 226, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
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

  addFlightBtn: {
    borderWidth: 1,
    borderColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _ms(9),
    width: _s(180),
    borderRadius: 4,
  },
  addFlightTxt: {
    color: white,
    fontFamily: _fonts.londonBetween,
    fontSize: _ms(16),
  },

  profileButtonContainer: {
    marginHorizontal: _s(10),
    marginTop: _vs(15),
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

  //
  mainMenuWrap: {
    marginHorizontal: 7,
    backgroundColor: white,
    borderRadius: 4,
    elevation: 6,
    marginBottom: 20,
  },
  mmContWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 7,
    marginHorizontal: 5,
  },
  //   mmBtn: {
  //     paddingVertical: 6,
  //     paddingHorizontal: 21,
  //   },
  //   mmBtnActive: {
  //     paddingVertical: 6,
  //     backgroundColor: 'rgba(33, 180, 226, 0.1)',
  //     paddingHorizontal: 21,
  //     borderRadius: 4,
  //     borderColor: 'rgba(33, 180, 226, 1)',
  //     borderWidth: 0.9,
  //   },
  //   mmBtnTxtActive: {
  //     color: 'rgba(33, 180, 226, 1)',
  //     fontFamily: 'NunitoSans_10pt-Bold',
  //     fontSize: 15,
  //   },
  //   mmBtnTxt: {
  //     color: b3,
  //     fontFamily: 'NunitoSans_10pt-Bold',
  //     fontSize: 15,
  //   },
  pBarWrap: {
    backgroundColor: white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    paddingVertical: 12,
    elevation: 4,
  },
  callImg: {
    width: 26,
    height: 26,
  },
  callImgWrap: {
    width: 45,
    height: 45,
    backgroundColor: blue,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },
  arwImg: {
    width: 20,
    height: 20,
    tintColor: b3,
    marginRight: 10,
  },
  proLogoWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  proLogoTxt: {
    color: black,
    fontFamily: 'NunitoSans_10pt-Regular',
    fontSize: 15,
    marginLeft: 15,
  },
  addBarWrap: {
    backgroundColor: white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    elevation: 3,
  },
  addTxtB: {
    color: b1,
    fontFamily: 'NunitoSans_10pt-Bold',
    fontSize: 13,
    marginBottom: 5,
  },
  addTxt: {
    color: b1,
    fontFamily: 'NunitoSans_10pt-Regular',
    fontSize: 11,
  },
  dealWrap: {
    backgroundColor: white,
    elevation: 3,
    flex: 1,
    marginHorizontal: 7,
    borderRadius: 10,
    marginTop: 12,
  },
  dealHeadTxt: {
    fontFamily: 'NunitoSans_10pt-Bold',
    fontSize: 17,
    color: b1,
    textAlign: 'center',
    marginTop: 25,
  },
  dealContWrap: {
    marginTop: 20,
    marginHorizontal: 20,
    flex: 1,
    rowGap: 20,
  },
  cusTips: {
    marginHorizontal: 10,
    marginTop: 18,
    marginBottom: 10,
    paddingVertical: 40,
    paddingHorizontal: 26,
  },
});
