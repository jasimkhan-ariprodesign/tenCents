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
import React, {useState} from 'react';
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import {b1, white, blue, green, b3, bgColor, gs3} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import {
  _ms,
  _mvs,
  _vs,
  _width,
  checkIconStyle,
  size12,
  size15,
  size18,
  size24,
} from '../../utils/Responsive';

const HotelUserDetails = ({navigation}) => {
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
                  Enter your details
                </Text>
              </View>

              {/* user info wrapper */}
              <View style={styles.uiWrap}>
                {/* info */}
                <View style={styles.info}>
                  <Image style={size18} source={icon.info} />
                  <Text style={[commonStyles.ns600, commonStyles.font11]}>
                    Almost done! Just fill in the required info
                  </Text>
                </View>

                {/* user info */}
                <View style={styles.inputGrp}>
                  <TextInput
                    style={[styles.inputBox, commonStyles.ns400]}
                    placeholder={'First Name *'}
                    placeholderTextColor={b1}
                  />

                  <TextInput
                    style={[styles.inputBox, commonStyles.ns400]}
                    placeholder={'Last Name *'}
                    placeholderTextColor={b1}
                  />

                  <TextInput
                    style={[styles.inputBox, commonStyles.ns400]}
                    placeholder={'E-mail Address *'}
                    placeholderTextColor={b1}
                  />

                  <View style={commonStyles.commWrapSix}>
                    <Text style={[commonStyles.ns400, commonStyles.font11]}>
                      Confirmation email goes to this address
                    </Text>
                  </View>
                </View>

                {/* address */}
                <View style={{rowGap: _mvs(10)}}>
                  <Text style={[commonStyles.ns600]}>Your address*</Text>

                  <View style={styles.inputGrp}>
                    <TextInput
                      style={[styles.inputBox, commonStyles.ns400]}
                      placeholder={'Address *'}
                      placeholderTextColor={b1}
                    />

                    <TextInput
                      style={[styles.inputBox, commonStyles.ns400]}
                      placeholder={'City *'}
                      placeholderTextColor={b1}
                    />

                    <TextInput
                      style={[styles.inputBox, commonStyles.ns400]}
                      placeholder={'Zipcode *'}
                      placeholderTextColor={b1}
                    />

                    <TextInput
                      style={[styles.inputBox, commonStyles.ns400]}
                      placeholder={'Country/ Region*'}
                      placeholderTextColor={b1}
                    />

                    <TextInput
                      style={[styles.inputBox, commonStyles.ns400]}
                      placeholder={'Mobile Number*'}
                      placeholderTextColor={b1}
                    />

                    <Text style={[commonStyles.ns400, commonStyles.font10]}>
                      Needed by the property to validate your booking
                    </Text>
                  </View>

                  <View style={{rowGap: _mvs(10)}}>
                    <Text style={[commonStyles.ns600, commonStyles.font13]}>
                      Who are you booking for?
                    </Text>

                    <View
                      style={[
                        commonStyles.alignItemsFlexStart,
                        {rowGap: _mvs(6)},
                      ]}>
                      <TouchableOpacity
                        style={[
                          commonStyles.commWrapOne,
                          {columnGap: _ms(10)},
                        ]}>
                        <View style={styles.circle} />

                        <Text style={[commonStyles.ns400]}>
                          I am the main guest
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={[
                          commonStyles.commWrapOne,
                          {columnGap: _ms(10)},
                        ]}>
                        <View style={styles.circle} />

                        <Text style={[commonStyles.ns400]}>
                          Booking is for someone else
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{rowGap: _mvs(10)}}>
                    <Text style={[commonStyles.ns600, commonStyles.font13]}>
                      Are you travelling for work?
                    </Text>

                    <View
                      style={[
                        commonStyles.commWrapSeven,
                        {columnGap: _ms(15)},
                      ]}>
                      <TouchableOpacity
                        style={[
                          commonStyles.commWrapOne,
                          {columnGap: _ms(10)},
                        ]}>
                        <View style={styles.circle} />

                        <Text style={commonStyles.ns400}>Yes</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={[
                          commonStyles.commWrapOne,
                          {columnGap: _ms(10)},
                        ]}>
                        <View style={styles.circle} />

                        <Text style={commonStyles.ns400}>No</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>

              {/* room details */}
              <View style={styles.uiWrap}>
                <Text style={commonStyles.ns600}>
                  Queen Room with Balcony - Non-Smoking
                </Text>

                <View style={[commonStyles.commWrapOne, {columnGap: _ms(5)}]}>
                  <Image
                    style={size15}
                    source={icon.location}
                    tintColor={'#24AD53'}
                  />
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font11,
                      {color: green},
                    ]}>
                    Free cancellation before 20 December 2023
                  </Text>
                  <Image style={size15} source={icon.danger} />
                </View>

                <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
                  <Image style={size15} source={icon.people} />
                  <Text style={[commonStyles.ns400]}>Guests: 2 adults</Text>
                  <Image
                    style={size15}
                    source={icon.question}
                    tintColor={blue}
                  />
                </View>

                <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
                  <Image style={size15} source={icon.clean} />
                  <Text style={[commonStyles.ns400]}>
                    Cleanliness score - 7.9
                  </Text>
                </View>

                <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
                  <Image
                    style={size15}
                    source={icon.noSmoking}
                    tintColor={b1}
                  />
                  <Text style={[commonStyles.ns400]}>No smoking</Text>
                </View>

                <View style={styles.flexWrapStyle}>
                  <View style={styles.perks}>
                    <Image style={size15} tintColor={gs3} source={icon.plans} />
                    <Text style={[commonStyles.ns400, {color: gs3}]}>
                      26 m²
                    </Text>
                  </View>

                  <View style={styles.perks}>
                    <Image
                      style={size15}
                      tintColor={gs3}
                      source={icon.coffeeShop}
                    />
                    <Text style={[commonStyles.ns400, {color: gs3}]}>
                      Balcony
                    </Text>
                  </View>

                  <View style={styles.perks}>
                    <Image style={size15} tintColor={gs3} source={icon.ledTv} />
                    <Text style={[commonStyles.ns400, {color: gs3}]}>
                      Flat-screen TV
                    </Text>
                  </View>

                  <View style={styles.perks}>
                    <Image
                      style={size15}
                      tintColor={gs3}
                      source={icon.coffeeShop}
                    />
                    <Text style={[commonStyles.ns400, {color: gs3}]}>
                      Terrace
                    </Text>
                  </View>

                  <View style={styles.perks}>
                    <Image
                      style={size15}
                      tintColor={gs3}
                      source={icon.swimming}
                    />
                    <Text style={[commonStyles.ns400, {color: gs3}]}>
                      Pool view
                    </Text>
                  </View>

                  <View style={styles.perks}>
                    <Image
                      style={size15}
                      tintColor={gs3}
                      source={icon.swimming}
                    />
                    <Text style={[commonStyles.ns400, {color: gs3}]}>
                      Pool with a view
                    </Text>
                  </View>
                </View>

                <View style={styles.inputGrp}>
                  <TextInput
                    style={[styles.inputBox, commonStyles.ns400]}
                    placeholder={'Full Guest Name*'}
                    placeholderTextColor={b1}
                  />
                </View>
              </View>

              {/* arrival time */}
              <View style={[styles.uiWrap, {marginBottom: _mvs(15)}]}>
                <Text style={[commonStyles.ns600]}>Your arrival time</Text>

                <View style={{marginTop: _mvs(10), rowGap: _mvs(10)}}>
                  <View
                    style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                    <View style={styles.imageCon}>
                      <Image
                        style={size12}
                        tintColor={gs3}
                        source={icon.check}
                      />
                    </View>

                    <Text style={[commonStyles.ns400, commonStyles.flexOne]}>
                      Your room will be ready for check-in at 15:00
                    </Text>
                  </View>

                  <View
                    style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                    <Image
                      style={size24}
                      tintColor={gs3}
                      source={icon.reception}
                    />

                    <Text style={[commonStyles.ns400, commonStyles.flexOne]}>
                      24-hour front desk - Help whenever you need it!
                    </Text>
                  </View>

                  <View style={[commonStyles.commWrapOne, {columnGap: _ms(5)}]}>
                    <Text style={[commonStyles.ns600]}>
                      Add your estimated arrival time
                    </Text>

                    <Text
                      style={[
                        commonStyles.ns600,
                        commonStyles.font12,
                        {color: b3},
                      ]}>
                      (optional)
                    </Text>
                  </View>

                  <View style={{rowGap: _mvs(6)}}>
                    <View style={[styles.inputGrpTime]}>
                      <TextInput
                        style={[styles.inputBoxTime, commonStyles.ns400]}
                        placeholder={'13:00 - 14:00'}
                        placeholderTextColor={b1}
                        editable={false}
                      />

                      <TouchableOpacity
                        style={[
                          commonStyles.commWrapSix,
                          {marginRight: _ms(8)},
                        ]}>
                        <Image
                          style={[
                            checkIconStyle,
                            {transform: [{rotate: '-90deg'}]},
                          ]}
                          source={icon.rightArrow}
                          tintColor={b3}
                        />
                        <Image
                          style={[
                            checkIconStyle,
                            {transform: [{rotate: '90deg'}]},
                          ]}
                          source={icon.rightArrow}
                          tintColor={b3}
                        />
                      </TouchableOpacity>
                    </View>

                    <Text
                      style={[commonStyles.ns600, {fontSize: 12, color: b3}]}>
                      Time is for Calgary time zone
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Reserve */}

        <View style={styles.bottomFixedView}>
          <View style={[commonStyles.flexOne, {rowGap: _mvs(3)}]}>
            <Text style={[commonStyles.ns600, {color: white}]}>Price</Text>
            <Text style={[commonStyles.ns600, {color: white}]}>
              $1320 + Taxes-
            </Text>
          </View>

          <TouchableOpacity
            style={styles.reserveBtn}
            onPress={() => navigation.navigate('hotelps')}>
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

