import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {b1, b2, b3, blue, gs1, gs2, white} from '../../config/colors';
import FareBreakSheet from '../../utility/FareBreakSheet';
import {_fonts, _ms, _mvs, _s} from '../../components/utils/Responsive';
import icon from '../../config/IconAssets';

const FlightReview = ({navigation}) => {
  const fareRef = useRef();

  const handleDataFromB = data => {
    console.log('Data received from Screen B:', data); // Handle the data from Screen B
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent={true} barStyle={'dark-content'} />
      <View style={styles.Wrap}>
        {/* nav */}
        <TouchableOpacity
          style={styles.nav}
          onPress={() => navigation.goBack()}>
          <Image
            style={{width: _ms(21), height: _ms(21), tintColor: b1}}
            source={require('../../assets/icons/next.png')}
            resizeMode="contain"
          />
          <Text style={[styles.lbB1, {fontSize: _ms(16), marginLeft: _ms(15)}]}>
            Review
          </Text>
        </TouchableOpacity>

        <View style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* ticket 1 */}
            <View style={[styles.ticketWrap]}>
              {/* head */}
              <View style={styles.ticketHead}>
                <Text
                  style={[
                    styles.lbB1,
                    {fontSize: _ms(16), marginRight: _ms(15), color: white},
                  ]}>
                  Dhaka
                </Text>
                <Image
                  style={{
                    width: _ms(16),
                    height: _ms(16),
                    tintColor: white,
                    transform: [{rotate: '180deg'}],
                  }}
                  source={require('../../assets/icons/next.png')}
                />
                <Text
                  style={[
                    styles.lbB1,
                    {fontSize: _ms(18), color: white, marginLeft: _ms(15)},
                  ]}>
                  Dubai
                </Text>
              </View>

              <View style={{marginHorizontal: _ms(10)}}>
                {/* flight name & number */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: _mvs(15),
                  }}>
                  <Image
                    style={{width: _ms(30), height: _ms(30)}}
                    source={require('../../assets/icons/indigo.png')}
                  />
                  <Text style={[styles.ns600, {marginLeft: _ms(10)}]}>
                    IndiGo
                    <Text style={[styles.ns600, {color: b3}]}> 6E-1118</Text>
                  </Text>
                </View>

                {/* ticket details */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: _mvs(10),
                    // backgroundColor: 'lightyellow',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      rowGap: _ms(6),
                      // backgroundColor: 'green',
                    }}>
                    <Text style={[styles.ns600, {fontSize: _ms(12)}]}>
                      08 Nov, Sat
                    </Text>
                    <Text style={[styles.ns700]}>14:15</Text>
                    <Text style={[styles.ns700]}>Dhaka</Text>
                    <Text
                      style={[styles.ns600, {fontSize: _ms(11), color: b3}]}>
                      Indira Gandhi International Airport
                    </Text>
                  </View>

                  <View
                    style={{
                      // backgroundColor: 'blue',
                      marginBottom: _mvs(42),
                    }}>
                    <Text style={[styles.ns700]}>02h 30m</Text>
                  </View>

                  <View
                    style={{
                      alignItems: 'flex-end',
                      flex: 1,
                      rowGap: 6,
                      // backgroundColor: 'red',
                    }}>
                    <Text style={[styles.ns600, {fontSize: _ms(12)}]}>
                      08 Nov, Sat
                    </Text>
                    <Text style={[styles.ns700]}>16:15</Text>
                    <Text style={[styles.ns700]}>Bombay</Text>
                    <Text
                      style={[
                        styles.ns600,
                        {fontSize: _ms(11), color: b3, textAlign: 'right'},
                      ]}>
                      Chhatrapati Shivaji International Airport
                    </Text>
                  </View>
                </View>

                {/* baggage */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginTop: _mvs(20),
                    marginBottom: _mvs(35),
                  }}>
                  <View style={{alignItems: 'center', rowGap: _mvs(7)}}>
                    <Image
                      style={{width: _ms(30), height: _ms(30), tintColor: blue}}
                      source={require('../../assets/icons/backpack.png')}
                    />
                    <Text style={[styles.ns700, {color: b3}]}>7 Kgs</Text>
                    <Text style={[styles.ns400, {color: b3}]}>
                      Cabin Baggage
                    </Text>
                  </View>

                  <View style={{alignItems: 'center', rowGap: 7}}>
                    <Image
                      style={{width: _ms(35), height: _ms(35), tintColor: blue}}
                      source={require('../../assets/icons/baggage.png')}
                    />
                    <Text style={[styles.ns700, {color: b3}]}>15 Kgs</Text>
                    <Text style={[styles.ns400, {color: b3}]}>
                      Check-In Baggage
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <Text
              style={[
                styles.ns600,
                {textAlign: 'center', marginVertical: _mvs(10)},
              ]}>
              Layover - 03h 45m
            </Text>

            {/* ticket 2 */}
            <View style={styles.ticketWrap}>
              <View style={{marginHorizontal: _ms(10)}}>
                {/* flight name & number */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: _mvs(15),
                  }}>
                  <Image
                    style={{width: _ms(30), height: _ms(30)}}
                    source={require('../../assets/icons/indigo.png')}
                  />
                  <Text style={[styles.ns600, {marginLeft: _ms(10)}]}>
                    IndiGo
                    <Text style={[styles.ns600, {color: b3}]}> 6E-1407</Text>
                  </Text>
                </View>

                {/* ticket details */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: _mvs(10),
                    // backgroundColor: 'lightyellow',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      rowGap: _ms(6),
                      // backgroundColor: 'green',
                    }}>
                    <Text style={[styles.ns600, {fontSize: _ms(12)}]}>
                      08 Nov, Sat
                    </Text>
                    <Text style={[styles.ns700]}>20:05</Text>
                    <Text style={[styles.ns700]}>Bombay</Text>
                    <Text
                      style={[styles.ns600, {fontSize: _ms(11), color: b3}]}>
                      Chhatrapati Shivaji International Airport
                    </Text>
                  </View>

                  <View
                    style={{
                      // backgroundColor: 'blue',
                      marginBottom: _mvs(42),
                    }}>
                    <Text style={[styles.ns700]}>03h 55m</Text>
                  </View>

                  <View
                    style={{
                      alignItems: 'flex-end',
                      flex: 1,
                      rowGap: 6,
                      // backgroundColor: 'red',
                    }}>
                    <Text style={[styles.ns600, {fontSize: _ms(12)}]}>
                      08 Nov, Sat
                    </Text>
                    <Text style={[styles.ns700]}>22:30</Text>
                    <Text style={[styles.ns700]}>Dubai</Text>
                    <Text
                      style={[
                        styles.ns600,
                        {fontSize: _ms(11), color: b3, textAlign: 'right'},
                      ]}>
                      Dubai International Airport
                    </Text>
                  </View>
                </View>

                {/* baggage */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginTop: _mvs(20),
                    marginBottom: _mvs(35),
                  }}>
                  <View style={{alignItems: 'center', rowGap: _mvs(7)}}>
                    <Image
                      style={{width: _ms(30), height: _ms(30), tintColor: blue}}
                      source={require('../../assets/icons/backpack.png')}
                    />
                    <Text style={[styles.ns700, {color: b3}]}>7 Kgs</Text>
                    <Text style={[styles.ns400, {color: b3}]}>
                      Cabin Baggage
                    </Text>
                  </View>

                  <View style={{alignItems: 'center', rowGap: 7}}>
                    <Image
                      style={{width: _ms(35), height: _ms(35), tintColor: blue}}
                      source={require('../../assets/icons/baggage.png')}
                    />
                    <Text style={[styles.ns700, {color: b3}]}>15 Kgs</Text>
                    <Text style={[styles.ns400, {color: b3}]}>
                      Check-In Baggage
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* class */}
            <View style={styles.classCon}>
              <Text style={[styles.ns400, {color: b3}]}>Class</Text>
              <Text style={[styles.ns600]}>Economy</Text>
              <Text
                style={[styles.ns600, {textTransform: 'uppercase', color: b3}]}>
                saver
              </Text>
            </View>

            {/* offers & promocode */}
            <View style={styles.commonWrap}>
              <View style={styles.viewAllBtnCon}>
                <Text style={[styles.lbB1, {fontSize: _ms(16)}]}>
                  Offers & Promocode
                </Text>

                <TouchableOpacity style={styles.viewAll}>
                  <Text style={styles.viewAllTxt}>view all</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.searchCon}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Enter Promo Code"
                  placeholderTextColor={b3}
                />

                <TouchableOpacity style={styles.applyBtn}>
                  <Text
                    style={[
                      styles.ns400,
                      {
                        fontSize: _ms(14),
                        color: b3,
                      },
                    ]}>
                    APPLY
                  </Text>
                </TouchableOpacity>
              </View>

              {/* offers */}
              <View style={styles.offers}>
                <TouchableOpacity style={styles.offer}>
                  <View style={styles.offerBtnParent}>
                    <Image
                      style={styles.offerIcon}
                      source={require('../../assets/icons/discount-solid.png')}
                    />

                    <View style={{flex: 1}}>
                      <Text style={[styles.ns700]}>CASUPER</Text>
                      <Text style={[styles.ns400, {color: b3}]}>
                        Get $15 instant discount.
                      </Text>
                    </View>
                  </View>

                  <View style={styles.circle} />
                </TouchableOpacity>
                {/* caintl */}
                <TouchableOpacity style={styles.offer}>
                  <View style={styles.offerBtnParent}>
                    <Image
                      style={styles.offerIcon}
                      source={require('../../assets/icons/discount-solid.png')}
                    />

                    <View style={{flex: 1}}>
                      <Text style={[styles.ns700]}>CAINTL</Text>
                      <Text style={[styles.ns400, {color: b3}]}>
                        Get $1 discount.
                      </Text>
                    </View>
                  </View>

                  <View style={styles.circle} />
                </TouchableOpacity>
                {/* cayesint */}
                <TouchableOpacity style={styles.offer}>
                  <View style={[styles.offerBtnParent, {gap: _ms(10)}]}>
                    <Image
                      style={{width: _ms(30), height: _ms(20)}}
                      source={require('../../assets/icons/yes-bank.png')}
                      resizeMode="contain"
                    />

                    <View style={{flex: 1}}>
                      <Text style={[styles.ns700]}>CAYESINT</Text>
                      <Text style={[styles.ns400, {color: b3}]}>
                        Get $50 OFF using YES Bank Credit & Debit Card Interest-
                        Free EMI.
                      </Text>
                    </View>
                  </View>

                  <View style={styles.circle} />
                </TouchableOpacity>
              </View>
            </View>

            {/* travel insurance */}
            <View style={styles.commonWrap}>
              <View style={styles.viewAllBtnCon}>
                <Text style={[styles.lbB1, {fontSize: _ms(16)}]}>
                  Travel Insurance
                </Text>

                <View style={{alignItems: 'flex-end'}}>
                  <Text
                    style={[styles.ns400, {fontSize: _ms(16), color: blue}]}>
                    $ 15.95
                  </Text>
                  <Text style={[styles.ns400]}>per person</Text>
                </View>
              </View>

              <View style={styles.textContainer}>
                <Image
                  style={styles.shieldIcon}
                  source={require('../../assets/icons/shield.png')}
                  resizeMode="contain"
                />
                <Text style={[styles.ns600]}>What will be covered?</Text>
              </View>

              {/* coverage */}
              <View style={styles.containerOne}>
                <View style={styles.leftTextCon}>
                  <View style={styles.rowAndCenterItemCon}>
                    <Image
                      style={styles.checkIconStyle}
                      source={require('../../assets/icons/check.png')}
                    />
                    <Text style={[styles.ns400, {color: b3}]}>
                      Trip cancellation
                    </Text>
                  </View>

                  <View style={styles.rowAndCenterItemCon}>
                    <Image
                      style={styles.checkIconStyle}
                      source={require('../../assets/icons/check.png')}
                    />
                    <Text style={[styles.ns400, {color: b3}]}>
                      Mechanical issues
                    </Text>
                  </View>

                  <View style={styles.rowAndCenterItemCon}>
                    <Image
                      style={styles.checkIconStyle}
                      source={require('../../assets/icons/check.png')}
                    />
                    <Text style={[styles.ns400, {color: b3}]}>
                      Baggage Delay
                    </Text>
                  </View>
                </View>

                <View style={styles.leftTextCon}>
                  <View style={styles.rowAndCenterItemCon}>
                    <Image
                      style={styles.checkIconStyle}
                      source={require('../../assets/icons/check.png')}
                    />
                    <Text style={[styles.ns400, {color: b3}]}>
                      Travel Delay
                    </Text>
                  </View>

                  <View style={styles.rowAndCenterItemCon}>
                    <Image
                      style={styles.checkIconStyle}
                      source={require('../../assets/icons/check.png')}
                    />
                    <Text style={[styles.ns400, {color: b3}]}>
                      Trip interruption
                    </Text>
                  </View>

                  <View style={styles.rowAndCenterItemCon}>
                    <Image
                      style={styles.checkIconStyle}
                      source={require('../../assets/icons/check.png')}
                    />
                    <Text style={[styles.ns400, {color: b3}]}>
                      Airline Bankruptcy
                    </Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity style={styles.iWantTravelProtBtn}>
                <View style={styles.circle} />
                <Text style={[styles.ns400]}>
                  Yes, I want travel protection for my trip.
                </Text>
              </TouchableOpacity>
            </View>

            {/* travellers */}
            <View style={[styles.commonWrap]}>
              <View style={styles.viewAllBtnCon}>
                <View>
                  <Text style={[styles.lbB1, {fontSize: _ms(16)}]}>
                    Travellers
                  </Text>
                  <Text style={[styles.lbB1, {fontSize: _ms(12), color: b3}]}>
                    0/1 Selected
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AddNewTravellerDetails', {
                      // onGoBack: handleDataFromB,
                    });
                  }}
                  style={styles.viewAll}>
                  <Text style={styles.viewAllTxt}>Add new +</Text>
                </TouchableOpacity>
              </View>

              {/* choose travellers */}
              <View style={styles.chooseTravellersCon}>
                <TouchableOpacity style={styles.travellersBtn}>
                  <View style={styles.rowAndCenterItemCon}>
                    <Image
                      style={styles.travellersProfile}
                      source={require('../../assets/icons/man.png')}
                    />
                    <Text style={[styles.ns400]}>Kevin Vo, 40</Text>
                  </View>

                  <View style={styles.circle} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.travellersBtn}>
                  <View style={styles.rowAndCenterItemCon}>
                    <Image
                      style={styles.travellersProfile}
                      source={require('../../assets/icons/woman.png')}
                    />
                    <Text style={[styles.ns400]}>Kevin Vo, 40</Text>
                  </View>

                  <View style={styles.circle} />
                </TouchableOpacity>
              </View>
            </View>

            {/* customer support packege */}
            <View style={[styles.commonWrap]}>
              <View style={styles.customerSuppTxtCon}>
                <Image
                  style={styles.travellersProfile}
                  tintColor={b2}
                  source={require('../../assets/icons/customer-service.png')}
                />
                <Text style={[styles.lbB1, {fontSize: _ms(16)}]}>
                  Customer Support Package
                </Text>
              </View>

              <View style={styles.standardParCon}>
                {/* standard */}
                <TouchableOpacity style={styles.supPack}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View style={[styles.rowAndCenterItemCon]}>
                      <View style={styles.circleSm} />
                      <Text style={[styles.ns700]}>STANDARD</Text>
                    </View>
                    <Text style={[styles.ns700, {color: blue}]}>$ 0.00</Text>
                  </View>

                  <View style={[styles.containerTwo]}>
                    <View style={{rowGap: _mvs(5)}}>
                      <Text style={[styles.lbB1, styles.fontSize14]}>
                        Cancellation Fee
                      </Text>
                      <Text style={[styles.lbB1, styles.fontSize14]}>
                        Response Time
                      </Text>
                      <Text style={[styles.lbB1, styles.fontSize14]}>
                        Rescheduling Help
                      </Text>
                    </View>

                    <View style={{rowGap: _mvs(5)}}>
                      <Text style={[styles.lbB1, styles.fontSize14]}>
                        Upto $250 per ticket
                      </Text>
                      <Text style={[styles.lbB1, styles.fontSize14]}>
                        Standard
                      </Text>
                      <Text style={[styles.lbB1, styles.fontSize14]}>
                        Standard
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                {/* premium */}
                <TouchableOpacity style={styles.supPack}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View style={[styles.rowAndCenterItemCon]}>
                      <View style={styles.circleSm} />
                      <Text style={[styles.ns700]}>PREMIUM</Text>
                    </View>
                    <Text style={[styles.ns700, {color: blue}]}>$ 14.95</Text>
                  </View>

                  <View style={styles.containerTwo}>
                    <View style={{rowGap: _mvs(5)}}>
                      <Text style={[styles.lbB1, styles.fontSize14]}>
                        Cancellation Fee
                      </Text>
                      <Text style={[styles.lbB1, styles.fontSize14]}>
                        Response Time
                      </Text>
                      <Text style={[styles.lbB1, styles.fontSize14]}>
                        Rescheduling Help
                      </Text>
                    </View>

                    <View style={{rowGap: _mvs(5)}}>
                      <Text
                        style={[styles.lbB1, {fontSize: _ms(14), color: gs1}]}>
                        FREE
                      </Text>
                      <Text
                        style={[styles.lbB1, {fontSize: _ms(14), color: gs1}]}>
                        FAST
                      </Text>
                      <Text style={[styles.lbB1, styles.fontSize14]}>
                        Priority
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                {/* supreme */}
                <TouchableOpacity style={styles.supPack}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View style={[styles.rowAndCenterItemCon]}>
                      <View style={styles.circleSm} />
                      <Text style={[styles.ns700]}>SUPREME</Text>
                    </View>
                    <Text style={[styles.ns700, {color: blue}]}>$ 22.99</Text>
                  </View>

                  <View style={[styles.containerTwo]}>
                    <View style={{rowGap: _mvs(5)}}>
                      <Text style={[styles.lbB1, styles.fontSize14]}>
                        Cancellation Fee
                      </Text>
                      <Text style={[styles.lbB1, styles.fontSize14]}>
                        Response Time
                      </Text>
                      <Text style={[styles.lbB1, styles.fontSize14]}>
                        Rescheduling Help
                      </Text>
                    </View>

                    <View style={{rowGap: 6}}>
                      <Text
                        style={[styles.lbB1, {fontSize: _ms(14), color: gs1}]}>
                        FREE
                      </Text>
                      <Text
                        style={[styles.lbB1, {fontSize: _ms(14), color: gs1}]}>
                        SUPER FAST
                      </Text>
                      <Text style={[styles.lbB1, styles.fontSize14]}>
                        High Priority
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* flexible ticket */}
            <View style={[styles.commonWrap]}>
              <View style={styles.customerSuppTxtCon}>
                <Image
                  style={styles.travellersProfile}
                  source={require('../../assets/icons/customer-service.png')}
                />
                <Text style={[styles.lbB1, {fontSize: _ms(16)}]}>
                  Flexible Ticket
                </Text>
              </View>

              <View style={[styles.supPack, {marginVertical: _mvs(10)}]}>
                <View
                  style={{
                    alignItems: 'flex-end',
                    paddingVertical: 2,
                  }}>
                  <Text style={[styles.ns700, {color: blue}]}>$ 0.00</Text>
                </View>

                <View style={{rowGap: _mvs(5)}}>
                  <View style={[styles.rowAndCenterItemCon]}>
                    <Image
                      style={styles.checkIconStyle}
                      source={require('../../assets/icons/check.png')}
                    />
                    <Text style={[styles.lbB1, {color: b3, fontSize: _ms(12)}]}>
                      Rebooking included (subject to increase in fare)
                    </Text>
                  </View>

                  <View style={[styles.rowAndCenterItemCon]}>
                    <Image
                      style={styles.checkIconStyle}
                      source={require('../../assets/icons/check.png')}
                    />
                    <Text style={[styles.lbB1, {color: b3, fontSize: _ms(12)}]}>
                      Name change included
                    </Text>
                  </View>

                  <View style={[styles.rowAndCenterItemCon]}>
                    <Image
                      style={styles.checkIconStyle}
                      source={require('../../assets/icons/check.png')}
                    />
                    <Text style={[styles.lbB1, {color: b3, fontSize: _ms(12)}]}>
                      Cancellation within 24 hours
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Travel Assistance Classic */}
            <View style={[styles.commonWrap, {marginBottom: _mvs(20)}]}>
              <View style={styles.viewAllBtnCon}>
                <Text style={[styles.lbB1, {fontSize: _ms(16)}]}>
                  Travel Assistance Classic
                </Text>

                <View style={{alignItems: 'flex-end'}}>
                  <Text
                    style={[styles.ns400, {fontSize: _ms(16), color: blue}]}>
                    $ 9.95
                  </Text>
                  <Text style={[styles.ns400]}>per person</Text>
                </View>
              </View>

              <View style={styles.textContainer}>
                <Image
                  style={styles.shieldIcon}
                  source={require('../../assets/icons/shield.png')}
                />
                <Text style={[styles.ns600]}>
                  Hire you own personal concierge
                </Text>
              </View>

              {/* coverage */}
              <View style={styles.containerOne}>
                <View>
                  <View style={styles.rowAndCenterItemCon}>
                    <Image
                      style={styles.checkIconStyle}
                      source={require('../../assets/icons/check.png')}
                    />
                    <Text style={[styles.ns400]}>
                      Emergency medical assistance
                    </Text>
                  </View>

                  <View style={styles.rowAndCenterItemCon}>
                    <Image
                      style={styles.checkIconStyle}
                      source={require('../../assets/icons/check.png')}
                    />
                    <Text style={[styles.ns400]}>
                      $50 upto saving coupon and more
                    </Text>
                  </View>

                  <View style={styles.rowAndCenterItemCon}>
                    <Image
                      style={styles.checkIconStyle}
                      source={require('../../assets/icons/check.png')}
                    />
                    <Text style={[styles.ns400]}>
                      Visa & Passport assistance
                    </Text>
                  </View>

                  <View style={styles.rowAndCenterItemCon}>
                    <Image
                      style={styles.checkIconStyle}
                      source={require('../../assets/icons/check.png')}
                    />
                    <Text style={[styles.ns400]}>
                      Personal concierge assistance
                    </Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity style={styles.iWantTravelProtBtn}>
                <View style={styles.circle} />
                <Text style={[styles.ns400]}>
                  Yes, I want travel assistance for my trip.
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* bottom */}
        <View style={styles.bottom}>
          <View style={styles.bottomChildCon}>
            <TouchableOpacity style={styles.wallet}>
              <View>
                <Image
                  style={styles.walletIcon}
                  source={require('../../assets/icons/wallet.png')}
                  tintColor={b1}
                />

                <View style={styles.fixedViewStyle}>
                  <Text style={styles.fixedTxtStyle}>$ 0</Text>
                </View>
              </View>
            </TouchableOpacity>

            <Text style={[styles.ns600, {fontSize: _ms(12)}]}>
              Book and earn 156 points instantly
            </Text>
          </View>

          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['rgba(195, 175, 253, 0.56)', 'rgba(123, 88, 222, 1)']}
            style={{height: _mvs(3)}}
          />

          <View style={styles.continueCon}>
            <TouchableOpacity
              style={styles.rowAndCenterItemCon}
              onPress={() => fareRef.current.open()}>
              <Text style={[styles.ns700, {fontSize: _ms(16)}]}>$ 495</Text>
              <Image style={styles.rightArrIcon} source={icon.rightArrow} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.continue}
              onPress={() => navigation.navigate('addons')}>
              <Text style={styles.continueTxt}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* bottom sheet */}
        <FareBreakSheet fareRef={fareRef} />
      </View>
    </SafeAreaView>
  );
};

