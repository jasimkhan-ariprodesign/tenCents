import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

import icon from '../../../config/IconAssets';
import {genCurrentDate} from '../../../config/CurrentDate';
import {white, b1, b3, blue, b2, bgColor} from '../../../config/colors';
import image from '../../../config/ImageAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import {
  _fonts,
  _ms,
  _mvs,
  _s,
  _vs,
  _width,
  backIconStyle,
  SafeAreaCon,
} from '../../utils/Responsive';

const WIDTH = _ms(20);

const flightsData = [
  {
    id: 1,
    outbound: {
      airline: 'Vistara',
      logo: icon.vistara,
      from: 'DAC',
      stops: '-BOM + LHR-',
      to: 'YYC',
      departure: '01:00',
      duration: '1d 09h 45m',
      arrival: '09:45',
    },
    return: {
      airline: 'Air Canada',
      logo: icon.canada,
      from: 'YYC',
      stops: '-LHR + BOM-',
      to: 'DAC',
      departure: '14:00',
      duration: '2d 0h 5m',
      arrival: '16:05',
    },
    price: 430,
    refundableStatus: 'non-refundable',
  },
  {
    id: 2,
    outbound: {
      airline: 'Emirates',
      logo: icon.emirates,
      from: 'DAC',
      stops: '-DXB-',
      to: 'JFK',
      departure: '08:30',
      duration: '1d 05h 30m',
      arrival: '14:00',
    },
    return: {
      airline: 'Emirates',
      logo: icon.emirates,
      from: 'JFK',
      stops: '-DXB-',
      to: 'DAC',
      departure: '21:00',
      duration: '1d 07h 45m',
      arrival: '12:45',
    },
    price: 550,
    refundableStatus: 'refundable',
  },
  {
    id: 3,
    outbound: {
      airline: 'Qatar Airways',
      logo: icon.qatar,
      from: 'DAC',
      stops: '-DOH-',
      to: 'LAX',
      departure: '12:45',
      duration: '1d 12h 20m',
      arrival: '15:05',
    },
    return: {
      airline: 'Qatar Airways',
      logo: icon.qatar,
      from: 'LAX',
      stops: '-DOH-',
      to: 'DAC',
      departure: '19:30',
      duration: '1d 11h 50m',
      arrival: '07:20',
    },
    price: 620,
    refundableStatus: 'partial-refundable',
  },
  {
    id: 4,
    outbound: {
      airline: 'Singapore Airlines',
      logo: icon.singapore,
      from: 'DAC',
      stops: '-SIN-',
      to: 'SYD',
      departure: '04:15',
      duration: '1d 07h 10m',
      arrival: '11:25',
    },
    return: {
      airline: 'Singapore Airlines',
      logo: icon.singapore,
      from: 'SYD',
      stops: '-SIN-',
      to: 'DAC',
      departure: '22:50',
      duration: '1d 09h 35m',
      arrival: '08:25',
    },
    price: 700,
    refundableStatus: 'refundable',
  },
  {
    id: 5,
    outbound: {
      airline: 'Turkish Airlines',
      logo: icon.turkish,
      from: 'DAC',
      stops: '-IST-',
      to: 'CDG',
      departure: '09:00',
      duration: '1d 06h 15m',
      arrival: '15:15',
    },
    return: {
      airline: 'Turkish Airlines',
      logo: icon.turkish,
      from: 'CDG',
      stops: '-IST-',
      to: 'DAC',
      departure: '18:30',
      duration: '1d 08h 25m',
      arrival: '07:55',
    },
    price: 540,
    refundableStatus: 'non-refundable',
  },
];

