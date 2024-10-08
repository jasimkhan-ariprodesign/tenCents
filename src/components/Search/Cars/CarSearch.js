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
import {b1, b2, b3, bgColor, blue, white} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';
import ModifyCarSearch from './ModifyCarSearch';
import {
  _ms,
  _mvs,
  _s,
  _vs,
  checkIconStyle,
  size12,
  size15,
  size18,
} from '../../utils/Responsive';

const {width, height} = Dimensions.get('window');

const carRentalData = [
  {
    carType: 'Small Cars',
    price: '$560.91',
    seats: 4,
    icon: image.car1,
  },
  {
    carType: 'Standard',
    price: '$560.91',
    seats: 5,
    icon: image.car3,
  },
  {
    carType: 'Special',
    price: '$700.91',
    seats: 5,
    icon: image.car4,
  },
  {
    carType: 'Large',
    price: '$600.91',
    seats: 7,
    icon: image.car2,
  },
  {
    carType: 'SUVs',
    price: '$625.91',
    seats: 6,
    icon: image.car2,
  },
];

const carOptions = [
  {
    type: 'Economy',
    brand: 'ALAMO',
    model: 'Chevrolet Spark or Similar',
    pricePerDay: 500.99,
    // icon: 'https://example.com/icons/economy-car.png', // Replace with actual car icon URL
    icon: image.car1,
    features: {
      mileage: 'Unlimited',
      airConditioner: 'Air Conditioner',
      transmission: 'Automatic',
      airportPickup: 'At Airport',
      luggage: '2 Bags',
      seats: '4 Seats',
    },
  },
  {
    type: 'Compact',
    brand: 'ALAMO',
    model: 'Nissan Versa or Similar',
    pricePerDay: 506.99,
    icon: image.car2,
    features: {
      mileage: 'Unlimited',
      airConditioner: 'Air Conditioner',
      transmission: 'Automatic',
      airportPickup: 'At Airport',
      luggage: '2 Bags',
      seats: '4 Seats',
    },
  },
  {
    type: 'Mid-Size',
    brand: 'ALAMO',
    model: 'Kia Forte or Similar',
    pricePerDay: 656.99,
    icon: image.car3,
    features: {
      mileage: 'Unlimited',
      airConditioner: 'Air Conditioner',
      transmission: 'Automatic',
      airportPickup: 'At Airport',
      luggage: '3 Bags',
      seats: '5 Seats',
    },
  },
];

