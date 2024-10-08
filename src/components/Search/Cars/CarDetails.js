import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import {b1, b2, b3, bgColor, blue, white} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';
import {
  _ms,
  _mvs,
  _vs,
  _width,
  alamoIconStyle,
  carIconStyle,
  size15,
  size18,
} from '../../utils/Responsive';

const CarDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.parent}>
      {/* <BgGradient width={width} height={height * 0.11} /> */}
      <BgGradient width={_width} height={_vs(82)} />
      <Header />

      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{rowGap: _mvs(12)}}>
            {/* about car */}
            <View style={[styles.comWrap, {rowGap: _mvs(10)}]}>
              {/* car name & desp */}
              <View style={[commonStyles.commWrapTwo, {gap: _ms(8)}]}>
                <View style={[commonStyles.flexOne, {rowGap: _mvs(6)}]}>
                  <Text style={[commonStyles.ns600, commonStyles.font16]}>
                    Reserve this car
                  </Text>
                  <View style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                    <Text style={[commonStyles.ns400, commonStyles.font16]}>
                      Economy
                    </Text>
                    <Image style={alamoIconStyle} source={image.alamo} />
                  </View>

                  <Text style={commonStyles.ns400}>
                    Chevrolet Spark Or Similar
                  </Text>
                </View>

                <>
                  <Image style={carIconStyle} source={image.car1} />
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

            {/* Driver Details */}
            <View style={styles.comWrapEp}>
              <View style={{rowGap: _mvs(6)}}>
                <Text style={[commonStyles.ns600, commonStyles.font16]}>
                  Driver Details
                </Text>
                <Text style={[commonStyles.ns400, commonStyles.font16]}>
                  Who is the driver?
                </Text>
              </View>

              <View style={styles.hr} />

              <Text
                style={[
                  commonStyles.ns400,
                  commonStyles.font11,
                  {color: b3, marginRight: _ms(20)},
                ]}>
                Enter the traveler's name as it appears on passport or
                government-issued photo ID.
              </Text>

              <View style={{marginRight: _ms(25), rowGap: _mvs(8)}}>
                <TextInput
                  placeholder="First Name *"
                  placeholderTextColor={b1}
                  style={[commonStyles.ns400, styles.inputBox]}
                />
                <TextInput
                  placeholder="Last Name *"
                  placeholderTextColor={b1}
                  style={[commonStyles.ns400, styles.inputBox]}
                />
              </View>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                <Text style={[commonStyles.ns400, {color: b3}]}>
                  Are you under 25?
                </Text>

                <TouchableOpacity>
                  <Text style={[commonStyles.ns400, {color: blue}]}>
                    View Policy Here
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.hr} />

              <Text style={commonStyles.ns600}>Optional Information</Text>

              <View style={{marginRight: _ms(25), rowGap: _mvs(8)}}>
                <TextInput
                  placeholder="Airline"
                  placeholderTextColor={b1}
                  style={[commonStyles.ns400, styles.inputBox]}
                />
                <TextInput
                  placeholder="Flight Number"
                  placeholderTextColor={b1}
                  style={[commonStyles.ns400, styles.inputBox]}
                />
              </View>
            </View>

            {/* Protect Your Car (CDW) */}
            <View style={styles.comWrapEp}>
              <View style={[commonStyles.commWrapTwo]}>
                <Text style={[commonStyles.ns600, commonStyles.font15]}>
                  Protect Your Car (CDW)
                </Text>

                <View style={[commonStyles.commWrapSeven]}>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font15,
                      {color: b3},
                    ]}>
                    $139
                  </Text>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font11,
                      {color: b3},
                    ]}>
                    .30
                  </Text>
                </View>
              </View>

              <View style={styles.hr} />

              <View style={{rowGap: _mvs(10)}}>
                <Text style={[commonStyles.ns400, {color: b3}]}>
                  We recommend adding Rental Car Damage coverage.
                </Text>

                <Text style={[commonStyles.ns400]}>
                  Up to $35,000 for covered loss or damage.
                </Text>
                <Text style={[commonStyles.ns400]}>
                  Primary coverage and zero deductible to save your money.
                </Text>
                <Text style={[commonStyles.ns400]}>
                  Includes evacuation and repatriation up to $7,500.
                </Text>
                <Text style={[commonStyles.ns400]}>
                  Includes 24/7 traveler assistance.
                </Text>
              </View>

              <View style={styles.concent}>
                <TouchableOpacity>
                  <View style={styles.square} />
                </TouchableOpacity>

                <Text style={[commonStyles.ns400, commonStyles.flexOne]}>
                  Yes, I want Rental Car Damage protection for my trip.
                </Text>
              </View>

              <TouchableOpacity>
                <Text
                  style={[
                    commonStyles.ns400,
                    commonStyles.font13,
                    {color: blue},
                  ]}>
                  View Plan Details and Important Disclaimers (Non-insurance
                  services and assistance fees included in the total travel
                  protection plan cost). Terms and Conditions Apply
                </Text>
              </TouchableOpacity>
            </View>

            {/* Passenger Protection (PAI) */}
            <View style={styles.comWrapEp}>
              <View style={[commonStyles.commWrapTwo, {}]}>
                <Text style={[commonStyles.ns600, commonStyles.font15]}>
                  Passenger Protection (PAI)
                </Text>

                <View style={[commonStyles.commWrapSeven]}>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font15,
                      {color: b3},
                    ]}>
                    $69
                  </Text>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font11,
                      {color: b3},
                    ]}>
                    .30
                  </Text>
                </View>
              </View>

              <View style={styles.hr} />

              <View style={{rowGap: _mvs(10)}}>
                <Text style={[commonStyles.ns400, {color: b3}]}>
                  Be Safe. Accidents can and do happen while traveling.
                </Text>

                <Text style={commonStyles.ns400}>
                  Includes accident medical expense coverage for up to $7,500.
                </Text>
                <Text style={commonStyles.ns400}>
                  Injury expenses up to $7,500.
                </Text>
                <Text style={commonStyles.ns400}>
                  Medical expenses up to $7,500 are covered.
                </Text>
                <Text style={commonStyles.ns400}>
                  Includes accidental death & dismemberment coverage with a
                  principal sum of $10,000.
                </Text>
              </View>

              <View style={styles.concent}>
                <TouchableOpacity>
                  <View style={styles.square} />
                </TouchableOpacity>

                <Text style={[commonStyles.ns400, commonStyles.flexOne]}>
                  Yes, I want Passenger Protection for my trip
                </Text>
              </View>

              <TouchableOpacity>
                <Text
                  style={[
                    commonStyles.ns400,
                    commonStyles.font13,
                    {color: blue},
                  ]}>
                  View Plan Details and Important Disclaimers (Non-insurance
                  services and assistance fees included in the total travel
                  protection plan cost). Terms and Conditions Apply
                </Text>
              </TouchableOpacity>
            </View>

            {/* Personal Effects Coverage (PEC) */}
            <View style={styles.comWrapEp}>
              <View style={[commonStyles.commWrapTwo]}>
                <Text style={[commonStyles.ns600, commonStyles.font15]}>
                  Personal Effects Coverage (PEC)
                </Text>

                <View style={commonStyles.commWrapSeven}>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font15,
                      {color: b3},
                    ]}>
                    $41
                  </Text>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font11,
                      {color: b3},
                    ]}>
                    .30
                  </Text>
                </View>
              </View>

              <View style={styles.hr} />

              <View style={{rowGap: _mvs(10)}}>
                <Text style={[commonStyles.ns400, {color: b3}]}>
                  Be cautious… lost or stolen items can ruin your trip!
                </Text>

                <View style={{rowGap: _mvs(10)}}>
                  <Text style={[commonStyles.ns400]}>
                    Did the airline lose or damage your luggage?
                  </Text>
                  <Text style={[commonStyles.ns400]}>
                    We'll cover your gear up to $1,000.
                  </Text>
                </View>
              </View>

              <View style={styles.concent}>
                <TouchableOpacity>
                  <View style={styles.square} />
                </TouchableOpacity>

                <Text style={[commonStyles.ns400, commonStyles.flexOne]}>
                  Yes, I want Personal Effects Coverage protection for my trip.
                </Text>
              </View>

              <TouchableOpacity>
                <Text
                  style={[
                    commonStyles.ns400,
                    commonStyles.font13,
                    {color: blue},
                  ]}>
                  View Plan Details and Important Disclaimers (Non-insurance
                  services and assistance fees included in the total travel
                  protection plan cost). Terms and Conditions Apply
                </Text>
              </TouchableOpacity>
            </View>

            {/* Important Notes */}
            <View style={styles.comWrapEp}>
              <Text style={[commonStyles.ns600, commonStyles.font15]}>
                Important Notes
              </Text>

              <View>
                <Text style={[commonStyles.ns600]}>
                  Please note:{' '}
                  <Text style={commonStyles.ns400}>
                    All bookings are quoted in USD. Your credit/debit card may
                    be billed in multiple charges totaling the amount shown
                    above. In the event of cancellation, any booking fees
                    already paid are non-refundable. Cancellations are subject
                    to the Car supplier policy and 10 Cent air's service fees.
                  </Text>
                </Text>
              </View>

              <View>
                <Text style={[commonStyles.ns600]}>
                  Credit Card Policy:{' '}
                  <Text style={commonStyles.ns400}>
                    The driver must present a valid driver's license and credit
                    card with his/her name upon pick-up. The credit card is
                    required as a deposit when renting any vehicle. The deposit
                    amount is held by the car rental company. Please ensure
                    sufficient funds are available on the card.
                  </Text>
                </Text>
              </View>

              <View>
                <Text style={[commonStyles.ns600]}>
                  Debit Card Policy:{' '}
                  <Text style={commonStyles.ns400}>
                    Debit cards are not accepted for payment or for
                    qualification at time of pick up for most locations. See{' '}
                    <Text style={[commonStyles.ns400, {color: blue}]}>
                      Important Rental Information
                    </Text>{' '}
                    for complete debit card policy.
                  </Text>
                </Text>
              </View>

              <View>
                <Text style={[commonStyles.ns600]}>
                  Car Rental Notice:{' '}
                  <Text style={commonStyles.ns400}>
                    The total estimated car rental cost includes govt taxes and
                    fees. Actual total cost might vary based on additional items
                    added or services used.
                  </Text>
                </Text>
              </View>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                <TouchableOpacity>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font13,
                      {color: blue},
                    ]}>
                    Payment Acceptance Policy.
                  </Text>
                </TouchableOpacity>

                {/* <Text style={[commonStyles.ns600, {color: blue}]}>.</Text> */}

                <TouchableOpacity>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font13,
                      {color: blue},
                    ]}>
                    Privacy Policy
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Policies & Review */}
            <View style={[styles.comWrapEp, {rowGap: _mvs(15)}]}>
              <Text style={[commonStyles.ns600, commonStyles.font15]}>
                Policies & Review
              </Text>

              <Text style={[commonStyles.ns400, commonStyles.font14]}>
                Please confirm that dates and times of booking and name of
                driver is correct. Driver must be present at the time of
                pick-up.
              </Text>

              <Text style={commonStyles.ns600}>
                Pick-up Date: Thu, Dec 21 2023 / 10:00 AM | Drop-off Date: Thu,
                Jan 04 2024 / 10:00 AM
              </Text>

              <View style={[commonStyles.commWrapTwo]}>
                <Text style={commonStyles.ns600}>Driver:</Text>

                <TouchableOpacity>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.blueUnderlineTxt,
                      commonStyles.font12,
                    ]}>
                    Make changes
                  </Text>
                </TouchableOpacity>
              </View>

              <View>
                <Text style={[commonStyles.ns600]}>
                  Cancel and Refund Policy:{' '}
                  <Text style={commonStyles.ns400}>
                    Cancellation is free of charge until 19 Dec 2023 10:00. A
                    cancellation fee of 100 percent will be charged from 19 Dec
                    2023 10:00 until 21 Dec 2023 10:00. A no show fee of 100
                    percent will be charged.
                  </Text>
                </Text>
              </View>

              <View>
                <Text style={[commonStyles.ns600]}>
                  Please note:{' '}
                  <Text style={[commonStyles.ns400, {color: b3}]}>
                    All rates quoted are USD. Please keep in mind that, in the
                    event of cancellation, any booking fees already paid are
                    non-refundable. Your credit/debit card may be billed in
                    multiple charges totaling the above amount.
                  </Text>
                </Text>
              </View>

              <View style={[styles.dottedLine]} />

              <View>
                <Text style={commonStyles.ns400}>
                  Bookings are non-transferable and name changes are not
                  permitted. Total price shown includes all applicable taxes &
                  fees and our service fees. Some airlines may charge additional
                  baggage fees or other fees. Fares are not guaranteed until
                  ticketed.
                </Text>
                <Text style={commonStyles.ns400}>
                  Date and location change will be subject to Hotel Cancellation
                  Policy, Car Rental Policy and 10 Cent air Service fees. Some
                  car Companies may charge additional fees for added products
                  and services. Not all taxes and property charges are included
                  for hotel. They will be provided and collected directly at the
                  hotel.
                </Text>
              </View>

              <Text style={[commonStyles.ns400, commonStyles.textAlignCenter]}>
                By clicking 'Confirm & Book', I agree that I have read and
                accepted the above policies and 10 Cents Air.com's Terms and
                Conditions and Privacy Policy
              </Text>

              {/* Confirm & Book */}
              <View style={{marginTop: _mvs(10)}}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => navigation.navigate('carfaredetails')}>
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
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CarDetails;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: bgColor,
  },

  body: {
    flex: 1,
    marginTop: _mvs(15),
    backgroundColor: bgColor,
  },

  comWrap: {
    marginHorizontal: _ms(6),
    paddingVertical: _mvs(6),
    paddingHorizontal: _ms(10),
    backgroundColor: white,
    borderRadius: 8,
    elevation: 3,
  },

  seatWrap: {
    backgroundColor: 'rgba(33, 180, 226, 0.1)',
    borderRadius: _ms(28),
    width: _ms(28),
    height: _ms(28),
    alignItems: 'center',
    justifyContent: 'center',
  },

  dottedLine: {
    borderColor: b3,
    borderBottomWidth: 1.4,
    borderStyle: 'dashed',
    // marginTop: 5,
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

  chngCar: {
    borderRadius: 7,
    backgroundColor: b2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(5),
    width: _ms(100),
  },

  comWrapEp: {
    backgroundColor: white,
    marginHorizontal: _ms(6),
    paddingVertical: _mvs(18),
    paddingHorizontal: _ms(10),
    borderRadius: 8,
    elevation: 3,
    rowGap: _mvs(10),
  },

  hr: {
    backgroundColor: 'rgba(35, 32, 32, 0.2)',
    height: 1,
  },

  inputBox: {
    padding: 0,
    height: _mvs(40),
    paddingLeft: _ms(10),
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#D8D8D8',
  },

  concent: {
    backgroundColor: '#FEF6F4',
    flexDirection: 'row',
    columnGap: _ms(8),
    paddingLeft: _ms(8),
    paddingVertical: _mvs(8),
    marginTop: _mvs(15),
  },

  square: {
    width: _ms(20),
    height: _ms(20),
    borderWidth: 2,
    borderRadius: 2,
    borderColor: b1,
    marginTop: 2,
  },

  btn: {
    borderRadius: 8,
    backgroundColor: b2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(8),
    marginHorizontal: _ms(20),
  },
});