const FhBaseReview = ({navigation}) => {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedItem, setSelectedItem] = useState('Recommended');

  const [selectedFlightId, setSelectedFlightId] = useState(null);

  const ITEM_WIDTH = 100;
  const SCREEN_WIDTH = _width;

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

  const handleSelect = item => {
    setSelectedItem(item);
    // navigation.navigate('fhtripfilter');
  };

  const handleSelection = id => {
    setSelectedFlightId(prev => (prev === id ? null : id)); // Toggle selection
    // setSelectedFlightId(id);
    // navigation.navigate('fhfr');
  };

  return (
    <SafeAreaCon style={styles.parent}>
      <StatusBar translucent={true} barStyle={'dark-content'} />
      <View style={styles.parent}>
        {/* nav head */}
        <View style={styles.headerCon}>
          <TouchableOpacity
            style={styles.nav}
            onPress={() => navigation.goBack()}>
            <Image style={backIconStyle} source={icon.next} />
            <View>
              <View style={[styles.right]}>
                <Text style={styles.navHeadTxt}>Dhaka</Text>
                <Image style={styles.rightImg} source={icon.next} />
                <Text style={styles.navHeadTxt}>Dubai</Text>
              </View>
              <Text style={styles.navSubHeadTxt}>
                {genCurrentDate()} | 1 Adult
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* main body scroll */}
        <View style={styles.parent}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{rowGap: _mvs(20)}}>
              {/* details */}
              <View style={[styles.comWrap, {marginTop: _mvs(10)}]}>
                {/* hotel name */}
                <View style={styles.containerOne}>
                  <Image style={styles.imageStyle} source={image.hotelimg2} />

                  <View style={[commonStyles.flexOne, {rowGap: _mvs(5)}]}>
                    <Text style={[commonStyles.ns400]}>
                      New Apartments in Cranston by GLOBALSTAY
                    </Text>
                    <Text style={[commonStyles.ns400, {color: b3}]}>
                      Thu, Dec-21-2023 - Thu, Jan-04-2024
                    </Text>

                    {/* btn action */}
                    <View
                      style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.pop(2); // Go back two screens
                        }}>
                        <Text style={[commonStyles.ns400, {color: blue}]}>
                          Change Hotel
                        </Text>
                      </TouchableOpacity>

                      <Text>|</Text>

                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('fhtripfilter');
                        }}>
                        <Text style={[commonStyles.ns400, {color: blue}]}>
                          View Details
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                {/* depart/ return */}
                <View style={{rowGap: _mvs(10)}}>
                  <View style={styles.depart}>
                    <Text style={[commonStyles.ns400, styles.departTxt]}>
                      Depart
                    </Text>

                    <Text style={[commonStyles.ns400, styles.textStyleOne]}>
                      1:00 am (DAC)
                    </Text>

                    <View style={styles.middleView}>
                      <Text style={[commonStyles.ns400, {fontSize: _ms(10)}]}>
                        1d 09h 45m
                      </Text>

                      <View style={styles.middleViewChild}>
                        <Text
                          style={[
                            commonStyles.ns400,
                            styles.topDest,
                            {left: WIDTH + _ms(2)},
                          ]}>
                          BOM
                        </Text>
                        <View
                          style={[styles.dLine, {width: WIDTH + _ms(10)}]}
                        />
                        <View style={styles.diamond} />
                        <View style={[styles.dLine]} />
                        <View style={styles.diamond} />
                        <View
                          style={[styles.dLine, {width: WIDTH + _ms(10)}]}
                        />
                        <Text style={[commonStyles.ns400, styles.bottomDest]}>
                          LHR
                        </Text>
                      </View>
                    </View>

                    <View style={styles.rightView}>
                      <Text
                        style={[
                          commonStyles.ns400,
                          {fontSize: _ms(10), color: '#7F5F01'},
                        ]}>
                        next day
                      </Text>

                      <Text style={[commonStyles.ns400, {fontSize: _ms(10)}]}>
                        9:45 aM(YYC)
                      </Text>
                    </View>
                  </View>

                  {/* return */}
                  <View style={styles.depart}>
                    <Text style={[commonStyles.ns400, styles.departTxt]}>
                      Return
                    </Text>

                    <Text style={[commonStyles.ns400, styles.textStyleOne]}>
                      9:55 am (YYC)
                    </Text>

                    <View style={styles.middleView}>
                      <Text style={[commonStyles.ns400, {fontSize: _ms(10)}]}>
                        2d 00h 05m
                      </Text>

                      <View style={styles.middleViewChild}>
                        <Text
                          style={[
                            commonStyles.ns400,
                            styles.topDest,
                            {left: WIDTH + _ms(2)},
                          ]}>
                          LHR
                        </Text>
                        <View
                          style={[styles.dLine, {width: WIDTH + _ms(10)}]}
                        />
                        <View style={styles.diamond} />
                        <View style={[styles.dLine]} />
                        <View style={styles.diamond} />
                        <View
                          style={[styles.dLine, {width: WIDTH + _ms(10)}]}
                        />
                        <Text style={[commonStyles.ns400, styles.bottomDest]}>
                          BOM
                        </Text>
                      </View>
                    </View>

                    <View style={styles.rightView}>
                      <Text
                        style={[
                          commonStyles.ns400,
                          {fontSize: _ms(10), color: '#7F5F01'},
                        ]}>
                        +2 day
                      </Text>

                      <Text style={[commonStyles.ns400, {fontSize: _ms(10)}]}>
                        10:45 aM(DAC)
                      </Text>
                    </View>
                  </View>
                </View>

                {/* pricing */}
                <View style={styles.pricingCon}>
                  {/* left */}
                  <View style={styles.pricingLeft}>
                    <Text style={[commonStyles.ns600, {fontSize: _ms(16)}]}>
                      Package Price
                    </Text>
                    <Text style={[commonStyles.ns400, {color: b3}]}>
                      Per person
                    </Text>
                    <Text style={[commonStyles.ns400, {color: b3}]}>
                      Flight + Hotel(incl. taxes & fees)
                    </Text>
                  </View>

                  {/* right */}
                  <View style={[styles.pricingLeft, {alignItems: 'flex-end'}]}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={[commonStyles.ns400, {fontSize: _ms(14)}]}>
                        $2811
                      </Text>
                      <Text style={[commonStyles.ns400, {fontSize: _ms(10)}]}>
                        .49
                      </Text>
                    </View>

                    <Text style={[commonStyles.ns400, {textAlign: 'right'}]}>
                      As low as $351/mo with Affirm{' '}
                      <Text
                        style={[
                          commonStyles.lbB1,
                          {
                            fontSize: _ms(12),
                            color: blue,
                            textDecorationLine: 'underline',
                          },
                        ]}
                        onPress={() => Alert.alert('Learn More')}>
                        Learn more
                      </Text>
                    </Text>

                    {/* btn */}
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('fhfr');
                      }}
                      style={styles.btn}>
                      <Text
                        style={[
                          commonStyles.lbB1,
                          {color: white, fontSize: _ms(15)},
                        ]}>
                        Continue
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* ------------------------------------------------- */}

              {/* calendar scroll */}

              <View style={styles.dpWrap}>
                <View
                  style={{
                    alignItems: 'center',
                    gap: _ms(4),
                    paddingHorizontal: _ms(5),
                  }}>
                  <Image
                    style={{width: _ms(16), height: _ms(16)}}
                    source={icon.calendar}
                    // source={require('../../assets/icons/calendar.png')}
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
                    source={icon.rightArrow}
                    // source={require('../../assets/icons/right-arrow.png')}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleScrollRight}
                  style={[styles.arrowWrap, {right: -1}]}>
                  <Image
                    style={styles.arrow}
                    // source={require('../../assets/icons/right-arrow.png')}
                    source={icon.rightArrow}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              {/*  */}
              <View style={styles.comWrapFull}>
                {/* sort scroll */}
                <>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {[
                      {
                        label: 'Recommended',
                        icon: icon.star,
                        price: '1,746.08',
                        color: blue,
                      },
                      {
                        label: 'Cheapest',
                        icon: icon.priceTag,
                        price: '1,746.08',
                        color: '#51555E',
                      },
                      {
                        label: 'Shortest',
                        icon: icon.clock,
                        price: '1,746.08',
                        color: '#51555E',
                      },
                      {
                        label: 'Alternate Dates',
                        icon: icon.calendarDate,
                        price: '1,746.08',
                        color: '#51555E',
                      },
                    ].map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        style={[
                          styles.sortBox,
                          index === 0 && styles.sbBorderL,
                          index === 0 && {borderTopLeftRadius: 10},
                          index === 3 && {borderRightWidth: 0},
                          index === 3 && {borderTopRightRadius: 10},
                        ]}
                        // onPress={() => navigation.navigate('fhtripfilter')}
                        onPress={() => handleSelect(item.label)}>
                        <View
                          style={[
                            commonStyles.commWrapOne,
                            {columnGap: _ms(6)},
                          ]}>
                          <Image style={styles.iconStyle} source={item.icon} />
                          <Text
                            style={[
                              commonStyles.ns600,
                              {
                                fontSize: _ms(12),
                                color: selectedItem === item.label ? blue : b1,
                              },
                            ]}>
                            {item.label}
                          </Text>
                        </View>
                        <View style={commonStyles.commWrapOne}>
                          <Text
                            style={[
                              commonStyles.ns600,
                              {fontSize: _ms(10), color: blue},
                            ]}>
                            USD {item.price.split('.')[0]}
                          </Text>
                          <Text
                            style={[
                              commonStyles.ns600,
                              {fontSize: _ms(8), color: blue, top: -_mvs(2)},
                            ]}>
                            .{item.price.split('.')[1]}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>

                  <View style={styles.sortbyCon}>
                    <Text
                      style={[
                        commonStyles.ns600,
                        {fontSize: _ms(10), color: b2},
                      ]}>
                      Sort by
                    </Text>
                  </View>
                </>

                {/* tickets */}
                <View
                  style={{
                    marginTop: _mvs(10),
                    paddingHorizontal: _ms(1),
                    rowGap: _mvs(15),
                  }}>
                  {flightsData?.map((flight, index) => {
                    const lastIndex = flightsData.length - 1 === index;
                    return (
                      <View
                        key={index}
                        style={[
                          styles.comWrap,
                          {
                            marginBottom: lastIndex && _mvs(15),
                          },
                        ]}>
                        <View style={commonStyles.commWrapTwo}>
                          {/* left */}
                          <View style={styles.flightDataLeft}>
                            <>
                              <View
                                style={[
                                  commonStyles.commWrapOne,
                                  {gap: _ms(10)},
                                ]}>
                                <Image
                                  style={styles.airLinesLogo}
                                  source={icon.vistara}
                                />

                                <Text
                                  style={[
                                    commonStyles.lbB1,
                                    {fontSize: _ms(14)},
                                  ]}>
                                  {/* Vistara */}
                                  {flight?.outbound?.airline}
                                </Text>
                              </View>

                              <View style={commonStyles.commWrapTwo}>
                                <Text
                                  style={[commonStyles.ns600, styles.txt__]}>
                                  {/* DAC */}
                                  {flight?.outbound?.from}
                                </Text>
                                <Text
                                  style={[commonStyles.ns600, styles.txt__]}>
                                  {/* -BOM + LHR- */}
                                  {flight?.outbound?.stops}
                                </Text>
                                <Text
                                  style={[commonStyles.ns600, styles.txt__]}>
                                  {/* YYC */}
                                  {flight?.outbound?.to}
                                </Text>
                              </View>

                              <View style={commonStyles.commWrapTwo}>
                                <Text
                                  style={[commonStyles.ns600, styles.txt__2]}>
                                  {/* 01:00 */}
                                  {flight?.outbound?.departure}
                                </Text>
                                <Text
                                  style={[
                                    commonStyles.ns600,
                                    {fontSize: _ms(10)},
                                  ]}>
                                  {/* 1d 09h 45m */}
                                  {flight?.outbound?.duration}
                                </Text>
                                <Text
                                  style={[commonStyles.ns600, styles.txt__2]}>
                                  {/* 09:45 */}
                                  {flight?.outbound?.arrival}
                                </Text>
                              </View>
                            </>

                            <>
                              <View
                                style={[
                                  commonStyles.commWrapOne,
                                  {gap: _ms(10)},
                                ]}>
                                <Image
                                  style={styles.airLinesLogo}
                                  source={icon.canada}
                                />

                                <Text
                                  style={[
                                    commonStyles.lbB1,
                                    {fontSize: _ms(14)},
                                  ]}>
                                  {/* Air Canada */}
                                  {flight?.return?.airline}
                                </Text>
                              </View>

                              <View style={commonStyles.commWrapTwo}>
                                <Text
                                  style={[commonStyles.ns600, styles.txt__]}>
                                  {/* DAC */}
                                  {flight?.return?.from}
                                </Text>
                                <Text
                                  style={[commonStyles.ns600, styles.txt__]}>
                                  {/* -LHR + BOM- */}
                                  {flight?.return?.stops}
                                </Text>
                                <Text
                                  style={[commonStyles.ns600, styles.txt__]}>
                                  {/* YYC */}
                                  {flight?.return?.to}
                                </Text>
                              </View>

                              <View style={commonStyles.commWrapTwo}>
                                <Text
                                  style={[commonStyles.ns600, styles.txt__2]}>
                                  {/* 01:00 */}
                                  {flight?.return?.departure}
                                </Text>
                                <Text
                                  style={[
                                    commonStyles.ns600,
                                    {fontSize: _ms(10)},
                                  ]}>
                                  {/* 2d 0h 5m */}
                                  {flight?.return?.duration}
                                </Text>
                                <Text
                                  style={[commonStyles.ns600, styles.txt__2]}>
                                  {/* 09:45 */}
                                  {flight?.return?.arrival}
                                </Text>
                              </View>
                            </>
                          </View>

                          {/* right */}
                          <View style={{rowGap: _mvs(10)}}>
                            <Text
                              style={[
                                commonStyles.ns600,
                                {textAlign: 'center'},
                              ]}>
                              {/* $430 */}$ {flight?.price}
                            </Text>

                            <TouchableOpacity
                              onPress={() => {
                                handleSelection(flight?.id);
                              }}
                              style={styles.btn}>
                              <Text
                                style={[
                                  commonStyles.lbB1,
                                  {color: white, fontSize: _ms(15)},
                                ]}>
                                {selectedFlightId === flight.id
                                  ? 'Selected'
                                  : 'Book'}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>

                        {/* flight details button --- */}
                        <>
                          <TouchableOpacity
                            style={styles.flightDetailsBtn}
                            onPress={() =>
                              navigation.navigate('fhfdetails', {
                                flightData: flight,
                              })
                            }>
                            <Text
                              style={[
                                commonStyles.ns600,
                                {fontSize: _ms(10), color: blue},
                              ]}>
                              Flight Details
                            </Text>

                            <Image
                              style={styles.downArr}
                              source={icon.rightArrow}
                            />
                          </TouchableOpacity>
                        </>

                        {/* footer */}
                        <View style={styles.flightFooter}>
                          <Text
                            style={[
                              commonStyles.ns600,
                              styles.txt_3,
                              {color: blue},
                            ]}>
                            Fare Rules
                          </Text>

                          <Text
                            style={[
                              commonStyles.ns600,
                              styles.txt_3,
                              {
                                color:
                                  flight?.refundableStatus === 'non-refundable'
                                    ? '#EB2A2A'
                                    : flight?.refundableStatus ===
                                      'partial-refundable'
                                    ? '#EEB522'
                                    : '#34AE39',
                                textTransform: 'uppercase',
                              },
                            ]}>
                            {/* NON-REFUNDABLE */}
                            {flight?.refundableStatus}
                          </Text>

                          <Text
                            style={[
                              commonStyles.ns600,
                              styles.txt_3,
                              {color: b2},
                            ]}>
                            ECONOMY
                          </Text>

                          {/* bag */}
                          <View
                            style={[
                              commonStyles.commWrapOne,
                              {columnGap: _ms(3)},
                            ]}>
                            <View style={[styles.seatWrap]}>
                              <Image
                                style={styles.bagIcon}
                                source={icon.baggage}
                              />
                            </View>

                            <Text
                              style={[
                                commonStyles.ns600,
                                styles.txt_3,
                                {color: b3},
                              ]}>
                              2 Checked Bags
                            </Text>
                          </View>

                          {/* seat */}
                          <View
                            style={[
                              commonStyles.commWrapOne,
                              {columnGap: _ms(3)},
                            ]}>
                            <View style={[styles.seatWrap]}>
                              <Image
                                style={{width: 10, height: 10, tintColor: blue}}
                                source={icon.seat}
                              />
                            </View>

                            <Text
                              style={[
                                commonStyles.ns600,
                                styles.txt_3,
                                {color: b3},
                              ]}>
                              8 Seats
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* PROCEED */}

        {/* figma me nahi hai */}

        {/* <View style={styles.proceedCon}>
          <View style={{rowGap: _mvs(2)}}>
            <Text style={[commonStyles.ns600, {color: white}]}>Price</Text>
            <Text style={[commonStyles.ns600, {color: white}]}>
              $1320 + Taxes
            </Text>
          </View>

          <TouchableOpacity
            style={styles.proceedBtn}
            onPress={() => {
              navigation.navigate('fhfr');
            }}>
            <Text
              style={[commonStyles.ns600, commonStyles.font13, {color: blue}]}>
              PROCEED
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaCon>
  );
};

export default FhBaseReview;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: bgColor,
  },

  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: _ms(20),
  },

  navHeadTxt: {
    color: b1,
    fontSize: _ms(14),
    fontFamily: _fonts.londonBetween,
  },

  navSubHeadTxt: {
    color: b3,
    fontSize: _ms(12),
    fontFamily: _fonts.londonBetween,
    marginTop: _mvs(2),
  },

  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rightImg: {
    width: _ms(14),
    height: _ms(14),
    marginHorizontal: _ms(10),
    transform: [{rotate: '180deg'}],
    resizeMode: 'contain',
  },

  // --

  headerCon: {
    alignItems: 'flex-start',
    paddingLeft: _ms(8),
    paddingVertical: _mvs(10),
  },

  comWrap: {
    backgroundColor: white,
    marginHorizontal: _ms(6),
    paddingVertical: _mvs(10),
    paddingHorizontal: _ms(8),
    borderRadius: 8,
    elevation: 2,
    rowGap: _mvs(10),
  },

  containerOne: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: _ms(10),
  },

  imageStyle: {
    width: _ms(70),
    height: _mvs(50),
    resizeMode: 'cover',
    borderRadius: 2,
  },

  depart: {
    flexDirection: 'row',
    columnGap: _ms(5),
    alignItems: 'center',
  },

  departTxt: {
    fontSize: _ms(10),
    flex: 0.6,
  },

  textStyleOne: {
    fontSize: _ms(10),
    flex: 1,
  },

  middleView: {
    rowGap: _mvs(4),
    alignItems: 'center',
    flex: 1.3,
  },

  middleViewChild: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(17),
    overflow: 'scroll',
  },

  rightView: {
    rowGap: _mvs(5),
    alignItems: 'flex-end',
    flex: 1.1,
  },

  dLine: {
    backgroundColor: b3,
    height: 1.5,
    width: WIDTH,
  },

  diamond: {
    width: _ms(5),
    height: _ms(5),
    backgroundColor: b2,
    transform: [{rotate: '45deg'}],
  },

  topDest: {
    fontSize: _ms(8.5),
    color: b3,
    position: 'absolute',
    top: 0,
    left: WIDTH,
  },

  bottomDest: {
    fontSize: 8,
    color: b3,
    position: 'absolute',
    bottom: 0,
    right: WIDTH,
  },

  pricingCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  pricingLeft: {
    rowGap: _mvs(4),
    flex: 1,
  },

  btn: {
    borderRadius: 4,
    backgroundColor: b2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(6),
    // paddingHorizontal: _ms(15),
    width: _ms(90),
  },

  // horizontal scroll styles

  dpWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: blue,
    marginHorizontal: _ms(5),
    borderRadius: 4,
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

  // 2nd horizontal ----

  comWrapFull: {
    backgroundColor: white,
    borderRadius: 8,
    elevation: 4,
  },

  sortBox: {
    backgroundColor: white,
    borderRightWidth: 1.5,
    borderRightColor: '#e6e6e6',
    rowGap: _mvs(8),
    paddingVertical: _mvs(6),
    paddingTop: _mvs(14),
    paddingHorizontal: _ms(6),
    alignItems: 'center',
  },

  iconStyle: {
    width: _ms(13),
    height: _ms(13),
    tintColor: b1,
    resizeMode: 'contain',
  },

  sortbyCon: {
    backgroundColor: '#FEBD01',
    paddingVertical: _mvs(2),
    paddingHorizontal: _ms(12),
    borderRadius: 100,
    position: 'absolute',
    top: -_mvs(10),
    left: _ms(14),
  },

  // flight data

  flightDataLeft: {
    rowGap: _mvs(10),
    // backgroundColor: 'seashell',
    flex: 1,
    paddingRight: _ms(12),
  },

  airLinesLogo: {
    width: _ms(20),
    height: _ms(20),
    borderRadius: 4,
    resizeMode: 'contain',
  },

  txt__: {
    fontSize: _ms(12),
    color: b3,
  },

  txt__2: {
    fontSize: _ms(12),
    color: b1,
  },

  flightDetailsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: _ms(5),
    alignSelf: 'flex-end',
  },

  downArr: {
    width: _ms(10),
    height: _ms(10),
    transform: [{rotate: '90deg'}],
    tintColor: blue,
  },

  flightFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    columnGap: _ms(8),
    rowGap: _mvs(5),
    // backgroundColor: 'yellowgreen',
  },

  txt_3: {
    fontSize: _ms(8),
  },

  seatWrap: {
    backgroundColor: 'rgba(33, 180, 226, 0.1.5)',
    borderRadius: 22,
    width: _ms(15),
    height: _ms(15),
    alignItems: 'center',
    justifyContent: 'center',
  },

  bagIcon: {
    width: _ms(12),
    height: _ms(12),
    tintColor: blue,
  },

  proceedCon: {
    backgroundColor: b1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: _mvs(4),
    paddingBottom: _mvs(7),
    paddingHorizontal: _ms(10),
    flexDirection: 'row',
  },

  proceedBtn: {
    borderWidth: 1.5,
    borderRadius: 2,
    borderColor: blue,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(4.5),
    width: _s(122),
  },
});
