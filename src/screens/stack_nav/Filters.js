import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {b1, b3, blue, green, white} from '../../config/colors';
import ToggleSwitch from 'toggle-switch-react-native';
import {_fonts, _ms, _s} from '../../components/utils/Responsive';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

const Filters = ({navigation}) => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [tripOptn, setTripOptn] = useState('o');
  const [airType, setAirType] = useState('air');

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar translucent={true} barStyle={'dark-content'} />
      <View style={styles.Wrap}>
        {/* nav */}
        <View style={styles.nav}>
          <Text style={[styles.lbB1, {fontSize: _ms(20)}]}>Filters</Text>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{width: _ms(19), height: _ms(19), tintColor: b1}}
              source={require('../../assets/icons/cross.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* stops */}
          <View style={styles.stopsWrap}>
            <Text style={styles.stops}>Stops</Text>

            <View style={styles.stopOptn}>
              <TouchableOpacity style={styles.optnBtn}>
                <Text style={styles.ns600}>Direct</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.optnBtn}>
                <Text style={styles.ns600}>1 Stop</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.optnBtn}>
                <Text style={styles.ns600}>2+ Stops</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* toggles */}
          <View style={styles.toggleWrap}>
            <View style={styles.toggleCont}>
              <Text style={[styles.lbB1, {fontSize: _ms(16)}]}>
                Show refundable only
              </Text>

              <ToggleSwitch
                isOn={toggle1}
                onColor={green}
                offColor={b3}
                size="small"
                onToggle={isOn => setToggle1(isOn)}
              />
            </View>

            <View style={[styles.toggleCont, {marginTop: _ms(20)}]}>
              <Text style={[styles.lbB1, {fontSize: _ms(16)}]}>
                Hide multi airline
              </Text>

              <ToggleSwitch
                isOn={toggle2}
                onColor={green}
                offColor={b3}
                size="small"
                onToggle={isOn => setToggle2(isOn)}
              />
            </View>
          </View>

          {/* trip type & time */}
          <View style={styles.tripTimeWrap}>
            {/* trip */}
            <View style={styles.tripCont}>
              <TouchableOpacity
                style={tripOptn === 'o' ? styles.tripBtnActive : styles.tripBtn}
                onPress={() => setTripOptn('o')}>
                <Text
                  style={
                    tripOptn === 'o' ? styles.tripTxtActive : styles.tripTxt
                  }>
                  One-Way
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={tripOptn === 'r' ? styles.tripBtnActive : styles.tripBtn}
                onPress={() => setTripOptn('r')}>
                <Text
                  style={
                    tripOptn === 'r' ? styles.tripTxtActive : styles.tripTxt
                  }>
                  Round-trip
                </Text>
              </TouchableOpacity>
            </View>

            {/* time */}
            <View style={[styles.timeWrap, {marginTop: _ms(20)}]}>
              <TouchableOpacity style={styles.timeBtn}>
                <Image
                  style={styles.timeImg}
                  source={require('../../assets/icons/morning.png')}
                />
                <Text style={styles.timeTxt}>Morning 6 AM - 12</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.timeBtn}>
                <Image
                  style={styles.timeImg}
                  source={require('../../assets/icons/noon.png')}
                />
                <Text style={styles.timeTxt}>Noon 12 PM - 6</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.timeWrap, {marginTop: _ms(20)}]}>
              <TouchableOpacity style={styles.timeBtn}>
                <Image
                  style={styles.timeImg}
                  source={require('../../assets/icons/evening.png')}
                />
                <Text style={styles.timeTxt}>Evening 6 PM - 12</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.timeBtn}>
                <Image
                  style={styles.timeImg}
                  source={require('../../assets/icons/night.png')}
                />
                <Text style={styles.timeTxt}>Night 12 AM - 6</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: _ms(10),
              width: width * 0.73,
              paddingBottom: 10,
              //   backgroundColor: '#e6e6e6',
            }}>
            {/* flight times */}
            <View style={{marginTop: _ms(20)}}>
              <Text style={[styles.ns600, {color: b1, fontSize: _ms(16)}]}>
                Flight Times
              </Text>

              {/* going */}
              <View style={{marginTop: _ms(15)}}>
                <Text style={[styles.ns600, {color: b1, fontSize: _ms(14)}]}>
                  Going
                  <Text style={[styles.ns400, {color: b1}]}>
                    {' '}
                    to Alberta (YYC)
                  </Text>
                </Text>

                <Text
                  style={[
                    styles.ns400,
                    {color: b3, fontSize: _ms(14), marginTop: _ms(3)},
                  ]}>
                  Depart: 1:00 am - 11:45 pm
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: _ms(6),
                  }}>
                  <View style={styles.destDot} />
                  <View style={styles.destPath} />
                  <View style={styles.destDot} />
                </View>
              </View>

              {/* return */}
              <View style={{marginTop: _ms(15)}}>
                <Text style={[styles.ns600, {color: b1, fontSize: _ms(14)}]}>
                  Returning
                  <Text style={[styles.ns400, {color: b1}]}>
                    {' '}
                    to Dhaka (DAC)
                  </Text>
                </Text>

                <Text
                  style={[
                    styles.ns400,
                    {color: b3, fontSize: _ms(14), marginTop: _ms(3)},
                  ]}>
                  Return: 12:45 am - 9:00 pm
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: _ms(6),
                  }}>
                  <View style={styles.destDot} />
                  <View style={styles.destPath} />
                  <View style={styles.destDot} />
                </View>
              </View>
            </View>

            {/* arrival time */}
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: _ms(15),
                gap: _ms(10),
              }}>
              <Image
                style={{
                  width: _ms(14),
                  height: _ms(14),
                  transform: [{rotate: '90deg'}],
                  top: _ms(2),
                }}
                source={require('../../assets/icons/right-arrow.png')}
                tintColor={blue}
                resizeMode="contain"
              />
              <Text style={[styles.ns600, {fontSize: _ms(14)}]}>
                Show Arrival Times
              </Text>
            </TouchableOpacity>

            {/* duration */}
            <View style={{marginTop: _ms(25)}}>
              <Text style={[styles.ns600, {color: b1, fontSize: _ms(16)}]}>
                Duration
              </Text>

              {/* going */}
              <View style={{marginTop: _ms(15)}}>
                <Text style={[styles.ns600, {color: b1, fontSize: _ms(14)}]}>
                  Going
                  <Text style={[styles.ns400, {color: b1}]}>
                    {' '}
                    to Alberta (YYC)
                  </Text>
                </Text>

                <Text
                  style={[
                    styles.ns400,
                    {color: b3, fontSize: _ms(14), marginTop: _ms(3)},
                  ]}>
                  Layover Duration: up to 27h 00m
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: _ms(6),
                  }}>
                  <View style={styles.destDot} />
                  <View style={styles.destPath} />
                  <View style={styles.destDot} />
                </View>
              </View>

              {/* return */}
              <View style={{marginTop: 20}}>
                <Text style={[styles.ns600, {color: b1, fontSize: _ms(14)}]}>
                  Returning
                  <Text style={[styles.ns400, {color: b1}]}>
                    {' '}
                    to Dhaka (DAC)
                  </Text>
                </Text>

                <Text
                  style={[
                    styles.ns400,
                    {color: b3, fontSize: _ms(14), marginTop: _ms(3)},
                  ]}>
                  Layover Duration: up to 29h 45m
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: _ms(6),
                  }}>
                  <View style={styles.destDot} />
                  <View style={styles.destPath} />
                  <View style={styles.destDot} />
                </View>
              </View>
            </View>

            {/* total duration */}
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: _ms(15),
              }}>
              <View
                style={{
                  width: _ms(12),
                  height: _ms(12),
                  transform: [{rotate: '45deg'}],
                  borderColor: blue,
                  borderWidth: 2,
                  marginLeft: 5,
                }}
              />
              <Text
                style={[
                  styles.ns600,
                  {fontSize: _ms(14), marginLeft: _ms(10)},
                ]}>
                Show Total Durations
              </Text>
            </TouchableOpacity>

            {/* depart/return */}
            <View style={{marginTop: _ms(20)}}>
              <View style={{}}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: _ms(3),
                  }}>
                  <View style={styles.dotOutline} />
                  <Text style={[styles.ns400, {color: b1, fontSize: _ms(14)}]}>
                    Same Depart/Return Airport
                  </Text>
                </TouchableOpacity>

                <View
                  style={{
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                    flexDirection: 'row',
                    paddingRight: _ms(10),
                  }}>
                  <Text style={[styles.ns600, {color: b1, fontSize: _ms(14)}]}>
                    USD 1,937
                  </Text>
                  <Text
                    style={[
                      styles.ns400,
                      {color: b1, fontSize: _ms(12), top: -_ms(1)},
                    ]}>
                    .99
                  </Text>
                </View>
              </View>
            </View>

            {/* depart */}
            <View style={{marginTop: _ms(15)}}>
              <Text
                style={[
                  styles.ns600,
                  {fontSize: _ms(14), color: b1, marginBottom: _ms(5)},
                ]}>
                Departing from
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 3,
                  }}>
                  <View style={styles.dotOutline} />
                  <Text style={[styles.ns400, {color: b3, fontSize: _ms(14)}]}>
                    DAC - Dhaka
                  </Text>
                </TouchableOpacity>

                <View
                  style={{
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                    flexDirection: 'row',
                    paddingRight: _ms(10),
                  }}>
                  <Text style={[styles.ns600, {color: b3, fontSize: _ms(14)}]}>
                    USD 1,937
                  </Text>
                  <Text
                    style={[
                      styles.ns400,
                      {
                        color: b3,
                        fontSize: _ms(12),
                        top: -_ms(1),
                      },
                    ]}>
                    .99
                  </Text>
                </View>
              </View>
            </View>

            {/* arriving */}
            <View style={{marginTop: _ms(15)}}>
              <Text
                style={[
                  styles.ns600,
                  {fontSize: _ms(14), color: b1, marginBottom: _ms(5)},
                ]}>
                Arriving at
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 3,
                  }}>
                  <View style={styles.dotOutline} />
                  <Text style={[styles.ns400, {color: b3, fontSize: _ms(14)}]}>
                    YYC - Calgary
                  </Text>
                </TouchableOpacity>

                <View
                  style={{
                    paddingRight: _ms(10),
                    flexDirection: 'row',
                  }}>
                  <Text style={[styles.ns600, {color: b3, fontSize: _ms(14)}]}>
                    USD 1,937
                  </Text>
                  <Text
                    style={[
                      styles.ns400,
                      {
                        color: b3,
                        fontSize: _ms(12),
                        top: -_ms(1),
                      },
                    ]}>
                    .99
                  </Text>
                </View>
              </View>
            </View>

            {/* connecting in */}
            <View style={{marginTop: _ms(15), rowGap: _ms(8)}}>
              <Text
                style={[styles.ns600, {fontSize: _ms(14), color: '#313541'}]}>
                Connecting in
              </Text>
              <Text style={[styles.ns400, {fontSize: _ms(14), color: b3}]}>
                BOM - Mumbai
              </Text>
              <Text style={[styles.ns400, {fontSize: _ms(14), color: b3}]}>
                LHR - London Heathrow
              </Text>
              <Text style={[styles.ns400, {fontSize: _ms(14), color: b3}]}>
                FRA - Frankfurt
              </Text>
            </View>

            {/* show all connecting */}
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: _ms(15),
              }}>
              <Image
                style={{
                  width: _ms(14),
                  height: _ms(14),
                  top: _ms(2),
                  transform: [{rotate: '90deg'}],
                  tintColor: blue,
                }}
                source={require('../../assets/icons/right-arrow.png')}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.ns600,
                  {fontSize: _ms(14), marginLeft: _ms(10)},
                ]}>
                Show all connecting
              </Text>
            </TouchableOpacity>

            {/* airlines */}
            <View style={{marginTop: _ms(20)}}>
              <Text
                style={[
                  styles.ns600,
                  {fontSize: _ms(16), color: b1, marginBottom: _ms(15)},
                ]}>
                Airlines
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  borderColor: '#e6e6e6',
                  borderRadius: 5,
                }}>
                <TouchableOpacity
                  style={[
                    airType === 'air' ? styles.airBtnActive : styles.airBtn,
                    {borderTopLeftRadius: 5, borderBottomLeftRadius: 5},
                  ]}
                  onPress={() => setAirType('air')}>
                  <Text
                    style={
                      airType === 'air'
                        ? styles.airBtnTxtActive
                        : styles.airBtnTxt
                    }>
                    By Airline
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    airType === 'aln' ? styles.airBtnActive : styles.airBtn,
                    {borderTopRightRadius: 5, borderBottomRightRadius: 5},
                  ]}
                  onPress={() => setAirType('aln')}>
                  <Text
                    style={
                      airType === 'aln'
                        ? styles.airBtnTxtActive
                        : styles.airBtnTxt
                    }>
                    By Alliances
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* cost */}
            <View
              style={{
                marginTop: _ms(15),
                // backgroundColor: 'lightgray',
                rowGap: 10,
                paddingHorizontal: 2,
              }}>
              {/* canada */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={[styles.ns400, {color: b1, fontSize: _ms(14)}]}>
                    Air Canada
                  </Text>
                  <Text style={[styles.ns400, {color: b1, fontSize: _ms(12)}]}>
                    (with others)
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.ns600, {color: b3, fontSize: _ms(14)}]}>
                    USD 1,937
                  </Text>
                  <Text style={[styles.ns400, {color: b3, fontSize: _ms(12)}]}>
                    .99
                  </Text>
                </View>
              </View>

              {/* India/ Bharat */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={[styles.ns400, {color: b1, fontSize: _ms(14)}]}>
                    Air India
                  </Text>
                  <Text style={[styles.ns400, {color: b1, fontSize: _ms(12)}]}>
                    (with others)
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.ns600, {color: b3, fontSize: _ms(14)}]}>
                    USD 2,937
                  </Text>
                  <Text style={[styles.ns400, {color: b3, fontSize: _ms(12)}]}>
                    .99
                  </Text>
                </View>
              </View>

              {/* alaska */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={[styles.ns400, {color: b1, fontSize: _ms(14)}]}>
                    Alaska Airlines
                  </Text>
                  <Text style={[styles.ns400, {color: b1, fontSize: _ms(12)}]}>
                    (with others)
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.ns600, {color: b3, fontSize: _ms(14)}]}>
                    USD 2,460
                  </Text>
                  <Text style={[styles.ns400, {color: b3, fontSize: _ms(12)}]}>
                    .99
                  </Text>
                </View>
              </View>

              {/* american */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={[styles.ns400, {color: b1, fontSize: _ms(14)}]}>
                    American Airlines
                  </Text>
                  {/* <Text style={[styles.ns400, { color: b1, fontSize: 13 }]}>
                                        (with others)
                                    </Text> */}
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.ns600, {color: b3, fontSize: _ms(14)}]}>
                    USD 2,450
                  </Text>
                  <Text style={[styles.ns400, {color: b3, fontSize: _ms(12)}]}>
                    .99
                  </Text>
                </View>
              </View>

              {/* american with others */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={[styles.ns400, {color: b1, fontSize: _ms(14)}]}>
                    American Airlines
                  </Text>
                  <Text style={[styles.ns400, {color: b1, fontSize: _ms(12)}]}>
                    (with others)
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.ns600, {color: b3, fontSize: _ms(14)}]}>
                    USD 2,101
                  </Text>
                  <Text style={[styles.ns400, {color: b3, fontSize: _ms(12)}]}>
                    .99
                  </Text>
                </View>
              </View>
            </View>

            {/* show all Airlines */}
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: _ms(20),
              }}>
              <Image
                style={{
                  width: _ms(12),
                  height: _ms(12),
                  transform: [{rotate: '90deg'}],
                  tintColor: blue,
                  top: _ms(2),
                }}
                source={require('../../assets/icons/right-arrow.png')}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.ns600,
                  {fontSize: _ms(14), marginLeft: _ms(10)},
                ]}>
                Show All Airlines
              </Text>
            </TouchableOpacity>
          </View>
          {/* clear filter */}

          <TouchableOpacity style={styles.clearFilter}>
            <Text
              style={[
                styles.ns600,
                {color: white, fontSize: _ms(14), textTransform: 'uppercase'},
              ]}>
              Clear All Filters
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Filters;

