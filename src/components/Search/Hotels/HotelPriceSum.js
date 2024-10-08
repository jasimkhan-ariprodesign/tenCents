import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import {b1, white, blue, b3, bgColor} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import {_ms, _mvs, _vs, _width, size18, size20} from '../../utils/Responsive';

const HotelPriceSum = ({navigation}) => {
  return (
    <SafeAreaView style={styles.parent}>
      <BgGradient width={_width} height={_vs(82)} />
      <Header />

      <View style={styles.body}>
        <View style={commonStyles.flexOne}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{rowGap: _mvs(15)}}>
              <View style={commonStyles.commWrapSix}>
                <Text style={[commonStyles.ns600, commonStyles.font16]}>
                  Price Summary
                </Text>
              </View>

              {/* price details */}
              <View style={styles.main}>
                <Text
                  style={[
                    commonStyles.ns700,
                    commonStyles.font16,
                    {marginLeft: _ms(10)},
                  ]}>
                  Your price summary
                </Text>

                {/* price */}
                <View style={styles.priceWrap}>
                  <Text style={[commonStyles.ns600, commonStyles.font18]}>
                    Price
                  </Text>

                  {/* price details */}
                  <View
                    style={[commonStyles.alignItemsFlexEnd, {gap: _mvs(1.5)}]}>
                    <View style={commonStyles.commWrapSeven}>
                      <Text style={[commonStyles.ns600, commonStyles.font18]}>
                        USD 1,320
                      </Text>
                      <Text style={[commonStyles.ns600, commonStyles.font13]}>
                        .39
                      </Text>
                    </View>

                    <Text
                      style={[
                        commonStyles.ns600,
                        commonStyles.font12,
                        {color: b3},
                      ]}>
                      +USD 162 taxes and charges
                    </Text>

                    <View style={commonStyles.commWrapSeven}>
                      <Text
                        style={[
                          commonStyles.ns600,
                          commonStyles.font12,
                          {color: b3},
                        ]}>
                        In property currency: CAD 1,794
                      </Text>
                      <Text
                        style={[
                          commonStyles.ns600,
                          commonStyles.font10,
                          {color: b3},
                        ]}>
                        .39
                      </Text>
                    </View>
                  </View>
                </View>

                {/* price info */}
                <View style={styles.priceInfoCon}>
                  <Text style={[commonStyles.ns600, commonStyles.font16]}>
                    Price information
                  </Text>

                  <View style={{rowGap: _mvs(12)}}>
                    <View
                      style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                      <Image style={size20} source={icon.cash} />

                      <Text style={[commonStyles.ns400, commonStyles.font13]}>
                        Excludes USD162.01 in taxes and charges
                      </Text>
                    </View>

                    <View
                      style={{
                        rowGap: _mvs(6),
                        marginLeft: _ms(36),
                      }}>
                      <View style={[commonStyles.commWrapTwo]}>
                        <Text
                          style={[
                            commonStyles.ns400,
                            commonStyles.font14,
                            {color: b3},
                          ]}>
                          9% Tax
                        </Text>

                        <Text
                          style={[
                            commonStyles.ns600,
                            commonStyles.font14,
                            {color: b3},
                          ]}>
                          USD 118.84
                        </Text>
                      </View>

                      <View style={[commonStyles.commWrapTwo, {}]}>
                        <Text
                          style={[
                            commonStyles.ns400,
                            commonStyles.font14,
                            {color: b3},
                          ]}>
                          3% City tax
                        </Text>

                        <Text
                          style={[
                            commonStyles.ns600,
                            commonStyles.font14,
                            {color: b3},
                          ]}>
                          USD 43.18
                        </Text>
                      </View>
                    </View>

                    <View
                      style={[
                        commonStyles.commWrapThree,
                        // commonStyles.alignItemsFlexStart,
                      ]}>
                      <View style={styles.leftWrapper}>
                        <Image
                          style={[size20, {marginTop: _mvs(3)}]}
                          source={icon.info}
                        />

                        <Text
                          style={[
                            commonStyles.ns400,
                            commonStyles.font14,
                            commonStyles.flexOne,
                          ]}>
                          Damage deposit (Fully refundable)
                        </Text>
                      </View>

                      <Text style={[commonStyles.ns400, commonStyles.font14]}>
                        USD 74
                      </Text>
                    </View>

                    <View
                      style={[
                        commonStyles.commWrapThree,
                        {columnGap: _ms(10)},
                      ]}>
                      <Image
                        style={[size20, {marginTop: _mvs(3)}]}
                        source={icon.money}
                      />

                      <Text
                        style={[
                          commonStyles.ns400,
                          commonStyles.flexOne,
                          commonStyles.font14,
                          // {textAlign: 'justify'},
                        ]}>
                        This price is converted to show you the approximate cost
                        in US$. You'll pay in{' '}
                        <Text style={[commonStyles.ns700, commonStyles.font14]}>
                          CAD
                        </Text>
                        . The exchange rate may change before you pay.
                      </Text>
                    </View>

                    <View
                      style={[
                        commonStyles.commWrapThree,
                        {columnGap: _ms(10)},
                      ]}>
                      <Image
                        style={[size20, {marginTop: _mvs(3)}]}
                        source={icon.exchangeRate}
                      />

                      <Text
                        style={[
                          commonStyles.ns400,
                          commonStyles.flexOne,
                          commonStyles.font14,
                          // {textAlign: 'justify'},
                        ]}>
                        Bear in mind that your card issuer may charge you a
                        foreign transaction fee.
                      </Text>
                    </View>
                  </View>

                  {/* hide details */}
                  <>
                    <TouchableOpacity style={commonStyles.alignSelfFlexStart}>
                      <Text style={[commonStyles.ns600, {color: blue}]}>
                        Hide details
                      </Text>
                    </TouchableOpacity>
                  </>
                </View>
              </View>

              {/* cancel */}
              <View
                style={[
                  styles.main,
                  {paddingHorizontal: _ms(10), marginBottom: _mvs(15)},
                ]}>
                <Text style={[commonStyles.ns700, commonStyles.font16]}>
                  How much will it cost to cancel?
                </Text>

                <Text style={[commonStyles.ns600, {color: '#008009'}]}>
                  Free cancellation before 20 Dec
                </Text>

                <View style={[commonStyles.commWrapTwo]}>
                  <Text style={[commonStyles.ns600]}>From 00:00 on 20 Dec</Text>

                  <Text style={[commonStyles.ns600]}>USD 97*</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* proceed */}

        <View style={styles.bottomFixedView}>
          <View style={[commonStyles.flexOne, {rowGap: _mvs(3)}]}>
            <Text style={[commonStyles.ns600, {color: white}]}>Price</Text>
            <Text style={[commonStyles.ns600, {color: white}]}>
              $1320 + Taxes-
            </Text>
          </View>

          <TouchableOpacity
            style={styles.reserveBtn}
            onPress={() => navigation.navigate('hotelsum')}>
            <Text
              style={[commonStyles.ns600, {fontSize: _ms(12), color: blue}]}>
              PROCEED
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HotelPriceSum;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: bgColor,
  },

  body: {
    marginTop: _mvs(15),
    flex: 1,
  },

  main: {
    backgroundColor: white,
    marginHorizontal: _ms(10),
    borderRadius: 4,
    elevation: 2,
    paddingVertical: _mvs(15),
    rowGap: _mvs(10),
  },

  priceWrap: {
    backgroundColor: '#EBF3FF',
    paddingVertical: _mvs(15),
    paddingHorizontal: _ms(10),
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  priceInfoCon: {
    paddingHorizontal: _ms(10),
    rowGap: _mvs(10),
  },

  leftWrapper: {
    flexDirection: 'row',
    columnGap: _ms(10),
    flex: 1,
    maxWidth: '60%',
    // backgroundColor: 'green',
  },

  bottomFixedView: {
    backgroundColor: b1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: _mvs(8),
    paddingHorizontal: _ms(11),
    flexDirection: 'row',
    gap: _ms(10),
  },

  reserveBtn: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: blue,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(7),
    paddingHorizontal: _ms(35),
  },
});
