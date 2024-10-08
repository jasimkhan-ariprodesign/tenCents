import {
  Alert,
  Dimensions,
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
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import {b1, b2, b3, bgColor, blue, white} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';
import {Dropdown} from 'react-native-element-dropdown';
import {
  _fonts,
  _ms,
  _mvs,
  _vs,
  _width,
  size15,
  size18,
} from '../../utils/Responsive';

const {width, height} = Dimensions.get('window');

const genderData = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
  {label: 'Others', value: 'others'},
];

const ChReview = ({navigation}) => {
  const [gender, setGender] = useState(null);

  return (
    <SafeAreaView style={commonStyles.flexOne}>
      <StatusBar translucent={true} barStyle={'light-content'} />
      <BgGradient width={_width} height={_vs(82)} />
      <Header />

      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{rowGap: _mvs(10)}}>
            {/* ticket */}
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
            </View>

            {/* car details */}
            <View style={[styles.comWrap, {rowGap: _mvs(10)}]}>
              {/* car name & desp */}
              <View style={[commonStyles.commWrapTwo, {gap: _ms(8)}]}>
                <View style={[commonStyles.flexOne, {rowGap: _mvs(6)}]}>
                  <View style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                    <Text style={[commonStyles.ns400, commonStyles.font16]}>
                      Economy
                    </Text>
                    <Image style={styles.alamoIcon} source={image.alamo} />
                  </View>

                  <Text style={commonStyles.ns400}>
                    Chevrolet Spark Or Similar
                  </Text>
                </View>

                <>
                  <Image style={styles.carIcon} source={image.car1} />
                </>
              </View>
              {/* car perks */}
              <View style={styles.carPerks}>
                <View style={[commonStyles.commWrapOne, {columnGap: _ms(7)}]}>
                  <Image
                    style={size15}
                    tintColor={blue}
                    source={icon.speedometer}
                  />

                  <Text style={commonStyles.ns400}>Unlimited mileage</Text>
                </View>

                <View style={[commonStyles.commWrapOne, {columnGap: _ms(7)}]}>
                  <Image style={size15} tintColor={blue} source={icon.plane} />

                  <Text style={commonStyles.ns400}>At Airport</Text>
                </View>

                <View style={[commonStyles.commWrapOne, {columnGap: _ms(7)}]}>
                  <Image
                    style={size15}
                    tintColor={blue}
                    source={icon.airConditioner}
                  />

                  <Text style={commonStyles.ns400}>Air Conditioner</Text>
                </View>

                <View style={[commonStyles.commWrapOne, {columnGap: _ms(7)}]}>
                  <Image
                    style={size15}
                    tintColor={blue}
                    source={icon.gearshift}
                  />

                  <Text style={commonStyles.ns400}>Automatic</Text>
                </View>
              </View>

              {/* change car */}
              <View style={[commonStyles.commWrapTwo, {}]}>
                <View style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                  <View
                    style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                    <View style={[styles.seatWrap]}>
                      <Image
                        style={size18}
                        tintColor={blue}
                        source={icon.baggage}
                      />
                    </View>

                    <Text
                      style={[
                        commonStyles.ns600,
                        commonStyles.font11,
                        {color: b3},
                      ]}>
                      2 Bags
                    </Text>
                  </View>

                  <View
                    style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                    <View style={[styles.seatWrap]}>
                      <Image
                        style={size18}
                        tintColor={blue}
                        source={icon.seat}
                      />
                    </View>

                    <Text
                      style={[
                        commonStyles.ns600,
                        commonStyles.font11,
                        {color: b3},
                      ]}>
                      4 Seats
                    </Text>
                  </View>
                </View>

                <TouchableOpacity style={styles.chngCar}>
                  <Text
                    style={[
                      commonStyles.lbB1,
                      commonStyles.font16,
                      {color: white},
                    ]}>
                    Change Car
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.dottedLine} />

              {/* bottom part */}
              <View>
                <View>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    Pick-up:{' '}
                    <Text style={commonStyles.ns400}>
                      2000 Airport Road Ne AB, CA, | Thu, Dec 21 2023 / 10:00 AM
                    </Text>
                  </Text>
                </View>
                <View style={{marginTop: _mvs(4)}}>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    Drop-off:{' '}
                    <Text style={commonStyles.ns400}>
                      Same as Pick-up location | Thu, Jan 04 2024 / 10:00 AM
                    </Text>
                  </Text>
                </View>
              </View>
            </View>

            {/* pricing */}
            <View style={styles.comWrap}>
              <View style={[commonStyles.commWrapTwo, {columnGap: _ms(8)}]}>
                {/* left */}
                <View style={[commonStyles.flexOne, {rowGap: _mvs(4)}]}>
                  <Text style={[commonStyles.ns600, commonStyles.font16]}>
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
                <View
                  style={[
                    commonStyles.flexOne,
                    commonStyles.alignItemsFlexEnd,
                    {rowGap: _mvs(4)},
                  ]}>
                  <View style={commonStyles.commWrapSeven}>
                    <Text style={[commonStyles.ns400, commonStyles.font14]}>
                      $2811
                    </Text>
                    <Text style={[commonStyles.ns400]}>.49</Text>
                  </View>

                  <Text style={[commonStyles.ns400, {textAlign: 'right'}]}>
                    As low as $351/mo with Affirm{' '}
                    <Text
                      style={[
                        commonStyles.font11,
                        commonStyles.blueUnderlineTxt,
                        {fontFamily: _fonts.londonBetween},
                      ]}
                      onPress={() => Alert.alert('Learn More')}>
                      Learn more
                    </Text>
                  </Text>

                  {/* btn */}
                  <TouchableOpacity style={[styles.btn]}>
                    <Text
                      style={[
                        commonStyles.lbB1,
                        commonStyles.font15,
                        {color: white},
                      ]}>
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
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

                  <View
                    style={[
                      styles.seatWrap,
                      {width: _ms(16), height: _ms(16), backgroundColor: blue},
                    ]}>
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
                onPress={() => navigation.navigate('chpayment')}>
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
            onPress={() => navigation.navigate("chpayment")}
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

