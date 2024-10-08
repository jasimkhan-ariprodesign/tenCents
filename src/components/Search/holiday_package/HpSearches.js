import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import {b1, b3, bgColor, blue, white} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';
import {_ms, _mvs, _s, _vs, _width, size15} from '../../utils/Responsive';

const hotelData = [
  {
    category: 'Luxury',
    description:
      'Take an indulgent holiday to the Maldives with our curated luxury packages.',
    hotels: [
      {
        id: 1,
        title: 'Incredible Grand Park Maldives Villa',
        location: 'Maldives',
        rating: 5,
        reviews: 48,
        price: '$3,223',
        imageUrl: 'https://example.com/image1.jpg', // Replace with actual image URL
        perks: ['2 Flight', '1 Hotel', '0 Activity', '0 Transfers'],
      },
      {
        id: 2,
        title: 'Meeru Island Resort Maldives Villa',
        location: 'Maldives',
        rating: 4.5,
        reviews: 44,
        price: '$2,718',
        imageUrl: 'https://example.com/image2.jpg', // Replace with actual image URL
        perks: ['Flight', '3 Nights', 'All Inclusive', 'Transfers'],
      },
      {
        id: 3,
        title: 'Taj Coral Reef Resort Maldives Villa',
        location: 'Maldives',
        rating: 4.3,
        reviews: 39,
        price: '$2,622',
        imageUrl: 'https://example.com/image3.jpg', // Replace with actual image URL
        perks: ['Flight', '3 Nights', 'All Inclusive', 'Transfers'],
      },
    ],
  },
  {
    category: 'Adventure',
    description:
      'Get an adrenaline rush with these adventure activities in Maldives. Tick-Off Your Bucket List',
    hotels: [
      {
        id: 4,
        title: 'Incredible Grand Park Maldives Villa',
        location: 'Maldives',
        rating: 5,
        reviews: 48,
        price: '$3,223',
        imageUrl: 'https://example.com/image4.jpg', // Replace with actual image URL
        perks: ['Flight', '3 Nights', 'All Inclusive', 'Transfers'],
      },
      {
        id: 5,
        title: 'Meeru Island Resort Maldives Villa',
        location: 'Maldives',
        rating: 4.5,
        reviews: 44,
        price: '$2,718',
        imageUrl: 'https://example.com/image5.jpg', // Replace with actual image URL
        perks: ['Flight', '3 Nights', 'All Inclusive', 'Transfers'],
      },
      {
        id: 6,
        title: 'Taj Coral Reef Resort Maldives Villa',
        location: 'Maldives',
        rating: 4.3,
        reviews: 39,
        price: '$2,622',
        imageUrl: 'https://example.com/image6.jpg', // Replace with actual image URL
        perks: ['Flight', '3 Nights', 'All Inclusive', 'Transfers'],
      },
    ],
  },
  {
    category: 'Honeymoon',
    description:
      'Cherish your stay at these romantic retreats with your beloved.',
    hotels: [
      {
        id: 7,
        title: 'Incredible Grand Park Maldives Villa',
        location: 'Maldives',
        rating: 5,
        reviews: 48,
        price: '$3,223',
        imageUrl: 'https://example.com/image7.jpg', // Replace with actual image URL
        perks: ['Flight', '3 Nights', 'All Inclusive', 'Transfers'],
      },
      {
        id: 8,
        title: 'Meeru Island Resort Maldives Villa',
        location: 'Maldives',
        rating: 4.5,
        reviews: 44,
        price: '$2,718',
        imageUrl: 'https://example.com/image8.jpg', // Replace with actual image URL
        perks: ['Flight', '3 Nights', 'All Inclusive', 'Transfers'],
      },
      {
        id: 9,
        title: 'Taj Coral Reef Resort Maldives Villa',
        location: 'Maldives',
        rating: 4.3,
        reviews: 39,
        price: '$2,622',
        imageUrl: 'https://example.com/image9.jpg', // Replace with actual image URL
        perks: ['Flight', '3 Nights', 'All Inclusive', 'Transfers'],
      },
    ],
  },
];