const styles = StyleSheet.create({
  parent: {flex: 1, backgroundColor: white},
  Wrap: {
    flex: 1,
    backgroundColor: white,
    // marginHorizontal: _ms(10),
    // backgroundColor: '#EFF2F7',
  },

  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: _ms(10),
    paddingRight: _ms(5),
    marginHorizontal: _ms(10),
    // backgroundColor: 'silver',
  },

  lbB1: {
    fontFamily: _fonts.londonBetween,
    color: b1,
  },

  stopsWrap: {
    marginTop: _ms(10),
    paddingBottom: _ms(10),
    marginHorizontal: _ms(10),
    // backgroundColor: 'silver',
  },

  stops: {
    fontFamily: _fonts.londonBetween,
    fontSize: _ms(16),
    color: b1,
  },

  stopOptn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: _ms(15),
    justifyContent: 'space-evenly',
  },

  optnBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: _ms(15),
    paddingVertical: _ms(5),
    borderRadius: 3,
    elevation: 10,
    shadowColor: '#666',
    backgroundColor: white,
    borderWidth: 1,
    borderColor: '#e6e6e6',
  },

  ns600: {
    fontFamily: _fonts.nunitoSansSemiBold,
    color: blue,
    fontSize: _ms(13),
  },

  ns400: {
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(16),
  },

  toggleCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  toggleWrap: {
    marginTop: _ms(10),
    marginHorizontal: _ms(10),
  },

  tripTimeWrap: {
    marginTop: _ms(20),
    marginHorizontal: _ms(10),
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 4,
    elevation: 10,
    shadowColor: 'silver',
    backgroundColor: white,
    paddingHorizontal: _ms(10),
    paddingVertical: _ms(12),
  },

  tripCont: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: _s(10),
    // justifyContent: 'space-between',
  },

  tripBtnActive: {
    backgroundColor: 'rgba(33, 180, 226, 0.1)',
    borderColor: blue,
    borderRadius: 4,
    borderWidth: 0.9,
    paddingVertical: _ms(6),
    // paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  tripTxtActive: {
    fontFamily: _fonts.assistantSemiBold,
    fontSize: _ms(14),
    color: blue,
  },

  tripBtn: {
    backgroundColor: white,
    borderColor: '#DEDEDE',
    borderRadius: 4,
    borderWidth: 0.9,
    paddingVertical: _ms(6),
    // paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  tripTxt: {
    fontFamily: _fonts.assistantSemiBold,
    fontSize: _ms(14),
    color: b3,
  },

  timeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: _s(10),
  },

  timeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 4,
    padding: _ms(2),
    flex: 1,
    gap: _s(5),
  },

  timeTxt: {
    fontFamily: _fonts.assistantSemiBold,
    fontSize: _ms(13),
    color: blue,
  },

  timeImg: {
    width: _ms(35),
    height: _ms(35),
    resizeMode: 'contain',
  },

  destDot: {
    width: _ms(13),
    height: _ms(13),
    backgroundColor: blue,
    borderRadius: 16,
  },

  destPath: {
    backgroundColor: blue,
    height: _ms(3),
    flex: 1,
  },

  dotOutline: {
    width: _ms(16),
    height: _ms(16),
    borderColor: blue,
    borderRadius: 20,
    borderWidth: 2,
    marginRight: _ms(8),
  },

  airBtn: {
    backgroundColor: white,
    flex: 1,
    paddingVertical: _ms(8),
    alignItems: 'center',
    justifyContent: 'center',
  },

  airBtnTxt: {
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(14),
    color: blue,
  },

  airBtnActive: {
    backgroundColor: blue,
    flex: 1,
    paddingVertical: _ms(8),
    alignItems: 'center',
    justifyContent: 'center',
  },

  airBtnTxtActive: {
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(14),
    color: white,
  },

  clearFilter: {
    borderRadius: 4,
    backgroundColor: '#435970',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: _ms(12),
    paddingHorizontal: _s(45),
    marginVertical: _ms(20),
  },
});
