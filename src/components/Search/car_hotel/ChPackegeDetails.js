import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
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
import {
  _fonts,
  _ms,
  _mvs,
  _s,
  _vs,
  _width,
  size15,
  size18,
} from '../../utils/Responsive';

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
  {
    type: 'Compact SUV',
    brand: 'ALAMO',
    model: 'Toyota C-HR or Similar',
    pricePerDay: 708.99,
    icon: image.car4,
    features: {
      mileage: 'Unlimited',
      airConditioner: 'Air Conditioner',
      transmission: 'Automatic',
      airportPickup: 'At Airport',
      luggage: '3 Bags',
      seats: '5 Seats',
    },
  },
  {
    type: 'Standard',
    brand: 'ALAMO',
    model: 'Volkswagen Jetta or Similar',
    pricePerDay: 670.99,
    icon: image.car1,
    features: {
      mileage: 'Unlimited',
      airConditioner: 'Air Conditioner',
      transmission: 'Automatic',
      airportPickup: 'At Airport',
      luggage: '3 Bags',
      seats: '5 Seats',
    },
  },
  {
    type: 'Fullsize',
    brand: 'Enterprise',
    model: 'Toyota Camry or Similar',
    pricePerDay: 670.99,
    icon: image.car1,
    features: {
      mileage: 'Unlimited',
      airConditioner: 'Air Conditioner',
      transmission: 'Automatic',
      airportPickup: 'At Airport',
      luggage: '3 Bags',
      seats: '5 Seats',
    },
  },
  {
    type: 'Standard SUV',
    brand: 'Enterprise',
    model: 'Ford Edge or Similar',
    pricePerDay: 670.99,
    icon: image.car1,
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

const ChPackegeDetails = ({navigation}) => {
  const [selectedCar, setSelectedcar] = useState(null);
  return (
    <SafeAreaView style={styles.parent}>
      <StatusBar translucent={true} barStyle={'light-content'} />
      <BgGradient width={_width} height={_vs(82)} />
      <Header />

      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{rowGap: _mvs(10)}}>
            {/* ticket */}
            <View style={styles.comWrap}>
              {/* hotel name */}
              <View style={[commonStyles.commWrapSeven, {columnGap: _ms(10)}]}>
                {/* left */}
                <Image style={styles.imageStyle} source={image.hotelimg2} />

                {/* right */}
                <View style={[commonStyles.flexOne, {rowGap: _mvs(6)}]}>
                  <Text style={[commonStyles.ns400]}>
                    New Apartments in Cranston by GLOBALSTAY
                  </Text>
                  <Text style={[commonStyles.ns400, {color: b3}]}>
                    Thu, Dec-21-2023 - Thu, Jan-04-2024
                  </Text>

                  {/* btn action */}
                  <View
                    style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                    <TouchableOpacity>
                      <Text style={[commonStyles.ns400, {color: blue}]}>
                        Change Hotel
                      </Text>
                    </TouchableOpacity>

                    <Text>|</Text>

                    <TouchableOpacity>
                      <Text style={[commonStyles.ns400, {color: blue}]}>
                        View Details
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            {/* car details */}
            <View style={[styles.comWrap, {rowGap: _mvs(10)}]}>
              {/* car name & desp */}
              <View style={[commonStyles.commWrapTwo, {gap: _ms(8)}]}>
                <View style={[commonStyles.flexOne, {rowGap: _mvs(6)}]}>
                  <View style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                    <Text style={[commonStyles.ns400, commonStyles.font16]}>
                      Economy
                    </Text>
                    <Image style={styles.alamoIcon} source={image.alamo} />
                  </View>

                  <Text style={commonStyles.ns400}>
                    Chevrolet Spark Or Similar
                  </Text>
                </View>

                <>
                  <Image style={styles.carIcon} source={image.car1} />
                </>
              </View>
              {/* car perks */}
              <View style={styles.carPerks}>
                <View style={[commonStyles.commWrapOne, {columnGap: _ms(7)}]}>
                  <Image
                    style={size15}
                    tintColor={blue}
                    source={icon.speedometer}
                  />

                  <Text style={commonStyles.ns400}>Unlimited mileage</Text>
                </View>

                <View style={[commonStyles.commWrapOne, {columnGap: _ms(7)}]}>
                  <Image style={size15} tintColor={blue} source={icon.plane} />

                  <Text style={commonStyles.ns400}>At Airport</Text>
                </View>

                <View style={[commonStyles.commWrapOne, {columnGap: _ms(7)}]}>
                  <Image
                    style={size15}
                    tintColor={blue}
                    source={icon.airConditioner}
                  />

                  <Text style={commonStyles.ns400}>Air Conditioner</Text>
                </View>

                <View style={[commonStyles.commWrapOne, {columnGap: _ms(7)}]}>
                  <Image
                    style={size15}
                    tintColor={blue}
                    source={icon.gearshift}
                  />

                  <Text style={commonStyles.ns400}>Automatic</Text>
                </View>
              </View>

              {/* change car */}
              <View style={[commonStyles.commWrapTwo, {}]}>
                <View style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                  <View
                    style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
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
                      2 Bags
                    </Text>
                  </View>

                  <View
                    style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
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
                      4 Seats
                    </Text>
                  </View>
                </View>

                <TouchableOpacity style={styles.chngCar}>
                  <Text
                    style={[
                      commonStyles.lbB1,
                      commonStyles.font16,
                      {color: white},
                    ]}>
                    Change Car
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.dottedLine} />

              {/* bottom part */}
              <View>
                <View>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    Pick-up:{' '}
                    <Text style={commonStyles.ns400}>
                      2000 Airport Road Ne AB, CA, | Thu, Dec 21 2023 / 10:00 AM
                    </Text>
                  </Text>
                </View>
                <View style={{marginTop: _mvs(4)}}>
                  <Text style={[commonStyles.ns600, commonStyles.font12]}>
                    Drop-off:{' '}
                    <Text style={commonStyles.ns400}>
                      Same as Pick-up location | Thu, Jan 04 2024 / 10:00 AM
                    </Text>
                  </Text>
                </View>
              </View>
            </View>

            {/* pricing */}
            <View style={styles.comWrap}>
              <View style={[commonStyles.commWrapTwo, {columnGap: _ms(8)}]}>
                {/* left */}
                <View style={[commonStyles.flexOne, {rowGap: _mvs(4)}]}>
                  <Text style={[commonStyles.ns600, commonStyles.font16]}>
                    Package Price
                  </Text>
                  <Text style={[commonStyles.ns400, {color: b3}]}>
                    Per person
                  </Text>
                  <Text style={[commonStyles.ns400, {color: b3}]}>
                    Flight + Hotel(incl. taxes & fees)
                  </Text>
                </View>

                {/* right */}
                <View
                  style={[
                    commonStyles.flexOne,
                    commonStyles.alignItemsFlexEnd,
                    {rowGap: _mvs(4)},
                  ]}>
                  <View style={commonStyles.commWrapSeven}>
                    <Text style={[commonStyles.ns400, commonStyles.font14]}>
                      $2811
                    </Text>
                    <Text style={[commonStyles.ns400]}>.49</Text>
                  </View>

                  <Text style={[commonStyles.ns400, {textAlign: 'right'}]}>
                    As low as $351/mo with Affirm{' '}
                    <Text
                      style={[
                        commonStyles.font11,
                        commonStyles.blueUnderlineTxt,
                        {fontFamily: _fonts.londonBetween},
                      ]}
                      onPress={() => Alert.alert('Learn More')}>
                      Learn more
                    </Text>
                  </Text>

                  {/* btn */}
                  <TouchableOpacity style={[styles.btn]}>
                    <Text
                      style={[
                        commonStyles.lbB1,
                        commonStyles.font15,
                        {color: white},
                      ]}>
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* othres car pkg */}
            <View style={{rowGap: _mvs(10)}}>
              {/* cars map start */}

              {carOptions?.map((items, i) => {
                const priceString = items?.pricePerDay.toString().split('.');

                const price = priceString[0];
                const cents = priceString[1];

                return (
                  <View key={i} style={styles.comWrap}>
                    {/* car name & desp */}

                    <View style={[commonStyles.commWrapTwo]}>
                      <View style={[commonStyles.flexOne, {rowGap: _mvs(4)}]}>
                        <Text style={[commonStyles.ns600, commonStyles.font16]}>
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
                        style={[commonStyles.commWrapOne, {columnGap: _ms(7)}]}>
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
                        style={[commonStyles.commWrapOne, {columnGap: _ms(7)}]}>
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
                        style={[commonStyles.commWrapOne, {columnGap: _ms(7)}]}>
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
                        style={[commonStyles.commWrapOne, {columnGap: _ms(7)}]}>
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
                          // navigation.navigate('cardetails');
                          navigation.navigate('chreview');
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

              {/* cars map end */}
            </View>

            {/* pagination */}
            <View style={styles.pagination}>
              <TouchableOpacity style={styles.pBox}>
                <Image
                  style={[styles.pBoxImg, {transform: [{rotate: '180deg'}]}]}
                  source={icon.rightArrow}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.pBoxActive}>
                <Text style={[commonStyles.ns400, styles.pBoxTxtActive]}>
                  1
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.pBox}>
                <Text style={[commonStyles.ns400, styles.pBoxTxt]}>2</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.pBox}>
                <Text style={[commonStyles.ns400, styles.pBoxTxt]}>3</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.pBox}>
                <Text style={[commonStyles.ns400, styles.pBoxTxt]}>...</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.pBox}>
                <Text style={[commonStyles.ns400, styles.pBoxTxt]}>70</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.pBox}>
                <Image style={styles.pBoxImgActive} source={icon.rightArrow} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* PROCEED */}

        {/* eski yaha pe jarurat nahi hai  */}

        {/* <View style={styles.proceedCon}>
          <View style={{rowGap: _mvs(2)}}>
            <Text style={[commonStyles.ns600, {color: white}]}>Price</Text>
            <Text style={[commonStyles.ns600, {color: white}]}>
              $1320 + Taxes
            </Text>
          </View>

          <TouchableOpacity
            style={styles.proceedBtn}
            onPress={() => {
              navigation.navigate('chreview');
            }}>
            <Text
              style={[commonStyles.ns600, commonStyles.font13, {color: blue}]}>
              PROCEED
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default ChPackegeDetails;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: bgColor,
  },

  body: {
    marginTop: _mvs(15),
    flex: 1,
  },

  comWrap: {
    backgroundColor: white,
    paddingVertical: _mvs(10),
    paddingHorizontal: _ms(10),
    borderRadius: 8,
    elevation: 3,
    rowGap: _ms(10),
    marginHorizontal: _ms(6),
  },

  imageStyle: {
    width: _ms(70),
    height: _mvs(50),
    resizeMode: 'cover',
    borderRadius: 2,
  },

  alamoIcon: {
    width: _ms(80),
    height: _mvs(22),
    resizeMode: 'contain',
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

  seatWrap: {
    backgroundColor: 'rgba(33, 180, 226, 0.1)',
    borderRadius: _ms(28),
    width: _ms(28),
    height: _ms(28),
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    borderRadius: 4,
    backgroundColor: b2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(3),
    paddingHorizontal: _ms(16),
  },

  dottedLine: {
    borderColor: b3,
    borderBottomWidth: 1.4,
    borderStyle: 'dashed',
    // marginTop: 5,
  },

  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: _ms(5),
    justifyContent: 'center',
    marginVertical: _mvs(10),
  },

  // ???????

  pBox: {
    backgroundColor: white,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: _ms(35),
    height: _ms(35),
  },

  pBoxActive: {
    backgroundColor: blue,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: _ms(35),
    height: _ms(35),
  },

  pBoxImg: {
    width: 15,
    height: 15,
    tintColor: blue,
    opacity: 0.3,
  },
  pBoxImgActive: {
    width: 15,
    height: 15,
    tintColor: blue,
  },
  pBoxTxt: {
    fontSize: 12,
    color: blue,
  },
  pBoxTxtActive: {
    fontSize: 12,
    color: white,
  },

  proceedCon: {
    backgroundColor: b1,
    alignItems: 'center',
    justifyContent: 'space-between',
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
});
