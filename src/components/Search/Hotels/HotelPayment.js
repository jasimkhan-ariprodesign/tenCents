import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import {white, blue, b3, b2, b1} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import {
  _ms,
  _mvs,
  _vs,
  _width,
  checkIconStyle,
  clubIcon,
  size24,
} from '../../utils/Responsive';

const HotelPayment = ({navigation}) => {
  return (
    <SafeAreaView style={styles.parent}>
      {/* <BgGradient width={width} height={height * 0.1} /> */}
      <BgGradient width={_width} height={_vs(82)} />
      <Header />

      <View style={styles.body}>
        <View style={commonStyles.flexOne}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            decelerationRate={'fast'}>
            <View style={{rowGap: _mvs(15)}}>
              <View style={commonStyles.commWrapSix}>
                <Text style={[commonStyles.ns600, commonStyles.font16]}>
                  Payment
                </Text>
              </View>

              {/* payment mode */}
              <View style={styles.comWrap}>
                <Text style={[commonStyles.ns600, commonStyles.font15]}>
                  When would you like to pay?
                </Text>

                {/* pay at the property */}
                <View
                  style={[commonStyles.commWrapSeven, {columnGap: _ms(12)}]}>
                  <TouchableOpacity>
                    <View style={styles.circle} />
                  </TouchableOpacity>

                  <View style={[commonStyles.flexOne, {rowGap: _mvs(6)}]}>
                    <Text style={[commonStyles.ns600]}>
                      Pay at the property
                    </Text>

                    <Text style={[commonStyles.ns400, {color: b3}]}>
                      Your card won't be charged, we only need your card details
                      to guarantee your booking.
                    </Text>

                    <View
                      style={[commonStyles.commWrapOne, {columnGap: _ms(14)}]}>
                      <Image style={size24} tintColor={b3} source={icon.card} />

                      <Image
                        style={{width: _ms(40), height: _ms(40)}}
                        source={icon.gpay}
                      />

                      <View style={styles.paypalIconCon}>
                        <Image
                          style={{
                            width: _ms(40),
                            height: _ms(38),
                            tintColor: white,
                          }}
                          source={icon.paypallogo}
                        />
                      </View>
                    </View>
                  </View>
                </View>

                {/* Pay on 18 Dec 2023 */}
                <View
                  style={[commonStyles.commWrapSeven, {columnGap: _ms(12)}]}>
                  <TouchableOpacity>
                    <View style={styles.circle} />
                  </TouchableOpacity>

                  <View style={[commonStyles.flexOne, {rowGap: _mvs(6)}]}>
                    <Text style={[commonStyles.ns600]}>Pay on 18 Dec 2023</Text>

                    <Text style={[commonStyles.ns400, {color: b3}]}>
                      Booking.com will facilitate your payment. We'll
                      automatically charge your selected card on 18 Dec 2023.
                    </Text>

                    <View
                      style={[commonStyles.commWrapOne, {columnGap: _ms(14)}]}>
                      <Image style={size24} tintColor={b3} source={icon.card} />

                      <Image
                        style={{width: _ms(40), height: _ms(40)}}
                        source={icon.gpay}
                      />

                      <View style={styles.paypalIconCon}>
                        <Image
                          style={{
                            width: _ms(40),
                            height: _ms(38),
                            tintColor: white,
                          }}
                          source={icon.paypallogo}
                        />
                      </View>
                    </View>
                  </View>
                </View>

                {/* Pay now */}
                <View
                  style={[commonStyles.commWrapSeven, {columnGap: _ms(12)}]}>
                  <TouchableOpacity>
                    <View style={styles.circle} />
                  </TouchableOpacity>

                  <View style={[commonStyles.flexOne, {rowGap: _mvs(6)}]}>
                    <Text style={[commonStyles.ns600]}>Pay now</Text>

                    <Text style={[commonStyles.ns400, {color: b3}]}>
                      You'll pay with Booking.com when you complete this
                      booking. You can cancel before 20 December 2023 for a full
                      refund.
                    </Text>

                    <View
                      style={[commonStyles.commWrapOne, {columnGap: _ms(14)}]}>
                      <Image style={size24} tintColor={b3} source={icon.card} />

                      <Image
                        style={{width: _ms(40), height: _ms(40)}}
                        source={icon.gpay}
                      />

                      <View style={styles.paypalIconCon}>
                        <Image
                          style={{
                            width: _ms(40),
                            height: _ms(38),
                            tintColor: white,
                          }}
                          source={icon.paypallogo}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              {/* payment method */}
              <View style={styles.comWrap}>
                <Text style={[commonStyles.ns600, commonStyles.font15]}>
                  How would you like to pay?
                </Text>

                {/* card options */}
                <View style={[commonStyles.commWrapSeven, {gap: _ms(8)}]}>
                  {/* new card */}
                  <View style={[commonStyles.flexOne, {rowGap: _mvs(10)}]}>
                    <View style={styles.circleTick}>
                      <Image
                        style={checkIconStyle}
                        tintColor={white}
                        source={icon.check}
                      />
                    </View>

                    <TouchableOpacity style={styles.cardOptnActive}>
                      <Image
                        style={styles.cardOptnImgActive}
                        source={icon.addcard}
                      />
                    </TouchableOpacity>

                    <Text
                      style={[
                        commonStyles.ns600,
                        commonStyles.font13,
                        commonStyles.textAlignCenter,
                      ]}>
                      New Card
                    </Text>
                  </View>

                  {/* paypal */}
                  <View style={[commonStyles.flexOne, {rowGap: _mvs(10)}]}>
                    <View style={styles.circleSm} />
                    <TouchableOpacity style={styles.cardOptn}>
                      <Image
                        style={styles.paypal}
                        source={icon.paypalcompltlogo}
                      />
                    </TouchableOpacity>

                    <Text
                      style={[
                        commonStyles.ns600,
                        commonStyles.font13,
                        commonStyles.textAlignCenter,
                      ]}>
                      Paypal
                    </Text>
                  </View>

                  {/* gpay */}
                  <View style={[commonStyles.flexOne, {rowGap: _mvs(10)}]}>
                    <View style={styles.circleSm} />
                    <TouchableOpacity style={styles.cardOptn}>
                      <Image style={styles.gpay} source={icon.gpay} />
                    </TouchableOpacity>

                    <Text
                      style={[
                        commonStyles.ns600,
                        commonStyles.font13,
                        commonStyles.textAlignCenter,
                      ]}>
                      Google Pay
                    </Text>
                  </View>
                </View>

                <Text style={[commonStyles.ns600, commonStyles.font17]}>
                  New Card
                </Text>

                {/* cards */}
                <View style={styles.cardsCon}>
                  <View style={styles.cards}>
                    <Image style={styles.cardsIcon} source={icon.visa} />
                  </View>

                  <View style={styles.cards}>
                    <Image
                      //   style={{width: 25, height: 20}}
                      style={styles.cardsIcon}
                      source={icon.mastercard}
                    />
                  </View>

                  <View style={styles.cards}>
                    <Image
                      //   style={{width: 30, height: 25, tintColor: '#0072CE'}}
                      style={styles.cardsIcon}
                      tintColor={'#0072CE'}
                      source={icon.amex}
                    />
                  </View>

                  <View style={styles.cards}>
                    <Image
                      //   style={{width: 35, height: 15}}
                      style={styles.cardsIcon}
                      resizeMode="stretch"
                      source={icon.discover}
                    />
                  </View>

                  <View style={styles.cards}>
                    <Image
                      //   style={{width: 35, height: 25}}
                      style={styles.cardsIcon}
                      source={icon.diners}
                    />
                  </View>

                  <View style={styles.cards}>
                    <Image
                      //   style={{width: 30, height: 20}}
                      style={styles.cardsIcon}
                      source={icon.carteBlanche}
                    />
                  </View>
                </View>

                <View
                  style={{
                    marginRight: _ms(28),
                    rowGap: _mvs(15),
                  }}>
                  {/* number */}
                  <View style={styles.inputGrp}>
                    <TextInput
                      style={[commonStyles.ns600, {paddingHorizontal: _ms(10)}]}
                      placeholder="Card Number *"
                      placeholderTextColor={b1}
                      keyboardType="number-pad"
                    />
                  </View>

                  {/* name */}
                  <View style={styles.inputGrp}>
                    <TextInput
                      style={[commonStyles.ns600, {paddingHorizontal: _ms(10)}]}
                      placeholder="Name on Card *"
                      placeholderTextColor={b1}
                    />
                  </View>

                  <View
                    style={[commonStyles.commWrapSeven, {columnGap: _ms(8)}]}>
                    {/* expiry date */}
                    <View
                      style={[
                        styles.inputGrp,
                        commonStyles.flexOne,
                        commonStyles.commWrapOne,
                      ]}>
                      <Text
                        style={[
                          commonStyles.ns600,
                          commonStyles.font10,
                          styles.expiryTxt,
                        ]}>
                        Expiry Date *
                      </Text>

                      <TextInput
                        style={[commonStyles.ns600, styles.monthInput]}
                        placeholder="MM"
                        placeholderTextColor={b1}
                        keyboardType="number-pad"
                        maxLength={2}
                      />

                      <Text
                        style={[
                          commonStyles.ns600,
                          commonStyles.font16,
                          {marginTop: _mvs(15)},
                        ]}>
                        /
                      </Text>

                      <TextInput
                        style={[commonStyles.ns600, styles.yearInput]}
                        placeholder="YY"
                        placeholderTextColor={b1}
                        keyboardType="number-pad"
                        maxLength={4}
                      />
                    </View>

                    {/* cvv */}
                    <View
                      style={[
                        styles.inputGrp,
                        commonStyles.commWrapOne,
                        commonStyles.flexOne,
                      ]}>
                      <TextInput
                        style={[
                          commonStyles.ns600,
                          commonStyles.flexOne,
                          {
                            padding: _mvs(0),
                            paddingLeft: _ms(10),
                            height: _mvs(40),
                          },
                        ]}
                        placeholder="CVV*"
                        placeholderTextColor={b1}
                        maxLength={3}
                        keyboardType="number-pad"
                      />

                      <Image
                        style={[clubIcon, {marginRight: _ms(10)}]}
                        source={icon.cvv}
                      />
                    </View>
                  </View>
                </View>
              </View>

              {/* complete booking */}
              <View style={{marginHorizontal: _ms(20), marginBottom: _mvs(10)}}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => navigation.replace('success')}>
                  <Text
                    style={[
                      commonStyles.lbB1,
                      commonStyles.font16,
                      {color: white},
                    ]}>
                    Complete Booking
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HotelPayment;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: white,
  },

  body: {
    marginTop: _mvs(15),
    flex: 1,
    backgroundColor: white,
  },

  comWrap: {
    backgroundColor: white,
    marginHorizontal: _ms(8),
    borderRadius: 4,
    elevation: 3,
    paddingVertical: _mvs(15),
    paddingHorizontal: _ms(10),
    rowGap: _mvs(15),
  },

  circle: {
    borderColor: blue,
    borderWidth: 2,
    width: _ms(20),
    height: _ms(20),
    borderRadius: 30,
  },

  paypalIconCon: {
    backgroundColor: b3,
    paddingLeft: 3,
    height: _mvs(22),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },

  circleTick: {
    borderColor: blue,
    borderWidth: 2,

    backgroundColor: blue,
    position: 'absolute',
    width: _ms(18),
    height: _ms(18),
    borderRadius: 30,
    left: _ms(6),
    top: _ms(6),
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardOptnActive: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: 2.5,
    borderColor: blue,
    height: _mvs(70),
    flex: 1,
  },

  cardOptn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: 2.5,
    borderColor: '#D8D8D8',
    height: _mvs(70),
    flex: 1,
  },

  cardOptnImg: {
    width: _ms(32),
    height: _ms(32),
    tintColor: b3,
  },

  cardOptnImgActive: {
    width: _ms(32),
    height: _ms(32),
    tintColor: blue,
  },

  circleSm: {
    borderColor: blue,
    borderWidth: 2,
    width: _ms(18),
    height: _ms(18),
    position: 'absolute',
    borderRadius: 30,
    left: _ms(6),
    top: _ms(6),
  },

  paypal: {
    width: _ms(60),
    height: _ms(60),
  },

  gpay: {
    width: _ms(45),
    height: _ms(45),
  },

  cardsCon: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: _ms(4),
    // backgroundColor: 'red',
  },

  cards: {
    width: _ms(48),
    height: _mvs(30),
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardsIcon: {
    width: _ms(44),
    height: _mvs(25),
  },

  inputGrp: {
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 4,
    height: _mvs(40),
  },

  expiryTxt: {
    left: _ms(10),
    top: _ms(0),
    position: 'absolute',
  },

  monthInput: {
    padding: _mvs(0),
    height: _mvs(40),
    textAlign: 'right',
    paddingTop: _mvs(15),
    flex: 1,
    paddingRight: _ms(4),
  },

  yearInput: {
    padding: _mvs(0),
    height: _mvs(40),
    paddingTop: _mvs(15),
    flex: 1.4,
    paddingLeft: _ms(4),
  },

  btn: {
    borderRadius: 4,
    backgroundColor: b2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginHorizontal: 25,
  },
});
