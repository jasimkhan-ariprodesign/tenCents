import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {b1, b3, black, blue, w1, white} from '../../../../config/colors';
import icon, {check, cross, minus, plus} from '../../../../config/IconAssets';
import {_fonts, _ms, _s, _vs} from '../../../utils/Responsive';
import {formatDate} from '../../../../config/CurrentDate';

const HotelPlusCar = ({
  navigation,
  oneWayHandler,
  setOneWayHandler,
  roundTripHandler,
  setRoundTripHandler,
}) => {
  const [isClass, setIsClass] = useState(false);
  const [isTravel, setIsTravel] = useState(false);

  const [homesAndApartments, setHomesAndApartments] = useState('H&A');

  const [origin, setOrigin] = useState('origin');
  const [destination, setDestination] = useState('destination');

  const handleReverseLocations = () => {
    setOneWayHandler(prevState => ({
      ...prevState,
      origin: prevState.destination,
      destination: prevState.origin,
    }));
  };

  return (
    <View style={styles.main}>
      {/* top selection row */}
      <View style={styles.topWrap}>
        <View style={styles.left}>
          <Text style={styles.fromTxt}>From</Text>

          <TouchableOpacity
            onPress={() => {
              // setOneWayHandler({...oneWayHandler, showSearchCon: true});
            }}
            style={styles.enterLocBtn}>
            <Text style={styles.enterLocTxt}>
              {/* {oneWayHandler?.origin?.length > 0
                ? oneWayHandler?.origin
                : 'Enter Location'} */}
              Enter Location
            </Text>
          </TouchableOpacity>

          <Text style={styles.fromTxt}>Origin</Text>
        </View>

        <TouchableOpacity
          // onPress={handleReverseLocations}
          style={styles.reverseBtn}>
          <Image style={styles.reverseIcon} source={icon.exchange} />
        </TouchableOpacity>

        <View style={styles.right}>
          <Text style={[styles.fromTxt, {textAlign: 'right'}]}>
            Destination
          </Text>

          <TouchableOpacity
            onPress={() => {
              // setOneWayHandler({...oneWayHandler, showSearchCon: true});
            }}
            style={styles.enterLocBtn}>
            <Text style={[styles.enterLocTxt, {textAlign: 'right'}]}>
              {/* {oneWayHandler?.destination?.length > 0
                ? oneWayHandler?.destination
                : 'Enter Location'} */}
              Enter Location
            </Text>
          </TouchableOpacity>

          <Text style={[styles.fromTxt, {textAlign: 'right'}]}>
            Destination
          </Text>
        </View>
      </View>

      <View style={styles.horizontalLine} />

      {/* middle selection row */}
      <View style={[styles.topWrap, {paddingTop: 5}]}>
        <View style={styles.left}>
          <Text style={styles.fromTxt}>Depart</Text>

          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('traveldate');
              // setOneWayHandler({...oneWayHandler, showCalenderCon: true});
            }}>
            <Text style={styles.enterLocTxt}>
              {/* {oneWayHandler?.date?.length > 0
                ? `${formatDate(oneWayHandler.date)}`
                : 'Select Date'} */}
              Select Date
            </Text>
          </TouchableOpacity>

          <Text style={styles.fromTxt}>Day</Text>
        </View>

        <View style={styles.right}>
          <Text style={[styles.fromTxt, {textAlign: 'right'}]}>Return</Text>

          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('traveldate');
              // setRoundTripHandler({
              //   ...roundTripHandler,
              //   showCalenderConRoundTrip: true,
              // });
            }}>
            <Text style={[styles.enterLocTxt, {textAlign: 'right'}]}>
              {/* {roundTripHandler?.returnDateRoundTrip?.length > 0
                ? `${formatDate(roundTripHandler.returnDateRoundTrip)}`
                : 'Select Date'} */}
              Select Date
            </Text>
          </TouchableOpacity>

          <Text style={[styles.fromTxt, {textAlign: 'right'}]}>
            Book Return
          </Text>
        </View>
      </View>

      <View style={styles.horizontalLine} />

      {/* bottom selection row */}

      <View style={[styles.travellersAndClassCon]}>
        <View style={styles.travellersCon}>
          <Text style={styles.fromTxt}>Travellers</Text>

          <TouchableOpacity
            onPress={() => {
              setIsTravel(!isTravel);
              setIsClass(false);
              // handleTravellersSellection();
            }}
            style={styles.travellersBtn}>
            <Text
              style={[
                styles.enterLocTxt,
                // {fontSize: children > 0 && infants > 0 ? _ms(14) : _ms(16)},
              ]}>
              {/* {`${oneWayHandler?.adults} Adult`}
              {oneWayHandler?.childrens > 0
                ? ` ${oneWayHandler?.childrens} Children`
                : null}
              {oneWayHandler?.infants > 0
                ? ` ${oneWayHandler?.infants} Infant`
                : null} */}
              1 Adult
            </Text>
          </TouchableOpacity>
        </View>

        {/* travellers sellection ---------------------------------------------------------- */}

        {isTravel && (
          <View style={styles.travlOptnsWrap}>
            <TouchableOpacity
              onPress={() => {
                setIsTravel(!isTravel);
              }}
              style={styles.closeButton}>
              <Image source={cross} style={styles.closeIcon} />
            </TouchableOpacity>

            <View style={styles.travelContWrap}>
              <View style={{backgroundColor: 'transparent'}}>
                <Text style={styles.travelHdTxt}>Adults</Text>
                <Text style={styles.travelSubHdTxt}>Aged 12+ years</Text>
              </View>

              <View style={styles.btn}>
                <TouchableOpacity
                  onPress={() => {
                    // if (oneWayHandler?.adults <= 1) {
                    //   setOneWayHandler({
                    //     ...oneWayHandler,
                    //     adults: 1,
                    //   });
                    // } else {
                    //   setOneWayHandler({
                    //     ...oneWayHandler,
                    //     adults: oneWayHandler.adults - 1,
                    //   });
                    // }
                  }}
                  style={styles.minusButton}>
                  <Image source={minus} style={styles.minusIconStyle} />
                </TouchableOpacity>

                <Text numberOfLines={1} style={styles.btnTxt}>
                  {/* {oneWayHandler?.adults} */}0
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    // setOneWayHandler({
                    //   ...oneWayHandler,
                    //   adults: oneWayHandler?.adults + 1,
                    // });
                  }}
                  style={styles.minusButton}>
                  <Image source={plus} style={styles.minusIconStyle} />
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
                    // if (oneWayHandler.childrens <= 0) {
                    //   setOneWayHandler({
                    //     ...oneWayHandler,
                    //     childrens: 0,
                    //   });
                    // } else {
                    //   setOneWayHandler({
                    //     ...oneWayHandler,
                    //     childrens: oneWayHandler.childrens - 1,
                    //   });
                    // }
                  }}
                  style={styles.minusButton}>
                  <Image source={minus} style={styles.minusIconStyle} />
                </TouchableOpacity>

                <Text numberOfLines={1} style={styles.btnTxt}>
                  {/* {oneWayHandler?.childrens} */}0
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    // setOneWayHandler({
                    //   ...oneWayHandler,
                    //   childrens: oneWayHandler.childrens + 1,
                    // });
                  }}
                  style={styles.minusButton}>
                  <Image source={plus} style={styles.minusIconStyle} />
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
                    // if (oneWayHandler.infants <= 0) {
                    //   setOneWayHandler({
                    //     ...oneWayHandler,
                    //     infants: 0,
                    //   });
                    // } else {
                    //   setOneWayHandler({
                    //     ...oneWayHandler,
                    //     infants: oneWayHandler.infants - 1,
                    //   });
                    // }
                  }}
                  style={styles.minusButton}>
                  <Image source={minus} style={styles.minusIconStyle} />
                </TouchableOpacity>

                <Text numberOfLines={1} style={styles.btnTxt}>
                  {/* {oneWayHandler?.infants} */}0
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    // setOneWayHandler({
                    //   ...oneWayHandler,
                    //   infants: oneWayHandler.infants + 1,
                    // });
                  }}
                  style={styles.minusButton}>
                  <Image source={plus} style={styles.minusIconStyle} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        <View style={styles.classCon}>
          <View style={styles.classChildCon}>
            <Text style={styles.fromTxt}>{'Room'}</Text>
            <Image style={styles.imgCls} source={icon.rightArrow} />
          </View>

          <TouchableOpacity
            onPress={() => {
              setIsClass(!isClass);
              setIsTravel(false);
            }}
            style={styles.travellersBtn}>
            <Text style={styles.enterLocTxt}>
              {/* {oneWayHandler?.flightClass} */}1 Room
            </Text>
          </TouchableOpacity>
        </View>

        {/* room sellection ---------------------------------------------------------- */}

        {isClass && (
          <View style={styles.classOptnsWrap}>
            {['Economy', 'Premium Economy', 'Business', 'First Class'].map(
              item => {
                return (
                  <TouchableOpacity
                    key={item}
                    style={
                      oneWayHandler?.flightClass == item
                        ? styles.classOptnTxtWrapActive
                        : styles.classOptnTxtWrap
                    }
                    onPress={() => {
                      setIsClass(false);
                      // setOneWayHandler({
                      //   ...oneWayHandler,
                      //   flightClass: item,
                      // });
                    }}>
                    <Text
                      style={
                        oneWayHandler?.flightClass == item
                          ? styles.classOptnTxtActive
                          : styles.classOptnTxt
                      }>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              },
            )}
          </View>
        )}
      </View>

      {/* search hotel */}

      <>
        <View style={styles.preferredAirLineCon}>
          <Image style={styles.searchIconStyle} source={icon.search} />

          <TextInput
            placeholder="Hotel Name"
            placeholderTextColor={b3}
            style={styles.searchPreferredAirLineInput}
          />
        </View>

        <View style={styles.R_F_A_cityContainer}>
          <TouchableOpacity
            onPress={() => setHomesAndApartments('forParty')}
            style={[
              styles.radioButton,
              {
                backgroundColor:
                  homesAndApartments == 'forParty' ? blue : white,
              },
            ]}>
            <Image source={check} style={styles.checkIcon} />
          </TouchableOpacity>

          <Text style={styles.searchTxt}>
            I only need this hotel for part of my trip
          </Text>
        </View>

        <View style={styles.R_F_A_cityContainer}>
          <TouchableOpacity
            onPress={() => setHomesAndApartments('H&A')}
            style={[
              styles.radioButton,
              {
                backgroundColor: homesAndApartments == 'H&A' ? blue : white,
              },
            ]}>
            <Image source={check} style={styles.checkIcon} />
          </TouchableOpacity>
          <Text style={styles.searchTxt}>Homes & Apartments</Text>
        </View>

        {/* hotel Rating */}
        <View
          style={{
            marginTop: _ms(13),
            paddingLeft: _ms(5),
            zIndex: -1,
          }}>
          {/* group types */}
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.searchTxt}>Hotel Rating</Text>
            <Image style={styles.arrow} source={icon.rightArrow} />
          </TouchableOpacity>
        </View>
      </>
    </View>
  );
};

export default HotelPlusCar;

const styles = StyleSheet.create({
  main: {
    backgroundColor: white,
    // backgroundColor: 'red',
    paddingVertical: _vs(5),
    paddingTop: _vs(10),
    paddingHorizontal: _ms(10),
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
    backgroundColor: white,
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
    tintColor: blue,
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
    paddingVertical: 2,
    paddingHorizontal: _ms(5),
    overflow: 'hidden',
    alignSelf: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#DEDEDE',

    zIndex: -1,
    maxWidth: '99%',
    // backgroundColor: 'blue',
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
    paddingHorizontal: _ms(8),
    fontSize: _ms(12),
    // fontWeight: 'bold',
    fontFamily: _fonts.nunitoSansSemiBold,
    minWidth: '30%',
    maxWidth: '100%',
  },

  R_F_A_cityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: _ms(10),
    paddingLeft: _ms(5),
    gap: _ms(5),
    zIndex: -1,
  },

  radioButton: {
    width: _ms(17),
    height: _ms(17),
    borderWidth: 2,
    borderColor: blue,
    borderRadius: _ms(15),
    backgroundColor: blue,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkIcon: {
    width: _ms(10),
    height: _ms(10),
    tintColor: white,
    resizeMode: 'contain',
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
