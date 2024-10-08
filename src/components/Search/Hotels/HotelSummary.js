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
import {b1, white, blue, b3, b2, blackTxt} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import {
  _ms,
  _mvs,
  _vs,
  _width,
  size12,
  size14,
  size16,
  size20,
  size22,
  size24,
} from '../../utils/Responsive';

const HotelSummary = ({navigation}) => {
  return (
    <SafeAreaView style={styles.parent}>
      {/* <BgGradient width={width} height={height * 0.1} /> */}
      <BgGradient width={_width} height={_vs(82)} />
      <Header />

      <View style={styles.body}>
        <View style={commonStyles.flexOne}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{rowGap: _mvs(15)}}>
              <View style={commonStyles.commWrapSix}>
                <Text style={[commonStyles.ns600, commonStyles.font16]}>
                  Hotel Summary
                </Text>
              </View>

              {/* hotel */}
              <View style={styles.comWrap}>
                {/* hotel and star */}
                <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
                  <Text style={[commonStyles.ns600]}>Hotel</Text>

                  {Array.from({length: 3}).map((_, index) => {
                    return (
                      <Image key={index} style={[size14]} source={icon.star} />
                    );
                  })}
                </View>

                <Text style={[commonStyles.ns600, commonStyles.font15]}>
                  Ramada Plaza by Wyndham Calgary Downtown
                </Text>

                <Text style={[commonStyles.ns400]}>
                  708 8th Avenue Southwest, T2P 1H2 Calgary, Canada
                </Text>

                <Text style={[commonStyles.ns600, {color: '#24AD53'}]}>
                  Great location — 8.8
                </Text>

                {/* rating */}
                <View style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                  <View style={styles.rating}>
                    <Text
                      style={[
                        commonStyles.ns600,
                        commonStyles.font13,
                        {color: white},
                      ]}>
                      7.3
                    </Text>
                  </View>

                  <Text style={[commonStyles.ns400, commonStyles.font13]}>
                    Good ·
                  </Text>
                  <Text style={[commonStyles.ns400, commonStyles.font13]}>
                    1,301 reviews
                  </Text>
                </View>

                {/* perks */}
                <View style={styles.perks}>
                  <View style={styles.roomPerks}>
                    <Image
                      style={size16}
                      tintColor={b1}
                      source={icon.pawprint}
                    />
                    <Text style={[commonStyles.ns400]}>Pets allowed</Text>
                  </View>

                  <View style={styles.roomPerks}>
                    <Image style={size16} tintColor={b1} source={icon.wifi} />
                    <Text style={[commonStyles.ns400]}>Free WiFi</Text>
                  </View>

                  <View style={styles.roomPerks}>
                    <Image
                      style={size16}
                      tintColor={b1}
                      source={icon.parkingArea}
                    />
                    <Text style={[commonStyles.ns400]}>Parking</Text>
                  </View>

                  <View style={styles.roomPerks}>
                    <Image
                      style={size16}
                      tintColor={b1}
                      source={icon.restaurant}
                    />
                    <Text style={[commonStyles.ns400]}>Restaurant</Text>
                  </View>

                  <View style={styles.roomPerks}>
                    <Image
                      style={size16}
                      tintColor={b1}
                      source={icon.swimming}
                    />
                    <Text style={[commonStyles.ns400]}>Swimming Pool</Text>
                  </View>
                </View>
              </View>

              {/* booking details */}
              <View style={[styles.comWrap, {paddingHorizontal: _ms(0)}]}>
                {/* top */}
                <View style={{paddingHorizontal: _ms(12)}}>
                  <Text style={[commonStyles.ns600, commonStyles.font15]}>
                    Your booking details
                  </Text>

                  {/* check in/ out */}
                  <View
                    style={[
                      commonStyles.commWrapTwo,
                      {marginTop: _mvs(10), gap: _ms(6)},
                    ]}>
                    <View style={[commonStyles.flexOne, {rowGap: _mvs(6)}]}>
                      <Text style={[commonStyles.ns400, commonStyles.font13]}>
                        Check - in
                      </Text>
                      <Text style={[commonStyles.ns600, commonStyles.font15]}>
                        Thu 21 Dec 2023
                      </Text>
                      <Text
                        style={[
                          commonStyles.ns600,
                          commonStyles.font13,
                          {color: b3},
                        ]}>
                        From 15:00
                      </Text>
                    </View>

                    <View style={[commonStyles.flexOne, {rowGap: _mvs(6)}]}>
                      <Text style={[commonStyles.ns400, commonStyles.font13]}>
                        Check - out
                      </Text>
                      <Text style={[commonStyles.ns600, commonStyles.font15]}>
                        Thu 4 Jan 2024
                      </Text>
                      <Text
                        style={[
                          commonStyles.ns600,
                          commonStyles.font13,
                          {color: b3},
                        ]}>
                        Until 11:00
                      </Text>
                    </View>
                  </View>

                  {/* stay duration */}
                  <View style={{marginTop: _mvs(10)}}>
                    <Text style={commonStyles.ns600}>
                      Total length of stay:
                    </Text>

                    <Text style={[commonStyles.ns600, {color: b3}]}>
                      2 weeks
                    </Text>
                  </View>
                </View>

                <View style={styles.line} />

                {/* bottom */}
                <View style={{paddingHorizontal: _ms(12)}}>
                  <View style={[commonStyles.commWrapTwo]}>
                    <View style={{rowGap: _mvs(6)}}>
                      <Text style={commonStyles.ns600}>You selected</Text>

                      <Text style={[commonStyles.ns600, commonStyles.font15]}>
                        1 room for 2 adults
                      </Text>
                    </View>

                    <TouchableOpacity>
                      <Image
                        style={[size12, {transform: [{rotate: '-90deg'}]}]}
                        tintColor={blue}
                        source={icon.rightArrow}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={{marginTop: _mvs(10)}}>
                    <Text style={[commonStyles.ns600]}>
                      1 x Queen Room with Balcony - Non-Smoking
                    </Text>

                    <Text style={commonStyles.ns400}>2 adults</Text>
                  </View>

                  <>
                    <TouchableOpacity
                      style={[
                        commonStyles.alignSelfFlexStart,
                        {marginTop: _mvs(10)},
                      ]}>
                      <Text style={[commonStyles.ns600, {color: blue}]}>
                        Change your selection
                      </Text>
                    </TouchableOpacity>
                  </>
                </View>
              </View>

              {/* your price summary component */}
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
              <View style={[styles.main, {paddingHorizontal: _ms(10)}]}>
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

              {/* limited supply */}
              <View style={styles.comWrapRed}>
                <View
                  style={[commonStyles.commWrapSeven, {columnGap: _ms(10)}]}>
                  <Image
                    style={[size22, {marginTop: _mvs(3)}]}
                    source={icon.alarm}
                  />

                  <View style={{rowGap: _mvs(10)}}>
                    <Text
                      style={[
                        commonStyles.ns700,
                        commonStyles.font15,
                        {color: blackTxt},
                      ]}>
                      Limited supply for your dates:
                    </Text>

                    <Text
                      style={[
                        commonStyles.ns400,
                        commonStyles.font13,
                        {color: blackTxt},
                      ]}>
                      47 three-star hotels like this are already unavailable on
                      our site
                    </Text>
                  </View>
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
            onPress={() => navigation.navigate('hotelpay')}>
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

export default HotelSummary;

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
    marginHorizontal: _ms(12),
    borderRadius: 4,
    elevation: 2,
    rowGap: _mvs(10),
    paddingVertical: _mvs(15),
    paddingHorizontal: _ms(12),
  },

  perks: {
    flexDirection: 'row',
    rowGap: _mvs(8),
    columnGap: _ms(10),
    flexWrap: 'wrap',
  },

  roomPerks: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: _ms(6),
  },

  line: {
    borderTopWidth: 1,
    borderTopColor: '#D8D8D8',
    marginHorizontal: _ms(2),
  },

  main: {
    backgroundColor: white,
    marginHorizontal: _ms(12),
    borderRadius: 4,
    elevation: 2,
    paddingVertical: _mvs(15),
    rowGap: _mvs(15),
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

  rating: {
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: b2,
    paddingHorizontal: _ms(9),
    paddingVertical: _mvs(3),
    alignItems: 'center',
    justifyContent: 'center',
  },

  comWrapRed: {
    backgroundColor: '#FFF5F5',
    marginHorizontal: _ms(12),
    borderRadius: 4,
    elevation: 2,
    paddingVertical: _mvs(15),
    rowGap: _mvs(15),
    paddingHorizontal: _ms(12),
    borderWidth: 1,
    borderColor: '#D4111E',
    marginBottom: _mvs(15),
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