export default ChReview;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: _mvs(10),
    backgroundColor: bgColor,
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

  alamoIcon: {
    width: _ms(80),
    height: _mvs(22),
    resizeMode: 'contain',
  },

  carIcon: {
    width: _ms(100),
    height: _mvs(50),
    // resizeMode: 'contain',
  },

  carPerks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 10,
    // width: 250,
    maxWidth: '75%',
    // backgroundColor: 'red',
  },

  seatWrap: {
    backgroundColor: 'rgba(33, 180, 226, 0.1)',
    borderRadius: _ms(28),
    width: _ms(28),
    height: _ms(28),
    alignItems: 'center',
    justifyContent: 'center',
  },

  chngCar: {
    borderRadius: 8,
    backgroundColor: b2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(8),
    width: _ms(102),
  },

  dottedLine: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderTopColor: b3,
    marginVertical: _mvs(10),
  },

  btn: {
    borderRadius: 4,
    backgroundColor: b2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(5),
    paddingHorizontal: _ms(22),
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

  countryCon: {
    // width: '43%',
    flex: 1,
    height: _mvs(45),
    borderWidth: 1,
    borderColor: '#D8D8D8',
    paddingHorizontal: _ms(8),
    borderRadius: 4,
  },

  absoluteLabel: {
    color: b3,
    fontSize: _ms(12),
    fontFamily: _fonts.nunitoSansSemiBold,
    position: 'absolute',
    left: _ms(8),
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

  //---

  dashedLine: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderTopColor: b3,
    marginVertical: 10,
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

  dropDownBox: {
    flex: 1,
  },

  inputGrp: {
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 4,
    paddingHorizontal: _ms(10),
    height: _mvs(45),
    maxWidth: '75%',
  },

  lableActive: {
    fontSize: 14,
    paddingLeft: 5,
    position: 'absolute',
    top: 0,
    color: b3,
  },

  circle: {
    width: _ms(20),
    height: _ms(20),
    borderWidth: 1.5,
    borderColor: blue,
    borderRadius: 25,
  },

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
