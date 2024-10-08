import {
  Alert,
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
import {b1, b2, b3, black, blue, green, white} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';
import {_ms, _mvs, _vs, _width} from '../../utils/Responsive';

const H = _mvs(62);
const W = _ms(102);
const HotelDetails = ({navigation, route}) => {
  const {selectedTopMenu} = route?.params;
  // console.log('HotelDetails  last screen for routes selectedTopMenu => ', selectedTopMenu);

  const apiImages = [
    image.image1,
    image.image2,
    image.image3,
    image.image5,
    image.image4,
    image.image6,
    image.image7,
  ];

  //   const apiImages2 = [image.image4, image.image6, image.image7];

  const imagesToShow =
    apiImages && apiImages.length > 3 ? apiImages.slice(0, 3) : apiImages;

  const imagesToShow2 = apiImages && apiImages.length > 3 ? apiImages[3] : null;

  const imagesToShow3 = apiImages.length > 4 ? apiImages.slice(4, 7) : [];
  // console.log('imagesToShow3 ----> ', imagesToShow3);

  //   const apiImages3 =
  //     apiImages && apiImages.length > 3 ? apiImages.splice(3, 3) : apiImages; // splice will modify original array

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

  const facilitiesData = [
    {icon: icon.danger, text: 'Outdoor swimming pool'},
    {icon: icon.noSmoking, text: 'Non-smoking rooms'},
    {icon: icon.gym, text: 'Fitness centre'},
    {icon: icon.restaurant, text: '2 restaurants'},
    {icon: icon.disabilities, text: 'Facilities for disabled guests'},
    {icon: icon.parkingArea, text: 'Private parking'},
    {icon: icon.coffeeMachine, text: 'Tea/coffee maker in all rooms'},
    {icon: icon.cocktail, text: 'Bar'},
    {icon: icon.coffee, text: 'Breakfast'},
    {icon: icon.wifi, text: 'Free WiFi'},
  ];

  const roomPerksData = [
    {icon: icon.door, text: 'Room'},
    {icon: icon.swimming, text: 'Rooftop pool'},
    {icon: icon.airConditioner, text: 'Air conditioning'},
    {icon: icon.shower, text: 'Ensuite bathroom'},
    {icon: icon.plans, text: '26 m²'},
    {icon: icon.wifi, text: 'Free WiFi'},
    {icon: icon.coffeeMachine, text: 'Coffee machine'},
    {icon: icon.ledTv, text: 'Flat-screen TV'},
  ];

  const roomFacilities = [
    'Free toiletries',
    'Toilet',
    'Bath or shower',
    'Towels',
    'Linen',
    'Socket near the bed',
    'Desk',
    'Seating Area',
    'Ironing facilities',
    'TV',
    'Telephone',
    'Tea/Coffee maker',
    'Iron',
    'Interconnected room(s) available',
    'Heating',
    'Wake up service/Alarm clock',
    'Carpeted',
    'Clothes rack',
  ];

  const faqItems = [
    'Can I park there?',
    'Is the swimming pool open?',
    'Do they serve breakfast?',
    'Is the restaurant open?',
    'How and when do I pay?',
  ];

  const rules = [
    'This property is 100% non-smoking.',
    'Secure, heated valet parking is available at CAD 23 per night (weekdays).',
    'A valid credit card is required at check-in for all rooms, including prepaid reservations.',
    'Additional safety and sanitation measures are in effect due to COVID-19.',
    'Food & beverage services may be limited or unavailable due to COVID-19.',
    'Steps are being taken to protect guests and staff due to COVID-19, with certain services reduced or unavailable.',
    'Guests must show photo ID and a credit card at check-in. Special Requests are subject to availability and additional charges.',
    'Swimming pool #1 is closed from Sept 30, 2023, to May 30, 2024.',
    'A CAD 100 damage deposit is required on arrival. It will be collected by credit card and refunded after check-out, pending inspection.',
  ];

  return (
    <SafeAreaView style={styles.parent}>
      <BgGradient width={_width} height={_vs(82)} />
      <Header />

      <View style={[styles.parent, {marginTop: _mvs(15)}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              rowGap: 10,
              marginHorizontal: _ms(12),
            }}>
            {/* hotel name */}
            <Text style={[commonStyles.ns600, {fontSize: _ms(15)}]}>
              Ramada Plaza by Wyndham Calgary Downtown
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

            {/* hotel Address */}
            <Text style={[commonStyles.ns600, {fontSize: _ms(12)}]}>
              708 8th Avenue Southwest, T2P 1H2 Calgary, Canada - Great location
              - show map
            </Text>

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

            {/* about hotel */}
            <View style={styles.aboutHotel}>
              <Text style={[styles.hotelText]}>
                Featuring on-site restaurant, Ramada Plaza by Wyndham Calgary
                Downtown offers convenient accommodation near entertainment,
                shopping, and city businesses. Free Wi-Fi is offered throughout
                the property. A 32" flat-screen TV features in each
                air-conditioned room at the Ramada Plaza by Wyndham Calgary
                Downtown. A work desk, coffee maker, and ironing facilities
                provide additional convenience. Free access to the fitness
                centre is provided to all guests . Valet parking only, and
                restrictions apply. Cheers Restaurant is family friendly,
                offering à la carte options for breakfast. The Fox on 6th Pub is
                open but has limited hours and features a full food and beverage
                menu. Just a block from Calgary transit, the property is a quick
                drive or train ride from all Calgary attractions.
              </Text>

              <Text style={[styles.hotelText]}>
                Couples particularly like the location — they rated it 8.8 for a
                two-person trip for a two-person trip.
              </Text>

              <Text style={[styles.hotelText]}>Hotel chain/brand:</Text>

              <Text style={[styles.hotelText]}>Ramada</Text>
            </View>

            {/* facilities */}

            <View style={styles.facilitiesCon}>
              <View style={styles.facilitiesList}>
                <Text style={styles.title}>Most popular facilities</Text>

                {/* facility options */}
                {facilitiesData.map((facility, index) => (
                  <View key={index} style={styles.facilityItem}>
                    <Image
                      style={styles.icon}
                      source={facility.icon}
                      resizeMode="contain"
                    />
                    <Text style={styles.facilityText}>{facility.text}</Text>
                  </View>
                ))}
              </View>

              {/* hotel logo */}
              <View style={styles.ramada}>
                <Image style={styles.ramadaImage} source={image.ramada} />
              </View>
            </View>

            {/* Property highlights */}
            <View style={styles.pHigh}>
              <Text style={styles.title}>Property highlights</Text>

              <>
                <Text style={[commonStyles.ns600, {fontSize: _ms(13)}]}>
                  Perfect for a 2-week stay!
                </Text>

                <View style={styles.pHighChild}>
                  <Image
                    style={[styles.locationIcon, {}]}
                    source={icon.location}
                    tintColor={b2}
                  />
                  <Text
                    style={[commonStyles.ns400, {fontSize: _ms(13), flex: 1}]}>
                    Top location: Highly rated by recent guests (8.8)
                  </Text>
                </View>
              </>

              <View style={{rowGap: _mvs(8)}}>
                <Text style={commonStyles.ns600}>Breakfast info</Text>

                <Text style={commonStyles.ns400}>American</Text>

                <View style={styles.pHighChildTwo}>
                  <Image
                    style={{
                      width: _ms(20),
                      height: _ms(20),
                    }}
                    source={icon.parkingArea}
                    tintColor={b2}
                    resizeMode="contain"
                  />
                  <Text style={[commonStyles.ns400, {fontSize: _ms(13)}]}>
                    Private parking at the hotel
                  </Text>
                </View>
              </View>

              {/* reserve btn */}
              <TouchableOpacity style={[styles.btn, {marginTop: _mvs(10)}]}>
                <Text
                  style={[
                    commonStyles.lbB1,
                    {color: white, fontSize: _ms(16)},
                  ]}>
                  Reserve
                </Text>
              </TouchableOpacity>
            </View>

            {/* Availability */}
            <View style={styles.availabilityCon}>
              <Text style={[commonStyles.ns600, {fontSize: _ms(15)}]}>
                Availability
              </Text>

              <View style={styles.availChild}>
                <Text style={[commonStyles.ns600, {fontSize: 14, color: b3}]}>
                  Prices converted to USD
                </Text>

                <Image
                  style={{width: 15, height: 15, tintColor: b3}}
                  source={icon.info}
                />
              </View>

              <View style={styles.yellowView}>
                <View style={[commonStyles.commWrapFour]}>
                  <TouchableOpacity style={styles.dateTimeView}>
                    <Image
                      style={{width: _ms(12), height: _ms(12)}}
                      source={icon.calendar}
                      tintColor={b1}
                    />
                    <Text style={[commonStyles.ns600, {fontSize: _ms(9.5)}]}>
                      Thu, Dec 21 - Thu, Jan 04
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.dateTimeView}>
                    <Text style={[commonStyles.ns600, {fontSize: _ms(9.5)}]}>
                      2 adults · 0 children · 1 room
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={[styles.btn, {marginTop: _mvs(5)}]}>
                  <Text
                    style={[
                      commonStyles.lbB1,
                      {color: white, fontSize: _ms(16)},
                    ]}>
                    Modify
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Filter by */}
            <View style={{marginTop: _mvs(10)}}>
              <Text style={[commonStyles.ns600, {fontSize: _ms(16)}]}>
                Filter by:
              </Text>

              {/* filters */}
              <View
                style={[
                  commonStyles.commWrapOne,
                  {columnGap: _ms(14), marginTop: _mvs(10)},
                ]}>
                <View style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                  <TouchableOpacity>
                    <View style={styles.circleBtn} />
                  </TouchableOpacity>

                  <Text style={[commonStyles.ns600, {}]}>Rooms</Text>
                </View>

                <View style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
                  <TouchableOpacity>
                    <View style={styles.circleBtn} />
                  </TouchableOpacity>

                  <Text style={[commonStyles.ns600, {}]}>Suites</Text>
                </View>
              </View>

              {/* Room details */}
              <View style={styles.roomDetails}>
                <Text style={[commonStyles.ns600, {color: b2}]}>
                  King Room - Non-Smoking
                </Text>

                <View
                  style={[
                    commonStyles.commWrapOne,
                    {
                      columnGap: _ms(10),
                    },
                  ]}>
                  <Image
                    style={styles.icon}
                    source={icon.chart}
                    resizeMode="contain"
                  />
                  <Text
                    style={[
                      commonStyles.ns600,
                      {fontSize: _ms(12), color: '#D4111E'},
                    ]}>
                    Only 4 rooms left on our site
                  </Text>
                </View>

                <Text style={[commonStyles.ns400, {color: b2}]}>
                  1 extra-large double bed
                </Text>

                <View style={styles.perksContainer}>
                  {roomPerksData.map((perk, index) => (
                    <View
                      key={index}
                      style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
                      <Image
                        style={styles.icon}
                        source={perk.icon}
                        resizeMode="contain"
                      />
                      <Text style={styles.perkText}>{perk.text}</Text>
                    </View>
                  ))}
                </View>

                <View style={styles.perksContainer}>
                  {roomFacilities.map((facility, index) => (
                    <View
                      key={index}
                      style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                      <Image
                        style={styles.checkIcon}
                        source={icon.check}
                        resizeMode="contain"
                        tintColor={green}
                      />
                      <Text style={styles.perkText}>{facility}</Text>
                    </View>
                  ))}
                </View>

                {/* breakfast 1 */}
                <View style={styles.breakfast}>
                  <View style={[styles.breakfastLeft, {flex: 1.2}]}>
                    <View
                      style={[
                        commonStyles.commWrapOne,
                        {
                          columnGap: _ms(10),
                        },
                      ]}>
                      <Image
                        style={styles.icon}
                        source={icon.user}
                        resizeMode="contain"
                        tintColor={b1}
                      />
                      <Text style={commonStyles.ns600}>2 Guests</Text>
                    </View>

                    <View style={styles.breakfastLeftChild}>
                      <Image
                        style={styles.icon}
                        source={icon.coffee}
                        resizeMode="contain"
                        tintColor={b1}
                      />
                      <Text
                        style={[
                          commonStyles.ns400,
                          {
                            fontSize: _ms(11),
                            flex: 1,
                          },
                        ]}>
                        Breakfast US$12(optional)
                      </Text>
                    </View>

                    <View style={styles.breakfastLeftChild}>
                      <Image
                        style={[styles.checkIcon, {marginTop: _mvs(3)}]}
                        source={icon.check}
                        resizeMode="contain"
                        tintColor={green}
                      />

                      <View style={{flex: 1}}>
                        <Text
                          style={[
                            commonStyles.ns600,
                            {fontSize: _ms(11), color: green},
                          ]}>
                          Free cancellation
                        </Text>
                        <Text
                          style={[
                            commonStyles.ns400,
                            {fontSize: _ms(11), color: green},
                          ]}>
                          before 20 December 2023
                        </Text>
                      </View>
                    </View>

                    <View style={styles.breakfastLeftChild}>
                      <Image
                        style={[styles.checkIcon, {marginTop: _mvs(3)}]}
                        source={icon.check}
                        resizeMode="contain"
                        tintColor={green}
                      />

                      <View style={{flex: 1}}>
                        <Text
                          style={[
                            commonStyles.ns600,
                            {fontSize: _ms(11), color: green},
                          ]}>
                          No prepayment needed
                        </Text>
                        <Text
                          style={[
                            commonStyles.ns400,
                            {fontSize: _ms(11), color: green},
                          ]}>
                          - pay at the property
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={[styles.breakfastLeft]}>
                    <Text style={commonStyles.ns600}>USD 1,320</Text>

                    <Text
                      style={[
                        commonStyles.ns600,
                        {color: b3, fontSize: _ms(11)},
                      ]}>
                      +USD 162 (taxes and charges)
                    </Text>

                    <View style={styles.LED}>
                      <Text
                        style={[
                          commonStyles.ns600,
                          {
                            color: white,
                            fontSize: _ms(11),
                            marginTop: -_mvs(2),
                          },
                        ]}>
                        Late Escape Deal
                      </Text>
                    </View>

                    <View style={styles.incDec}>
                      <TouchableOpacity style={styles.incDecBtn}>
                        <Image
                          style={styles.plusIcon}
                          source={icon.minus}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>

                      <Text
                        style={[commonStyles.ns600, styles.numOFBreakfast, {}]}
                        numberOfLines={1}>
                        1
                      </Text>

                      <TouchableOpacity style={styles.incDecBtn}>
                        <Image
                          style={styles.plusIcon}
                          source={icon.plus}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                {/* breakfast 2 */}
                <View style={styles.breakfast}>
                  <View style={[styles.breakfastLeft, {flex: 1.2}]}>
                    <View
                      style={[
                        commonStyles.commWrapOne,
                        {
                          columnGap: _ms(10),
                        },
                      ]}>
                      <Image
                        style={styles.icon}
                        source={icon.user}
                        resizeMode="contain"
                        tintColor={b1}
                      />
                      <Text style={commonStyles.ns600}>2 Guests</Text>
                    </View>

                    <View style={styles.breakfastLeftChild}>
                      <Image
                        style={styles.icon}
                        source={icon.coffee}
                        resizeMode="contain"
                        tintColor={b1}
                      />
                      <Text
                        style={[
                          commonStyles.ns400,
                          {
                            fontSize: _ms(11),
                            flex: 1,
                          },
                        ]}>
                        Breakfast US$12(optional)
                      </Text>
                    </View>

                    <View style={styles.breakfastLeftChild}>
                      <Image
                        style={[styles.checkIcon, {marginTop: _mvs(3)}]}
                        source={icon.check}
                        resizeMode="contain"
                        tintColor={green}
                      />

                      <View style={{flex: 1}}>
                        <Text
                          style={[
                            commonStyles.ns600,
                            {fontSize: _ms(11), color: green},
                          ]}>
                          Free cancellation
                        </Text>
                        <Text
                          style={[
                            commonStyles.ns400,
                            {fontSize: _ms(11), color: green},
                          ]}>
                          before 20 December 2023
                        </Text>
                      </View>
                    </View>

                    <View style={styles.breakfastLeftChild}>
                      <Image
                        style={[styles.checkIcon, {marginTop: _mvs(3)}]}
                        source={icon.check}
                        resizeMode="contain"
                        tintColor={green}
                      />

                      <View style={{flex: 1}}>
                        <Text
                          style={[
                            commonStyles.ns600,
                            {fontSize: _ms(11), color: green},
                          ]}>
                          No prepayment needed
                        </Text>
                        <Text
                          style={[
                            commonStyles.ns400,
                            {fontSize: _ms(11), color: green},
                          ]}>
                          - pay at the property
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={[styles.breakfastLeft]}>
                    <Text style={commonStyles.ns600}>USD 1,320</Text>

                    <Text
                      style={[
                        commonStyles.ns600,
                        {color: b3, fontSize: _ms(11)},
                      ]}>
                      +USD 162 (taxes and charges)
                    </Text>

                    <View style={styles.LED}>
                      <Text
                        style={[
                          commonStyles.ns600,
                          {
                            color: white,
                            fontSize: _ms(11),
                            marginTop: -_mvs(2),
                          },
                        ]}>
                        Late Escape Deal
                      </Text>
                    </View>

                    <View style={styles.incDec}>
                      <TouchableOpacity style={styles.incDecBtn}>
                        <Image
                          style={styles.plusIcon}
                          source={icon.minus}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>

                      <Text
                        style={[commonStyles.ns600, styles.numOFBreakfast, {}]}
                        numberOfLines={1}>
                        0
                      </Text>

                      <TouchableOpacity style={styles.incDecBtn}>
                        <Image
                          style={styles.plusIcon}
                          source={icon.plus}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {/* Immediate Confirmation */}
                <View style={styles.immediateConfirm}>
                  <View style={styles.blackDot} />
                  <Text style={[commonStyles.ns400, {fontSize: _ms(14)}]}>
                    Immediate Confirmation
                  </Text>
                </View>
              </View>
            </View>

            {/* the final print */}
            <View style={[styles.leafStand, {}]}>
              <Text style={[commonStyles.ns600, {fontSize: _ms(10)}]}>
                Ramada Plaza by Wyndham Calgary Downtown may charge additional
                fees not shown above. See{' '}
                <Text
                  onPress={() => Alert.alert('alert')}
                  style={[
                    commonStyles.ns400,
                    {
                      fontSize: _ms(11),
                      color: blue,
                      textDecorationLine: 'underline',
                    },
                  ]}>
                  the fine print
                </Text>{' '}
                to read more about this property.
              </Text>
            </View>

            {/* leaf standard */}
            <View style={styles.leafStand}>
              <View style={styles.lllCon}>
                <Image style={styles.leafIcon} source={icon.leafSolid} />
                <Image style={styles.leafIcon} source={icon.leaf} />
                <Image style={styles.leafIcon} source={icon.leaf} />

                <Text
                  style={[
                    commonStyles.ns600,
                    {color: '#24AD53', marginLeft: _ms(10)},
                  ]}>
                  Travel Sustainable Level 1
                </Text>
              </View>

              <Text
                style={[
                  commonStyles.ns600,
                  {fontSize: _ms(10), marginTop: _mvs(10)},
                ]}>
                This property has told us they're taking some steps towards
                sustainability that can have environmental and social impact.
                We've worked with experts including Travalyst and Sustainalize
                to create the Travel Sustainable programme - making it easier
                for you to experience the world more sustainably.
              </Text>
            </View>

            {/* faq */}
            <View style={styles.faq}>
              <Text
                style={[
                  commonStyles.ns600,
                  {fontSize: _ms(16), textAlign: 'center'},
                ]}>
                Travellers are asking
              </Text>

              <View style={styles.faqChild}>
                {faqItems.map((question, index) => (
                  <React.Fragment key={index}>
                    <TouchableOpacity style={[styles.booking]}>
                      <View style={commonStyles.commWrapOne}>
                        <Image
                          style={{
                            width: _ms(20),
                            height: _ms(20),
                          }}
                          source={icon.chat}
                          tintColor={b2}
                        />

                        <Text
                          style={[commonStyles.ns600, {marginLeft: _ms(10)}]}>
                          {question}
                        </Text>
                      </View>

                      <View style={styles.bookingRight}>
                        <Image
                          style={[styles.icon, {marginLeft: _ms(10)}]}
                          source={require('../../../assets/icons/right-arrow.png')}
                          resizeMode="contain"
                        />
                      </View>
                    </TouchableOpacity>

                    <View style={styles.line} />
                  </React.Fragment>
                ))}
              </View>

              <View style={styles.stillLookingCon}>
                <Text style={[commonStyles.ns600, {fontSize: _ms(18)}]}>
                  Still looking?
                </Text>

                <TouchableOpacity style={styles.blueBtn}>
                  <Text style={[commonStyles.ns600, {color: blue}]}>
                    Ask a question
                  </Text>
                </TouchableOpacity>

                <Text style={[commonStyles.ns600, {fontSize: _ms(12)}]}>
                  We have an instant answer to most questions
                </Text>
              </View>

              <TouchableOpacity style={[styles.blueBtn, {alignSelf: 'center'}]}>
                <Text style={[commonStyles.ns600, {color: blue}]}>
                  See other questions (20)
                </Text>
              </TouchableOpacity>
            </View>

            {/* house rules */}
            <View style={styles.houseRules}>
              <View style={{paddingHorizontal: _ms(10), rowGap: _mvs(15)}}>
                <Text style={[commonStyles.ns700, {textAlign: 'center'}]}>
                  House Rules
                </Text>

                <Text style={[commonStyles.ns400, {color: b3}]}>
                  Ramada Plaza by Wyndham Calgary Downtown takes special
                  requests - add in the next step!
                </Text>
              </View>

              <View style={styles.rules}>
                {/* check in */}
                <View style={styles.rulesChild}>
                  <Image style={styles.icon} source={icon.checkin} />

                  <Text style={[styles.checkIncheckOutTxt]}>Check-in</Text>

                  <View style={{flex: 1, gap: _mvs(6)}}>
                    <Text style={commonStyles.ns400}>From 15:00</Text>
                    <Text style={[commonStyles.ns400, {color: b3}]}>
                      Guests are required to show a photo identification and
                      credit card upon check-in
                    </Text>
                  </View>
                </View>

                <View style={styles.hr} />

                {/* check out */}
                <View style={styles.rulesChild}>
                  <Image style={styles.icon} source={icon.checkout} />

                  <Text style={[styles.checkIncheckOutTxt]}>Check-out</Text>

                  <View style={{flex: 1, gap: _mvs(6)}}>
                    <Text style={commonStyles.ns400}>Until 11:00</Text>
                  </View>
                </View>

                <View style={styles.hr} />

                {/* cancel */}
                <View style={styles.rulesChild}>
                  <Image style={styles.icon} source={icon.info} />

                  <Text style={[styles.checkIncheckOutTxt]}>
                    Cancellation/prepayment
                  </Text>

                  <View style={{flex: 1, gap: _mvs(6)}}>
                    <Text style={[commonStyles.ns400, {}]}>
                      Cancellation and prepayment policies vary according to
                      accommodation type. Please check what{' '}
                      <Text
                        style={[
                          commonStyles.ns700,
                          {fontSize: _ms(12), color: blue},
                        ]}>
                        conditions
                      </Text>{' '}
                      may apply to each option when making your selection.
                    </Text>
                  </View>
                </View>

                <View style={styles.hr} />

                {/* refund */}
                <View style={styles.rulesChild}>
                  <Image style={styles.icon} source={icon.info} />

                  <Text style={[styles.checkIncheckOutTxt]}>
                    Refundable damage deposit
                  </Text>

                  <View style={{flex: 1, gap: _mvs(6)}}>
                    <Text style={[commonStyles.ns400]}>
                      A damage deposit of CAD 100 is required on arrival. That's
                      about 73.54USD. This will be collected by credit card. You
                      should be reimbursed on check-out. Your deposit will be
                      refunded in full via credit card, subject to an inspection
                      of the property.
                    </Text>
                  </View>
                </View>

                <View style={styles.hr} />

                {/* child beds */}
                <View style={styles.rulesChild}>
                  <Image style={styles.icon} source={icon.family} />

                  <Text style={[styles.checkIncheckOutTxt]}>
                    Children and beds
                  </Text>

                  <View style={{flex: 1, gap: _mvs(6)}}>
                    <Text style={commonStyles.ns400}>Child policies</Text>

                    <View style={{rowGap: 3}}>
                      <Text style={[commonStyles.ns400, {}]}>
                        Children of any age are welcome.
                      </Text>
                      <Text style={[commonStyles.ns400, {}]}>
                        Children 18 years and above will be charged as adults at
                        this property.
                      </Text>
                      <Text style={[commonStyles.ns400, {}]}>
                        To see correct prices and occupancy information, please
                        add the number of children in your group and their ages
                        to your search.
                      </Text>
                    </View>
                  </View>
                </View>

                {/* cot & extra policies */}
                <View style={{marginVertical: _mvs(15), rowGap: _mvs(10)}}>
                  <Text style={[commonStyles.ns600, {textAlign: 'center'}]}>
                    Cot and extra bed policies
                  </Text>

                  {/* box 1 */}
                  <View style={styles.box}>
                    <Text
                      style={[
                        commonStyles.ns600,
                        {fontSize: _ms(12), marginLeft: _ms(10)},
                      ]}>
                      0 - 2 years
                    </Text>

                    <View style={styles.hr} />

                    <View style={styles.justWrapper}>
                      <Image
                        style={{width: _ms(14), height: _ms(14)}}
                        source={icon.bed}
                        resizeMode="contain"
                      />

                      <Text
                        style={[
                          commonStyles.ns400,
                          {
                            flex: 1,
                            fontSize: _ms(10),
                          },
                        ]}>
                        Extra bed upon request
                      </Text>

                      <Text
                        style={[
                          commonStyles.ns400,
                          {
                            flex: 1,
                            fontSize: _ms(10),
                          },
                        ]}>
                        CAD 10 per child, per night
                      </Text>
                    </View>

                    <View style={styles.justWrapper}>
                      <Image
                        style={{width: _ms(14), height: _ms(14)}}
                        source={icon.barrier}
                        resizeMode="contain"
                      />

                      <Text
                        style={[
                          commonStyles.ns400,
                          {flex: 1, fontSize: _ms(10)},
                        ]}>
                        Cot upon request
                      </Text>

                      <Text
                        style={[
                          commonStyles.ns400,
                          {flex: 1, fontSize: _ms(10), color: '#008009'},
                        ]}>
                        Free
                      </Text>
                    </View>
                  </View>

                  {/* box 2 */}
                  <View style={styles.box}>
                    <Text
                      style={[
                        commonStyles.ns600,
                        {fontSize: _ms(12), marginLeft: _ms(10)},
                      ]}>
                      3+ years
                    </Text>

                    <View style={styles.hr} />

                    <View style={styles.justWrapper}>
                      <Image
                        style={{width: _ms(14), height: _ms(14)}}
                        source={icon.bed}
                      />

                      <Text
                        style={[
                          commonStyles.ns400,
                          {flex: 1, fontSize: _ms(10)},
                        ]}>
                        Extra bed upon request
                      </Text>

                      <Text
                        style={[
                          commonStyles.ns400,
                          {flex: 1, fontSize: _ms(10)},
                        ]}>
                        CAD 10 per child, per night
                      </Text>
                    </View>
                  </View>
                </View>

                {/* cot price */}
                <View style={styles.rulesChild}>
                  <View style={{width: _ms(16)}} />

                  <View style={{width: _ms(90)}} />

                  <View style={{flex: 1, rowGap: _mvs(6)}}>
                    <Text style={[commonStyles.ns400, {fontSize: 12}]}>
                      Prices for cots and extra beds are not included in the
                      total price, and will have to be paid for separately
                      during your stay.
                    </Text>

                    <Text style={[commonStyles.ns400, {fontSize: 12}]}>
                      The number of extra beds and cots allowed is dependent on
                      the option you choose. Please check your selected option
                      for more information.
                    </Text>

                    <Text style={[commonStyles.ns400, {fontSize: 12}]}>
                      All cots and extra beds are subject to availability.
                    </Text>
                  </View>
                </View>

                <View style={styles.hr} />

                {/* age */}
                <View style={styles.rulesChild}>
                  <Image style={styles.icon} source={icon.child} />

                  <Text style={[styles.checkIncheckOutTxt]}>
                    Age restriction
                  </Text>

                  <View style={{flex: 1, gap: _mvs(6)}}>
                    <Text style={[commonStyles.ns400]}>
                      The minimum age for check-in is 18
                    </Text>
                  </View>
                </View>

                <View style={styles.hr} />

                {/* pets */}
                <View style={styles.rulesChild}>
                  <Image
                    style={styles.icon}
                    source={icon.pawprint}
                    tintColor={b1}
                  />

                  <Text style={[styles.checkIncheckOutTxt]}>Pets</Text>

                  <View style={{flex: 1, gap: _mvs(6)}}>
                    <Text style={[commonStyles.ns400]}>
                      Pets are allowed on request. Charges may be applicable.
                    </Text>
                  </View>
                </View>

                <View style={styles.hr} />

                {/* groups */}
                <View style={styles.rulesChild}>
                  <Image
                    style={styles.icon}
                    source={icon.group}
                    tintColor={b1}
                  />

                  <Text style={[styles.checkIncheckOutTxt]}>Groups</Text>

                  <View style={{flex: 1, gap: _mvs(6)}}>
                    <Text style={[commonStyles.ns400]}>
                      When booking more than 9 rooms, different policies and
                      additional supplements may apply.
                    </Text>
                  </View>
                </View>

                <View style={styles.hr} />

                {/* cards */}
                <View style={styles.rulesChild}>
                  <Image
                    style={styles.icon}
                    source={icon.card}
                    tintColor={b1}
                  />

                  <Text style={[styles.checkIncheckOutTxt]}>
                    Cards accepted at this hotel
                  </Text>

                  <View style={{flex: 1, gap: _mvs(6)}}>
                    <Text style={[commonStyles.ns400]}>
                      Ramada Plaza by Wyndham Calgary Downtown accepts all
                      debit/credit cards and reserves the right to temporarily
                      hold an amount prior to arrival.
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* the fine print */}
            <View style={styles.tfp}>
              <Text
                style={[
                  commonStyles.ns600,
                  {fontSize: _ms(15), textAlign: 'center'},
                ]}>
                The fine print
              </Text>

              {/* the final print rules */}
              <View style={styles.tfpRule}>
                {rules.map((rule, index) => (
                  <Text
                    key={index}
                    style={[commonStyles.ns600, {fontSize: _ms(12)}]}>
                    {rule}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>

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
            onPress={() => {
              navigation.navigate('hotelud');
            }}>
            <Text
              style={[commonStyles.ns600, {fontSize: _ms(12), color: blue}]}>
              RESERVE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HotelDetails;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: white,
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

  btnImage: {
    width: W,
    height: H,
    borderTopRightRadius: _ms(10),
    borderBottomLeftRadius: _ms(10),
  },

  showMorePics: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  booking: {
    backgroundColor: white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: _mvs(8),
  },
  bookingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // ----

  star: {
    width: _ms(15),
    height: _ms(15),
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

  commonWrap: {
    flexDirection: 'row',
    // borderWidth: 1,
    borderColor: 'red',
  },

  bottomImagesQrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    borderColor: 'lime',
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

  aboutHotel: {
    rowGap: _mvs(6),
    marginTop: _mvs(10),
    // backgroundColor: 'teal',
  },

  hotelText: {
    ...commonStyles.ns400,
    fontSize: _ms(12),
    lineHeight: _mvs(18),
    // backgroundColor: 'salmon',
  },

  facilitiesCon: {
    flexDirection: 'row',
    marginTop: _mvs(10),
    alignItems: 'flex-start',
    // backgroundColor: 'salmon',
  },

  ramada: {
    borderWidth: 1,
    borderColor: '#EBF3FF',
    backgroundColor: white,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(2),
    paddingHorizontal: _ms(12),
  },

  ramadaImage: {
    width: _ms(85),
    height: _ms(30),
    resizeMode: 'contain',
    // borderWidth: 1,
    borderColor: 'red',
  },

  title: {
    ...commonStyles.ns700,
    fontSize: _ms(15),
  },

  facilitiesList: {
    // backgroundColor: 'skyblue',
    flex: 1,
  },

  facilityItem: {
    flexDirection: 'row',
    columnGap: _ms(10),
    marginTop: _mvs(7),
    alignItems: 'center',
    // backgroundColor: 'blue',
  },

  facilityText: {
    ...commonStyles.ns400,
    fontSize: _ms(12),
  },

  pHigh: {
    backgroundColor: '#E4F4FF',
    borderRadius: 2,
    paddingVertical: _mvs(15),
    paddingHorizontal: _ms(15),
    rowGap: _mvs(10),
    marginTop: _mvs(10),
  },

  pHighChild: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: _ms(8),
  },

  locationIcon: {
    width: _ms(22),
    height: _ms(22),
    marginTop: _mvs(3),
  },

  pHighChildTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: _ms(8),
    flex: 1,
    // backgroundColor: 'red',
  },

  btn: {
    borderRadius: 4,
    backgroundColor: b2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(6),
    paddingHorizontal: _ms(50),
    alignSelf: 'center',
  },

  availabilityCon: {
    rowGap: _mvs(10),
    marginTop: _mvs(10),
  },

  availChild: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: _ms(10),
  },

  yellowView: {
    backgroundColor: '#FFC355',
    paddingVertical: _mvs(6),
    borderRadius: 4,
  },

  dateTimeView: {
    backgroundColor: white,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: _mvs(10),
    gap: _ms(5),
    paddingHorizontal: _ms(6),
    // flex: 1,
  },

  circleBtn: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: blue,
  },

  roomDetails: {
    backgroundColor: white,
    // backgroundColor: 'lime',
    paddingVertical: 10,
    marginTop: 10,
    rowGap: 10,
  },

  perksContainer: {
    flexDirection: 'row',
    rowGap: _mvs(6),
    columnGap: _ms(10),
    flexWrap: 'wrap',
    marginTop: _mvs(10),
    // backgroundColor: 'lightgreen',
  },

  perkText: {
    ...commonStyles.ns400,
    fontSize: _ms(10),
  },

  checkIcon: {
    width: _ms(10),
    height: _ms(10),
  },

  breakfast: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#D8D8D8',
    marginTop: _mvs(10),
    paddingVertical: _mvs(30),
    paddingHorizontal: _ms(6),
    borderRadius: 4,
    columnGap: _ms(10),
  },

  breakfastLeft: {
    flex: 1,
    rowGap: _mvs(10),
    // backgroundColor: '#f2f2f2',
  },

  breakfastLeftChild: {
    flexDirection: 'row',
    columnGap: _ms(4),
    // backgroundColor: 'yellow',
  },

  LED: {
    backgroundColor: '#24AD53',
    borderColor: '#24AD53',
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: _ms(10),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingVertical: _mvs(4),
  },

  incDec: {
    borderWidth: 1,
    borderColor: b3,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    paddingVertical: _mvs(3),
    paddingHorizontal: _ms(6),
    elevation: 1,
    backgroundColor: white,
  },

  incDecBtn: {
    paddingHorizontal: _ms(12),
    paddingVertical: _mvs(5),
    // backgroundColor: blue,
  },

  numOFBreakfast: {
    minWidth: _ms(30),
    maxWidth: _ms(50),
    textAlign: 'center',
    // backgroundColor: 'orange',
  },

  plusIcon: {
    width: _ms(11.7),
    height: _ms(11.7),
  },

  immediateConfirm: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    columnGap: _ms(8),
    marginTop: _mvs(10),
  },

  blackDot: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: black,
    width: _ms(7),
    height: _ms(7),
    borderRadius: _ms(8),
  },

  leafStand: {
    borderRadius: 2,
    borderColor: '#FAFCFF',
    borderWidth: 1,
    paddingVertical: 6,
    // backgroundColor: white,
    // backgroundColor: '#f1f1f1',
  },

  lllCon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1FEF6',
    borderRadius: 4,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },

  leafIcon: {
    width: _ms(15),
    height: _ms(15),
    marginRight: 3,
    tintColor: '#1D8842',
  },

  faq: {
    rowGap: _mvs(10),
    marginTop: _mvs(10),
    paddingHorizontal: _ms(6),
    paddingBottom: _mvs(10),
    // backgroundColor: 'teal',
  },

  faqChild: {
    paddingHorizontal: _ms(10),
    paddingVertical: _mvs(20),
    borderColor: '#E7E7E7',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: _mvs(10),
    // backgroundColor: 'lime',
  },

  line: {
    backgroundColor: '#E7E7E7',
    height: 1,
    marginVertical: _mvs(2),
  },

  stillLookingCon: {
    paddingVertical: _mvs(20),
    borderColor: '#E7E7E7',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: _mvs(10),
    alignItems: 'center',
    // backgroundColor: 'pink',
  },

  blueBtn: {
    borderWidth: 1,
    borderColor: blue,
    borderRadius: 2,
    paddingHorizontal: _ms(22),
    paddingVertical: _mvs(6),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: _mvs(18),
  },

  houseRules: {
    // backgroundColor: 'lightgreen',
    paddingTop: _mvs(10),
    rowGap: _mvs(20),
  },

  rules: {
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 4,
    paddingHorizontal: _ms(5),
    paddingVertical: _mvs(15),
    // backgroundColor: 'lightyellow',
  },

  hr: {
    backgroundColor: '#D8D8D8',
    height: 1,
    marginVertical: _mvs(10),
  },

  rulesChild: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: _ms(10),
    // backgroundColor: 'yellow',
  },

  checkIncheckOutTxt: {
    ...commonStyles.ns600,
    fontSize: _ms(12),
    width: _ms(90),
    // backgroundColor: 'red',
  },

  box: {
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 3,
    marginHorizontal: _ms(12),
    paddingVertical: _mvs(5),
  },

  // us bande ne esko multiple com me break nahi kiya....

  justWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: _ms(10),
    marginHorizontal: _ms(8),
    marginBottom: _mvs(6),
    // backgroundColor: 'lime',
  },

  tfp: {
    marginBottom: _mvs(10),
  },

  tfpRule: {
    marginTop: _mvs(15),
    backgroundColor: '#EBF3FF',
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 4,
    paddingHorizontal: _ms(8),
    paddingVertical: _mvs(10),
    rowGap: _mvs(10),
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
