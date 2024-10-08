import {
  Dimensions,
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
import {
  b1,
  b2,
  b3,
  bgColor,
  blue,
  blueShade2,
  w1,
  white,
} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';
import Policies from './core/Policies';
import Summary from './core/Summary';
import Itinerary from './core/Itinerary';
import {_ms, _mvs, _vs, _width, size15, size16} from '../../utils/Responsive';

const apiImages = [
  image.hpgal1,
  image.hpgal2,
  image.hpgal3,
  image.hpgal7,
  image.hpgal4,
  image.hpgal5,
  image.hpgal6,
];

const imagesToShow =
  apiImages && apiImages.length > 3 ? apiImages.slice(0, 3) : apiImages;

const imagesToShow2 = apiImages && apiImages.length > 3 ? apiImages[3] : null;

const imagesToShow3 = apiImages.length > 4 ? apiImages.slice(4, 7) : [];

const H = _mvs(62);
const W = _ms(102);

const perksData = [
  {icon: icon.view, text: 'View'},
  {icon: icon.pawprint, text: 'Pets allowed'},
  {icon: icon.wifi, text: 'Free WiFi'},
  {icon: icon.swimming, text: 'Outdoor swimming pool'},
  {icon: icon.hours, text: '24-hour front desk'},
  {icon: icon.coffeeShop, text: 'Balcony'},
  {icon: icon.airConditioner, text: 'Air Conditioner'},
  {icon: icon.bathTub, text: 'Bath'},
];

const HpPkgDetails = ({navigation}) => {
  const [selectedChldMenu, setSelectedChldMenu] = useState('i');
  const [selectedTopMenu, setSelectedTopMenu] = useState('flt');

  return (
    <SafeAreaView style={styles.parent}>
      {/* <BgGradient width={width} height={height * 0.1} /> */}
      <BgGradient width={_width} height={_vs(82)} />
      <Header />

      <View style={[styles.parent, {marginTop: _mvs(15)}]}>
        <>
          <ScrollView
            bounces={false}
            scrollEventThrottle={16}
            decelerationRate={'fast'}
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                rowGap: _mvs(10),
                marginHorizontal: _ms(12),
              }}>
              {/* hotel name */}
              <Text style={[commonStyles.ns600, {fontSize: _ms(15)}]}>
                Meeru Island Resort With Water Villa Stay
              </Text>

              {/* hotel rating */}
              <View style={[styles.hotelRatingCon, {columnGap: _mvs(6)}]}>
                {/* star */}
                <View style={[styles.hotelRatingCon, {gap: _ms(3)}]}>
                  {[...Array(3).keys()].map((_, i) => (
                    <Image key={i} style={styles.star} source={icon.star} />
                  ))}
                </View>

                {/* leaf */}
                <View style={styles.leafCon}>
                  {[...Array(3).keys()].map((_, i) => (
                    <Image
                      key={i}
                      style={styles.leaf}
                      source={i > 0 ? icon.leaf : icon.leafSolid}
                    />
                  ))}

                  <Text
                    style={[
                      commonStyles.ns600,
                      {color: '#24AD53', fontSize: _ms(12), marginLeft: _ms(6)},
                    ]}>
                    Travel Sustainable Level 1
                  </Text>
                </View>
              </View>

              {/* customize & 5n/6d */}
              <View style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                <View style={styles.tips}>
                  <Text style={styles.customizableTxt}>Customizable</Text>
                </View>

                <View style={styles.tips}>
                  <Text style={styles.customizableTxt}>5N/6D</Text>
                </View>
              </View>

              {/* gallery */}

              <>
                {/* left side three images */}
                <View style={[styles.commonWrap, {}]}>
                  <View
                    style={{
                      gap: _mvs(10),
                      justifyContent: 'space-between',
                    }}>
                    {imagesToShow.map((item, i) => {
                      return (
                        <Image
                          key={i}
                          style={styles.galImg}
                          source={item}
                          resizeMode="cover"
                        />
                      );
                    })}
                  </View>

                  {/* right side single big image */}
                  <View
                    style={{
                      flex: 1,
                    }}>
                    <Image
                      style={styles.galImgBig}
                      source={imagesToShow2}
                      resizeMode="cover"
                    />
                  </View>
                </View>

                {/* bottom side three images */}

                <View style={styles.bottomImagesQrapper}>
                  {imagesToShow3.map((item, i) => {
                    return (
                      <TouchableOpacity
                        key={i}
                        style={[styles.showMorePics, {}]}
                        onPress={() => {
                          if (imagesToShow3.length - 1 == i) {
                            navigation.navigate('hotelgallery');
                          }
                        }}>
                        <Image
                          key={i}
                          style={[styles.btnImage, {}]}
                          source={item}
                          resizeMode="cover"
                        />
                        <Text
                          style={[
                            commonStyles.ns700,
                            {
                              fontSize: _ms(12),
                              position: 'absolute',
                              color: white,
                            },
                          ]}>
                          {imagesToShow3.length - 1 == i
                            ? `+ ${apiImages.length} photos`
                            : null}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </>

              {/* perks */}
              <View style={styles.perksWrap}>
                {perksData.map((perk, index) => (
                  <View key={index} style={styles.perks}>
                    <Image style={styles.icon} source={perk.icon} />
                    <Text style={styles.text}>{perk.text}</Text>
                  </View>
                ))}
              </View>

              {/* info & expectation */}
              <View
                style={{
                  rowGap: _mvs(6),
                  marginTop: _mvs(10),
                }}>
                <Text
                  style={[
                    commonStyles.ns400,
                    commonStyles.font11,
                    {color: blue},
                  ]}>
                  Discover the original Maldivian culture all around the island
                  including a visit to our very own state of the art island
                  museum.
                </Text>

                <View
                  style={[
                    commonStyles.commWrapThree,
                    {columnGap: _ms(10), marginTop: _mvs(10)},
                  ]}>
                  <View style={[commonStyles.flexOne, {rowGap: _mvs(10)}]}>
                    <View
                      style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                      <Image
                        style={size16}
                        tintColor={blueShade2}
                        source={icon.baggage}
                      />
                      <Text style={styles.whatToExpect}>what to expect</Text>
                    </View>

                    <Text style={styles.smallTxt}>
                      Unwind at the magical beaches of Maldives during pleasant
                      weather.
                    </Text>
                  </View>

                  <View style={[commonStyles.flexOne, {rowGap: _mvs(10)}]}>
                    <View
                      style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                      <Image
                        style={size16}
                        tintColor={blueShade2}
                        source={icon.star}
                      />
                      <Text style={styles.whatToExpect}>
                        things you will love
                      </Text>
                    </View>

                    <Text style={styles.smallTxt}>
                      Vaadhoo Island, Snorkeling and island hopping in Maldives.
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* bottom nav bar and content */}
            <View style={{marginTop: _mvs(15), rowGap: _mvs(15)}}>
              <View style={styles.topNav}>
                {[
                  {id: 'pln', label: '6 DAY PLAN'},
                  {id: 'flt', label: '2 Flights'},
                  {id: 'htl', label: '2 Hotels'},
                  {id: 'act', label: '3 Activities'},
                ].map(option => (
                  <TouchableOpacity
                    key={option.id}
                    style={
                      selectedTopMenu === option.id
                        ? styles.tNavOptActive
                        : styles.tNavOpt
                    }
                    onPress={() => {
                      if (option.label !== '6 DAY PLAN') {
                        setSelectedTopMenu(option.id);
                      }
                    }}>
                    <Text
                      style={
                        selectedTopMenu === option.id
                          ? styles.tNavOptTxtActive
                          : styles.tNavOptTxt
                      }>
                      {option.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* child nav */}
              <View style={styles.chldNav}>
                <TouchableOpacity
                  style={styles.chldNavOpt}
                  onPress={() => setSelectedChldMenu('i')}>
                  <Text
                    style={[
                      styles.chldNavOptTxt,
                      {color: selectedChldMenu === 'i' ? blue : white},
                    ]}>
                    ITINERARY
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.chldNavOpt}
                  onPress={() => setSelectedChldMenu('p')}>
                  <Text
                    style={[
                      styles.chldNavOptTxt,
                      {color: selectedChldMenu === 'p' ? blue : white},
                    ]}>
                    POLICIES
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.chldNavOpt}
                  onPress={() => setSelectedChldMenu('s')}>
                  <Text
                    style={[
                      styles.chldNavOptTxt,
                      {color: selectedChldMenu === 's' ? blue : white},
                    ]}>
                    SUMMARY
                  </Text>
                </TouchableOpacity>
              </View>

              {/* content render */}
              <View style={styles.contWrap}>
                {selectedChldMenu === 'i' && (
                  <Itinerary selectedTopMenu={selectedTopMenu} />
                )}
                {selectedChldMenu === 'p' && <Policies />}
                {selectedChldMenu === 's' && <Summary />}
              </View>
            </View>
          </ScrollView>
        </>

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
            onPress={() => navigation.navigate('hpsum')}>
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

export default HpPkgDetails;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: white,
  },

  body: {
    flex: 1,
    marginTop: _mvs(15),
    backgroundColor: white,
  },

  hotelRatingCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  leafCon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1FEF6',
    borderRadius: 4,
    alignSelf: 'flex-start',
    paddingHorizontal: _ms(5),
    paddingVertical: _mvs(2),
  },

  leaf: {
    width: _ms(16),
    height: _ms(16),
    marginRight: 3,
    tintColor: '#1D8842',
  },

  star: {
    width: _ms(15),
    height: _ms(15),
  },

  customizableTxt: {
    fontSize: _ms(11),
    color: '#6D7278',
    fontFamily: 'Lato-Regular',
  },

  tips: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#A6A6A6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(3),
    paddingHorizontal: _ms(8),
  },

  commonWrap: {
    flexDirection: 'row',
    // borderWidth: 1,
    borderColor: 'red',
  },

  galImg: {
    width: W,
    height: H,
    borderTopRightRadius: _ms(10),
    borderBottomLeftRadius: _ms(10),
    marginRight: _ms(10),
  },

  galImgBig: {
    flex: 1,
    width: '100%',
    // height:
    borderTopRightRadius: _ms(15),
    borderBottomLeftRadius: _ms(15),
  },

  bottomImagesQrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    borderColor: 'lime',
  },

  showMorePics: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnImage: {
    width: W,
    height: H,
    borderTopRightRadius: _ms(10),
    borderBottomLeftRadius: _ms(10),
  },

  perksWrap: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    columnGap: _ms(5),
    marginTop: _mvs(10),
    rowGap: _mvs(8),
  },

  perks: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D8D8D8',
    backgroundColor: white,
    columnGap: _ms(9),
    paddingVertical: _mvs(7),
    paddingHorizontal: _ms(10),
    borderRadius: 4,
  },

  icon: {
    width: _ms(16),
    height: _ms(16),
  },

  text: {
    ...commonStyles.ns400,
    fontSize: _ms(10),
  },

  whatToExpect: {
    fontSize: 14,
    color: b1,
    fontFamily: 'Lato-Regular',
    textTransform: 'capitalize',
  },

  smallTxt: {
    fontSize: _ms(10),
    color: b3,
    fontFamily: 'Lato-Regular',
  },

  topNav: {
    backgroundColor: '#ECF7FF',
    paddingVertical: _mvs(20),
    paddingHorizontal: _ms(6),
    marginHorizontal: _ms(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: _ms(5),
  },

  tNavOpt: {
    borderWidth: 1.5,
    borderColor: '#ECF7FF',
    borderRadius: 20,
    paddingVertical: _mvs(3),
    paddingHorizontal: _ms(6),
  },

  tNavOptActive: {
    borderWidth: 1.5,
    borderColor: blue,
    borderRadius: 20,
    backgroundColor: white,
    paddingVertical: _mvs(3),
    paddingHorizontal: _ms(7),
  },

  tNavOptTxt: {
    fontSize: _ms(11),
    color: b3,
    fontFamily: 'Lato-Regular',
    textTransform: 'uppercase',
  },

  tNavOptTxtActive: {
    fontSize: _ms(11),
    color: blue,
    fontFamily: 'Lato-Regular',
    textTransform: 'uppercase',
  },

  chldNav: {
    flexDirection: 'row',
    backgroundColor: b2,
    paddingHorizontal: _ms(10),
    paddingVertical: _mvs(2),
    marginHorizontal: _ms(6),
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
  },

  chldNavOpt: {
    paddingVertical: _mvs(7),
    paddingHorizontal: _ms(4),
  },

  chldNavOptTxt: {
    ...commonStyles.ns700,
    fontSize: _ms(14),
    textTransform: 'uppercase',
  },

  //   ---- ----- ---- ---- ---- ----- ------

  contWrap: {
    // backgroundColor: w1,
    backgroundColor: white,
    // paddingTop: _mvs(15),
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
