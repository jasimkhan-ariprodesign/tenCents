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
import {b1, b2, b3, bgColor, blue, white} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import {
  _ms,
  _mvs,
  _vs,
  _width,
  clubIcon,
  size15,
  size18,
} from '../../utils/Responsive';

const CarFareDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.parent}>
      {/* <BgGradient width={width} height={height * 0.11} /> */}
      <BgGradient width={_width} height={_vs(82)} />
      <Header />

      <View style={styles.body}>
        <ScrollView
          bounces={false}
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsVerticalScrollIndicator={false}>
          <View style={styles.child}>
            <View style={{marginTop: _mvs(15)}}>
              <Text style={[commonStyles.ns400, commonStyles.font13]}>
                Please make your payment within the next{' '}
                <Text style={[commonStyles.ns600]}>20 minutes{` `}</Text>
                <Image style={size15} source={icon.info} />
                <Text style={[commonStyles.ns400, commonStyles.font13]}>
                  {' '}
                  to keep this session active.
                </Text>
              </Text>
            </View>

            <View style={styles.hr} />

            {/* price breakdown */}
            <View style={{rowGap: _mvs(10)}}>
              <Text style={[commonStyles.ns600, commonStyles.font16]}>
                Price Breakdown (USD)
              </Text>

              <Text style={[commonStyles.ns600]}>
                Car Rental :{' '}
                <Text style={[commonStyles.ns400, {color: b3}]}>14 Days</Text>
              </Text>

              <View style={{rowGap: _mvs(10)}}>
                <View style={commonStyles.commWrapSeven}>
                  <Text
                    style={[
                      commonStyles.ns400,
                      commonStyles.font14,
                      commonStyles.flexOne,
                    ]}>
                    Base Rental Price x 14 Day(s)
                  </Text>

                  <View style={commonStyles.commWrapSeven}>
                    <Text style={[commonStyles.ns600]}>USD 567</Text>
                    <Text style={[commonStyles.ns600, commonStyles.font10]}>
                      .87
                    </Text>
                  </View>
                </View>

                <View style={commonStyles.commWrapSeven}>
                  <Text
                    style={[
                      commonStyles.ns400,
                      commonStyles.font14,
                      commonStyles.flexOne,
                    ]}>
                    Booking Fee
                  </Text>

                  <View style={commonStyles.commWrapSeven}>
                    <Text style={[commonStyles.ns600]}>USD 0</Text>
                    <Text style={[commonStyles.ns600, commonStyles.font10]}>
                      .00
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.dottedLine} />

              <View style={[commonStyles.commWrapSeven]}>
                <Text
                  style={[
                    commonStyles.ns700,
                    commonStyles.font14,
                    commonStyles.flexOne,
                  ]}>
                  Total Package Price (USD)
                </Text>

                <View style={[commonStyles.commWrapSeven]}>
                  <Text style={[commonStyles.ns700, commonStyles.font14]}>
                    USD 567
                  </Text>
                  <Text style={[commonStyles.ns700, commonStyles.font10]}>
                    .87
                  </Text>
                </View>
              </View>

              <View style={styles.dottedLine} />

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

            {/* promocode */}
            <View style={[styles.promo, commonStyles.commWrapTwo]}>
              <Image style={size18} source={icon.tag} tintColor={blue} />

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

            {/* Confirm & Book */}
            <>
              <TouchableOpacity
                style={styles.btnLrg}
                onPress={() => navigation.navigate('carpayment')}>
                <Text
                  style={[
                    commonStyles.lbB1,
                    commonStyles.font16,
                    {color: white},
                  ]}>
                  Proceed To Payment
                </Text>
              </TouchableOpacity>
            </>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CarFareDetails;

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

  child: {
    rowGap: _mvs(15),
    marginHorizontal: _ms(8),
  },

  hr: {
    backgroundColor: 'rgba(35, 32, 32, 0.15)',
    height: 1,
  },

  dottedLine: {
    borderColor: 'silver',
    borderBottomWidth: 1.4,
    borderStyle: 'dashed',
    marginVertical: _mvs(5),
  },

  clubMiles: {
    backgroundColor: b1,
    borderRadius: 5,
    paddingHorizontal: _ms(8),
    paddingVertical: _mvs(12),
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

  btnLrg: {
    borderRadius: 8,
    backgroundColor: b2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(8),
    marginHorizontal: _ms(25),
  },
});
