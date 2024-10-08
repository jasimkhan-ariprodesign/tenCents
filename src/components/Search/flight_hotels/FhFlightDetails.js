import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import icon from '../../../config/IconAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import {b1, b2, b3, bgColor, blue, white} from '../../../config/colors';
import {_ms, _mvs, backIconStyle} from '../../utils/Responsive';

const FhFlightDetails = ({navigation, route}) => {
  const flight = route?.params;
  // console.log('flight data ->', flight);
  return (
    <View style={[styles.parent]}>
      <StatusBar translucent barStyle={'dark-content'} />
      <View style={[commonStyles.flexOne, {marginTop: _mvs(40)}]}>
        {/* nav */}
        <TouchableOpacity
          style={styles.nav}
          onPress={() => navigation.goBack()}>
          <Image style={backIconStyle} source={icon.next} />

          <Text style={[commonStyles.ns600, {fontSize: _ms(16)}]}>
            FLIGHT DETAILS
          </Text>
        </TouchableOpacity>

        <View style={[commonStyles.flexOne]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[styles.childOne]}>
              {/* Depart */}
              <Text style={[commonStyles.ns600]}>Depart Fri, Dec 22</Text>

              {/* vistara */}
              <View
                style={[
                  commonStyles.commWrapOne,
                  {columnGap: _ms(5), flexWrap: 'wrap', rowGap: _mvs(5)},
                ]}>
                <Image style={styles.airlinesIcon} source={icon.vistara} />
                <Text style={[commonStyles.lbB1, commonStyles.font14]}>
                  Vistara
                </Text>
                <Text style={[commonStyles.lbB1, commonStyles.font14]}>|</Text>
                <Text style={[commonStyles.ns400, commonStyles.font9]}>
                  Flight 340
                </Text>
                <Text style={[commonStyles.lbB1, commonStyles.font14]}>|</Text>
                <Text style={[commonStyles.ns400, commonStyles.font9]}>
                  Aircraft 320
                </Text>
                <Text style={[commonStyles.lbB1, commonStyles.font14]}>|</Text>
                <Text style={[commonStyles.ns400, commonStyles.font9]}>
                  Flight Duration : 2h 30m
                </Text>
              </View>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(30)}]}>
                <View style={{rowGap: _mvs(10)}}>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font12,
                      {color: b3},
                    ]}>
                    DAC
                  </Text>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    01.00
                  </Text>
                </View>

                <Image style={styles.arrowIcon} source={icon.longArrow} />

                <View style={{rowGap: _mvs(10)}}>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font12,
                      {color: b3},
                    ]}>
                    BOM
                  </Text>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    09.45
                  </Text>
                </View>
              </View>

              {/* air canada */}
              <View
                style={[
                  commonStyles.commWrapOne,
                  {columnGap: _ms(5), flexWrap: 'wrap', rowGap: _mvs(5)},
                ]}>
                <Image style={styles.airlinesIcon} source={icon.canada} />

                <Text style={[commonStyles.lbB1, commonStyles.font14]}>
                  Air Canada
                </Text>

                <Text style={[commonStyles.lbB1, commonStyles.font14]}>|</Text>

                <Text style={[commonStyles.ns400, commonStyles.font9]}>
                  Flight 340
                </Text>

                <Text style={[commonStyles.lbB1, commonStyles.font14]}>|</Text>

                <Text style={[commonStyles.ns400, commonStyles.font9]}>
                  Aircraft 320
                </Text>

                <Text style={[commonStyles.lbB1, commonStyles.font14]}>|</Text>

                <Text style={[commonStyles.ns400, commonStyles.font9]}>
                  Flight Duration : 2h 30m
                </Text>
              </View>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(30)}]}>
                <View style={{rowGap: _mvs(10)}}>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font12,
                      {color: b3},
                    ]}>
                    BOM
                  </Text>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    01.00
                  </Text>
                </View>

                <Image style={styles.arrowIcon} source={icon.longArrow} />

                <View style={{rowGap: _mvs(10)}}>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font12,
                      {color: b3},
                    ]}>
                    LHR
                  </Text>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    09.45
                  </Text>
                </View>
              </View>

              <Text style={[commonStyles.ns600, {color: b3}]}>
                Layover: 14h 20m
              </Text>

              {/* air canada */}
              <View
                style={[
                  commonStyles.commWrapOne,
                  {columnGap: _ms(5), flexWrap: 'wrap', rowGap: _mvs(5)},
                ]}>
                <Image style={styles.airlinesIcon} source={icon.canada} />

                <Text style={[commonStyles.lbB1, commonStyles.font14]}>
                  Air Canada
                </Text>

                <Text style={[commonStyles.lbB1, commonStyles.font14]}>|</Text>

                <Text style={[commonStyles.ns400, commonStyles.font9]}>
                  Flight 340
                </Text>

                <Text style={[commonStyles.lbB1, commonStyles.font14]}>|</Text>

                <Text style={[commonStyles.ns400, commonStyles.font9]}>
                  Aircraft 320
                </Text>

                <Text style={[commonStyles.lbB1, commonStyles.font14]}>|</Text>

                <Text style={[commonStyles.ns400, commonStyles.font9]}>
                  Flight Duration : 2h 30m
                </Text>
              </View>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(30)}]}>
                <View style={{rowGap: _mvs(10)}}>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font12,
                      {color: b3},
                    ]}>
                    LHR
                  </Text>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    01.00
                  </Text>
                </View>

                <Image style={styles.arrowIcon} source={icon.longArrow} />

                <View style={{rowGap: 10}}>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font12,
                      {color: b3},
                    ]}>
                    YYC
                  </Text>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    09.45
                  </Text>
                </View>
              </View>

              <Text style={[commonStyles.ns600, {color: b3}]}>
                Layover: 3h 40m
              </Text>

              <Text
                style={[
                  commonStyles.ns400,
                  {color: '#8A6D3B', textAlign: 'center'},
                ]}>
                A{' '}
                <Text
                  onPress={() => Alert.alert('Transit Visa')}
                  style={[
                    commonStyles.ns400,
                    {color: blue, textDecorationLine: 'underline'},
                  ]}>
                  Transit Visa
                </Text>{' '}
                may be required when connecting through Canada
              </Text>

              {/* duration */}
              <Text style={[commonStyles.ns600]}>
                Total Trip Duration : 40h 15m
              </Text>

              <View style={styles.childTwo}>
                {/* personal bag */}
                <View style={[commonStyles.commWrapOne, styles.con]}>
                  <View style={[styles.seatWrap]}>
                    <Image style={styles.icon} source={icon.backpack} />
                  </View>

                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font9,
                      {color: b3},
                    ]}>
                    1 Personal Item
                  </Text>
                </View>

                {/* carry-on bag */}
                <View style={[commonStyles.commWrapOne, styles.con]}>
                  <View style={[styles.seatWrap]}>
                    <Image style={styles.icon} source={icon.duffleBag} />
                  </View>

                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font9,
                      {color: b3},
                    ]}>
                    1 Carry-on bag
                  </Text>
                </View>

                {/* bag */}
                <View
                  style={[
                    commonStyles.commWrapOne,
                    styles.con,
                    {borderRightWidth: 0},
                  ]}>
                  <View style={[styles.seatWrap]}>
                    <Image style={styles.icon} source={icon.baggage} />
                  </View>

                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font9,
                      {color: b3},
                    ]}>
                    2 Checked Bags
                  </Text>
                </View>
              </View>

              <View style={styles.btnCon}>
                <TouchableOpacity>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font10,
                      {color: blue},
                    ]}>
                    Air Canada
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font10,
                      {color: blue},
                    ]}>
                    Baggage Policy
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.dottedLine} />

              {/* Return    air canada */}

              <Text style={[commonStyles.ns600]}>Return Thu, Jan 04</Text>

              <View
                style={[
                  commonStyles.commWrapOne,
                  {columnGap: _ms(5), flexWrap: 'wrap', rowGap: _mvs(5)},
                ]}>
                <Image style={styles.airlinesIcon} source={icon.vistara} />
                <Text style={[commonStyles.lbB1, commonStyles.font14]}>
                  Vistara
                </Text>
                <Text style={[commonStyles.lbB1, commonStyles.font14]}>|</Text>
                <Text style={[commonStyles.ns400, commonStyles.font9]}>
                  Flight 340
                </Text>
                <Text style={[commonStyles.lbB1, commonStyles.font14]}>|</Text>
                <Text style={[commonStyles.ns400, commonStyles.font9]}>
                  Aircraft 320
                </Text>
                <Text style={[commonStyles.lbB1, commonStyles.font14]}>|</Text>
                <Text style={[commonStyles.ns400, commonStyles.font9]}>
                  Flight Duration : 2h 30m
                </Text>
              </View>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(30)}]}>
                <View style={{rowGap: _mvs(10)}}>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font12,
                      {color: b3},
                    ]}>
                    DAC
                  </Text>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    01.00
                  </Text>
                </View>

                <Image style={styles.arrowIcon} source={icon.longArrow} />

                <View style={{rowGap: _mvs(10)}}>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font12,
                      {color: b3},
                    ]}>
                    BOM
                  </Text>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    09.45
                  </Text>
                </View>
              </View>

              {/* air canada */}
              <View
                style={[
                  commonStyles.commWrapOne,
                  {columnGap: _ms(5), flexWrap: 'wrap', rowGap: _mvs(5)},
                ]}>
                <Image style={styles.airlinesIcon} source={icon.canada} />

                <Text style={[commonStyles.lbB1, commonStyles.font14]}>
                  Air Canada
                </Text>

                <Text style={[commonStyles.lbB1, commonStyles.font14]}>|</Text>

                <Text style={[commonStyles.ns400, commonStyles.font9]}>
                  Flight 340
                </Text>

                <Text style={[commonStyles.lbB1, commonStyles.font14]}>|</Text>

                <Text style={[commonStyles.ns400, commonStyles.font9]}>
                  Aircraft 320
                </Text>

                <Text style={[commonStyles.lbB1, commonStyles.font14]}>|</Text>

                <Text style={[commonStyles.ns400, commonStyles.font9]}>
                  Flight Duration : 2h 30m
                </Text>
              </View>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(30)}]}>
                <View style={{rowGap: _mvs(10)}}>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font12,
                      {color: b3},
                    ]}>
                    BOM
                  </Text>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    01.00
                  </Text>
                </View>

                <Image style={styles.arrowIcon} source={icon.longArrow} />

                <View style={{rowGap: _mvs(10)}}>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font12,
                      {color: b3},
                    ]}>
                    LHR
                  </Text>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    09.45
                  </Text>
                </View>
              </View>

              <Text style={[commonStyles.ns600, {color: b3}]}>
                Layover: 14h 20m
              </Text>

              {/* air canada */}
              <View
                style={[
                  commonStyles.commWrapOne,
                  {columnGap: _ms(5), flexWrap: 'wrap', rowGap: _mvs(5)},
                ]}>
                <Image style={styles.airlinesIcon} source={icon.canada} />

                <Text style={[commonStyles.lbB1, commonStyles.font14]}>
                  Air Canada
                </Text>

                <Text style={[commonStyles.lbB1, commonStyles.font14]}>|</Text>

                <Text style={[commonStyles.ns400, commonStyles.font9]}>
                  Flight 340
                </Text>

                <Text style={[commonStyles.lbB1, commonStyles.font14]}>|</Text>

                <Text style={[commonStyles.ns400, commonStyles.font9]}>
                  Aircraft 320
                </Text>

                <Text style={[commonStyles.lbB1, commonStyles.font14]}>|</Text>

                <Text style={[commonStyles.ns400, commonStyles.font9]}>
                  Flight Duration : 2h 30m
                </Text>
              </View>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(30)}]}>
                <View style={{rowGap: _mvs(10)}}>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font12,
                      {color: b3},
                    ]}>
                    LHR
                  </Text>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    01.00
                  </Text>
                </View>

                <Image style={styles.arrowIcon} source={icon.longArrow} />

                <View style={{rowGap: 10}}>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font12,
                      {color: b3},
                    ]}>
                    YYC
                  </Text>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    09.45
                  </Text>
                </View>
              </View>

              <Text style={[commonStyles.ns600, {color: b3}]}>
                Layover: 3h 40m
              </Text>

              <Text
                style={[
                  commonStyles.ns400,
                  {color: '#8A6D3B', textAlign: 'center'},
                ]}>
                A{' '}
                <Text
                  onPress={() => Alert.alert('Transit Visa')}
                  style={[
                    commonStyles.ns400,
                    {color: blue, textDecorationLine: 'underline'},
                  ]}>
                  Transit Visa
                </Text>{' '}
                may be required when connecting through Canada
              </Text>

              {/* duration */}
              <Text style={[commonStyles.ns600]}>
                Total Trip Duration : 40h 15m
              </Text>

              <View style={styles.childTwo}>
                {/* personal bag */}
                <View style={[commonStyles.commWrapOne, styles.con]}>
                  <View style={[styles.seatWrap]}>
                    <Image style={styles.icon} source={icon.backpack} />
                  </View>

                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font9,
                      {color: b3},
                    ]}>
                    1 Personal Item
                  </Text>
                </View>

                {/* carry-on bag */}
                <View style={[commonStyles.commWrapOne, styles.con]}>
                  <View style={[styles.seatWrap]}>
                    <Image style={styles.icon} source={icon.duffleBag} />
                  </View>

                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font9,
                      {color: b3},
                    ]}>
                    1 Carry-on bag
                  </Text>
                </View>

                {/* bag */}
                <View
                  style={[
                    commonStyles.commWrapOne,
                    styles.con,
                    {borderRightWidth: 0},
                  ]}>
                  <View style={[styles.seatWrap]}>
                    <Image style={styles.icon} source={icon.baggage} />
                  </View>

                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font9,
                      {color: b3},
                    ]}>
                    2 Checked Bags
                  </Text>
                </View>
              </View>

              <View style={styles.btnCon}>
                <TouchableOpacity>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font10,
                      {color: blue},
                    ]}>
                    Air Canada
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font10,
                      {color: blue},
                    ]}>
                    Baggage Policy
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default FhFlightDetails;

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: _ms(16),
    alignItems: 'center',
    justifyContent: 'center',
    gap: _ms(10),
    marginBottom: _mvs(20),
  },

  seatWrap: {
    backgroundColor: 'rgba(33, 180, 226, 0.2)',
    borderRadius: 22,
    width: _ms(16),
    height: _ms(16),
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: _ms(11),
    height: _ms(11),
    tintColor: blue,
  },

  dottedLine: {
    borderTopWidth: 1.9,
    borderStyle: 'dotted',
    borderTopColor: b3,
    marginVertical: _mvs(25),
  },

  // --

  parent: {
    flex: 1,
    backgroundColor: bgColor,
  },

  childOne: {
    rowGap: _mvs(15),
    marginHorizontal: _ms(5),
    backgroundColor: white,
    paddingVertical: _mvs(20),
    paddingHorizontal: _ms(10),
    elevation: 1,
  },

  airlinesIcon: {
    width: _ms(16),
    height: _ms(16),
    resizeMode: 'stretch',
  },

  arrowIcon: {
    width: _ms(70),
    height: _ms(30),
    tintColor: b1,
    resizeMode: 'stretch',
  },

  childTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: '#000',
  },

  con: {
    columnGap: _ms(3),
    paddingHorizontal: _ms(6),
    borderRightWidth: 1,
    borderColor: '#e6e6e6',
    paddingVertical: _mvs(2),
    alignItems: 'center',
  },

  btnCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    columnGap: 15,
    // backgroundColor: 'red',
  },
});
