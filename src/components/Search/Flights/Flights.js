import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AnimatePresence, MotiView} from 'moti';
import LinearGradient from 'react-native-linear-gradient';

import SearchButton from '../../SearchButton';
import {b1, b3, black, blue, white} from '../../../config/colors';
import OneWay from './OneWay';
import RoundTrip from './RoundTrip';
import MultiCity from './MultiCity';
import DealItem from './DealItem';
import icon from '../../../config/IconAssets';
import {_fonts, _ms, _s, _vs} from '../../utils/Responsive';

const {width} = Dimensions.get('window');

const Flights = ({
  navigation,
  data,
  // one way
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
  const [selectedMidMenu, setSelectedMidMenu] = useState('o');
  const [shouldAnimate, setShouldAnimate] = useState(false);

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

  //  rendering sub comp ---> ✌
  const subComponents = [
    {
      key: 'o',
      Component: OneWay,
      props: {
        navigation,
        isClass,
        isTravel,
        handleTravellers,
        handleClassType,
        oneWayHandler,
        setOneWayHandler,
      },
    },
    {
      key: 'r',
      Component: RoundTrip,
      props: {
        navigation,
        oneWayHandler,
        setOneWayHandler,
        roundTripHandler,
        setRoundTripHandler,
      },
    },
    {
      key: 'm',
      Component: MultiCity,
      props: {
        navigation,
        multiCityHandler,
        setMultiCityHandler,
        multiCityFlights,
        setMultiCityFlights,
      },
    },
  ];

  // Handle adding new flight
  const addFlight = index => {
    setMultiCityFlights([
      ...multiCityFlights,
      {
        origin: '',
        destination: '',
        date: '',
        travellers: 1,
        flightClass: 'Economy',
        currentIndex: 0,
      },
    ]);
  };

  return (
    <>
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{paddingBottom: _ms(60)}}
        showsVerticalScrollIndicator={false}>
        {/* {selectedMidMenu === 'm' && (
          <BgGradient width={width} height={height + height} />
        )} */}

        <>
          <LinearGradient
            colors={
              selectedMidMenu == 'm'
                ? ['rgba(67, 89, 112, 1)', 'rgba(102, 152, 197, 0.75)']
                : ['transparent', 'transparent']
            }
            style={{
              width: width,
              paddingTop: _ms(8),
              zIndex: -100,
            }}>
            <View
              style={[
                styles.subComWrapper,
                {
                  backgroundColor:
                    selectedMidMenu == 'm' ? 'transparent' : white,
                  elevation: selectedMidMenu == 'm' ? 0 : 20,
                },
              ]}>
              {/* trip option nav bar */}

              <View style={styles.buttonsContainer}>
                {[
                  {key: 'o', label: 'One-way'},
                  {key: 'r', label: 'Round-trip'},
                  {key: 'm', label: 'Multi-city'},
                ].map(option => (
                  <TouchableOpacity
                    key={option.key}
                    style={
                      selectedMidMenu === option.key
                        ? styles.mmBtnActive
                        : styles.mmBtn
                    }
                    onPress={() => {
                      setShouldAnimate(true);
                      setSelectedMidMenu(option.key);
                    }}>
                    <Text
                      style={
                        selectedMidMenu === option.key
                          ? styles.mmBtnTxtActive
                          : styles.mmBtnTxt
                      }>
                      {option.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {subComponents.map(({key, Component, props}) => (
                <AnimatePresence key={key}>
                  {selectedMidMenu === key && (
                    <MotiView
                      style={{flex: 1}}
                      // from={{
                      //   opacity:
                      //     selectedMidMenu == 'm'
                      //       ? 0.98
                      //       : shouldAnimate
                      //       ? 0.6
                      //       : 1,
                      //   scale:
                      //     selectedMidMenu == 'm'
                      //       ? 1.003
                      //       : shouldAnimate
                      //       ? 1.004
                      //       : 1,
                      //   // backgroundColor: white,
                      // }}
                      // animate={{
                      //   opacity: 1,
                      //   scale: 1,
                      //   backgroundColor: 'transparent',
                      // }}
                      // transition={{
                      //   duration: 300,
                      //   type: 'timing',
                      //   // delay: shouldAnimate ? 100 : 0,
                      //   delay: 0,
                      // }}
                      // --------------- ??
                      // exit={{
                      //   opacity: 0,
                      //   scale: 0,
                      // }}
                      // exitTransition={{
                      //   type: 'spring',
                      //   duration: 100,
                      //   delay: 0,
                      // }}
                    >
                      <Component {...props} />
                    </MotiView>
                  )}
                </AnimatePresence>
              ))}
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
                    addFlight();
                  }}
                  style={styles.addFlightBtn}>
                  <Text style={styles.addFlightTxt}>Add Flight</Text>
                </TouchableOpacity>
              </View>
            )}

            {/* search button */}

            <View style={{zIndex: 1}}>
              <SearchButton
                navigation={navigation}
                name="Search"
                navigationScreen="flightsearch"
              />
            </View>

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
                <Text style={styles.TxtOne}>
                  Looking for last-minute deals?
                </Text>
                <Text style={styles.TxtTwo}>
                  Speak to a travel expert and a get assistance 24/7
                </Text>
              </View>

              <TouchableOpacity style={styles.callIconCon}>
                <Image style={styles.callIconStyle} source={icon.mobile} />
              </TouchableOpacity>
            </View>
            {/* ------------------------------- ???????????????????? */}
          </LinearGradient>
        </>

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
    </>
  );
};

export default Flights;

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

  // -------------------------------------

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

  // ----------------------------

  dealWrap: {
    backgroundColor: white,
    elevation: 3,
    flex: 1,
    marginHorizontal: _s(8),
    borderRadius: 10,
    marginTop: _vs(15),
  },

  dealHeadTxt: {
    fontFamily: _fonts.nunitoSansBold,
    fontSize: _ms(16),
    color: b1,
    textAlign: 'center',
    marginTop: _ms(20),
  },

  dealContWrap: {
    marginTop: _ms(20),
    marginHorizontal: _ms(10),
    flex: 1,
    rowGap: 20,
    // backgroundColor: 'blue',
  },
});
