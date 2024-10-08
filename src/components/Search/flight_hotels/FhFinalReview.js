import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';

import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import {b1, b2, b3, bgColor, blue, gs1, white} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';
import {
  _fonts,
  _ms,
  _mvs,
  _vs,
  _width,
  checkIconStyle,
  shieldIconStyle,
} from '../../utils/Responsive';

const WIDTH = _ms(20);

const FhFinalReview = ({navigation}) => {
  const [gender, setGender] = useState(null);

  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];

  const genderData = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Others', value: 'others'},
  ];

  const travelProtectionData = [
    // First row
    {
      id: 1,
      label: 'Trip Cancellation, up to Total Trip Cost',
    },
    {
      id: 2,
      label:
        'Up to $50,000 Emergency Evacuation, including to locate suitable COVID treatment',
    },

    // Second row
    {
      id: 3,
      label: 'Trip Interruption, up to Total Trip Cost',
    },
    {
      id: 4,
      label: 'Up to $100,000 Accidental Death and Dismemberment',
    },

    // Third row
    {
      id: 5,
      label:
        'Up to $2,000 Travel Delay, including delays relating to quarantine',
    },
    {
      id: 6,
      label: 'Lost Baggage, up to $1,000',
    },

    // Fourth row
    {
      id: 7,
      label:
        'Up to $50,000 Medical Expense, covers COVID the same as any sickness',
    },
  ];

  return (
    <SafeAreaView style={commonStyles.flexOne}>
      <StatusBar translucent={true} barStyle={'light-content'} />
      <BgGradient width={_width} height={_vs(82)} />
      <Header />

      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{rowGap: _mvs(10), marginHorizontal: _ms(5)}}>
            {/* ticket */}
            <View style={[styles.comWrap, {marginTop: _mvs(10)}]}>
              {/* hotel name */}
              <View style={styles.containerOne}>
                <Image style={styles.imageStyle} source={image.hotelimg2} />

                <View style={{flex: 1, rowGap: _mvs(5)}}>
                  <Text style={[commonStyles.ns400]}>
                    New Apartments in Cranston by GLOBALSTAY
                  </Text>
                  <Text style={[commonStyles.ns400, {color: b3}]}>
                    Thu, Dec-21-2023 - Thu, Jan-04-2024
                  </Text>

                  {/* btn action */}
                  <View
                    style={[
                      commonStyles.commWrapOne,
                      {
                        columnGap: _ms(10),
                      },
                    ]}>
                    <TouchableOpacity>
                      <Text style={[commonStyles.ns400, {color: blue}]}>
                        Change Hotel
                      </Text>
                    </TouchableOpacity>

                    <Text>|</Text>

                    <TouchableOpacity>
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
                      <View style={[styles.dLine, {width: WIDTH + _ms(10)}]} />
                      <View style={styles.diamond} />
                      <View style={[styles.dLine]} />
                      <View style={styles.diamond} />
                      <View style={[styles.dLine, {width: WIDTH + _ms(10)}]} />
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
                      <View style={[styles.dLine, {width: WIDTH + _ms(10)}]} />
                      <View style={styles.diamond} />
                      <View style={[styles.dLine]} />
                      <View style={styles.diamond} />
                      <View style={[styles.dLine, {width: WIDTH + _ms(10)}]} />
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
                  <TouchableOpacity style={styles.btn}>
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

            {/* baggage Information (per person) */}
            <View style={styles.comWrap}>
              {/* skip */}
              <TouchableOpacity style={{alignSelf: 'flex-start'}}>
                <Text
                  style={[
                    commonStyles.ns600,
                    {fontSize: _ms(16), color: blue},
                  ]}>
                  Skip
                </Text>
              </TouchableOpacity>

              <Text style={[commonStyles.ns600, {textAlign: 'center'}]}>
                Baggage Information (per person)
              </Text>

              {/* bag info */}
              <View style={{rowGap: _mvs(10)}}>
                <View style={[commonStyles.commWrapOne, {columnGap: _mvs(10)}]}>
                  <Text style={[commonStyles.ns600]}>Departure Flight</Text>
                  <Text style={[commonStyles.ns600]}>DAC</Text>
                  <Image style={styles.arrow} source={icon.longArrow} />
                  <Text style={[commonStyles.ns600]}>YYC</Text>
                </View>

                <View style={[commonStyles.commWrapOne, {columnGap: _mvs(5)}]}>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    Vistara
                  </Text>

                  <Text style={[commonStyles.ns700, commonStyles.font16]}>
                    |
                  </Text>

                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    Cabin : <Text style={[commonStyles.ns400]}>Coach</Text>
                  </Text>

                  <Text style={[commonStyles.ns700, commonStyles.font16]}>
                    |
                  </Text>

                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    Brand Name : <Text style={[commonStyles.ns400]}>Flex</Text>
                  </Text>
                </View>
              </View>

              {/* bags details */}
              <View style={styles.bagsDetailsCon}>
                {/* personal bag */}
                <View style={styles.commCon}>
                  <View style={[styles.seatWrap]}>
                    <Image style={styles.bagIcon} source={icon.backpack} />
                  </View>

                  <View style={styles.commConTwo}>
                    <Text style={[commonStyles.ns600, commonStyles.font10]}>
                      Personal Item
                    </Text>

                    <Text style={[commonStyles.ns600, commonStyles.font9]}>
                      Purse, small backpack, briefcase
                    </Text>

                    <View
                      style={[commonStyles.commWrapOne, {columnGap: _mvs(5)}]}>
                      <Image style={styles.checkIcon} source={icon.check} />
                      <Text style={[commonStyles.ns600, commonStyles.font9]}>
                        Included
                      </Text>
                    </View>
                  </View>
                </View>

                {/* carry-on bag */}
                <View style={styles.commCon}>
                  <View style={[styles.seatWrap]}>
                    <Image style={styles.bagIcon} source={icon.duffleBag} />
                  </View>

                  <View style={styles.commConTwo}>
                    <Text style={[commonStyles.ns600, commonStyles.font10]}>
                      Carry-on bag
                    </Text>
                    <Text style={[commonStyles.ns600, commonStyles.font9]}>
                      Fits in overhead bin or under the seat
                    </Text>

                    <View
                      style={[commonStyles.commWrapOne, {columnGap: _mvs(5)}]}>
                      <Image style={styles.checkIcon} source={icon.check} />
                      <Text style={[commonStyles.ns600, commonStyles.font9]}>
                        Included
                      </Text>
                    </View>
                  </View>
                </View>

                {/* bag */}
                <View style={styles.commCon}>
                  <View style={[styles.seatWrap]}>
                    <Image style={styles.bagIcon} source={icon.baggage} />
                  </View>

                  <View style={styles.commConTwo}>
                    <Text style={[commonStyles.ns600, commonStyles.font10]}>
                      2 Checked Bags
                    </Text>
                    <View
                      style={[commonStyles.commWrapOne, {columnGap: _mvs(5)}]}>
                      <Image style={styles.checkIcon} source={icon.check} />
                      <Text style={[commonStyles.ns600, commonStyles.font9]}>
                        Included
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              {/*  */}
              <View style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                <TouchableOpacity>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font11,
                      {color: blue},
                    ]}>
                    Air Canada
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font11,
                      {color: blue},
                    ]}>
                    Baggage Policy
                  </Text>
                </TouchableOpacity>
              </View>

              {/* bag info */}
              <View style={{rowGap: _mvs(10)}}>
                <View style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                  <Text style={[commonStyles.ns600]}>Return Flight</Text>
                  <Text style={[commonStyles.ns600]}>YYC</Text>
                  <Image style={styles.arrow} source={icon.longArrow} />
                  <Text style={[commonStyles.ns600]}>DAC</Text>
                </View>

                <View style={[commonStyles.commWrapOne, {columnGap: _mvs(5)}]}>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    Vistara
                  </Text>

                  <Text style={[commonStyles.ns700, commonStyles.font16]}>
                    |
                  </Text>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    Cabin : <Text style={[commonStyles.ns400]}>Coach</Text>
                  </Text>

                  <Text style={[commonStyles.ns700, commonStyles.font16]}>
                    |
                  </Text>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    Brand Name : <Text style={[commonStyles.ns400]}>Flex</Text>
                  </Text>
                </View>
              </View>

              {/* bags details */}
              <View style={styles.bagsDetailsCon}>
                {/* personal item */}
                <View style={styles.commCon}>
                  <View style={[styles.seatWrap]}>
                    <Image style={styles.bagIcon} source={icon.backpack} />
                  </View>

                  <View style={styles.commConTwo}>
                    <Text style={[commonStyles.ns600, commonStyles.font10]}>
                      Personal Item
                    </Text>

                    <Text style={[commonStyles.ns600, commonStyles.font9]}>
                      Purse, small backpack, briefcase
                    </Text>

                    <View
                      style={[commonStyles.commWrapOne, {columnGap: _mvs(5)}]}>
                      <Image style={styles.checkIcon} source={icon.check} />
                      <Text style={[commonStyles.ns600, commonStyles.font9]}>
                        Included
                      </Text>
                    </View>
                  </View>
                </View>

                {/* carry-on bag */}
                <View style={styles.commCon}>
                  <View style={[styles.seatWrap]}>
                    <Image style={styles.bagIcon} source={icon.duffleBag} />
                  </View>

                  <View style={styles.commConTwo}>
                    <Text style={[commonStyles.ns600, commonStyles.font10]}>
                      Carry-on bag
                    </Text>
                    <Text style={[commonStyles.ns600, commonStyles.font9]}>
                      Fits in overhead bin or under the seat
                    </Text>

                    <View
                      style={[commonStyles.commWrapOne, {columnGap: _mvs(5)}]}>
                      <Image style={styles.checkIcon} source={icon.check} />
                      <Text style={[commonStyles.ns600, commonStyles.font9]}>
                        Included
                      </Text>
                    </View>
                  </View>
                </View>

                {/* bag */}
                <View style={styles.commCon}>
                  <View style={[styles.seatWrap]}>
                    <Image style={styles.bagIcon} source={icon.baggage} />
                  </View>

                  <View style={styles.commConTwo}>
                    <Text style={[commonStyles.ns600, commonStyles.font10]}>
                      2 Checked Bags
                    </Text>
                    <View
                      style={[commonStyles.commWrapOne, {columnGap: _mvs(5)}]}>
                      <Image style={styles.checkIcon} source={icon.check} />
                      <Text style={[commonStyles.ns600, commonStyles.font9]}>
                        Included
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                <TouchableOpacity>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font11,
                      {color: blue},
                    ]}>
                    Air Canada
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font11,
                      {color: blue},
                    ]}>
                    Baggage Policy
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* traveller details */}
            <View style={styles.comWrap}>
              <View style={commonStyles.commWrapTwo}>
                <TouchableOpacity>
                  <Text
                    style={[
                      commonStyles.ns600,
                      {fontSize: _ms(16), color: blue},
                    ]}>
                    Skip
                  </Text>
                </TouchableOpacity>

                <View style={[commonStyles.commWrapFive, {columnGap: _ms(5)}]}>
                  <Text style={[commonStyles.ns600, commonStyles.font10]}>
                    Already a ClubMiles member?
                  </Text>

                  <View style={[styles.seatWrap, {backgroundColor: blue}]}>
                    <Image
                      style={styles.checkIcon}
                      source={icon.user}
                      tintColor={white}
                      resizeMode="contain"
                    />
                  </View>

                  <TouchableOpacity>
                    <Text
                      style={[
                        commonStyles.ns600,
                        commonStyles.font12,
                        {color: blue},
                      ]}>
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Text
                style={[
                  commonStyles.ns600,
                  {fontSize: _ms(16), textAlign: 'center'},
                ]}>
                Traveler Details
              </Text>

              <View style={styles.textCon}>
                <Text
                  style={[
                    commonStyles.ns600,
                    commonStyles.font12,
                    {color: '#004266'},
                  ]}>
                  Please enter the traveler's name and date of birth exactly as
                  shown on the passport (for international flights) or valid
                  government-issued photo ID (for domestic flights) to be used
                  on this trip. Name changes are not permitted after booking.
                </Text>
              </View>

              <View style={[styles.textCon, {borderColor: '#E5AA01'}]}>
                <Text
                  style={[
                    commonStyles.ns600,
                    commonStyles.font12,
                    {color: '#664C00'},
                  ]}>
                  Before booking your flight, please check the latest{' '}
                  <Text
                    style={[
                      commonStyles.ns700,
                      commonStyles.font13,
                      {color: '#664C00'},
                    ]}>
                    COVID-19 travel restrictions to Canada
                  </Text>
                </Text>

                <Text
                  style={[
                    commonStyles.ns600,
                    commonStyles.font12,
                    {color: '#664C00'},
                  ]}>
                  Please continuously check all COVID-19 related restrictions
                  directly with airlines prior to travel as they may change
                </Text>

                <TouchableOpacity style={styles.seeRestriction}>
                  <Text
                    style={[
                      commonStyles.lbB1,
                      commonStyles.font15,
                      {color: '#664C00'},
                    ]}>
                    See Restrictions
                  </Text>
                </TouchableOpacity>
              </View>

              {/* input fields */}
              <View style={{rowGap: _mvs(10)}}>
                {/* email */}

                <TextInput
                  placeholder="Email Address*"
                  style={styles.inputBox}
                  placeholderTextColor={b3}
                />

                {/* first name & middle name */}
                <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
                  <TextInput
                    placeholder="First Name*"
                    style={[styles.inputBox, styles.inputWidth]}
                    placeholderTextColor={b3}
                  />

                  <TextInput
                    placeholder="Middle Name"
                    placeholderTextColor={b3}
                    style={[styles.inputBox, styles.inputWidth]}
                  />
                </View>

                {/* date of birth */}
                <View style={[styles.inputGrp]}>
                  <Text style={[styles.lable]}>Date of birth*</Text>

                  <View style={[commonStyles.commWrapOne, {gap: _ms(10)}]}>
                    <TextInput
                      placeholder="Day"
                      placeholderTextColor={b3}
                      style={[styles.monthInput, styles.lable]}
                      maxLength={2}
                      keyboardType="number-pad"
                    />
                    <TextInput
                      placeholder="Month"
                      placeholderTextColor={b3}
                      style={[styles.monthInput, styles.lable]}
                      maxLength={2}
                      keyboardType="number-pad"
                    />
                    <TextInput
                      placeholder="Year"
                      placeholderTextColor={b3}
                      style={[styles.monthInput, styles.lable]}
                      maxLength={4}
                      keyboardType="number-pad"
                    />

                    {/* <Dropdown
                      data={[]}
                      placeholder="Month"
                      labelField="label"
                      valueField="value"
                      placeholderStyle={[
                        commonStyles.font12,
                        {fontFamily: _fonts.nunitoSansSemiBold},
                      ]}
                      style={styles.dropDownBox}
                      containerStyle={{
                        width: '85%',
                        backgroundColor: 'green',
                        padding: 10,
                      }}
                      itemContainerStyle={{
                        backgroundColor: 'red',
                        borderWidth: 1,
                        zIndex: 1,
                      }}
                    />
                    <Dropdown
                      data={[]}
                      placeholder="DD"
                      placeholderStyle={[
                        commonStyles.font12,
                        {fontFamily: _fonts.nunitoSansSemiBold},
                      ]}
                      style={styles.dropDownBox}
                      // renderRightIcon={() => null}
                      containerStyle={{
                        width: '85%',
                        backgroundColor: 'green',
                        padding: 10,
                      }}
                      itemContainerStyle={{
                        backgroundColor: 'red',
                        borderWidth: 1,
                        zIndex: 1,
                      }}
                    />
                    <Dropdown
                      data={[]}
                      placeholder="YYYY"
                      placeholderStyle={[
                        commonStyles.font12,
                        {fontFamily: _fonts.nunitoSansSemiBold},
                      ]}
                      style={styles.dropDownBox}
                      containerStyle={{
                        width: '85%',
                        backgroundColor: 'green',
                        padding: 10,
                      }}
                      itemContainerStyle={{
                        backgroundColor: 'red',
                        borderWidth: 1,
                        zIndex: 1,
                      }}
                    /> */}
                  </View>
                </View>

                {/* last name & gender */}

                <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
                  <TextInput
                    placeholder="Last Name*"
                    style={[styles.inputBox, styles.inputWidth]}
                    placeholderTextColor={b3}
                  />

                  <View style={[styles.genderCon]}>
                    <Text style={[styles.lable]}>Gender*</Text>

                    <Dropdown
                      data={genderData}
                      placeholder="Select"
                      placeholderStyle={styles.lable}
                      style={styles.dropDownBox}
                      labelField="label"
                      valueField="value"
                      value={gender}
                      onChange={item => {
                        setGender(item.value);
                      }}
                      itemTextStyle={styles.lable}
                      selectedTextStyle={styles.lable}
                    />
                  </View>
                </View>

                {/* passport */}
                <TextInput
                  placeholder="Passport Number*"
                  placeholderTextColor={b3}
                  style={[styles.inputBox, {maxWidth: '75%'}]}
                />

                {/* Country */}
                <TextInput
                  placeholder="Country*"
                  placeholderTextColor={b3}
                  style={[styles.inputBox, {maxWidth: '75%'}]}
                />

                <View style={[styles.inputGrp]}>
                  <Text style={[styles.lable]}>Passport Expiry*</Text>

                  <View style={[commonStyles.commWrapOne, {gap: _ms(10)}]}>
                    <TextInput
                      placeholder="Day"
                      placeholderTextColor={b3}
                      style={[styles.monthInput, styles.lable]}
                      maxLength={2}
                      keyboardType="number-pad"
                    />
                    <TextInput
                      placeholder="Month"
                      placeholderTextColor={b3}
                      style={[styles.monthInput, styles.lable]}
                      maxLength={2}
                      keyboardType="number-pad"
                    />
                    <TextInput
                      placeholder="Year"
                      placeholderTextColor={b3}
                      style={[styles.monthInput, styles.lable]}
                      maxLength={4}
                      keyboardType="number-pad"
                    />
                  </View>
                </View>
              </View>

              <TouchableOpacity
                style={[
                  commonStyles.commWrapOne,
                  {columnGap: _ms(10), alignSelf: 'flex-start'},
                ]}>
                <Text
                  style={[
                    commonStyles.ns600,
                    commonStyles.font13,
                    {color: blue},
                  ]}>
                  Frequent Flyer and Optional Requests
                </Text>

                <Image
                  style={[
                    styles.downArrIcon,
                    {transform: [{rotate: '90deg'}], top: _mvs(2)},
                  ]}
                  source={icon.rightArrow}
                />
              </TouchableOpacity>
            </View>

            {/* travel protection */}
            <View style={styles.comWrap}>
              <TouchableOpacity style={{alignSelf: 'flex-start'}}>
                <Text
                  style={[
                    commonStyles.ns600,
                    {fontSize: _ms(16), color: blue},
                  ]}>
                  Skip
                </Text>
              </TouchableOpacity>

              <Text style={[commonStyles.ns600, {textAlign: 'center'}]}>
                Travel Protection
              </Text>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                <Image
                  style={shieldIconStyle}
                  source={icon.shield}
                  tintColor={'#435970'}
                />
                <Text style={[commonStyles.ns600, commonStyles.font1]}>
                  Reasons you might need travel protection
                </Text>
              </View>

              {/* coverages */}
              <View
                style={[
                  commonStyles.commWrapThree,
                  {gap: _ms(2), flexWrap: 'wrap'},
                ]}>
                {travelProtectionData?.map((item, i) => (
                  <View
                    key={i}
                    style={[
                      commonStyles.commWrapSeven,
                      {width: '48%', columnGap: _ms(6)},
                    ]}>
                    <Image
                      style={[checkIconStyle, {top: _mvs(3)}]}
                      source={icon.check}
                      tintColor={gs1}
                    />
                    <Text
                      style={[
                        commonStyles.ns600,
                        commonStyles.font10,
                        commonStyles.flexOne,
                        {color: b3},
                      ]}>
                      {item.label}
                    </Text>
                  </View>
                ))}
              </View>

              <Text style={commonStyles.ns600}>Important</Text>

              <Text
                style={[commonStyles.ns600, commonStyles.font10, {color: b3}]}>
                * Please note, cancellation of a trip due to government travel
                advisories or desire not to travel are not covered. View Plan
                Details to{' '}
                <Text
                  style={[
                    commonStyles.ns600,
                    commonStyles.font10,
                    commonStyles.blueUnderlineTxt,
                  ]}
                  onPress={() => Alert.alert('Learn More')}>
                  Learn More
                </Text>
                .
              </Text>

              <>
                <TouchableOpacity>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font12,
                      commonStyles.blueUnderlineTxt,
                    ]}>
                    View Plan Details and Important Disclaimers (Non-insurance
                    services and assistance fees included in the total travel
                    protection plan cost). Terms and Conditions Apply
                  </Text>
                </TouchableOpacity>
              </>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
                <View style={commonStyles.commWrapSeven}>
                  <Text style={commonStyles.ns600}>USD 267</Text>
                  <Text style={[commonStyles.ns600, commonStyles.font10]}>
                    .95
                  </Text>
                </View>

                <Text style={[commonStyles.ns600, commonStyles.font12]}>
                  per person
                </Text>
              </View>

              <View style={styles.pinkView}>
                <TouchableOpacity>
                  <View style={styles.circle} />
                </TouchableOpacity>

                <Text style={[commonStyles.ns600, commonStyles.font12]}>
                  Yes, I want travel protection for my trip
                </Text>
              </View>
            </View>

            {/* Billing and Contact Information */}
            <View style={styles.comWrap}>
              <TouchableOpacity style={{alignSelf: 'flex-start'}}>
                <Text
                  style={[
                    commonStyles.ns600,
                    {fontSize: _ms(16), color: blue},
                  ]}>
                  Skip
                </Text>
              </TouchableOpacity>

              <Text
                style={[
                  commonStyles.ns700,
                  commonStyles.font15,
                  {textAlign: 'center'},
                ]}>
                Billing and Contact Information
              </Text>

              {/* inputs */}
              <View style={{rowGap: 10}}>
                {/* country & address */}
                <View style={[commonStyles.commWrapSeven, {gap: _ms(6)}]}>
                  <View style={styles.countryCon}>
                    <Text style={[styles.absoluteLabel]}>Country*</Text>
                    <TextInput
                      // placeholder="Country*"
                      placeholderTextColor={b3}
                      style={styles.countryInput}
                      value="United States"
                    />
                  </View>

                  <View style={[styles.countryCon, {flex: 1.5}]}>
                    <Text style={[styles.absoluteLabel]}>Address*</Text>
                    <TextInput style={styles.countryInput} />
                  </View>
                </View>

                {/* city & zip & state */}
                <View style={[commonStyles.commWrapSeven, {gap: _ms(6)}]}>
                  <View style={styles.countryCon}>
                    <Text style={[styles.absoluteLabel]}>Zip*</Text>
                    <TextInput
                      // placeholder="Country*"
                      placeholderTextColor={b3}
                      style={styles.countryInput}
                    />
                  </View>

                  <View style={[styles.countryCon]}>
                    <Text style={[styles.absoluteLabel]}>City*</Text>
                    <TextInput style={styles.countryInput} />
                  </View>

                  <View style={[styles.countryCon]}>
                    <Text style={[styles.absoluteLabel]}>State*</Text>
                    <TextInput value="State*" style={styles.countryInput} />
                  </View>
                </View>

                {/* Contact */}
                <View style={[styles.countryCon]}>
                  <Text style={[styles.absoluteLabel]}>Contact Phone*</Text>
                  <TextInput style={styles.countryInput} />
                </View>

                {/* Confirm Email */}
                <View style={[styles.countryCon]}>
                  <Text style={[styles.absoluteLabel]}>
                    Confirm Email Address*
                  </Text>
                  <TextInput style={styles.countryInput} />
                </View>
              </View>

              <View style={{rowGap: _mvs(15)}}>
                <Text
                  style={[
                    commonStyles.ns600,
                    commonStyles.font10,
                    {color: b3},
                  ]}>
                  Booking confirmation will be sent to this email address
                </Text>

                <View
                  style={[commonStyles.commWrapSeven, {columnGap: _ms(10)}]}>
                  <TouchableOpacity>
                    <View style={[styles.circle, {top: _mvs(3)}]} />
                  </TouchableOpacity>

                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font12,
                      commonStyles.flexOne,
                    ]}>
                    I agree to share this contact information with the
                    airline(s) associated with this booking.
                  </Text>
                </View>
              </View>
            </View>

            {/* Policies & Review */}
            <View style={styles.comWrap}>
              {/* skip */}
              <TouchableOpacity style={{alignSelf: 'flex-start'}}>
                <Text
                  style={[
                    commonStyles.ns600,
                    {fontSize: _ms(16), color: blue},
                  ]}>
                  Skip
                </Text>
              </TouchableOpacity>

              <Text style={[commonStyles.ns600, commonStyles.font15]}>
                Policies & Review
              </Text>

              {/* hotel cancel */}
              <Text style={[commonStyles.ns600, {color: '#DF1414'}]}>
                Hotel Cancellations
              </Text>

              <Text style={commonStyles.ns400}>
                The guest checking into hotel must be 21 years or older, present
                a valid government-issued photo ID and credit card. Please
                confirm that the dates of your accommodations are correct.
                Presence of primary guest is mandatory at the time of check-in.
              </Text>

              <Text style={[commonStyles.ns600, commonStyles.font12]}>
                Check-in Fri. Dec-22-2023 | Check-out Thu. Jan-04-2024
              </Text>

              <Text style={[commonStyles.ns600, commonStyles.font12]}>
                Primary Guest Name : Kevin Vo Male
              </Text>

              <TouchableOpacity style={{alignSelf: 'flex-start'}}>
                <Text
                  style={[commonStyles.ns600, commonStyles.blueUnderlineTxt]}>
                  Make changes
                </Text>
              </TouchableOpacity>

              {/* flight cancell */}
              <Text style={[commonStyles.ns600, {color: '#DF1414'}]}>
                Flight Cancellations
              </Text>

              <Text style={commonStyles.ns400}>
                Please confirm that the date(s) and time(s) of flights and
                name(s) of travelers are accurate. Each traveler's name and date
                of birth must be exactly as shown on the passport or other
                government-issued photo ID to be used on this trip.
              </Text>

              <Text style={[commonStyles.ns600, commonStyles.font13]}>
                Depart: Thu, Dec 21 2023 | Return: Thu, Jan 04 2024
              </Text>

              <Text style={commonStyles.ns600}>
                Traveller 1 : Kevin Vo Male
              </Text>

              <TouchableOpacity style={{alignSelf: 'flex-start'}}>
                <Text
                  style={[commonStyles.ns600, commonStyles.blueUnderlineTxt]}>
                  Make changes
                </Text>
              </TouchableOpacity>

              {/* note */}
              <Text style={[commonStyles.ns600]}>
                Please note:{' '}
                <Text style={[commonStyles.ns400, {color: b3}]}>
                  All rates quoted are USD. Please keep in mind that, in the
                  event of cancellation, any booking fees already paid are
                  non-refundable. Your credit/debit card may be billed in
                  multiple charges totaling the above amount.
                </Text>
              </Text>

              <View style={styles.dottedLine} />

              <Text style={commonStyles.ns400}>
                Tickets are non-transferable and name changes are not permitted.
                Total price shown includes all applicable taxes & fees and our
                service fees. Some airlines may charge additional baggage fees
                or other fees. Fares are not guaranteed until ticketed. Tickets
                and our fees are non-refundable (see Fare Rules). Some taxes and
                government agency fees may be non-refundable.Date and routing
                changes will be subject to airline penalties and our fees.
              </Text>

              <View style={styles.dottedLine} />

              <Text style={[commonStyles.ns400, {textAlign: 'center'}]}>
                By clicking 'Confirm & Book', I agree that I have read and
                accepted the above policies and 10 Cents Air.com's Terms and
                Conditions and Privacy Policy
              </Text>

              {/* Confirm & Book */}
              <TouchableOpacity
                style={styles.btnLrg}
                onPress={() => navigation.navigate('fhpayment')}>
                <Text
                  style={[
                    commonStyles.lbB1,
                    commonStyles.font16,
                    {color: white},
                  ]}>
                  Confirm & Book
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* PROCEED */}
        {/* <View style={{ backgroundColor: b1, alignItems: "center", justifyContent: "space-between", paddingVertical: 8, paddingHorizontal: 10, flexDirection: "row" }}>
          <View style={{ rowGap: 3 }}>
            <Text style={[commonStyles.ns600, { fontSize: 14, color: white }]}>
              Price
            </Text>
            <Text style={[commonStyles.ns600, { fontSize: 14, color: white }]}>
              $1320 + Taxes
            </Text>
          </View>

          <TouchableOpacity
            style={{ borderWidth: 2, borderRadius: 2, borderColor: blue, width: 150, alignItems: "center", justifyContent: "center", paddingVertical: 8 }}
            onPress={() => navigation.navigate("fhfr")}
          >
            <Text style={[commonStyles.ns600, { fontSize: 14, color: blue, textTransform: "uppercase" }]}>
              PROCEED
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default FhFinalReview;

const styles = StyleSheet.create({
  // --

  body: {
    flex: 1,
    backgroundColor: bgColor,
    marginTop: _mvs(10),
  },

  comWrap: {
    backgroundColor: white,
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

  arrow: {
    width: 30,
    height: 15,
  },

  bagsDetailsCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'aqua',
    gap: _ms(6),
  },

  seatWrap: {
    backgroundColor: 'rgba(33, 180, 226, 0.2)',
    borderRadius: _ms(16),
    width: _ms(16),
    height: _ms(16),
    alignItems: 'center',
    justifyContent: 'center',
  },

  bagIcon: {
    width: _ms(11),
    height: _ms(11),
    tintColor: blue,
  },

  commCon: {
    rowGap: _mvs(5),
    flex: 1,
    backgroundColor: white,
    flexDirection: 'row',
    gap: _ms(5),
  },

  commConTwo: {
    flex: 1,
    gap: _mvs(6),
    // backgroundColor: 'blue',
  },

  checkIcon: {
    width: _ms(10),
    height: _ms(10),
    tintColor: '#24AD53',
  },

  textCon: {
    borderColor: '#004266',
    borderWidth: 1,
    borderRadius: 4,
    padding: _ms(8),
  },

  seeRestriction: {
    borderColor: '#6C5100',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(5),
    paddingHorizontal: _ms(25),
    alignSelf: 'center',
    marginTop: _mvs(10),
  },

  inputBox: {
    height: _mvs(45),
    padding: 0,
    paddingHorizontal: _ms(10),
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 4,
    color: b3,
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(12),
  },

  inputWidth: {
    minWidth: '44%',
    maxWidth: '49%',
  },

  inputGrp: {
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 4,
    paddingHorizontal: _ms(10),
    height: _mvs(45),
    maxWidth: '75%',
  },

  dropDownBox: {
    flex: 1,
  },

  lable: {
    color: b3,
    fontSize: _ms(12),
    fontFamily: _fonts.nunitoSansSemiBold,
  },

  monthInput: {
    padding: 0,
    flex: 1,
    // backgroundColor: 'red',
  },

  genderCon: {
    borderWidth: 1,
    borderColor: '#D8D8D8',
    height: _mvs(45),
    minWidth: '44%',
    borderRadius: 4,
    paddingHorizontal: _ms(10),
  },

  downArrIcon: {
    width: _ms(16),
    height: _ms(16),
    tintColor: blue,
  },

  // 😂
  pinkView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: _ms(8),
    alignSelf: 'flex-start',
    backgroundColor: '#FEF6F4',
    paddingVertical: _mvs(8),
    paddingHorizontal: _ms(20),
    borderRadius: 4,
  },

  circle: {
    width: _ms(20),
    height: _ms(20),
    borderWidth: 1.5,
    borderColor: blue,
    borderRadius: 25,
  },

  countryCon: {
    // width: '43%',
    flex: 1,
    height: _mvs(45),
    borderWidth: 1,
    borderColor: '#D8D8D8',
    paddingHorizontal: _ms(8),
    borderRadius: 4,
  },

  countryInput: {
    padding: 0,
    // backgroundColor: 'rgba(154, 205, 50, 0.2)',
    color: b1,
    fontSize: _ms(12),
    fontFamily: _fonts.nunitoSansSemiBold,
    flex: 1, // don't remove
    paddingTop: _mvs(12),
  },

  absoluteLabel: {
    color: b3,
    fontSize: _ms(12),
    fontFamily: _fonts.nunitoSansSemiBold,
    position: 'absolute',
    left: _ms(8),
  },

  dottedLine: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderTopColor: b3,
    marginVertical: _mvs(10),
  },

  // --

  btnLrg: {
    borderRadius: 8,
    backgroundColor: b2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(7),
    marginHorizontal: _ms(30),
    marginBottom: _mvs(10),
  },
});
