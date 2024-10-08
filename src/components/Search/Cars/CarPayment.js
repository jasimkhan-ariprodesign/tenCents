import {
  Dimensions,
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
import {
  b1,
  b3,
  bgColor,
  blue,
  green24AD53,
  white,
} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';
import {
  _ms,
  _mvs,
  _vs,
  _width,
  clubIcon,
  size12,
  size15,
} from '../../utils/Responsive';

const CarPayment = ({navigation}) => {
  return (
    <SafeAreaView style={styles.parent}>
      {/* <BgGradient width={width} height={height * 0.11} /> */}
      <BgGradient width={_width} height={_vs(82)} />
      <Header />

      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <>
            <View style={styles.comWrapEp}>
              <Text style={[commonStyles.ns700]}>Payment Options</Text>

              <>
                <View style={styles.ssl}>
                  <Image
                    style={size15}
                    tintColor={'#24AD53'}
                    source={icon.lock}
                  />

                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font11,
                      {color: green24AD53},
                    ]}>
                    Secure SSL Encrypted Transaction
                  </Text>
                </View>
              </>

              <View style={{rowGap: _mvs(10)}}>
                <Text style={[commonStyles.ns600, commonStyles.font12]}>
                  Apply for 10 Cents Air Credit Card
                </Text>

                <View style={[commonStyles.commWrapOne, {columnGap: _ms(5)}]}>
                  <View style={commonStyles.commWrapSeven}>
                    <Text
                      style={[
                        commonStyles.ns600,
                        commonStyles.font12,
                        {color: green24AD53},
                      ]}>
                      USD 50
                    </Text>
                    <Text
                      style={[
                        commonStyles.ns600,
                        commonStyles.font10,
                        {
                          color: green24AD53,
                        },
                      ]}>
                      .00
                    </Text>
                  </View>

                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font12,
                      {color: green24AD53},
                    ]}>
                    statement credit offer
                  </Text>
                </View>
              </View>

              <Text style={[commonStyles.ns600, commonStyles.font18]}>
                Credit Card
              </Text>

              {/* cards */}
              <View style={styles.cardsConParent}>
                <View style={styles.cards}>
                  <Image style={styles.cardsIcon} source={icon.visa} />
                </View>

                <View style={styles.cards}>
                  <Image
                    style={styles.cardsIcon}
                    resizeMode="stretch"
                    source={icon.mastercard}
                  />
                </View>

                <View style={styles.cards}>
                  <Image
                    style={styles.cardsIcon}
                    tintColor={'#0072CE'}
                    source={icon.amex}
                  />
                </View>

                <View style={styles.cards}>
                  <Image
                    style={styles.cardsIcon}
                    resizeMode="stretch"
                    source={icon.discover}
                  />
                </View>

                <View style={styles.cards}>
                  <Image style={styles.cardsIcon} source={icon.diners} />
                </View>

                <View style={styles.cards}>
                  <Image
                    style={styles.cardsIcon}
                    resizeMode="contain"
                    source={icon.carteBlanche}
                  />
                </View>
              </View>

              {/* card inputs */}
              <View
                style={{
                  rowGap: _mvs(5),
                  marginRight: _ms(40),
                }}>
                {/* number */}
                <View style={styles.inputGrp}>
                  <TextInput
                    style={[commonStyles.ns400, styles.inputStyle]}
                    placeholder="Card Number *"
                    placeholderTextColor={b1}
                    keyboardType="number-pad"
                  />
                </View>

                {/* name */}
                <View style={styles.inputGrp}>
                  <TextInput
                    style={[commonStyles.ns400, styles.inputStyle]}
                    placeholder="Name on Card*"
                    placeholderTextColor={b1}
                  />
                </View>

                <View style={[commonStyles.commWrapSeven, {columnGap: _ms(8)}]}>
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

              <Text style={commonStyles.ns600}>Easy monthly payments</Text>

              <View
                style={[
                  commonStyles.commWrapSeven,
                  {marginTop: _mvs(10), columnGap: _ms(12)},
                ]}>
                <Image style={styles.affirmIcon} source={image.affirm} />

                <View style={[commonStyles.flexOne, {rowGap: _mvs(2)}]}>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    Make easy monthly payments over 6, 12, or 18 months. As low
                    as $150 /month with Affirm. No late fees. Ever.{' '}
                    <Text
                      style={[
                        commonStyles.ns600,
                        commonStyles.font12,
                        {color: blue},
                      ]}>
                      Learn more
                    </Text>
                  </Text>

                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font12,
                      {color: b3},
                    ]}>
                    Available only to US residents.
                  </Text>
                </View>
              </View>

              <View style={styles.hr} />

              <View style={[commonStyles.commWrapSeven, {columnGap: _ms(10)}]}>
                <Image
                  style={styles.affirmIcon}
                  source={image.mcafe}
                  resizeMode="stretch"
                />

                <View style={styles.wrapper}>
                  <TouchableOpacity>
                    <Text
                      style={[
                        commonStyles.ns600,
                        commonStyles.blueUnderlineTxt,
                        commonStyles.font10,
                      ]}>
                      Payment Acceptance Policy
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[commonStyles.commWrapOne, {columnGap: _ms(5)}]}>
                    <Image style={size12} source={icon.lock} />

                    <Text
                      style={[
                        commonStyles.ns600,
                        commonStyles.blueUnderlineTxt,
                        commonStyles.font10,
                      ]}>
                      Privacy Policy
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Text
                      style={[
                        commonStyles.ns600,
                        commonStyles.blueUnderlineTxt,
                        commonStyles.font10,
                      ]}>
                      Safe Shopping Guarantee
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CarPayment;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: bgColor,
  },

  body: {
    flex: 1,
    marginTop: _mvs(15),
    // backgroundColor: '#EFF2F7',
    backgroundColor: bgColor,
  },

  comWrapEp: {
    backgroundColor: white,
    marginHorizontal: _ms(6),
    paddingVertical: _mvs(12),
    paddingHorizontal: _ms(10),
    borderRadius: 8,
    elevation: 3,
    rowGap: _mvs(10),
    marginVertical: _mvs(5),
  },

  ssl: {
    borderWidth: 1,
    borderColor: '#99DDBA',
    paddingHorizontal: _ms(20),
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(4),
    columnGap: _ms(8),
    alignSelf: 'flex-start',
  },

  cardsConParent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: _mvs(10),
    columnGap: _ms(4),
    flexWrap: 'wrap',
  },

  cards: {
    width: _ms(48),
    height: _mvs(30),
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#E2E2E2',
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
    justifyContent: 'center',
    backgroundColor: white,
  },

  inputStyle: {
    paddingLeft: _ms(10),
    padding: 0,
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

  affirmIcon: {
    width: _ms(60),
    height: _mvs(30),
    resizeMode: 'contain',
  },

  hr: {
    backgroundColor: '#D8D8D8',
    height: 1,
    marginVertical: _mvs(5),
    borderTopWidth: 1,
    borderTopColor: '#D8D8D8',
  },

  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    rowGap: _mvs(4),
    justifyContent: 'space-between',
    // backgroundColor: 'green',
  },
});
