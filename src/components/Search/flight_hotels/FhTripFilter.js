import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import icon from '../../../config/IconAssets';
import {b1, b2, b3, blue, white} from '../../../config/colors';
import commonStyles from '../../../assets/css/CommonFonts';
import {
  _fonts,
  _ms,
  _mvs,
  _width,
  backIconStyle,
  size15,
} from '../../utils/Responsive';

const {width} = Dimensions.get('window');

const FhTripFilter = ({navigation}) => {
  const [airType, setAirType] = useState('air');

  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar translucent={true} barStyle={'dark-content'} />
      <View style={styles.Wrap}>
        {/* nav */}
        <TouchableOpacity
          style={styles.nav}
          onPress={() => navigation.goBack()}>
          <Image
            style={[backIconStyle, {marginTop: _mvs(3)}]}
            source={icon.next}
          />

          <Text style={[commonStyles.ns600, {fontSize: _ms(16)}]}>FILTER</Text>
        </TouchableOpacity>

        <View style={[commonStyles.flexOne, {marginTop: _mvs(20)}]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                rowGap: _mvs(15),
                width: _width - _ms(80),
                marginLeft: _ms(14),
              }}>
              {/* stops */}
              <View>
                <Text style={[commonStyles.ns600, commonStyles.font16]}>
                  Stops
                </Text>

                <View style={styles.stopOptn}>
                  <TouchableOpacity style={styles.optnBtn}>
                    <Text style={styles.stopBtnText}>1 Stop</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.optnBtn}>
                    <Text style={styles.stopBtnText}>Non - Stops</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Flight Slot Times */}
              <View>
                <Text style={[commonStyles.ns600, commonStyles.font16]}>
                  Flight Slot Times
                </Text>

                <View
                  style={[
                    styles.stopOptn,
                    {flexWrap: 'wrap', rowGap: _mvs(15)},
                  ]}>
                  <TouchableOpacity style={styles.optnBtn}>
                    <Text style={styles.stopBtnText}>Morning 6 AM - 12</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.optnBtn}>
                    <Text style={styles.stopBtnText}>Noon 12 PM - 6</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.optnBtn}>
                    <Text style={styles.stopBtnText}>Evening 6 PM - 12</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.optnBtn}>
                    <Text style={styles.stopBtnText}>Night 12 AM - 6</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Flight Times */}
              <View>
                <Text style={[commonStyles.ns600, commonStyles.font16]}>
                  Flight Times
                </Text>

                {/* going */}
                <View style={{marginTop: _mvs(10)}}>
                  <Text style={[commonStyles.ns600]}>
                    Going
                    <Text style={[commonStyles.ns400, commonStyles.font14]}>
                      {' '}
                      to Alberta (YYC)
                    </Text>
                  </Text>

                  <Text
                    style={[
                      commonStyles.ns400,
                      {color: b3, marginTop: _mvs(5)},
                    ]}>
                    Depart: 1:00 am - 11:45 pm
                  </Text>

                  <View
                    style={[commonStyles.commWrapOne, {marginTop: _mvs(10)}]}>
                    <View style={styles.destDot} />
                    <View style={styles.destPath} />
                    <View style={styles.destDot} />
                  </View>
                </View>

                {/* return */}
                <View style={{marginTop: _mvs(10)}}>
                  <Text style={[commonStyles.ns600]}>
                    Returning
                    <Text style={[commonStyles.ns400, commonStyles.font14]}>
                      {' '}
                      to Dhaka (DAC)
                    </Text>
                  </Text>

                  <Text
                    style={[
                      commonStyles.ns400,
                      {color: b3, marginTop: _mvs(5)},
                    ]}>
                    Return: 12:45 am - 9:00 pm
                  </Text>

                  <View
                    style={[commonStyles.commWrapOne, {marginTop: _mvs(10)}]}>
                    <View style={styles.destDot} />
                    <View style={styles.destPath} />
                    <View style={styles.destDot} />
                  </View>
                </View>

                {/* arrival time */}
                <TouchableOpacity
                  style={[
                    commonStyles.commWrapOne,
                    commonStyles.flexStart,
                    {marginTop: _mvs(15), columnGap: _ms(10)},
                  ]}>
                  <Image
                    style={[
                      size15,
                      {transform: [{rotate: '90deg'}], tintColor: blue},
                    ]}
                    source={icon.rightArrow}
                  />

                  <Text style={[commonStyles.ns600, {color: blue}]}>
                    Show Arrival Times
                  </Text>
                </TouchableOpacity>
              </View>

              {/* duration */}
              <View>
                <Text style={[commonStyles.ns600, commonStyles.font16]}>
                  Duration
                </Text>

                {/* going */}
                <View style={{marginTop: _mvs(10)}}>
                  <Text style={[commonStyles.ns600]}>
                    Going
                    <Text style={[commonStyles.ns400, commonStyles.font14]}>
                      {' '}
                      to Alberta (YYC)
                    </Text>
                  </Text>

                  <Text
                    style={[
                      commonStyles.ns400,
                      {color: b3, marginTop: _mvs(5)},
                    ]}>
                    Layover Duration: up to 27h 00m
                  </Text>

                  <View
                    style={[commonStyles.commWrapOne, {marginTop: _mvs(10)}]}>
                    <View style={styles.destDot} />
                    <View style={styles.destPath} />
                    <View style={styles.destDot} />
                  </View>
                </View>

                {/* return */}
                <View style={{marginTop: _mvs(10)}}>
                  <Text style={[commonStyles.ns600]}>
                    Returning
                    <Text style={[commonStyles.ns400, commonStyles.font14]}>
                      {' '}
                      to Dhaka (DAC)
                    </Text>
                  </Text>

                  <Text
                    style={[
                      commonStyles.ns400,
                      {color: b3, marginTop: _mvs(5)},
                    ]}>
                    Layover Duration: up to 29h 45m
                  </Text>

                  <View
                    style={[commonStyles.commWrapOne, {marginTop: _mvs(10)}]}>
                    <View style={styles.destDot} />
                    <View style={styles.destPath} />
                    <View style={styles.destDot} />
                  </View>
                </View>

                {/* total duration */}
                <TouchableOpacity style={styles.showTotalDurations}>
                  <View style={styles.squareBox} />
                  <Text
                    style={[
                      commonStyles.ns600,
                      commonStyles.font13,
                      {color: blue},
                    ]}>
                    Show Total Durations
                  </Text>
                </TouchableOpacity>
              </View>

              {/* depart/return */}
              <View style={{marginRight: _ms(15)}}>
                <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
                  <TouchableOpacity>
                    <View style={styles.dotOutline} />
                  </TouchableOpacity>

                  <Text style={[commonStyles.ns400, commonStyles.font14]}>
                    Same Depart/Return Airport
                  </Text>
                </View>

                <View
                  style={[commonStyles.commWrapSeven, {alignSelf: 'flex-end'}]}>
                  <Text style={[commonStyles.ns600, commonStyles.font14]}>
                    USD 1,937
                  </Text>
                  <Text style={[commonStyles.ns600, commonStyles.font11]}>
                    .99
                  </Text>
                </View>
              </View>

              {/* Departing from */}
              <View style={{marginRight: _ms(15)}}>
                <Text style={[commonStyles.ns600]}>Departing from</Text>

                <View style={[commonStyles.commWrapTwo, {marginTop: _mvs(8)}]}>
                  <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
                    <TouchableOpacity>
                      <View style={styles.dotOutline} />
                    </TouchableOpacity>

                    <Text
                      style={[
                        commonStyles.ns400,
                        commonStyles.font14,
                        {color: b3},
                      ]}>
                      DAC - Dhaka
                    </Text>
                  </View>

                  <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
                    <Text
                      style={[
                        commonStyles.ns400,
                        commonStyles.font14,
                        {color: b3},
                      ]}>
                      USD 1,937
                    </Text>
                    <Text
                      style={[
                        commonStyles.ns600,
                        commonStyles.font11,
                        {color: b3},
                      ]}>
                      .99
                    </Text>
                  </View>
                </View>
              </View>

              {/* Arriving at */}
              <View style={{marginRight: _ms(15)}}>
                <Text style={[commonStyles.ns600]}>Arriving at</Text>
                <View style={[commonStyles.commWrapTwo, {marginTop: _mvs(8)}]}>
                  <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
                    <TouchableOpacity>
                      <View style={styles.dotOutline} />
                    </TouchableOpacity>

                    <Text
                      style={[
                        commonStyles.ns400,
                        commonStyles.font14,
                        {color: b3},
                      ]}>
                      YYC - Calgary
                    </Text>
                  </View>

                  <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
                    <Text style={[commonStyles.ns600, {color: b3}]}>
                      USD 1,937
                    </Text>
                    <Text
                      style={[
                        commonStyles.ns600,
                        commonStyles.font11,
                        {color: b3},
                      ]}>
                      .99
                    </Text>
                  </View>
                </View>
              </View>

              {/* connecting in */}
              <View style={{rowGap: _mvs(8)}}>
                <Text style={[commonStyles.ns600]}>Connecting in</Text>

                <Text
                  style={[
                    commonStyles.ns400,
                    commonStyles.font14,
                    {color: b3},
                  ]}>
                  BOM - Mumbai
                </Text>
                <Text
                  style={[
                    commonStyles.ns400,
                    commonStyles.font14,
                    {color: b3},
                  ]}>
                  LHR - London Heathrow
                </Text>
                <Text
                  style={[
                    commonStyles.ns400,
                    commonStyles.font14,
                    {color: b3},
                  ]}>
                  FRA - Frankfurt
                </Text>

                {/* Show all connecting */}
                <TouchableOpacity
                  style={[
                    commonStyles.commWrapOne,
                    commonStyles.flexStart,
                    {marginTop: _mvs(15), columnGap: _ms(10)},
                  ]}>
                  <Image
                    style={[
                      size15,
                      {transform: [{rotate: '90deg'}], tintColor: blue},
                    ]}
                    source={icon.rightArrow}
                  />

                  <Text style={[commonStyles.ns600, {color: blue}]}>
                    Show all connecting
                  </Text>
                </TouchableOpacity>
              </View>
              {/* airlines */}
              <View style={{marginRight: _ms(15), rowGap: _mvs(10)}}>
                <Text style={[commonStyles.ns600]}>Airlines</Text>

                {/* btn */}
                <View style={[commonStyles.commWrapOne, styles.btnCon, {}]}>
                  <TouchableOpacity
                    style={[
                      airType === 'air' ? styles.airBtnActive : styles.airBtn,
                      styles.leftBtn,
                    ]}
                    onPress={() => setAirType('air')}>
                    <Text
                      style={
                        airType === 'air'
                          ? styles.airBtnTxtActive
                          : styles.airBtnTxt
                      }>
                      By Airline
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      airType === 'aln' ? styles.airBtnActive : styles.airBtn,
                      styles.rightBtn,
                    ]}
                    onPress={() => setAirType('aln')}>
                    <Text
                      style={
                        airType === 'aln'
                          ? styles.airBtnTxtActive
                          : styles.airBtnTxt
                      }>
                      By Alliances
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* airline names and cost */}
                <View
                  style={{
                    marginHorizontal: _ms(5),
                    rowGap: _mvs(10),
                  }}>
                  {/* canada */}
                  <View style={[commonStyles.commWrapThree]}>
                    <View>
                      <Text style={[commonStyles.ns400, commonStyles.font14]}>
                        Air Canada
                      </Text>
                      <Text style={[commonStyles.ns400]}>(with others)</Text>
                    </View>

                    <View style={commonStyles.commWrapSeven}>
                      <Text
                        style={[
                          commonStyles.ns400,
                          commonStyles.font15,
                          {color: b3},
                        ]}>
                        USD 1,937
                      </Text>
                      <Text
                        style={[
                          commonStyles.ns400,
                          commonStyles.font11,
                          {color: b3},
                        ]}>
                        .99
                      </Text>
                    </View>
                  </View>

                  {/* India/ Bharat */}
                  <View style={[commonStyles.commWrapThree]}>
                    <View>
                      <Text style={[commonStyles.ns400, commonStyles.font14]}>
                        Air India
                      </Text>
                      <Text style={[commonStyles.ns400]}>(with others)</Text>
                    </View>

                    <View style={commonStyles.commWrapSeven}>
                      <Text
                        style={[
                          commonStyles.ns400,
                          commonStyles.font15,
                          {color: b3},
                        ]}>
                        USD 2,937
                      </Text>
                      <Text
                        style={[
                          commonStyles.ns400,
                          commonStyles.font11,
                          {color: b3},
                        ]}>
                        .99
                      </Text>
                    </View>
                  </View>

                  {/* alaska */}
                  <View style={[commonStyles.commWrapThree]}>
                    <View>
                      <Text style={[commonStyles.ns400, commonStyles.font14]}>
                        Alaska Airlines
                      </Text>
                      <Text style={[commonStyles.ns400]}>(with others)</Text>
                    </View>

                    <View style={commonStyles.commWrapSeven}>
                      <Text
                        style={[
                          commonStyles.ns400,
                          commonStyles.font15,
                          {color: b3},
                        ]}>
                        USD 2,460
                      </Text>
                      <Text
                        style={[
                          commonStyles.ns400,
                          commonStyles.font11,
                          {color: b3},
                        ]}>
                        .99
                      </Text>
                    </View>
                  </View>

                  {/* american */}
                  <View style={[commonStyles.commWrapThree]}>
                    <View>
                      <Text style={[commonStyles.ns400, commonStyles.font14]}>
                        American Airlines
                      </Text>
                    </View>

                    <View style={commonStyles.commWrapSeven}>
                      <Text
                        style={[
                          commonStyles.ns400,
                          commonStyles.font15,
                          {color: b3},
                        ]}>
                        USD 2,450
                      </Text>
                      <Text
                        style={[
                          commonStyles.ns400,
                          commonStyles.font11,
                          {color: b3},
                        ]}>
                        .99
                      </Text>
                    </View>
                  </View>

                  {/* american with others */}
                  <View style={[commonStyles.commWrapThree]}>
                    <View>
                      <Text style={[commonStyles.ns400, commonStyles.font14]}>
                        American Airlines
                      </Text>
                      <Text style={[commonStyles.ns400]}>(with others)</Text>
                    </View>

                    <View style={commonStyles.commWrapSeven}>
                      <Text
                        style={[
                          commonStyles.ns400,
                          commonStyles.font15,
                          {color: b3},
                        ]}>
                        USD 2,101
                      </Text>
                      <Text
                        style={[
                          commonStyles.ns400,
                          commonStyles.font11,
                          {color: b3},
                        ]}>
                        .99
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Show all airlines */}

                <TouchableOpacity
                  style={[
                    commonStyles.commWrapOne,
                    commonStyles.flexStart,
                    {marginTop: _mvs(15), columnGap: _ms(10)},
                  ]}>
                  <Image
                    style={[
                      size15,
                      {transform: [{rotate: '90deg'}], tintColor: blue},
                    ]}
                    source={icon.rightArrow}
                  />

                  <Text style={[commonStyles.ns600, {color: blue}]}>
                    Show all airlines
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* bottom */}

        <View style={styles.bottomBtnCon}>
          <Pressable
            onPress={() => {
              Alert.alert('Hello World');
            }}
            style={styles.applyBtn}>
            <Text
              style={[commonStyles.lbB1, {color: white, fontSize: _ms(14)}]}>
              APPLY
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              //   setSelectedItems([]);
              Alert.alert('Hello World');
            }}
            style={[styles.applyBtn, {backgroundColor: white}]}>
            <Text style={[commonStyles.lbB1, {color: b2, fontSize: _ms(14)}]}>
              CLEAR ALL FILTERS
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FhTripFilter;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: white,
  },

  Wrap: {
    flex: 1,
    marginTop: _mvs(45),
  },

  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginLeft: _ms(15),
    gap: _ms(10),
  },

  stopOptn: {
    ...commonStyles.commWrapOne,
    marginTop: _mvs(12),
    columnGap: _ms(20),
  },

  optnBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: _ms(12),
    paddingVertical: _mvs(5),
    borderRadius: 4,
    backgroundColor: white,
    borderColor: '#D8D8D8',
    borderWidth: 1.2,
    // elevation: 1,
  },

  stopBtnText: {
    fontFamily: _fonts.assistantSemiBold,
    fontSize: _ms(13),
    color: blue,
  },

  destDot: {
    width: _ms(14),
    height: _ms(14),
    backgroundColor: blue,
    borderRadius: _ms(16),
  },

  destPath: {
    backgroundColor: blue,
    height: _mvs(2),
    width: _width * 0.6,
  },

  showTotalDurations: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: _mvs(20),
    columnGap: _ms(10),
    alignSelf: 'flex-start',
  },

  squareBox: {
    width: _ms(10),
    height: _ms(10),
    transform: [{rotate: '45deg'}],
    borderColor: blue,
    borderWidth: 1.5,
    marginLeft: _ms(5),
  },

  dotOutline: {
    width: _ms(17),
    height: _ms(17),
    borderRadius: _ms(20),
    borderWidth: 1.4,
    borderColor: blue,
  },

  btnCon: {
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 4,
  },

  leftBtn: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },

  rightBtn: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },

  airBtn: {
    backgroundColor: white,
    flex: 1,
    paddingVertical: _mvs(9),
    // borderWidth: 1,
    borderColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  airBtnActive: {
    backgroundColor: blue,
    flex: 1,
    paddingVertical: _mvs(9),
    alignItems: 'center',
    justifyContent: 'center',
  },

  airBtnTxt: {
    fontFamily: _fonts.nunitoSansRegular,
    ...commonStyles.font13,
    color: blue,
  },

  airBtnTxtActive: {
    fontFamily: _fonts.nunitoSansRegular,
    ...commonStyles.font13,
    color: white,
  },

  bottomBtnCon: {
    backgroundColor: white,
    flexDirection: 'row',
    paddingVertical: _mvs(5),
    paddingBottom: _mvs(10),
    paddingHorizontal: _ms(15),
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  applyBtn: {
    backgroundColor: b2,
    paddingVertical: _mvs(6),
    paddingHorizontal: _ms(25),
    borderWidth: 2,
    borderColor: b2,
    borderRadius: 5,
  },
});
