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
import {b1, b3, bgColor, blue, white} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import HotelItem from './HotelItem';
import image from '../../../config/ImageAssets';
import ModifyDateForHotel from './ModifyDateForHotel';
import {
  _height,
  _ms,
  _mvs,
  _s,
  _width,
  checkIconStyle,
  size15,
  size18,
} from '../../utils/Responsive';

const HotelSearches = ({navigation}) => {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [isModify, setIsModify] = useState(false);

  return (
    <SafeAreaView style={commonStyles.flexOne}>
      <BgGradient width={_width} height={_height * 0.62} />
      {/* <BgGradient width={_width} height={_vs(345)} /> */}
      <Header />

      <View style={styles.body}>
        {/* Travel details */}
        {isModify ? (
          <View
            style={[styles.tDetails, {paddingVertical: _mvs(0), zIndex: 1}]}>
            <ModifyDateForHotel
              navigation={navigation}
              setIsModify={setIsModify}
            />
          </View>
        ) : (
          <View style={styles.tDetails}>
            <Text style={[commonStyles.ns400, {color: b3}]}>Destination</Text>

            <View style={[commonStyles.commWrapTwo, {marginBottom: _mvs(20)}]}>
              <Text style={[commonStyles.ns400]}>
                Calgary, 23-25th Dec, 1 Adult
              </Text>

              <TouchableOpacity
                style={[commonStyles.commWrapOne]}
                onPress={() => setIsModify(true)}>
                <Image
                  style={checkIconStyle}
                  tintColor={blue}
                  source={icon.pencil}
                />
                <Text
                  style={[
                    commonStyles.lbB1,
                    commonStyles.font13,
                    {color: blue},
                  ]}>
                  Modify Date
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* hotels */}
        <View
          style={[
            commonStyles.flexOne,
            {backgroundColor: bgColor, marginTop: _mvs(5)},
          ]}>
          <View
            style={[
              styles.hotelItemWrap,
              isModify ? {marginTop: _mvs(10)} : {marginTop: -_mvs(15)},
            ]}>
            {/* <View style={styles.bgWhite} /> */}

            <Text
              style={[
                commonStyles.ns700,
                commonStyles.font20,
                {textAlign: 'center'},
              ]}>
              Hotels In Calgary
            </Text>

            {/* hotel items */}
            <View style={[commonStyles.flexOne, {marginTop: _mvs(15)}]}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{rowGap: _mvs(15), marginHorizontal: _ms(10)}}>
                  {data.map((_, i) => (
                    <View key={i}>
                      <HotelItem
                        navigation={navigation}
                        srcName={'hoteldetails'}
                      />
                      {i < 1 && (
                        <View style={styles.privacy}>
                          <TouchableOpacity
                            style={commonStyles.alignSelfFlexEnd}>
                            <Image style={size18} source={icon.cross} />
                          </TouchableOpacity>

                          <View
                            style={[commonStyles.commWrapSeven, {gap: _ms(8)}]}>
                            <Image
                              style={styles.privacyIcon}
                              source={image.privacy}
                            />

                            <View
                              style={[
                                commonStyles.flexOne,
                                {rowGap: _mvs(8), marginRight: _ms(6)},
                              ]}>
                              <Text
                                style={[
                                  commonStyles.ns600,
                                  commonStyles.font13,
                                ]}>
                                Looking for a space of your own?
                              </Text>

                              <Text
                                style={[
                                  commonStyles.ns600,
                                  commonStyles.font12,
                                ]}>
                                Find privacy and peace of mind with an entire
                                home or apartment to yourself
                              </Text>

                              <TouchableOpacity
                                style={commonStyles.alignSelfFlexStart}>
                                <Text
                                  style={[
                                    commonStyles.ns600,
                                    commonStyles.font12,
                                    {color: blue},
                                  ]}>
                                  Show entire homes & apartments
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      )}
                    </View>
                  ))}
                </View>

                <TouchableOpacity style={styles.viewall}>
                  <Text
                    style={[
                      commonStyles.lbB1,
                      commonStyles.font15,
                      {color: blue},
                    ]}>
                    Show More
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>

            {/* botttom filter */}

            <View style={styles.proceedCon}>
              <TouchableOpacity
                style={[
                  styles.proceedBtn,
                  commonStyles.commWrapSeven,
                  {gap: _ms(5)},
                ]}
                onPress={() => {
                  navigation.navigate('hotelfilter');
                }}>
                <Image style={size15} source={icon.filters} tintColor={blue} />
                <Text
                  style={[
                    commonStyles.ns600,
                    commonStyles.font13,
                    {color: blue},
                  ]}>
                  Filter
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HotelSearches;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: _mvs(25),
  },

  tDetails: {
    backgroundColor: '#FFFEFE',
    borderRadius: _ms(8),
    elevation: 4,
    marginHorizontal: _ms(8),
    paddingHorizontal: _ms(10),
    paddingVertical: _mvs(10),
  },

  hotelItemWrap: {
    borderTopLeftRadius: _ms(15),
    borderTopRightRadius: _ms(15),
    paddingTop: _mvs(20),
    flex: 1,
    backgroundColor: white,
    elevation: 4,
  },

  viewall: {
    borderWidth: 1.5,
    borderColor: blue,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(8),
    marginBottom: _mvs(15),
    marginHorizontal: _ms(20),
  },

  privacy: {
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 8,
    backgroundColor: white,
    elevation: 3,
    paddingLeft: _ms(10),
    paddingRight: _ms(5),
    paddingTop: _mvs(3),
    paddingBottom: _mvs(20),
    marginBottom: _mvs(10),
  },

  privacyIcon: {
    width: _ms(60),
    height: _ms(60),
  },

  proceedCon: {
    backgroundColor: b1,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  // bgWhite: {
  //     backgroundColor: white,
  //     // zIndex: -1,
  //     height: height * 0.6,
  //     // width: width,
  //     // position: "absolute",
  //     borderWidth: 1,
  //     borderTopLeftRadius: 12,
  //     borderTopRightRadius: 12,
  // },
});
