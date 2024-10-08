import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import icon from '../../../config/IconAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import {b2, blue, white} from '../../../config/colors';
import {
  _ms,
  _mvs,
  backIconStyle,
  SafeAreaCon,
  size12,
  size14,
} from '../../utils/Responsive';

const CarFilter = ({navigation}) => {
  // console.log({...size12});

  return (
    <SafeAreaCon style={[commonStyles.flexOne]}>
      <StatusBar translucent={true} barStyle={'dark-content'} />
      <View style={[commonStyles.flexOne, {marginTop: _mvs(15)}]}>
        {/* nav */}
        <TouchableOpacity
          style={styles.nav}
          onPress={() => navigation.goBack()}>
          <Image style={backIconStyle} source={icon.next} />

          <Text style={[commonStyles.ns600, commonStyles.font16]}>FILTER</Text>
        </TouchableOpacity>

        <View style={[commonStyles.flexOne, {marginTop: _mvs(15)}]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={16}
            decelerationRate={'fast'}>
            <View style={{rowGap: _mvs(15), marginHorizontal: _ms(12)}}>
              <View style={{rowGap: _mvs(10)}}>
                {/* car seat */}
                <View style={{rowGap: _mvs(6)}}>
                  <Text style={[commonStyles.ns600, commonStyles.font15]}>
                    Car Seating
                  </Text>

                  <View
                    style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                    <TouchableOpacity style={styles.btnLrgActive}>
                      <Text style={[commonStyles.ns400, {color: white}]}>
                        4+
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnLrg}>
                      <Text style={[commonStyles.ns400, {color: b2}]}>6+</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* trunk space */}
                <View style={{rowGap: _mvs(6)}}>
                  <Text style={[commonStyles.ns600, commonStyles.font15]}>
                    Trunk Space(Bags)
                  </Text>

                  <View
                    style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                    <TouchableOpacity style={styles.btnLrgActive}>
                      <Text style={[commonStyles.ns400, {color: white}]}>
                        1+
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnLrg}>
                      <Text style={[commonStyles.ns400, {color: b2}]}>4+</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Doors */}
                <View style={{rowGap: _mvs(6)}}>
                  <Text style={[commonStyles.ns600, commonStyles.font15]}>
                    Doors
                  </Text>

                  <View
                    style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                    <TouchableOpacity style={styles.btnSmlActive}>
                      <Text style={[commonStyles.ns400, {color: white}]}>
                        1+
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSml}>
                      <Text style={[commonStyles.ns400, {color: b2}]}>2+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSml}>
                      <Text style={[commonStyles.ns400, {color: b2}]}>4+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Total Car Budget */}
              <View>
                <Text style={[commonStyles.ns700, commonStyles.font14]}>
                  Total Car Budget
                </Text>

                <View style={{rowGap: _ms(8), marginTop: _mvs(12)}}>
                  <View
                    style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                    <TouchableOpacity style={styles.tick}>
                      <Image
                        style={styles.tickImg}
                        tintColor={white}
                        source={icon.check}
                      />
                    </TouchableOpacity>

                    <Text style={commonStyles.ns600}>$560 - $1060</Text>
                  </View>

                  <View
                    style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                    <TouchableOpacity>
                      <View style={styles.circle} />
                    </TouchableOpacity>

                    <Text style={commonStyles.ns600}>$1061 - $1560</Text>
                  </View>

                  <View
                    style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                    <TouchableOpacity>
                      <View style={styles.circle} />
                    </TouchableOpacity>

                    <Text style={commonStyles.ns600}>$1561 - $2060</Text>
                  </View>

                  <View
                    style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                    <TouchableOpacity>
                      <View style={styles.circle} />
                    </TouchableOpacity>

                    <Text style={commonStyles.ns600}>$2060+</Text>
                  </View>
                </View>
              </View>

              {/* Rental Car Company */}
              <View>
                <Text style={[commonStyles.ns700, commonStyles.font14]}>
                  Rental Car Company
                </Text>

                <View style={{rowGap: _ms(8), marginTop: _mvs(12)}}>
                  <View style={[commonStyles.commWrapOne]}>
                    <View
                      style={[
                        commonStyles.commWrapOne,
                        commonStyles.flexTwo,
                        {columnGap: _ms(10)},
                      ]}>
                      <TouchableOpacity style={styles.tick}>
                        <Image style={styles.tickImg} source={icon.check} />
                      </TouchableOpacity>

                      <Text style={[commonStyles.ns600]}>Select All</Text>
                    </View>

                    <Text style={[commonStyles.ns600, commonStyles.flexOne]}>
                      174
                    </Text>
                  </View>

                  <View style={[commonStyles.commWrapOne]}>
                    <View
                      style={[
                        commonStyles.commWrapOne,
                        commonStyles.flexTwo,
                        {columnGap: _ms(10)},
                      ]}>
                      <TouchableOpacity>
                        <View style={styles.circle} />
                      </TouchableOpacity>

                      <Text style={[commonStyles.ns400]}>Thrift</Text>
                    </View>

                    <Text style={[commonStyles.ns600, commonStyles.flexOne]}>
                      93
                    </Text>
                  </View>

                  <View style={[commonStyles.commWrapOne]}>
                    <View
                      style={[
                        commonStyles.commWrapOne,
                        commonStyles.flexTwo,
                        {columnGap: _ms(10)},
                      ]}>
                      <TouchableOpacity>
                        <View style={styles.circle} />
                      </TouchableOpacity>

                      <Text style={[commonStyles.ns400]}>Enterpri...</Text>
                    </View>

                    <Text style={[commonStyles.ns600, commonStyles.flexOne]}>
                      17
                    </Text>
                  </View>

                  <View style={[commonStyles.commWrapOne]}>
                    <View
                      style={[
                        commonStyles.commWrapOne,
                        commonStyles.flexTwo,
                        {columnGap: _ms(10)},
                      ]}>
                      <TouchableOpacity>
                        <View style={styles.circle} />
                      </TouchableOpacity>

                      <Text style={[commonStyles.ns400]}>Dollar</Text>
                    </View>

                    <Text style={[commonStyles.ns600, commonStyles.flexOne]}>
                      86
                    </Text>
                  </View>

                  <View style={[commonStyles.commWrapOne]}>
                    <View
                      style={[
                        commonStyles.commWrapOne,
                        commonStyles.flexTwo,
                        {columnGap: _ms(10)},
                      ]}>
                      <TouchableOpacity>
                        <View style={styles.circle} />
                      </TouchableOpacity>

                      <Text style={[commonStyles.ns400]}>Alamo</Text>
                    </View>

                    <Text style={[commonStyles.ns600, commonStyles.flexOne]}>
                      70
                    </Text>
                  </View>
                </View>

                <TouchableOpacity style={styles.showMore}>
                  <Text style={[commonStyles.ns600, {color: blue}]}>
                    Show more
                  </Text>

                  <Image
                    style={[size14, {transform: [{rotate: '90deg'}]}]}
                    tintColor={blue}
                    source={icon.rightArrow}
                  />
                </TouchableOpacity>
              </View>

              {/* Category Group */}
              <View>
                <Text style={[commonStyles.ns700, commonStyles.font14]}>
                  Category Group
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaCon>
  );
};

export default CarFilter;

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginHorizontal: _ms(12),
    gap: _ms(10),
  },

  btnLrg: {
    borderRadius: 4,
    paddingHorizontal: _ms(50),
    paddingVertical: _mvs(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: b2,
  },

  btnLrgActive: {
    borderRadius: 4,
    backgroundColor: b2,
    paddingHorizontal: _ms(50),
    paddingVertical: _mvs(4),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },

  btnSml: {
    borderRadius: 4,
    paddingHorizontal: _ms(27),
    paddingVertical: _mvs(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: b2,
  },

  btnSmlActive: {
    borderRadius: 4,
    backgroundColor: b2,
    paddingHorizontal: _ms(27),
    paddingVertical: _mvs(4),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },

  tick: {
    backgroundColor: blue,
    width: _ms(22),
    height: _ms(22),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: _ms(22),
  },

  tickImg: {
    ...size12,
    tintColor: white,
  },

  circle: {
    width: _ms(22),
    height: _ms(22),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: _ms(22),
    borderWidth: 2,
    borderColor: blue,
  },

  showMore: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: _ms(10),
    alignSelf: 'flex-start',
    marginTop: _mvs(15),
  },
});
