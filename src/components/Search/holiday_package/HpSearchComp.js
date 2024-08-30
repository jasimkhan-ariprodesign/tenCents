import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {b1, b3, black, blue, w1, white} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import {_fonts, _ms, _s, _vs} from '../../utils/Responsive';
import {formatDate} from '../../../config/CurrentDate';

const HpSearchComp = ({navigation}) => {
  const [isClass, setIsClass] = useState(false);
  const [isTravel, setIsTravel] = useState(false);

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
          <Text style={styles.fromTxt}>Depart Date</Text>

          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('traveldate');
            }}>
            <Text style={styles.enterLocTxt}>Select Date</Text>
          </TouchableOpacity>

          <Text style={styles.fromTxt}>Day</Text>
        </View>

        <View style={styles.right}>
          <Text style={[styles.fromTxt, {textAlign: 'right'}]}>
            Return Date
          </Text>

          <TouchableOpacity
            onPress={() => {
              //
            }}>
            <Text style={[styles.enterLocTxt, {textAlign: 'right'}]}>
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
                setIsTravel(!isTravel);
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
                  {/* {oneWayHandler?.adults} */}0
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
                  {/* {oneWayHandler?.childrens} */}0
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
                  {/* {oneWayHandler?.infants} */}0
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
            <TouchableOpacity
              onPress={() => {
                setIsClass(!isClass);
                setIsTravel(false);
              }}
              style={styles.closeButton}>
              <Image source={icon.cross} style={styles.closeIcon} />
            </TouchableOpacity>
            <Text style={styles.roomsTxt}>Rooms</Text>
            <View style={styles.buttonsCon}>
              <TouchableHighlight
                underlayColor={blue}
                style={styles.classOptnTxtWrap}
                onPress={() => {
                  //   handleClassType();
                }}>
                <Image source={icon.minus} style={styles.minusIconStyle} />
              </TouchableHighlight>

              <Text numberOfLines={1} style={styles.btnTxt}>
                {/* {rooms} */}0
              </Text>

              <TouchableHighlight
                underlayColor={blue}
                style={styles.classOptnTxtWrap}
                onPress={() => {
                  //   handleClassType();
                }}>
                <Image source={icon.plus} style={styles.minusIconStyle} />
              </TouchableHighlight>
            </View>
          </View>
        )}
      </View>

      {/* search hotel */}

      <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: _ms(10)}}>
        <View style={styles.preferredAirLineCon}>
          <Image style={styles.searchIconStyle} source={icon.search} />

          <TextInput
            placeholder="Hotel Name"
            placeholderTextColor={b3}
            style={styles.searchPreferredAirLineInput}
          />
        </View>

        <TouchableOpacity style={styles.hotelRatingBtn}>
          <Text style={styles.hotelRatingTxt}>Hotel Rating</Text>
          <Image style={styles.downArrowIcon} source={icon.rightArrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HpSearchComp;

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
    maxWidth: '65%',
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

  arrow: {
    width: _ms(8),
    height: _ms(8),
    transform: [{rotate: '90deg'}],
    marginLeft: _ms(10),
    tintColor: b1,
  },

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

  downArrowIcon: {
    width: _ms(10),
    height: _ms(10),
    tintColor: b3,
    transform: [{rotate: '90deg'}],
    resizeMode: 'contain',
    top: _ms(2),
  },

  hotelRatingBtn: {
    // backgroundColor: 'lime',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: _ms(5),
  },

  hotelRatingTxt: {
    fontSize: _ms(12),
    color: b3,
    fontFamily: _fonts.nunitoSansSemiBold,
  },
});
