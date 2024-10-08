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
import {blue, white, b1, b2, bgColor, b3} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import {
  _ms,
  _mvs,
  _s,
  _vs,
  _width,
  checkIconStyle,
  clubIcon,
  size15,
  size18,
} from '../../utils/Responsive';

const FhPayment = ({navigation}) => {
  return (
    <SafeAreaView style={commonStyles.flexOne}>
      <BgGradient width={_width} height={_vs(82)} />
      <Header />

      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{rowGap: _mvs(10), marginHorizontal: _ms(8)}}>
            <View style={[commonStyles.commWrapOne, {marginTop: _mvs(5)}]}>
              <Text style={[commonStyles.ns400, commonStyles.font13]}>
                Please make your payment within the next{' '}
                <Text style={[commonStyles.ns600, commonStyles.font13]}>
                  20 minutes{'  '}
                </Text>
                <Image style={size15} source={icon.info} />
                <Text style={[commonStyles.ns400, commonStyles.font13]}>
                  {'  '}
                  to keep this session active.
                </Text>
              </Text>
            </View>

            <View style={styles.hr} />

            {/* price breakdown */}
            <View style={{rowGap: _mvs(8)}}>
              <View>
                <Text style={[commonStyles.ns600, commonStyles.font15]}>
                  Price Breakdown (USD)
                </Text>

                <Text
                  style={[
                    commonStyles.ns600,
                    commonStyles.font11,
                    {marginTop: _mvs(2)},
                  ]}>
                  Dhaka(DAC) to Calgary(YYC)
                </Text>
              </View>

              {/* price details */}
              <View style={{rowGap: _mvs(10)}}>
                <View style={[commonStyles.commWrapThree, {gap: _ms(10)}]}>
                  <Text
                    style={[
                      commonStyles.ns400,
                      commonStyles.font14,
                      commonStyles.flexOne,
                    ]}>
                    Package Base Price(per person)
                  </Text>

                  <View style={commonStyles.commWrapSeven}>
                    <Text style={commonStyles.ns600}>USD 2242</Text>
                    <Text style={[commonStyles.ns600, commonStyles.font10, {}]}>
                      .08
                    </Text>
                  </View>
                </View>

                <View style={[commonStyles.commWrapThree, {gap: _ms(10)}]}>
                  <Text
                    style={[
                      commonStyles.ns400,
                      commonStyles.font14,
                      commonStyles.flexOne,
                    ]}>
                    Taxes and Fees
                  </Text>

                  <View style={commonStyles.commWrapSeven}>
                    <Text style={commonStyles.ns600}>USD 350</Text>
                    <Text style={[commonStyles.ns600, commonStyles.font10, {}]}>
                      .91
                    </Text>
                  </View>
                </View>

                <View style={[commonStyles.commWrapThree, {gap: _ms(10)}]}>
                  <Text
                    style={[
                      commonStyles.ns400,
                      commonStyles.font14,
                      commonStyles.flexOne,
                    ]}>
                    Package Price(per person)
                  </Text>

                  <View style={commonStyles.commWrapSeven}>
                    <Text style={commonStyles.ns600}>USD 2593</Text>
                    <Text style={[commonStyles.ns600, commonStyles.font10, {}]}>
                      .99
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.dottedLine} />

              {/* add travel protection */}
              <View style={commonStyles.commWrapTwo}>
                <View>
                  <Text style={[commonStyles.ns400, commonStyles.font14]}>
                    Travel Protection
                  </Text>

                  <View style={[commonStyles.commWrapOne, {columnGap: _ms(5)}]}>
                    <View style={commonStyles.commWrapSeven}>
                      <Text style={[commonStyles.ns400, commonStyles.font14]}>
                        USD 267
                      </Text>
                      <Text style={[commonStyles.ns400, commonStyles.font10]}>
                        .95
                      </Text>
                    </View>

                    <Text style={[commonStyles.ns400, commonStyles.font13]}>
                      per person
                    </Text>
                  </View>
                </View>

                <TouchableOpacity style={styles.addBtn}>
                  <Image
                    style={checkIconStyle}
                    tintColor={blue}
                    source={icon.plus}
                  />

                  <Text
                    style={[
                      commonStyles.lbB1,
                      commonStyles.font14,
                      {color: blue},
                    ]}>
                    Add
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.dottedLine} />

              {/* total */}
              <View style={[commonStyles.commWrapThree]}>
                <View
                  style={[
                    commonStyles.commWrapSeven,
                    commonStyles.flexOne,
                    {columnGap: _ms(5)},
                  ]}>
                  <Text style={[commonStyles.ns700, commonStyles.font14]}>
                    Total Package Price (USD)
                  </Text>
                  <Image
                    style={[size15, {top: _mvs(3.3)}]}
                    source={icon.info}
                  />
                </View>

                <View style={commonStyles.commWrapSeven}>
                  <Text style={[commonStyles.ns700, commonStyles.font14]}>
                    USD 2593
                  </Text>
                  <Text style={[commonStyles.ns700, commonStyles.font10]}>
                    .99
                  </Text>
                </View>
              </View>

              {/* add car */}
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-start',
                  marginLeft: _ms(5),
                  marginTop: _mvs(5),
                }}>
                <Text style={[commonStyles.ns400, {color: blue}]}>
                  Add car to your trip
                </Text>
              </TouchableOpacity>

              {/* Join ClubMiles and earn 2225 points or more on this booking */}
              <View style={styles.clubMiles}>
                <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
                  <Image style={clubIcon} source={icon.cmiles} />

                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font12,
                      commonStyles.flexOne,
                      {color: white},
                    ]}>
                    Join ClubMiles and earn 2225 points or more on this booking
                  </Text>

                  <TouchableOpacity style={styles.signin}>
                    <Text
                      style={[
                        commonStyles.lbB1,
                        commonStyles.font15,
                        {color: blue},
                      ]}>
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.hr} />

            {/* apply promocode */}
            <View style={[styles.promo, commonStyles.commWrapTwo]}>
              <Image style={size18} source={icon.tag} tintColor={blue} />

              {/* <Text
                style={[
                  commonStyles.ns600,
                  commonStyles.flexOne,
                  commonStyles.font11,
                  {color: blue},
                ]}>
                Enter promo code or gift card number
              </Text> */}

              <TextInput
                placeholder="Enter promo code or gift card number"
                placeholderTextColor={blue}
                style={styles.promoCodeinput}
              />

              <TouchableOpacity style={styles.btn}>
                <Text
                  style={[
                    commonStyles.lbB1,
                    commonStyles.font13,
                    {color: white},
                  ]}>
                  Apply
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[
                commonStyles.commWrapOne,
                commonStyles.flexStart,
                {columnGap: _ms(8), marginTop: _mvs(8)},
              ]}>
              <Text style={[commonStyles.ns600, {color: blue}]}>
                Pay with credit from a previous booking
              </Text>

              <Image
                style={[size15, {transform: [{rotate: '-90deg'}]}]}
                tintColor={blue}
                source={icon.rightArrow}
              />
            </TouchableOpacity>

            <Text
              style={[
                commonStyles.ns400,
                commonStyles.font13,
                {lineHeight: _mvs(20)},
              ]}>
              To use any travel credit that you have with us from a previously
              canceled booking, please call{' '}
              <Text
                style={[
                  commonStyles.ns600,
                  commonStyles.font13,
                  {color: '#DF1414'},
                ]}>
                845-848-0211
              </Text>
            </Text>
          </View>
        </ScrollView>

        {/* PROCEED */}

        <View style={styles.proceedCon}>
          <View style={{rowGap: _mvs(2)}}>
            <Text style={[commonStyles.ns600, {color: white}]}>Price</Text>
            <Text style={[commonStyles.ns600, {color: white}]}>
              $1320 + Taxes
            </Text>
          </View>

          <TouchableOpacity
            style={styles.proceedBtn}
            onPress={() => {
              //   navigation.replace('success');
              navigation.navigate('success');
            }}>
            <Text
              style={[commonStyles.ns600, commonStyles.font13, {color: blue}]}>
              PROCEED
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FhPayment;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: bgColor,
    marginTop: _mvs(10),
  },

  hr: {
    backgroundColor: 'rgba(35, 32, 32, 0.2)',
    height: 1,
    marginTop: _mvs(4),
  },

  dottedLine: {
    borderColor: '#D8D8D8',
    borderBottomWidth: 1.22,
    borderStyle: 'dashed',
    marginTop: _mvs(10),
  },

  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 6,
    borderWidth: 1,
    borderColor: blue,
    backgroundColor: 'rgba(33,180,226, 0.1)',
    borderRadius: 4,
    paddingHorizontal: _ms(15),
    paddingVertical: _mvs(5),
    justifyContent: 'center',
  },

  clubMiles: {
    backgroundColor: b1,
    borderRadius: 5,
    paddingHorizontal: _ms(8),
    paddingVertical: _mvs(12),
    marginTop: -_mvs(8),
  },

  signin: {
    backgroundColor: white,
    borderWidth: 1,
    borderColor: blue,
    borderRadius: 4,
    paddingHorizontal: _ms(16),
    paddingVertical: _mvs(4),
  },

  promo: {
    borderWidth: 1,
    borderColor: b2,
    borderRadius: 4,
    paddingHorizontal: _ms(6),
    paddingVertical: _mvs(6),
    gap: _ms(8),
  },

  promoCodeinput: {
    padding: 0,
    color: blue,
    ...commonStyles.ns600,
    ...commonStyles.font11,
    ...commonStyles.flexOne,
  },

  btn: {
    borderRadius: 4,
    backgroundColor: b2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: _ms(16),
    paddingVertical: _mvs(5),
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