const HpSearches = ({navigation}) => {
  return (
    <SafeAreaView style={styles.parent}>
      {/* <BgGradient width={width} height={height * 0.1} /> */}
      <BgGradient width={_width} height={_vs(82)} />
      <Header />

      <View style={styles.body}>
        <>
          <View style={[commonStyles.flexOne, {rowGap: _mvs(15)}]}>
            {/* top */}
            <View style={[commonStyles.alignItemsCenter, {rowGap: _mvs(8)}]}>
              <Text style={[commonStyles.ns600, commonStyles.font16]}>
                Maldives
              </Text>

              <Text style={[commonStyles.ns400, commonStyles.font16]}>
                Exotic Water & Beach Villa Stays
              </Text>

              <Text
                style={[
                  commonStyles.ns400,
                  commonStyles.textAlignCenter,
                  {color: b3},
                ]}>
                Choose from our exquisite water & beach villa options for a
                memorable holiday!
              </Text>
            </View>

            {/* hotel render start here-- */}

            <View style={styles.renderingParent}>
              <FlatList
                data={hotelData}
                keyExtractor={item => item.category}
                renderItem={({item}) => (
                  <View style={[{rowGap: _mvs(10), marginBottom: _mvs(10)}]}>
                    {/* place name */}
                    <Text
                      style={[
                        commonStyles.textAlignCenter,
                        commonStyles.ns400,
                        commonStyles.font16,
                      ]}>
                      {item.category}
                    </Text>
                    {/* place description */}
                    <Text
                      style={[
                        commonStyles.textAlignCenter,
                        commonStyles.ns400,
                        commonStyles.font12,
                      ]}>
                      {item.description}
                    </Text>

                    {/* child flatlist */}

                    <View style={[styles.childCon]}>
                      <FlatList
                        data={item.hotels}
                        keyExtractor={hotel => hotel.id.toString()}
                        renderItem={({item: hotel, i}) => {
                          // console.log(i == 0 && hotel);
                          return (
                            <TouchableOpacity
                              onPress={() => {
                                navigation.navigate('hppdetails');
                              }}
                              style={styles.comWrap}>
                              {/* hotel image */}
                              <Image
                                source={image.hpi1}
                                style={styles.hotelImage}
                                resizeMode="cover"
                              />

                              {/* this view is wrapping title and perks/hotels offers and place name and price*/}
                              <View
                                style={{
                                  marginHorizontal: _ms(15),
                                  gap: _mvs(8),
                                }}>
                                <Text
                                  numberOfLines={1}
                                  style={[
                                    commonStyles.ns400,
                                    commonStyles.font15,
                                  ]}>
                                  {hotel.title}
                                </Text>

                                <View style={[commonStyles.commWrapTwo]}>
                                  {hotel?.perks?.map((perks, perkIndex) => {
                                    return (
                                      <View
                                        key={perkIndex}
                                        style={[
                                          commonStyles.alignItemsCenter,
                                          {gap: _mvs(5)},
                                        ]}>
                                        <View style={[styles.iconCon]}>
                                          <Image
                                            source={
                                              perkIndex == 0
                                                ? icon.plane
                                                : perkIndex == 1
                                                ? icon.hotelSign
                                                : perkIndex == 2
                                                ? icon.hiking
                                                : perkIndex == 3
                                                ? icon.transfer
                                                : null
                                            }
                                            style={[
                                              [size15],
                                              perkIndex == 0 && {
                                                transform: [{rotate: '45deg'}],
                                              },
                                            ]}
                                            tintColor={b1}
                                          />
                                        </View>
                                        <Text
                                          style={[
                                            commonStyles.ns400,
                                            commonStyles.font12,
                                          ]}>
                                          {perks}
                                        </Text>
                                      </View>
                                    );
                                  })}
                                </View>

                                {/* place name and price*/}
                                <View style={[commonStyles.commWrapTwo]}>
                                  <View style={commonStyles.commWrapSeven}>
                                    <Text
                                      style={[
                                        commonStyles.ns400,
                                        commonStyles.font15,
                                        {color: '#EB2026'},
                                      ]}>
                                      {'4N '}
                                    </Text>
                                    <Text
                                      style={[
                                        commonStyles.ns400,
                                        commonStyles.font15,
                                      ]}>
                                      {hotel?.location}
                                    </Text>
                                  </View>
                                  <View>
                                    <Text
                                      style={[
                                        commonStyles.ns400,
                                        commonStyles.font18,
                                      ]}>
                                      {hotel?.price}
                                    </Text>
                                    <Text
                                      style={[
                                        commonStyles.ns400,
                                        commonStyles.font11,
                                      ]}>
                                      {'per person'}
                                    </Text>
                                  </View>
                                </View>
                              </View>

                              {/* bottom --  Enjoy Exclusive Deals & Discounts  */}

                              <View style={styles.bottomCon}>
                                <Text
                                  style={[
                                    commonStyles.ns400,
                                    commonStyles.font11,
                                  ]}>
                                  Enjoy Exclusive Deals & Discounts
                                </Text>
                              </View>
                            </TouchableOpacity>
                          );
                        }}
                      />
                    </View>
                  </View>
                )}
              />
            </View>

            {/* hotel render end here-- */}
          </View>
        </>

        {/* filter */}

        <View style={styles.filterCon}>
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => navigation.navigate('hpfilter')}>
            <Image style={size15} tintColor={blue} source={icon.filters} />
            <Text style={[commonStyles.ns600, {color: blue}]}>FILTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HpSearches;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: bgColor,
  },

  body: {
    flex: 1,
    marginTop: _mvs(15),
  },

  renderingParent: {
    flex: 1,
    // backgroundColor: 'red',
  },

  childCon: {
    backgroundColor: white,
    // backgroundColor: 'red',
    marginHorizontal: _ms(4),
    borderRadius: 4,
    paddingTop: _mvs(10),
  },

  comWrap: {
    backgroundColor: white,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    marginHorizontal: _ms(10),
    borderWidth: 1,
    borderColor: bgColor,
    rowGap: _mvs(5),
    elevation: 2,
    marginBottom: _mvs(10),
  },

  hotelImage: {
    width: '100%',
    height: _mvs(200),
    borderTopRightRadius: 40,
  },

  iconCon: {
    backgroundColor: '#D9D9D9',
    width: _ms(30),
    height: _ms(30),
    borderRadius: 100,
    ...commonStyles.commWrapSix,
  },

  bottomCon: {
    backgroundColor: '#EAF5FF',
    paddingVertical: _mvs(10),
    alignItems: 'center',
    borderBottomLeftRadius: 40,
  },

  filterCon: {
    backgroundColor: b1,
    alignItems: 'flex-end',
    paddingVertical: _mvs(4),
    paddingBottom: _mvs(7),
    paddingHorizontal: _ms(10),
  },

  filterBtn: {
    flexDirection: 'row',
    borderWidth: 1.5,
    borderRadius: 2,
    borderColor: blue,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(4.5),
    width: _s(122),
    gap: _ms(5),
  },
});
