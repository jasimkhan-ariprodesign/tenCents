import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {b1, b3, blue, gs1, white} from '../../config/colors';
import {genCurrentDate} from '../../config/CurrentDate';
import SortBottomSheet from '../../utility/SortBottomSheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import {_fonts, _ms, _vs} from '../../components/utils/Responsive';

// SCROLL VIEW PE KAM KARNA HAI MONDAY KO

const FlightSearch = ({navigation}) => {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const sortRef = useRef();
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(currentIndex, '<-----currentIndex');

  const ITEM_WIDTH = 100; // Example item width
  const SCREEN_WIDTH = Dimensions.get('window').width;

  // Determine the currently visible item based on the scroll position
  const handleScroll = event => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const currentVisibleIndex = Math.round(scrollX / ITEM_WIDTH);
    setCurrentIndex(currentVisibleIndex);
  };

  // Scroll to the next item when pressing the right button
  const handleScrollRight = () => {
    const maxIndex = data.length - Math.floor(SCREEN_WIDTH / ITEM_WIDTH); // Calculate max index
    if (currentIndex < maxIndex) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      scrollViewRef.current?.scrollTo({
        x: nextIndex * ITEM_WIDTH,
        animated: true,
      });
    }
  };

  // Scroll to the previous item when pressing the left button
  const handleScrollLeft = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      scrollViewRef.current?.scrollTo({
        x: prevIndex * ITEM_WIDTH,
        animated: true,
      });
    }
  };

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar translucent={true} barStyle={'dark-content'} />
      <View style={styles.wrap}>
        {/* nav head */}
        <>
          <TouchableOpacity
            style={styles.nav}
            onPress={() => navigation.goBack()}>
            <Image
              style={{width: _ms(19), height: _ms(19)}}
              source={require('../../assets/icons/next.png')}
              resizeMode="contain"
            />
            <View style={{marginLeft: _ms(25)}}>
              <View style={styles.right}>
                <Text style={styles.navHeadTxt}>Dhaka</Text>
                <Image
                  style={styles.rightImg}
                  source={require('../../assets/icons/next.png')}
                  resizeMode="contain"
                />
                <Text style={styles.navHeadTxt}>Dubai</Text>
              </View>
              <Text style={styles.navSubHeadTxt}>
                {genCurrentDate()} | 1 Adult
              </Text>
            </View>
          </TouchableOpacity>
        </>

        {/* date & price */}
        <View style={styles.dpWrap}>
          <View
            style={{
              alignItems: 'center',
              gap: _ms(4),
              paddingHorizontal: _ms(5),
            }}>
            <Image
              style={{width: _ms(16), height: _ms(16)}}
              source={require('../../assets/icons/calendar.png')}
              resizeMode="contain"
            />
            <Text style={styles.dpMonthTxt}>Nov</Text>
          </View>

          <ScrollView
            ref={scrollViewRef}
            style={{
              flex: 1,
              paddingHorizontal: _ms(4),
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}>
            {data.map((_, i) => (
              <TouchableOpacity key={i} style={[styles.dateCont]}>
                <Text style={styles.dateContTxt}>$ 430</Text>
                <Text style={styles.dateContSubTxt}>16, Tue </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity
            onPress={handleScrollLeft}
            style={[styles.arrowWrap, {left: -5}]}>
            <Image
              style={[styles.arrow, {transform: [{rotate: '180deg'}]}]}
              source={require('../../assets/icons/right-arrow.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleScrollRight}
            style={[styles.arrowWrap, {right: -1}]}>
            <Image
              style={styles.arrow}
              source={require('../../assets/icons/right-arrow.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* flight option scroll */}
        <View style={styles.flightOptnWrap}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: _ms(80)}}>
            <View style={{rowGap: 10}}>
              {[...Array(10)].map((_, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={[styles.flightOptnCont, {}]}
                  onPress={() => navigation.navigate('flightreview')}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      //   backgroundColor: '#f1f1f1',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        // backgroundColor: '#d9d9d9',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          style={{width: _ms(22), height: _ms(22)}}
                          source={require('../../assets/icons/indigo.png')}
                          resizeMode="contain"
                        />
                        <Text style={styles.indigo}>Indigo</Text>
                      </View>

                      <View style={styles.midRow}>
                        <View style={styles.itemCenter}>
                          <Text
                            style={[
                              styles.ns600,
                              {fontSize: _ms(15), color: b3},
                            ]}>
                            DAC
                          </Text>
                          <Text
                            style={[
                              styles.ns600,
                              {fontSize: _ms(14), color: b1, marginTop: _ms(6)},
                            ]}>
                            14:10
                          </Text>
                        </View>

                        <View style={styles.itemCenter}>
                          <Text
                            style={[
                              styles.ns600,
                              {fontSize: _ms(15), color: b3},
                            ]}>
                            - BOM -
                          </Text>
                          <Text
                            style={[
                              styles.ns600,
                              {fontSize: _ms(14), color: b1, marginTop: _ms(6)},
                            ]}>
                            10h 20m
                          </Text>
                        </View>

                        <View style={styles.itemCenter}>
                          <Text
                            style={[
                              styles.ns600,
                              {fontSize: _ms(15), color: b3},
                            ]}>
                            DXC
                          </Text>
                          <Text
                            style={[
                              styles.ns600,
                              {fontSize: _ms(14), color: b1, marginTop: _ms(6)},
                            ]}>
                            22:30
                          </Text>
                        </View>
                      </View>

                      <Text
                        style={[styles.ns400, {color: b3, marginTop: _ms(6)}]}>
                        Layover- 04h 30m
                      </Text>
                    </View>

                    <View
                      style={{
                        marginTop: _ms(34),
                        // backgroundColor: 'green',
                      }}>
                      <Text
                        style={[styles.ns600, {color: b1, fontSize: _ms(14)}]}>
                        $ 430
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: _ms(8),
                    }}>
                    <Image
                      style={{width: _ms(16), height: _ms(16), tintColor: gs1}}
                      source={require('../../assets/icons/discount-solid.png')}
                      resizeMode="contain"
                    />
                    <Text
                      style={[
                        styles.ns400,
                        {color: gs1, marginLeft: _ms(5), fontSize: _ms(10)},
                      ]}>
                      Use CASUPER code to get special $50 OFF
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* sticky bottom */}
        <View style={styles.stickyBtm}>
          <View style={styles.leftWrap}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                alignItems: 'center',
                gap: _ms(4),
              }}>
              <TouchableOpacity
                style={[styles.filterBtnComn, {backgroundColor: '#848484'}]}
                onPress={() => sortRef.current.open()}>
                <Text style={[styles.ns600, {color: white, fontSize: _ms(11)}]}>
                  Prices
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.filterBtnComn}
                onPress={() => navigation.navigate('filters')}>
                <Text style={[styles.ns600, {color: white, fontSize: _ms(11)}]}>
                  Non- stop only
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.filterBtnComn}
                onPress={() => navigation.navigate('filters')}>
                <Text style={[styles.ns600, {color: white, fontSize: _ms(11)}]}>
                  Morning 6.00 - 12PM
                </Text>
              </TouchableOpacity>
            </View>

            <Text
              style={[
                styles.ns600,
                {
                  color: white,
                  fontSize: _ms(11),
                  marginBottom: _ms(3),
                  marginLeft: _ms(5),
                },
              ]}>
              SORT
            </Text>
          </View>

          <View style={styles.filterWrap}>
            <TouchableOpacity
              style={{paddingHorizontal: _ms(6)}}
              onPress={() => navigation.navigate('selectfair')}>
              <Image
                style={{width: _ms(21), height: _ms(21), resizeMode: 'contain'}}
                source={require('../../assets/icons/filter.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* bottom sheet */}
        <SortBottomSheet sortRef={sortRef} />
      </View>
    </SafeAreaView>
  );
};

export default FlightSearch;

const styles = StyleSheet.create({
  parent: {flex: 1, backgroundColor: white},

  wrap: {flex: 1},

  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: _vs(12),
    paddingHorizontal: _ms(5),
    paddingLeft: _ms(20),
    alignSelf: 'flex-start',
    borderRadius: 5,
    // backgroundColor: '#f1f1f1',
  },

  navHeadTxt: {
    color: b1,
    fontSize: _ms(14),
    fontFamily: _fonts.londonBetween,
  },

  navSubHeadTxt: {
    color: b3,
    fontSize: _ms(11),
    fontFamily: _fonts.londonBetween,
  },

  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rightImg: {
    width: _ms(12),
    height: _ms(12),
    marginHorizontal: _ms(10),
    transform: [{rotate: '180deg'}],
  },

  dpWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: blue,
    marginHorizontal: _ms(5),
    borderRadius: 4,
    marginTop: _vs(15),
    paddingVertical: _ms(4),
    paddingLeft: _ms(15),
    paddingRight: _ms(2.5),
  },

  dpMonthTxt: {
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(14),
    color: white,
  },

  dateCont: {
    backgroundColor: '#E3F8FF',
    alignItems: 'center',
    borderRadius: 4,
    padding: _ms(5),
    marginRight: _ms(5),
  },

  dateContTxt: {
    fontFamily: _fonts.interRegular,
    color: '#166B86',
    fontSize: _ms(12),
  },

  dateContSubTxt: {
    fontFamily: _fonts.interRegular,
    color: '#166B86',
    fontSize: _ms(12),
    marginTop: _ms(5),
  },

  arrow: {
    width: _ms(11),
    height: _ms(11),
  },

  arrowWrap: {
    position: 'absolute',
    padding: _ms(7),
    borderRadius: 20,
    zIndex: 1,
    // backgroundColor: 'red',
  },

  flightOptnWrap: {
    flex: 1,
    marginTop: _ms(15),
    backgroundColor: white,
  },

  flightOptnCont: {
    backgroundColor: white,
    marginTop: _ms(5),
    paddingHorizontal: _ms(12),
    paddingVertical: _ms(4),
    marginHorizontal: _ms(8),
    borderRadius: 8,
    elevation: 5,
    shadowColor: b3,
  },

  indigo: {
    fontFamily: 'LondonBetween',
    fontSize: _ms(17),
    color: b1,
    marginLeft: _ms(7),
  },

  ns400: {
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(12),
  },

  ns600: {
    fontFamily: _fonts.nunitoSansSemiBold,
  },

  midRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around',
    marginTop: _ms(10),
    gap: _ms(40),
    // backgroundColor: 'lightgreen',
  },

  itemCenter: {
    alignItems: 'center',
  },

  stickyBtm: {
    backgroundColor: b1,
    opacity: 0.9,
    position: 'absolute',
    marginHorizontal: _ms(8),
    bottom: _vs(10),
    borderRadius: 8,
    flexDirection: 'row',
  },

  filterWrap: {
    backgroundColor: '#848484',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  leftWrap: {
    flex: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    paddingLeft: _ms(5),
    marginTop: _ms(5),
    // backgroundColor: 'green',
  },

  filterBtnComn: {
    borderWidth: 1,
    borderColor: '#848484',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    paddingVertical: _ms(6),
    paddingHorizontal: _ms(6),
  },
});
