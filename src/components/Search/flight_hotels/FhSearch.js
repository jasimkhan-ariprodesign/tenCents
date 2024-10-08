import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import {b1, blue, white} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';
import HotelItem from '../hotels/HotelItem';
import {_ms, _mvs, _vs, _width} from '../../utils/Responsive';

const FhSearch = ({navigation, route}) => {
  const data = [...Array(10).keys()];

  const {selectedTopMenu} = route?.params;

  // console.log(`checking route FHSearch screen "selectedTopMenu"  =>`, selectedTopMenu);
  return (
    <SafeAreaView style={styles.parent}>
      <BgGradient
        width={_width}
        height={_vs(82)}
        //   height={height * 0.1}
      />
      <Header />

      <View style={styles.body}>
        <View style={styles.parent}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                rowGap: _mvs(10),
                marginHorizontal: _ms(10),
              }}>
              <Text
                style={[
                  commonStyles.ns600,
                  {fontSize: _ms(16), textAlign: 'center', marginTop: _mvs(10)},
                ]}>
                Hotel Selection
              </Text>

              {/* hotels */}
              <View>
                {data.map(i => {
                  return (
                    <View key={i}>
                      <HotelItem
                        navigation={navigation}
                        srcName={'fhdetails'}
                        selectedTopMenu={selectedTopMenu}
                      />
                      {i < 1 && (
                        <View style={styles.privacy}>
                          <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                            <Image
                              style={{width: _ms(20), height: _ms(20)}}
                              source={icon.cross}
                            />
                          </TouchableOpacity>

                          <View
                            style={{flexDirection: 'row', columnGap: _ms(10)}}>
                            <Image
                              style={styles.randomImage}
                              source={image.privacy}
                            />

                            <View
                              style={{
                                rowGap: _ms(5),
                                flex: 1,
                              }}>
                              <Text
                                style={[
                                  commonStyles.ns600,
                                  {fontSize: _ms(12)},
                                ]}>
                                Looking for a space of your own?
                              </Text>

                              <Text
                                style={[
                                  commonStyles.ns600,
                                  {fontSize: _ms(12)},
                                ]}>
                                Find privacy and peace of mind with an entire
                                home or apartment to yourself
                              </Text>

                              <TouchableOpacity
                                style={{alignSelf: 'flex-start'}}>
                                <Text
                                  style={[
                                    commonStyles.ns600,
                                    {fontSize: _ms(12), color: blue},
                                  ]}>
                                  Show entire homes & apartments
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      )}
                    </View>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>

        {/* filter */}
        <View>
          <View style={styles.filterChild}>
            <TouchableOpacity
              style={styles.filterBtn}
              onPress={() => navigation.navigate('fhfilter')}>
              <Image
                style={{width: _ms(15), height: _ms(15), tintColor: blue}}
                source={icon.filters}
              />
              <Text
                style={[commonStyles.ns600, {fontSize: _ms(14), color: blue}]}>
                FILTER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FhSearch;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: white,
  },

  body: {
    flex: 1,
    marginTop: _mvs(10),
    // backgroundColor: white,
    backgroundColor: '#e6e6e6',
  },

  privacy: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#D8D8D8',
    backgroundColor: white,
    // backgroundColor: 'red',
    elevation: 2,
    paddingHorizontal: 10,
    paddingVertical: _mvs(5),
    paddingBottom: _mvs(15),
    marginBottom: _mvs(20),
  },

  filterChild: {
    backgroundColor: b1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: _mvs(8),
    paddingHorizontal: _ms(10),
  },

  filterBtn: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: blue,
    width: _ms(120),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(6),
    flexDirection: 'row',
    columnGap: _ms(10),
  },

  randomImage: {
    width: _ms(65),
    height: _ms(70),
    resizeMode: 'stretch',
  },
});