const CarSearch = ({navigation}) => {
  return (
    <SafeAreaView style={styles.parent}>
      <BgGradient width={width} height={height * 0.36} />
      <Header />

      <View style={styles.body}>
        {/* modifier */}
        <View style={[styles.tDetails]}>
          <ModifyCarSearch navigation={navigation} />
        </View>

        <View style={{flex: 1, marginTop: 15}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            bounces={false}
            decelerationRate={'fast'}>
            <View style={{rowGap: _ms(15)}}>
              {/* car type */}
              <View style={{paddingHorizontal: _ms(8)}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {carRentalData &&
                    carRentalData?.map((item, index) => {
                      const price = item.price.split('.');
                      const dollar = price[0];
                      const cent = price[1];
                      // console.log(index == 0 && item);
                      //  console.log(dollar);
                      return (
                        <TouchableOpacity key={index} style={styles.carType}>
                          <>
                            <Image
                              style={[styles.car]}
                              //   source={image.car1}
                              source={item.icon}
                            />
                          </>

                          <View style={[commonStyles.commWrapTwo]}>
                            <Text
                              style={[commonStyles.ns400, commonStyles.font10]}>
                              {/* Small Cars */}
                              {item?.carType}
                            </Text>

                            <View style={{flexDirection: 'row'}}>
                              <Text
                                style={[
                                  commonStyles.ns600,
                                  commonStyles.font10,
                                ]}>
                                {/* $ 560 */}
                                {dollar}
                              </Text>
                              <Text
                                style={[
                                  commonStyles.ns600,
                                  {fontSize: _ms(8)},
                                ]}>
                                {/* .91 */}
                                {cent}
                              </Text>
                            </View>
                          </View>

                          <View
                            style={[
                              commonStyles.commWrapOne,
                              {columnGap: _ms(10)},
                            ]}>
                            <View style={styles.seatWrap}>
                              <Image
                                style={size12}
                                tintColor={blue}
                                source={icon.seat}
                              />
                            </View>

                            <Text
                              style={[
                                commonStyles.ns600,
                                commonStyles.font12,
                                {color: b3},
                              ]}>
                              {/* 4 */}
                              {item?.seats}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                </ScrollView>
              </View>

              {/* car items */}
              <View style={{rowGap: _mvs(10)}}>
                {carOptions?.map((items, i) => {
                  const priceString = items?.pricePerDay.toString().split('.');

                  const price = priceString[0];
                  const cents = priceString[1];

                  return (
                    <View
                      key={i}
                      style={[
                        styles.comWrap,
                        {
                          marginBottom:
                            carOptions.length - 1 == i ? _mvs(10) : _mvs(0),
                        },
                      ]}>
                      {/* car name & desp */}

                      <View style={[commonStyles.commWrapTwo]}>
                        <View style={[commonStyles.flexOne, {rowGap: _mvs(4)}]}>
                          <Text
                            style={[commonStyles.ns600, commonStyles.font16]}>
                            {/* Economy ALAMO Car */}
                            {items?.type} {items?.brand}
                          </Text>

                          <Text style={commonStyles.ns400}>
                            {/* Chevrolet Spark Or Similar */}
                            {items?.model}
                          </Text>
                        </View>

                        <>
                          {/* <Image style={styles.carIcon} source={image.car1} /> */}
                          <Image style={styles.carIcon} source={items?.icon} />
                        </>
                      </View>

                      {/* car perks */}

                      <View style={styles.carPerks}>
                        <View
                          style={[
                            commonStyles.commWrapOne,
                            {columnGap: _ms(7)},
                          ]}>
                          <Image
                            style={size15}
                            tintColor={blue}
                            source={icon.speedometer}
                          />

                          <Text style={commonStyles.ns400}>
                            {/* Unlimited */}
                            {items?.features?.mileage} mileage
                          </Text>
                        </View>

                        <View
                          style={[
                            commonStyles.commWrapOne,
                            {columnGap: _ms(7)},
                          ]}>
                          <Image
                            style={size15}
                            tintColor={blue}
                            source={icon.plane}
                          />

                          <Text style={commonStyles.ns400}>
                            {items?.features?.airportPickup}
                          </Text>
                        </View>

                        <View
                          style={[
                            commonStyles.commWrapOne,
                            {columnGap: _ms(7)},
                          ]}>
                          <Image
                            style={size15}
                            tintColor={blue}
                            source={icon.airConditioner}
                          />

                          <Text style={commonStyles.ns400}>
                            {/* Air Conditioner */}
                            {items?.features?.airConditioner}
                          </Text>
                        </View>

                        <View
                          style={[
                            commonStyles.commWrapOne,
                            {columnGap: _ms(7)},
                          ]}>
                          <Image
                            style={size15}
                            tintColor={blue}
                            source={icon.gearshift}
                          />

                          <Text style={commonStyles.ns400}>
                            {/* Automatic */}
                            {items?.features?.transmission}
                          </Text>
                        </View>
                      </View>

                      {/* price & book */}
                      <View style={[commonStyles.commWrapTwo, {}]}>
                        <View
                          style={[
                            commonStyles.commWrapOne,
                            {columnGap: _ms(10)},
                          ]}>
                          <View style={commonStyles.commWrapSeven}>
                            <Text
                              style={[commonStyles.ns400, commonStyles.font16]}>
                              {/* USD 500 */}
                              {price}
                            </Text>
                            <Text style={[commonStyles.ns400]}>
                              {/* .99 */}.{cents}
                            </Text>
                          </View>

                          <Text style={[commonStyles.ns400]}>Per Day</Text>
                        </View>

                        <TouchableOpacity
                          style={[styles.chngCar]}
                          onPress={() => {
                            navigation.navigate('cardetails');
                          }}>
                          <Text
                            style={[
                              commonStyles.lbB1,
                              commonStyles.font16,
                              {color: white},
                            ]}>
                            Book
                          </Text>
                        </TouchableOpacity>
                      </View>

                      <View style={styles.dottedLine} />

                      {/* bottom part */}
                      <View style={commonStyles.commWrapTwo}>
                        <View>
                          <Image
                            style={[{height: _mvs(25), width: _ms(90)}]}
                            source={image.alamo}
                          />
                        </View>

                        <View
                          style={[
                            commonStyles.commWrapOne,
                            {columnGap: _ms(18)},
                          ]}>
                          <View
                            style={[
                              commonStyles.commWrapOne,
                              {columnGap: _ms(10)},
                            ]}>
                            <View style={[styles.seatWrap]}>
                              <Image
                                style={size18}
                                tintColor={blue}
                                source={icon.baggage}
                              />
                            </View>

                            <Text
                              style={[
                                commonStyles.ns600,
                                commonStyles.font11,
                                {color: b3},
                              ]}>
                              {/* 2 Bags */}
                              {items?.features?.luggage}
                            </Text>
                          </View>

                          <View
                            style={[
                              commonStyles.commWrapOne,
                              {columnGap: _ms(10)},
                            ]}>
                            <View style={[styles.seatWrap]}>
                              <Image
                                style={size18}
                                tintColor={blue}
                                source={icon.seat}
                              />
                            </View>

                            <Text
                              style={[
                                commonStyles.ns600,
                                commonStyles.font11,
                                {color: b3},
                              ]}>
                              {/* 4 Seats */}
                              {items?.features?.seats}
                            </Text>
                          </View>
                        </View>

                        {/*  */}
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>

        {/* botttom filter */}
        <View style={styles.filterCon}>
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => navigation.navigate('carfilter')}>
            <Image style={size15} tintColor={blue} source={icon.filters} />
            <Text style={[commonStyles.ns600, {color: blue}]}>FILTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CarSearch;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: bgColor,
  },

  body: {
    flex: 1,
    marginTop: _mvs(15),
    // backgroundColor: 'red',
  },

  tDetails: {
    backgroundColor: white,
    borderRadius: 4,
    elevation: 3,
    marginHorizontal: _ms(8),
    paddingHorizontal: _ms(10),
    paddingVertical: _mvs(5),
  },

  carType: {
    borderRadius: 5,
    elevation: 3,
    backgroundColor: white,
    paddingVertical: _mvs(8),
    width: _ms(115),
    margin: _ms(4),
    rowGap: _mvs(6),
    paddingHorizontal: _ms(3),
  },

  car: {
    // width: '99%',
    flex: 1,
    height: _mvs(45),
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  comWrap: {
    backgroundColor: white,
    paddingVertical: _mvs(10),
    paddingHorizontal: _ms(10),
    borderRadius: 8,
    elevation: 3,
    rowGap: _ms(10),
    marginHorizontal: _ms(8),
  },

  carIcon: {
    width: _ms(100),
    height: _mvs(50),
    // resizeMode: 'contain',
  },

  carPerks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 10,
    // width: 250,
    maxWidth: '75%',
    // backgroundColor: 'red',
  },

  chngCar: {
    borderRadius: 7,
    backgroundColor: b2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(5),
    width: _ms(100),
  },

  dottedLine: {
    borderColor: b3,
    borderBottomWidth: 1.4,
    borderStyle: 'dashed',
    // marginTop: 5,
  },

  seatWrap: {
    backgroundColor: 'rgba(33, 180, 226, 0.1)',
    borderRadius: _ms(28),
    width: _ms(28),
    height: _ms(28),
    alignItems: 'center',
    justifyContent: 'center',
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
