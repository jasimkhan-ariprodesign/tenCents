import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  b1,
  b2,
  b3,
  bgColor,
  black,
  blue,
  blueTransparent,
  w1,
  white,
} from '../../../config/colors';
import icon, {cross, minus, plus} from '../../../config/IconAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import {
  _fonts,
  _ms,
  _mvs,
  _s,
  _vs,
  size15,
  size16,
} from '../../utils/Responsive';

const ModifyDateForHotel = ({navigation, setIsModify}) => {
  const [isRoom, setIsRoom] = useState(false);
  const [isTravel, setIsTravel] = useState(false);

  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={[
          commonStyles.alignSelfFlexEnd,
          {marginVertical: _mvs(2), marginTop: _mvs(4), right: -_ms(5)},
        ]}
        onPress={() => setIsModify(false)}>
        <View style={[styles.closeBtn, commonStyles.commWrapSix]}>
          <Image source={icon.cross} style={size16} tintColor={white} />
        </View>
      </TouchableOpacity>

      {/* top selection row */}
      <View style={[commonStyles.commWrapTwo]}>
        <View style={styles.left}>
          <Text style={styles.tbTxt}>Pick - Up</Text>

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
      <View style={[styles.topWrap]}>
        <View style={styles.left}>
          <Text style={styles.tbTxt}>Check- In</Text>

          <TouchableOpacity onPress={() => navigation.navigate('traveldate')}>
            <Text style={styles.midTxt}>Select Date</Text>
          </TouchableOpacity>

          <Text style={styles.tbTxt}>Day</Text>
        </View>

        <View style={styles.right}>
          <Text style={styles.tbTxt}>Check- Out</Text>

          <TouchableOpacity onPress={() => navigation.navigate('traveldate')}>
            <Text style={styles.midTxt}>Select Date</Text>
          </TouchableOpacity>

          <Text style={styles.tbTxt}>Day</Text>
        </View>
      </View>

      <View style={styles.btmBrdr} />

      {/* bottom selection row */}
      <View>
        <View style={styles.topWrap}>
          <View style={styles.left}>
            <Text style={styles.tbTxt}>Travellers</Text>

            <TouchableOpacity
              onPress={() => {
                setIsTravel(true);
                setIsRoom(false);
              }}>
              <Text style={styles.midTxt}>1 Adult</Text>
            </TouchableOpacity>

            {isTravel && (
              <View style={styles.travlOptnsWrap}>
                <TouchableOpacity
                  onPress={() => {
                    // handleTravellers();
                    setIsTravel(false);
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
                        //
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
                        //
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
                        //
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
          </View>

          {/* ----------------------------- ------------------------------  */}
          <View style={styles.right}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.tbTxt}>Room</Text>
              <Image style={styles.imgCls} source={icon.rightArrow} />
            </View>

            <TouchableOpacity
              onPress={() => {
                setIsRoom(true);
                setIsTravel(false);
              }}>
              <Text style={styles.midTxt}>1 Room</Text>
            </TouchableOpacity>

            {/* {isRoom && (
              <View style={styles.classOptnsWrap}>
                <TouchableOpacity
                  style={styles.classOptnTxtWrapActive}
                  onPress={() => setIsRoom(false)}>
                  <Text style={styles.classOptnTxtActive}>1 Room</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.classOptnTxtWrap}
                  onPress={() => setIsRoom(false)}>
                  <Text style={styles.classOptnTxt}>2 Room</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.classOptnTxtWrap}
                  onPress={() => setIsRoom(false)}>
                  <Text style={styles.classOptnTxt}>3 Room</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.classOptnTxtWrap}
                  onPress={() => setIsRoom(false)}>
                  <Text style={styles.classOptnTxt}>4 Room</Text>
                </TouchableOpacity>
              </View>
            )} */}
            {isRoom && (
              <View style={styles.classOptnsWrap}>
                <TouchableOpacity
                  onPress={() => {
                    setIsRoom(false);
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
                    {/* {rooms} */}1
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
      </View>
    </View>
  );
};

export default ModifyDateForHotel;

const styles = StyleSheet.create({
  main: {
    // marginTop: 10,
    // backgroundColor: 'red',
  },

  closeBtn: {
    // backgroundColor: white,
    backgroundColor: '#e6e6e6',
    width: _ms(22),
    height: _ms(22),
    borderRadius: _ms(26),
    elevation: 3,
    // shadowColor: b3,
  },

  topWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  img: {
    width: 100,
    height: 20,
    tintColor: blue,
  },

  imgWrap: {
    width: 28,
    height: 28,
    backgroundColor: w1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tbTxt: {
    color: b3,
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(11),
  },

  midTxt: {
    color: b1,
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(13),
    marginVertical: _mvs(5),
  },
  left: {
    // borderWidth: 1
  },
  right: {
    alignItems: 'flex-end',
  },
  btmBrdr: {
    backgroundColor: b3,
    height: 1,
    marginVertical: _mvs(6),
  },
  imgCls: {
    width: 10,
    height: 10,
    transform: [{rotate: '90deg'}],
    tintColor: b3,
    marginLeft: 4,
  },

  classOptnTxt: {
    fontFamily: 'NunitoSans_10pt-Regular',
    color: b1,
    fontSize: 13,
  },
  classOptnTxtActive: {
    fontFamily: 'NunitoSans_10pt-Regular',
    color: white,
    fontSize: 13,
  },

  classOptnTxtWrapActive: {
    paddingVertical: 8,
    paddingLeft: 15,
    backgroundColor: blue,
  },

  addBtnTxt: {
    color: blue,
    fontFamily: 'NunitoSans_10pt-Bold',
    fontSize: 15,
  },
  addBtn: {
    alignItems: 'center',
    borderColor: blue,
    borderWidth: 0.7,
    borderRadius: 5,
    justifyContent: 'center',
    paddingVertical: 1,
    paddingHorizontal: 20,
  },

  // ----
  travlOptnsWrap: {
    backgroundColor: white,
    // backgroundColor: 'red',
    position: 'absolute',
    zIndex: 100,
    top: _vs(10),
    left: _s(70),
    borderRadius: 3,
    padding: _s(5),
    paddingVertical: _vs(15),

    minWidth: _ms(200),
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