export default HotelUserDetails;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: bgColor,
  },

  body: {
    marginTop: _mvs(15),
    flex: 1,
    // backgroundColor: white,
  },

  uiWrap: {
    backgroundColor: white,
    marginHorizontal: _ms(7),
    borderRadius: 8,
    elevation: 3,
    paddingVertical: _mvs(15),
    paddingHorizontal: _ms(10),
    rowGap: _mvs(10),
  },

  info: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#D8D8D8',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: _mvs(8),
    paddingLeft: _ms(15),
    gap: _ms(6),
    marginRight: _ms(10),
  },

  inputGrp: {
    rowGap: _mvs(6),
    marginRight: _ms(35),
  },

  inputBox: {
    backgroundColor: white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    padding: 0,
    paddingHorizontal: _ms(8),
    height: _mvs(40),
  },

  flexWrapStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    columnGap: _ms(6),
    rowGap: _mvs(6),
  },

  perks: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: _ms(7),
    backgroundColor: '#E7FDE9',
    paddingVertical: _mvs(2.5),
    paddingHorizontal: _ms(4),
    borderWidth: 1,
    borderColor: '#97E59C',
    borderRadius: 2,
  },

  imageCon: {
    borderColor: '#24AD53',
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: _ms(24),
    height: _ms(24),
    borderRadius: 20,
  },

  inputGrpTime: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: _ms(35),
  },

  inputBoxTime: {
    backgroundColor: white,
    borderRadius: 4,
    padding: 0,
    paddingHorizontal: _ms(10),
    height: _mvs(40),
    flex: 1,
  },

  circle: {
    width: _ms(16),
    height: _ms(16),
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: blue,
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