export default FlightReview;

const styles = StyleSheet.create({
  Wrap: {
    flex: 1,
    // marginHorizontal: 12,
    paddingTop: _mvs(40),
    backgroundColor: white,
  },

  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: _mvs(20),
    marginLeft: _ms(12),
  },

  lbB1: {
    fontFamily: 'LondonBetween',
    color: b1,
  },

  ticketWrap: {
    elevation: 4,
    borderRadius: 4,
    backgroundColor: white,
    marginHorizontal: _ms(8),
  },

  ticketHead: {
    backgroundColor: '#333E5C',
    flexDirection: 'row',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingVertical: _mvs(12),
    alignItems: 'center',
    paddingLeft: _ms(10),
  },

  ns700: {
    fontFamily: _fonts.nunitoSansBold,
    color: b1,
    fontSize: _ms(14),
  },

  ns600: {
    fontFamily: _fonts.nunitoSansSemiBold,
    color: b1,
    fontSize: _ms(14),
  },

  ns400: {
    fontFamily: _fonts.nunitoSansRegular,
    color: b1,
    fontSize: _ms(12),
  },

  bottom: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: white,
  },

  bottomChildCon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F7FD',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap: _ms(10),
  },

  walletIcon: {
    width: _ms(25),
    height: _ms(25),
  },

  wallet: {
    backgroundColor: '#EAE3FF',
    paddingVertical: _mvs(8),
    paddingLeft: _ms(20),
    paddingRight: _ms(10),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },

  fixedViewStyle: {
    backgroundColor: blue,
    position: 'absolute',
    left: -_ms(15),
    top: _ms(4),
    paddingHorizontal: _ms(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },

  fixedTxtStyle: {
    fontFamily: _fonts.assistantSemiBold,
    fontSize: _ms(12),
    color: white,
  },

  continueCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: _mvs(5),
    paddingHorizontal: _ms(8),
  },

  rightArrIcon: {
    width: _ms(14),
    height: _ms(14),
    transform: [{rotate: '-90deg'}],
  },

  continue: {
    borderRadius: 4,
    backgroundColor: '#435970',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(7),
    paddingHorizontal: _ms(60),
  },

  continueTxt: {
    color: white,
    fontSize: _ms(15),
    fontFamily: _fonts.londonTwo,
  },

  // --

  commonWrap: {
    marginHorizontal: _ms(8),
    backgroundColor: white,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    elevation: 3,
    marginTop: _mvs(20),
  },

  viewAll: {
    backgroundColor: blue,
    borderRadius: 4,
    paddingHorizontal: _ms(25),
    paddingVertical: _mvs(6),
    alignItems: 'center',
    justifyContent: 'center',
  },

  offers: {
    marginTop: _mvs(20),
    rowGap: _mvs(14),
    paddingBottom: _mvs(30),
  },

  offer: {
    flexDirection: 'row',
    marginHorizontal: _ms(8),
    alignItems: 'flex-start',
    gap: _ms(10),
  },

  circle: {
    width: _ms(20),
    height: _ms(20),
    borderWidth: 1.5,
    borderColor: b2,
    borderRadius: 25,
  },

  circleSm: {
    width: _ms(16),
    height: _ms(16),
    borderWidth: 1.5,
    borderColor: b2,
    borderRadius: 25,
  },

  supPack: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    padding: _mvs(6),
    marginHorizontal: _ms(8),
    elevation: 1,
    backgroundColor: white,
  },

  //  last developer had writen too many inline css that's why my css is not line by line

  //  -----------

  offerBtnParent: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-start',
    gap: _ms(20),
  },

  offerIcon: {
    width: _ms(17),
    height: _ms(17),
    tintColor: gs2,
    resizeMode: 'contain',
  },

  //  2nd -----------/???

  classCon: {
    rowGap: 2,
    marginTop: _mvs(20),
    backgroundColor: white,
    padding: _mvs(7),
    marginHorizontal: _ms(12),
    elevation: 5,
  },

  viewAllBtnCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: _mvs(10),
    marginHorizontal: _ms(6),
    paddingLeft: _s(20),
  },

  viewAllTxt: {
    fontFamily: _fonts.londonTwo,
    fontSize: _ms(13),
    color: white,
    textTransform: 'uppercase',
  },

  searchCon: {
    marginHorizontal: _ms(8),
    marginTop: _mvs(15),
    borderWidth: 1,
    borderColor: '#e6e6e6',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    elevation: 1,
    backgroundColor: white,
  },

  searchInput: {
    flex: 1,
    padding: 0,
    height: _mvs(40),
    minHeight: 40,
    paddingLeft: _ms(8),
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(13),
    color: b1,
    // backgroundColor: 'red',
  },

  applyBtn: {
    paddingHorizontal: _ms(10),
    alignItems: 'center',
    justifyContent: 'center',
  },

  textContainer: {
    marginTop: _mvs(10),
    marginHorizontal: _ms(10),
    flexDirection: 'row',
    alignItems: 'center',
  },

  shieldIcon: {
    width: _ms(32),
    height: _ms(32),
    tintColor: '#435970',
    marginRight: _ms(10),
  },

  containerOne: {
    marginTop: _mvs(20),
    marginHorizontal: _ms(10),
    marginLeft: _ms(20),
    flexDirection: 'row',
  },

  leftTextCon: {
    flex: 1,
    rowGap: _mvs(10),
    justifyContent: 'center',
    // backgroundColor: 'red',
  },

  rowAndCenterItemCon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: _ms(10),
  },

  checkIconStyle: {
    width: _ms(13),
    height: _ms(13),
    tintColor: gs1,
    resizeMode: 'contain',
  },

  iWantTravelProtBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: _ms(10),
    marginLeft: _ms(20),
    marginVertical: _mvs(20),
    marginBottom: _mvs(30),
    gap: _ms(10),
  },

  //

  chooseTravellersCon: {
    marginTop: _mvs(15),
    rowGap: _mvs(10),
    paddingLeft: _ms(20),
    paddingRight: _ms(5),
    marginBottom: _mvs(10),
    // backgroundColor: 'lightblue',
  },

  travellersProfile: {
    width: _ms(30),
    height: _ms(30),
    resizeMode: 'contain',
  },

  travellersBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'deeppink',
  },

  //

  customerSuppTxtCon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: _mvs(10),
    marginHorizontal: _ms(10),
    gap: _ms(10),
  },

  standardParCon: {
    marginVertical: _mvs(10),
    rowGap: _mvs(10),
  },

  fontSize14: {
    fontSize: _ms(14),
    color: b3,
  },

  containerTwo: {
    marginTop: _mvs(10),
    flexDirection: 'row',
    marginLeft: _ms(25),
    gap: _s(30),
    alignItems: 'center',
    // justifyContent: 'space-between',
    // backgroundColor: 'salmon',
  },
});
