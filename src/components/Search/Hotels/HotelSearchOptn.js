import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {b1, b3, black, blue, w1, white} from '../../../config/colors';
import icon, {cross, minus, plus} from '../../../config/IconAssets';
import {_fonts, _ms, _s, _vs} from '../../utils/Responsive';
import {formatDate} from '../../../config/CurrentDate';

const HotelSearchOptn = ({
  navigation,
  oneWayHandler,
  setOneWayHandler,
  roundTripHandler,
  setRoundTripHandler,
  handleTravellers,
  handleClassType,
  isTravel,
  isClass,
}) => {
  const [rooms, setRooms] = useState(1);

  return (
    <View style={styles.main}>
      {/* top selection row */}
      <View style={styles.topWrap}>
        <View style={styles.left}>
          <Text style={styles.fromTxt}>Destination</Text>

          <TouchableOpacity
            onPress={() => {
              //
            }}
            style={styles.enterLocBtn}>
            <Text style={styles.enterLocTxt}>Enter Location</Text>
          </TouchableOpacity>

          <Text style={styles.fromTxt}>Destination</Text>
        </View>
      </View>

      <View style={styles.horizontalLine} />

      {/* middle selection row */}
      <View style={[styles.topWrap, {paddingTop: 5}]}>
        <View style={styles.left}>
          <Text style={styles.fromTxt}>Check- In</Text>

          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('traveldate');
            }}>
            <Text style={styles.enterLocTxt}>Select Date</Text>
          </TouchableOpacity>

          <Text style={styles.fromTxt}>Day</Text>
        </View>

        <View style={styles.right}>
          <Text style={[styles.fromTxt, {textAlign: 'right'}]}>Check- Out</Text>

          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('traveldate');
            }}>
            <Text style={[styles.enterLocTxt, {textAlign: 'right'}]}>
              {/* {roundTripHandler?.returnDateRoundTrip?.length > 0
                ? `${formatDate(roundTripHandler.returnDateRoundTrip)}`
                : 'Select Date'} */}
              Select Date
            </Text>
          </TouchableOpacity>

          <Text style={[styles.fromTxt, {textAlign: 'right'}]}>Day</Text>
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
              <Image source={cross} style={styles.closeIcon} />
            </TouchableOpacity>

            <View style={styles.travelContWrap}>
              <View style={{backgroundColor: 'transparent'}}>
                <Text style={styles.travelHdTxt}>Adults</Text>
                <Text style={styles.travelSubHdTxt}>Aged 12+ years</Text>
              </View>

              <View style={styles.btn}>
                <TouchableHighlight
                  underlayColor={blue}
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
                </TouchableHighlight>

                <Text numberOfLines={1} style={styles.btnTxt}>
                  {/* {oneWayHandler?.adults} */}0
                </Text>

                <TouchableHighlight
                  underlayColor={blue}
                  onPress={() => {
                    //
                  }}
                  style={styles.minusButton}>
                  <Image source={plus} style={styles.minusIconStyle} />
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.travelContWrap}>
              <View>
                <Text style={styles.travelHdTxt}>Children</Text>
                <Text style={styles.travelSubHdTxt}>Aged 2-12 years</Text>
              </View>

              <View style={styles.btn}>
                <TouchableHighlight
                  underlayColor={blue}
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
                </TouchableHighlight>

                <Text numberOfLines={1} style={styles.btnTxt}>
                  0
                </Text>

                <TouchableHighlight
                  underlayColor={blue}
                  onPress={() => {
                    //
                  }}
                  style={styles.minusButton}>
                  <Image source={plus} style={styles.minusIconStyle} />
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.travelContWrap}>
              <View>
                <Text style={styles.travelHdTxt}>Infants</Text>
                <Text style={styles.travelSubHdTxt}>Bellow 2 years</Text>
              </View>

              <View style={styles.btn}>
                <TouchableHighlight
                  underlayColor={blue}
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
                </TouchableHighlight>

                <Text numberOfLines={1} style={styles.btnTxt}>
                  0
                </Text>

                <TouchableHighlight
                  underlayColor={blue}
                  onPress={() => {
                    //
                  }}
                  style={styles.minusButton}>
                  <Image source={plus} style={styles.minusIconStyle} />
                </TouchableHighlight>
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
              handleClassType();
            }}
            style={styles.travellersBtn}>
            <Text style={styles.enterLocTxt}>{rooms} Room</Text>
          </TouchableOpacity>
        </View>

        {/* room sellection ---------------------------------------------------------- */}

        {isClass && (
          <View style={styles.classOptnsWrap}>
            <TouchableOpacity
              onPress={() => {
                handleClassType();
              }}
              style={styles.closeButton}>
              <Image source={cross} style={styles.closeIcon} />
            </TouchableOpacity>
            <Text style={styles.roomsTxt}>Rooms</Text>
            <View style={styles.buttonsCon}>
              <TouchableHighlight
                underlayColor={blue}
                style={styles.classOptnTxtWrap}
                onPress={() => {
                  //   handleClassType();
                }}>
                <Image source={minus} style={styles.minusIconStyle} />
              </TouchableHighlight>

              <Text numberOfLines={1} style={styles.btnTxt}>
                {rooms}
              </Text>

              <TouchableHighlight
                underlayColor={blue}
                style={styles.classOptnTxtWrap}
                onPress={() => {
                  //   handleClassType();
                }}>
                <Image source={plus} style={styles.minusIconStyle} />
              </TouchableHighlight>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default HotelSearchOptn;

const styles = StyleSheet.create({
  main: {
    backgroundColor: white,
    // backgroundColor: 'red',
    paddingVertical: _vs(5),
    paddingTop: _vs(20),
    paddingHorizontal: _ms(10),
    paddingBottom: _vs(20),
    borderRadius: 5,
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
    alignSelf: 'flex-start',
    paddingVertical: _vs(5),
  },

  enterLocTxt: {
    color: '#232020',
    fontSize: _ms(14),
    fontFamily: _fonts.nunitoSansSemiBold,
    marginVertical: _ms(5),
  },

  right: {
    flex: 1,
  },

  horizontalLine: {
    backgroundColor: b3,
    height: 1,
    marginTop: 5,
  },

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
    borderWidth: 1,
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
    borderColor: blue,
    borderWidth: 1,
    borderRadius: 4,
    gap: _ms(5),
  },

  minusButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: _s(9),
    paddingHorizontal: _s(15),
    borderRadius: 3,
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
    padding: _ms(10),
    borderRadius: 5,
  },

  buttonsCon: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    marginTop: 5,
    borderWidth: 1,
    borderColor: blue,
    borderRadius: 5,
    gap: _ms(10),
  },

  roomsTxt: {
    color: b1,
    fontSize: _ms(15),
    textAlign: 'center',
    fontFamily: _fonts.nunitoSansRegular,
  },

  classOptnTxtWrap: {
    paddingVertical: _vs(7),
    paddingHorizontal: _s(15),
    borderRadius: 3,
  },
});
