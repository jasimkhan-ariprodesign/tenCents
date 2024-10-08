import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  b1,
  b2,
  b3,
  black,
  blue,
  D9D9D9,
  white,
} from '../../../../config/colors';
import icon from '../../../../config/IconAssets';
import image from '../../../../config/ImageAssets';
import {
  _ms,
  _mvs,
  checkIconStyle,
  size12,
  size14,
} from '../../../utils/Responsive';
import commonStyles from '../../../../assets/css/CommonFonts';

// [
//   {id: 'pln', label: '6 DAY PLAN'},
//   {id: 'flt', label: '2 Flights'},
//   {id: 'htl', label: '2 Hotels'},
//   {id: 'act', label: '3 Activities'},
// ];
// Temporary date data
const dates = [
  {id: 1, label: '21 Dec, Thu', selected: true},
  {id: 2, label: '22 Dec, Fri', selected: false},
  {id: 3, label: '23 Dec, Sat', selected: false},
  {id: 4, label: '24 Dec, Sun', selected: false},
  {id: 5, label: '25 Dec, Mon', selected: false},
  {id: 6, label: '26 Dec, Tue', selected: false},
  {id: 7, label: '27 Dec, Wed', selected: false},
  {id: 8, label: '28 Dec, Thu', selected: false},
];

const Itinerary = ({selectedTopMenu}) => {
  const [selectedDate, setSelectedDate] = useState(1);
  //   console.log('Itinerary -> ', selectedTopMenu);
  //   console.log('Itinerary selectedDate -> ', selectedDate);

  return (
    <View style={styles.wrapper}>
      {/* head  and date */}
      <View style={styles.header}>
        <Text style={[styles.lato, commonStyles.font14, {color: b3}]}>
          Day Plan
        </Text>

        <>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={[commonStyles.commWrapOne]}>
              {dates.map(date => (
                <TouchableOpacity
                  key={date.id}
                  style={[
                    styles.dateButton,
                    {
                      backgroundColor:
                        selectedDate === date.id ? b3 : 'transparent',
                    },
                  ]}
                  onPress={() => setSelectedDate(date.id)}>
                  <Text
                    style={[
                      styles.dateButtonTxt,
                      {
                        color: selectedDate === date.id ? white : b3,
                      },
                    ]}>
                    {date.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </>
      </View>

      {/* flights */}
      {selectedTopMenu === 'flt' && (
        <View>
          {/* day 1 */}
          <View
            style={{
              paddingHorizontal: _ms(12),
              rowGap: _mvs(12),
              marginBottom: _mvs(10),
            }}>
            <View style={styles.wrapOne}>
              <Text style={[styles.lato, commonStyles.font12]}>
                Day 1 - Arrival in Male
              </Text>
            </View>

            <View style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
              <Text style={[styles.lato, commonStyles.font12]}>INCLUDED :</Text>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
                <Image
                  style={[size12, {transform: [{rotate: '45deg'}]}]}
                  tintColor={b1}
                  source={icon.plane}
                />
                <Text style={[styles.lato, commonStyles.font10]}>1 Flight</Text>
              </View>

              <View style={styles.verticalLine} />

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
                <Image
                  style={[size12]}
                  tintColor={b1}
                  source={icon.hotelSign}
                />
                <Text style={[styles.lato, commonStyles.font10]}>1 Hotel</Text>
              </View>

              <View style={styles.verticalLine} />

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
                <Image style={[size12]} tintColor={b1} source={icon.hiking} />
                <Text style={[styles.lato, commonStyles.font10]}>
                  1 Activity
                </Text>
              </View>
            </View>

            <View>
              <Text style={[styles.lato, commonStyles.font13, {color: b3}]}>
                Flight from New Delhi to Male{' '}
                <Text style={[styles.lato, commonStyles.font13]}>04h 05m</Text>
              </Text>
            </View>

            <View style={[commonStyles.commWrapSeven, {columnGap: _ms(16)}]}>
              <TouchableOpacity style={[commonStyles.commWrapSix]}>
                <Text
                  style={[
                    styles.lato,
                    commonStyles.font12,
                    commonStyles.textTransformUppercase,
                    {color: blue},
                  ]}>
                  Remove
                </Text>
              </TouchableOpacity>

              <View style={styles.secondVerticalLine} />

              <TouchableOpacity style={[commonStyles.commWrapSix]}>
                <Text
                  style={[
                    styles.lato,
                    commonStyles.font12,
                    commonStyles.textTransformUppercase,
                    {color: blue},
                  ]}>
                  Change
                </Text>
              </TouchableOpacity>
            </View>

            <View style={[commonStyles.commWrapTwo, {columnGap: _ms(10)}]}>
              <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                UK-273
              </Text>

              <View style={{gap: _mvs(3)}}>
                <Text style={[styles.lato]}>11:55</Text>
                <Text style={[styles.lato, commonStyles.font13, {color: b3}]}>
                  Wed, 20 Dec
                </Text>
                <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                  New Delhi
                </Text>
              </View>

              <Image style={styles.rightArrow} source={icon.longArrow} />

              <View style={[commonStyles.alignItemsFlexEnd, {gap: _mvs(3)}]}>
                <Text style={[styles.lato]}>15:30</Text>
                <Text style={[styles.lato, commonStyles.font13, {color: b3}]}>
                  Wed, 20 Dec
                </Text>
                <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                  Male
                </Text>
              </View>
            </View>

            <View style={[commonStyles.commWrapOne, {columnGap: _ms(12)}]}>
              <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                Baggage
              </Text>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(5)}]}>
                <Image style={size14} source={icon.duffleBag} />
                <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                  Cabin :{'  '}7 Kgs
                </Text>
              </View>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(5)}]}>
                <Image style={size14} source={icon.baggage} />
                <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                  Check-in :{'  '}20 Kgs
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.horizontal} />

          {/* day 4 */}
          <View
            style={{
              paddingHorizontal: _ms(12),
              rowGap: _mvs(12),
              marginBottom: _mvs(10),
            }}>
            <View style={styles.wrapOne}>
              <Text style={[styles.lato, commonStyles.font12]}>
                Day 4 - Departure from Male
              </Text>
            </View>

            <View style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
              <Text style={[styles.lato, commonStyles.font12]}>INCLUDED :</Text>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
                <Image
                  style={[size12, {transform: [{rotate: '45deg'}]}]}
                  tintColor={b1}
                  source={icon.plane}
                />
                <Text style={[styles.lato, commonStyles.font10]}>1 Flight</Text>
              </View>

              <View style={styles.verticalLine} />

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
                <Image
                  style={[size12]}
                  tintColor={b1}
                  source={icon.hotelSign}
                />
                <Text style={[styles.lato, commonStyles.font10]}>1 Hotel</Text>
              </View>

              <View style={styles.verticalLine} />

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
                <Image style={[size12]} tintColor={b1} source={icon.hiking} />
                <Text style={[styles.lato, commonStyles.font10]}>
                  1 Activity
                </Text>
              </View>
            </View>

            <View>
              <Text style={[styles.lato, commonStyles.font13, {color: b3}]}>
                Flight from New Delhi to Male{' '}
                <Text style={[styles.lato, commonStyles.font13]}>04h 05m</Text>
              </Text>
            </View>

            <View style={[commonStyles.commWrapSeven, {columnGap: _ms(16)}]}>
              <TouchableOpacity style={[commonStyles.commWrapSix]}>
                <Text
                  style={[
                    styles.lato,
                    commonStyles.font12,
                    commonStyles.textTransformUppercase,
                    {color: blue},
                  ]}>
                  Remove
                </Text>
              </TouchableOpacity>

              <View style={styles.secondVerticalLine} />

              <TouchableOpacity style={[commonStyles.commWrapSix]}>
                <Text
                  style={[
                    styles.lato,
                    commonStyles.font12,
                    commonStyles.textTransformUppercase,
                    {color: blue},
                  ]}>
                  Change
                </Text>
              </TouchableOpacity>
            </View>

            <View style={[commonStyles.commWrapTwo, {columnGap: _ms(10)}]}>
              <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                UK-273
              </Text>

              <View style={{gap: _mvs(3)}}>
                <Text style={[styles.lato]}>11:55</Text>
                <Text style={[styles.lato, commonStyles.font13, {color: b3}]}>
                  Wed, 20 Dec
                </Text>
                <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                  New Delhi
                </Text>
              </View>

              <Image style={styles.rightArrow} source={icon.longArrow} />

              <View style={[commonStyles.alignItemsFlexEnd, {gap: _mvs(3)}]}>
                <Text style={[styles.lato]}>15:30</Text>
                <Text style={[styles.lato, commonStyles.font13, {color: b3}]}>
                  Wed, 20 Dec
                </Text>
                <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                  Male
                </Text>
              </View>
            </View>

            <View style={[commonStyles.commWrapOne, {columnGap: _ms(12)}]}>
              <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                Baggage
              </Text>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(5)}]}>
                <Image style={size14} source={icon.duffleBag} />
                <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                  Cabin :{'  '}7 Kgs
                </Text>
              </View>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(5)}]}>
                <Image style={size14} source={icon.baggage} />
                <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                  Check-in :{'  '}20 Kgs
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.horizontal} />
        </View>
      )}

      {/* hotels */}
      {selectedTopMenu === 'htl' && (
        <View>
          {/* day 1 */}
          <View
            style={{
              paddingHorizontal: _ms(12),
              rowGap: _mvs(12),
              marginBottom: _mvs(10),
            }}>
            <View style={styles.wrapOne}>
              <Text style={[styles.lato, commonStyles.font12]}>
                Day 1 - Maldives
              </Text>
            </View>

            <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
              <Text style={[styles.lato, commonStyles.font12]}>INCLUDED :</Text>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                <Image
                  style={[size12, {transform: [{rotate: '45deg'}]}]}
                  tintColor={b1}
                  source={icon.plane}
                />
                <Text style={[styles.lato, commonStyles.font10]}>1 Flight</Text>
              </View>

              <View style={styles.verticalLine} />

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                <Image
                  style={[size12]}
                  tintColor={b1}
                  source={icon.hotelSign}
                />
                <Text style={[styles.lato, commonStyles.font10]}>1 Hotel</Text>
              </View>

              <View style={styles.verticalLine} />

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                <Image style={[size12]} tintColor={b1} source={icon.hiking} />
                <Text style={[styles.lato, commonStyles.font10]}>
                  1 Activity
                </Text>
              </View>
            </View>

            <View style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
              <Image
                style={styles.hotelImage}
                source={image.hpgal2}
                resizeMode="cover"
              />

              {/* right */}
              <View style={[commonStyles.flexOne, {rowGap: _mvs(6)}]}>
                <TouchableOpacity style={commonStyles.alignSelfFlexEnd}>
                  <Text
                    style={[styles.lato, commonStyles.font12, {color: blue}]}>
                    CHANGE
                  </Text>
                </TouchableOpacity>

                <View style={styles.ratingCon}>
                  <Text
                    style={[styles.lato, commonStyles.font10, {color: white}]}>
                    4.5/5
                  </Text>
                </View>

                <Text style={[styles.lato, commonStyles.font12]}>Hotel</Text>
                <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                  Activity in Maldives
                  <Text style={[styles.lato, commonStyles.font12]}> 1 Hr</Text>
                </Text>

                <Text style={[styles.lato, commonStyles.font13]}>
                  Meeru Island Resort & Spa - Holidays Selections
                </Text>
                <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                  North Male Atoll
                </Text>
                <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                  Wed, 20 Dec 2023 - Fri, 22 Dec 2023
                </Text>
              </View>
            </View>
            {/* conclusion */}
            <View style={styles.conclusion}>
              <View style={[commonStyles.commWrapTwo]}>
                <Text style={[styles.lato, commonStyles.font14]}>
                  Jacuzzi Beach Villa (Adult Only)
                </Text>

                <TouchableOpacity style={{}}>
                  <Text
                    style={[styles.lato, commonStyles.font10, {color: blue}]}>
                    CHANGE ROOM
                  </Text>
                </TouchableOpacity>
              </View>

              <Text style={[styles.lato, {color: b3}]}>
                Meal Plan : All meals - Breakfast, Lunch & Dinner
              </Text>
              <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                Room Inclusions
              </Text>

              <View style={{rowGap: _mvs(8)}}>
                <View
                  style={[commonStyles.commWrapSeven, {columnGap: _ms(10)}]}>
                  <Image
                    style={[size12, styles.margin]}
                    tintColor={'#249995'}
                    source={icon.check}
                  />
                  <Text
                    style={[
                      styles.lato,
                      commonStyles.flexOne,
                      commonStyles.font12,
                      {color: '#249995'},
                    ]}>
                    Free Honeymoon Package: No. of Units - 1; Type of Services -
                    Fruit Basket, Sparkling wine, Flowers; Valid for marriage
                    date within (in month) - 6; Wedding Card or Photo required -
                    Yes
                  </Text>
                </View>

                <View
                  style={[commonStyles.commWrapSeven, {columnGap: _ms(10)}]}>
                  <Image
                    style={[size12, styles.margin]}
                    tintColor={'#249995'}
                    source={icon.check}
                  />
                  <Text
                    style={[
                      styles.lato,
                      commonStyles.flexOne,
                      commonStyles.font12,
                      {color: '#249995'},
                    ]}>
                    Complimentary Golden jubilee Anniversary/Silver Jubilee
                    Anniversary inclusions are provided Sparkling wine/Fruit
                    Platter/Flowers.
                  </Text>
                </View>
              </View>

              <TouchableOpacity style={[commonStyles.alignSelfFlexStart]}>
                <Text style={[styles.lato, commonStyles.font11, {color: blue}]}>
                  VIEW ALL INCLUSIONS
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                rowGap: _mvs(10),
              }}>
              <View style={[commonStyles.commWrapSeven, {columnGap: _ms(4)}]}>
                <Text style={[styles.lato, commonStyles.font11, {color: b3}]}>
                  {'Day Meals Lunch & Dinner :'}
                </Text>

                <Text
                  style={[
                    styles.lato,
                    commonStyles.font11,
                    commonStyles.flexOne,
                    {color: b3},
                  ]}>
                  Included at Meeru Island Resort & Spa - Holidays Selections ,
                  Maldives
                </Text>
              </View>

              <View style={[commonStyles.commWrapSeven, {columnGap: _ms(4)}]}>
                <Text style={[styles.lato, commonStyles.font11, {color: b3}]}>
                  End Of Day -
                </Text>

                <Text
                  style={[
                    styles.lato,
                    commonStyles.font11,
                    commonStyles.flexOne,
                    {color: b3},
                  ]}>
                  Spend time at Leisure or add an activity to your day
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.horizontal, {marginHorizontal: _ms(12)}]} />

          {/* day 3 */}
          <View
            style={{
              paddingHorizontal: _ms(12),
              rowGap: _mvs(12),
              marginBottom: _mvs(10),
            }}>
            <View style={styles.wrapOne}>
              <Text style={[styles.lato, commonStyles.font12]}>
                Day 3 - Maldives
              </Text>
            </View>

            <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
              <Text style={[styles.lato, commonStyles.font12]}>INCLUDED :</Text>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                <Image
                  style={[size12, {transform: [{rotate: '45deg'}]}]}
                  tintColor={b1}
                  source={icon.plane}
                />
                <Text style={[styles.lato, commonStyles.font10]}>1 Flight</Text>
              </View>

              <View style={styles.verticalLine} />

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                <Image
                  style={[size12]}
                  tintColor={b1}
                  source={icon.hotelSign}
                />
                <Text style={[styles.lato, commonStyles.font10]}>1 Hotel</Text>
              </View>

              <View style={styles.verticalLine} />

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                <Image style={[size12]} tintColor={b1} source={icon.hiking} />
                <Text style={[styles.lato, commonStyles.font10]}>
                  1 Activity
                </Text>
              </View>
            </View>

            <View style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
              <Image
                style={styles.hotelImage}
                source={image.hpgal2}
                resizeMode="cover"
              />

              {/* right */}
              <View style={[commonStyles.flexOne, {rowGap: _mvs(6)}]}>
                <TouchableOpacity style={commonStyles.alignSelfFlexEnd}>
                  <Text
                    style={[styles.lato, commonStyles.font12, {color: blue}]}>
                    CHANGE
                  </Text>
                </TouchableOpacity>

                <View style={styles.ratingCon}>
                  <Text
                    style={[styles.lato, commonStyles.font10, {color: white}]}>
                    4.5/5
                  </Text>
                </View>

                <Text style={[styles.lato, commonStyles.font12]}>Hotel</Text>
                <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                  Activity in Maldives
                  <Text style={[styles.lato, commonStyles.font12]}> 1 Hr</Text>
                </Text>

                <Text style={[styles.lato, commonStyles.font13]}>
                  Meeru Island Resort & Spa - Holidays Selections
                </Text>
                <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                  North Male Atoll
                </Text>
                <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                  Wed, 20 Dec 2023 - Fri, 22 Dec 2023
                </Text>
              </View>
            </View>
            {/* conclusion */}
            <View style={styles.conclusion}>
              <View style={[commonStyles.commWrapTwo]}>
                <Text style={[styles.lato, commonStyles.font14]}>
                  Jacuzzi Beach Villa (Adult Only)
                </Text>

                <TouchableOpacity style={{}}>
                  <Text
                    style={[styles.lato, commonStyles.font10, {color: blue}]}>
                    CHANGE ROOM
                  </Text>
                </TouchableOpacity>
              </View>

              <Text style={[styles.lato, {color: b3}]}>
                Meal Plan : All meals - Breakfast, Lunch & Dinner
              </Text>
              <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                Room Inclusions
              </Text>

              <View style={{rowGap: _mvs(8)}}>
                <View
                  style={[commonStyles.commWrapSeven, {columnGap: _ms(10)}]}>
                  <Image
                    style={[size12, styles.margin]}
                    tintColor={'#249995'}
                    source={icon.check}
                  />
                  <Text
                    style={[
                      styles.lato,
                      commonStyles.flexOne,
                      commonStyles.font12,
                      {color: '#249995'},
                    ]}>
                    Free Honeymoon Package: No. of Units - 1; Type of Services -
                    Fruit Basket, Sparkling wine, Flowers; Valid for marriage
                    date within (in month) - 6; Wedding Card or Photo required -
                    Yes
                  </Text>
                </View>

                <View
                  style={[commonStyles.commWrapSeven, {columnGap: _ms(10)}]}>
                  <Image
                    style={[size12, styles.margin]}
                    tintColor={'#249995'}
                    source={icon.check}
                  />
                  <Text
                    style={[
                      styles.lato,
                      commonStyles.flexOne,
                      commonStyles.font12,
                      {color: '#249995'},
                    ]}>
                    Complimentary Golden jubilee Anniversary/Silver Jubilee
                    Anniversary inclusions are provided Sparkling wine/Fruit
                    Platter/Flowers.
                  </Text>
                </View>
              </View>

              <TouchableOpacity style={[commonStyles.alignSelfFlexStart]}>
                <Text style={[styles.lato, commonStyles.font11, {color: blue}]}>
                  VIEW ALL INCLUSIONS
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                rowGap: _mvs(10),
              }}>
              <View style={[commonStyles.commWrapSeven, {columnGap: _ms(4)}]}>
                <Text style={[styles.lato, commonStyles.font11, {color: b3}]}>
                  {'Day Meals Lunch & Dinner :'}
                </Text>

                <Text
                  style={[
                    styles.lato,
                    commonStyles.font11,
                    commonStyles.flexOne,
                    {color: b3},
                  ]}>
                  Included at Meeru Island Resort & Spa - Holidays Selections ,
                  Maldives
                </Text>
              </View>

              <View style={[commonStyles.commWrapSeven, {columnGap: _ms(4)}]}>
                <Text style={[styles.lato, commonStyles.font11, {color: b3}]}>
                  End Of Day -
                </Text>

                <Text
                  style={[
                    styles.lato,
                    commonStyles.font11,
                    commonStyles.flexOne,
                    {color: b3},
                  ]}>
                  Spend time at Leisure or add an activity to your day
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.horizontal, {marginHorizontal: _ms(12)}]} />
        </View>
      )}

      {/* activity */}
      {selectedTopMenu === 'act' && (
        <View>
          {/* day 1 */}
          <View
            style={{
              paddingHorizontal: _ms(12),
              rowGap: _mvs(12),
              marginBottom: _mvs(10),
            }}>
            <View style={styles.wrapOne}>
              <Text style={[styles.lato, commonStyles.font12]}>
                Day 1 - Maldives
              </Text>
            </View>

            <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
              <Text style={[styles.lato, commonStyles.font12]}>INCLUDED :</Text>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                <Image
                  style={[size12, {transform: [{rotate: '45deg'}]}]}
                  tintColor={b1}
                  source={icon.plane}
                />
                <Text style={[styles.lato, commonStyles.font10]}>1 Flight</Text>
              </View>

              <View style={styles.verticalLine} />

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                <Image
                  style={[size12]}
                  tintColor={b1}
                  source={icon.hotelSign}
                />
                <Text style={[styles.lato, commonStyles.font10]}>1 Hotel</Text>
              </View>

              <View style={styles.verticalLine} />

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                <Image style={[size12]} tintColor={b1} source={icon.hiking} />
                <Text style={[styles.lato, commonStyles.font10]}>
                  1 Activity
                </Text>
              </View>
            </View>

            <View style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
              <Image
                style={styles.hotelImage}
                source={image.hpgal8}
                resizeMode="cover"
              />

              {/* right */}
              <View style={[commonStyles.flexOne, {rowGap: _mvs(6)}]}>
                <View style={styles.ratingCon}>
                  <Text
                    style={[styles.lato, commonStyles.font10, {color: white}]}>
                    5/5
                  </Text>
                </View>

                <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                  Activity in Maldives
                  <Text style={[styles.lato, commonStyles.font12]}> 1 Hr</Text>
                </Text>

                <Text style={[styles.lato, commonStyles.font13]}>
                  Speedboat from Velana International Airport to Meeru Island-
                  Shared Transfers (4 Nights and above)
                </Text>
                <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                  Maldives
                </Text>
                <Text style={[styles.lato, commonStyles.font10, {color: b3}]}>
                  "Enjoy an exhilarating ride on a speedboat as you head to
                  Meeru Island from Velana International Airport. Note: This is
                  a shared transfer. The duration of the commute is
                  approximately 50 minutes. This service is not available
                  between 0200{'  '}
                  <Text
                    onPress={() => {
                      Alert.alert('alert!', ' Read More...');
                    }}
                    style={[styles.lato, commonStyles.font10, {color: blue}]}>
                    Read More...
                  </Text>
                </Text>
              </View>
            </View>
            {/* conclusion */}
            <View style={styles.conclusion}>
              <View style={[commonStyles.commWrapTwo]}>
                <Text style={[styles.lato, commonStyles.font14]}>
                  Jacuzzi Beach Villa (Adult Only)
                </Text>

                <TouchableOpacity style={{}}>
                  <Text
                    style={[styles.lato, commonStyles.font10, {color: blue}]}>
                    CHANGE ROOM
                  </Text>
                </TouchableOpacity>
              </View>

              <Text style={[styles.lato, {color: b3}]}>
                Meal Plan : All meals - Breakfast, Lunch & Dinner
              </Text>
              <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                Room Inclusions
              </Text>

              <View style={{rowGap: _mvs(8)}}>
                <View
                  style={[commonStyles.commWrapSeven, {columnGap: _ms(10)}]}>
                  <Image
                    style={[size12, styles.margin]}
                    tintColor={'#249995'}
                    source={icon.check}
                  />
                  <Text
                    style={[
                      styles.lato,
                      commonStyles.flexOne,
                      commonStyles.font12,
                      {color: '#249995'},
                    ]}>
                    Free Honeymoon Package: No. of Units - 1; Type of Services -
                    Fruit Basket, Sparkling wine, Flowers; Valid for marriage
                    date within (in month) - 6; Wedding Card or Photo required -
                    Yes
                  </Text>
                </View>

                <View
                  style={[commonStyles.commWrapSeven, {columnGap: _ms(10)}]}>
                  <Image
                    style={[size12, styles.margin]}
                    tintColor={'#249995'}
                    source={icon.check}
                  />
                  <Text
                    style={[
                      styles.lato,
                      commonStyles.flexOne,
                      commonStyles.font12,
                      {color: '#249995'},
                    ]}>
                    Complimentary Golden jubilee Anniversary/Silver Jubilee
                    Anniversary inclusions are provided Sparkling wine/Fruit
                    Platter/Flowers.
                  </Text>
                </View>
              </View>

              <TouchableOpacity style={[commonStyles.alignSelfFlexStart]}>
                <Text style={[styles.lato, commonStyles.font11, {color: blue}]}>
                  VIEW ALL INCLUSIONS
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                rowGap: _mvs(10),
              }}>
              <View style={[commonStyles.commWrapSeven, {columnGap: _ms(4)}]}>
                <Text style={[styles.lato, commonStyles.font11, {color: b3}]}>
                  {'Day Meals Lunch & Dinner :'}
                </Text>

                <Text
                  style={[
                    styles.lato,
                    commonStyles.font11,
                    commonStyles.flexOne,
                    {color: b3},
                  ]}>
                  Included at Meeru Island Resort & Spa - Holidays Selections ,
                  Maldives
                </Text>
              </View>

              <View style={[commonStyles.commWrapSeven, {columnGap: _ms(4)}]}>
                <Text style={[styles.lato, commonStyles.font11, {color: b3}]}>
                  End Of Day -
                </Text>

                <Text
                  style={[
                    styles.lato,
                    commonStyles.font11,
                    commonStyles.flexOne,
                    {color: b3},
                  ]}>
                  Spend time at Leisure or add an activity to your day
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.horizontal, {marginHorizontal: _ms(12)}]} />

          {/* day 3 */}
          <View
            style={{
              paddingHorizontal: _ms(12),
              rowGap: _mvs(12),
              marginBottom: _mvs(10),
            }}>
            <View style={styles.wrapOne}>
              <Text style={[styles.lato, commonStyles.font12]}>
                Day 3 - Maldives
              </Text>
            </View>

            <View style={[commonStyles.commWrapOne, {columnGap: _ms(8)}]}>
              <Text style={[styles.lato, commonStyles.font12]}>INCLUDED :</Text>

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                <Image
                  style={[size12, {transform: [{rotate: '45deg'}]}]}
                  tintColor={b1}
                  source={icon.plane}
                />
                <Text style={[styles.lato, commonStyles.font10]}>1 Flight</Text>
              </View>

              <View style={styles.verticalLine} />

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                <Image
                  style={[size12]}
                  tintColor={b1}
                  source={icon.hotelSign}
                />
                <Text style={[styles.lato, commonStyles.font10]}>1 Hotel</Text>
              </View>

              <View style={styles.verticalLine} />

              <View style={[commonStyles.commWrapOne, {columnGap: _ms(6)}]}>
                <Image style={[size12]} tintColor={b1} source={icon.hiking} />
                <Text style={[styles.lato, commonStyles.font10]}>
                  1 Activity
                </Text>
              </View>
            </View>

            <View style={[commonStyles.commWrapOne, {columnGap: _ms(10)}]}>
              <Image
                style={styles.hotelImage}
                source={image.hpgal8}
                resizeMode="cover"
              />

              {/* right */}
              <View style={[commonStyles.flexOne, {rowGap: _mvs(6)}]}>
                <View style={styles.ratingCon}>
                  <Text
                    style={[styles.lato, commonStyles.font10, {color: white}]}>
                    5/5
                  </Text>
                </View>

                <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                  Activity in Maldives
                  <Text style={[styles.lato, commonStyles.font12]}> 1 Hr</Text>
                </Text>

                <Text style={[styles.lato, commonStyles.font13]}>
                  Speedboat from Velana International Airport to Meeru Island-
                  Shared Transfers (4 Nights and above)
                </Text>
                <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                  Maldives
                </Text>
                <Text style={[styles.lato, commonStyles.font10, {color: b3}]}>
                  "Enjoy an exhilarating ride on a speedboat as you head to
                  Meeru Island from Velana International Airport. Note: This is
                  a shared transfer. The duration of the commute is
                  approximately 50 minutes. This service is not available
                  between 0200{'  '}
                  <Text
                    onPress={() => {
                      Alert.alert('alert!', ' Read More...');
                    }}
                    style={[styles.lato, commonStyles.font10, {color: blue}]}>
                    Read More...
                  </Text>
                </Text>
              </View>
            </View>
            {/* conclusion */}
            <View style={styles.conclusion}>
              <View style={[commonStyles.commWrapTwo]}>
                <Text style={[styles.lato, commonStyles.font14]}>
                  Jacuzzi Beach Villa (Adult Only)
                </Text>

                <TouchableOpacity style={{}}>
                  <Text
                    style={[styles.lato, commonStyles.font10, {color: blue}]}>
                    CHANGE ROOM
                  </Text>
                </TouchableOpacity>
              </View>

              <Text style={[styles.lato, {color: b3}]}>
                Meal Plan : All meals - Breakfast, Lunch & Dinner
              </Text>
              <Text style={[styles.lato, commonStyles.font12, {color: b3}]}>
                Room Inclusions
              </Text>

              <View style={{rowGap: _mvs(8)}}>
                <View
                  style={[commonStyles.commWrapSeven, {columnGap: _ms(10)}]}>
                  <Image
                    style={[size12, styles.margin]}
                    tintColor={'#249995'}
                    source={icon.check}
                  />
                  <Text
                    style={[
                      styles.lato,
                      commonStyles.flexOne,
                      commonStyles.font12,
                      {color: '#249995'},
                    ]}>
                    Free Honeymoon Package: No. of Units - 1; Type of Services -
                    Fruit Basket, Sparkling wine, Flowers; Valid for marriage
                    date within (in month) - 6; Wedding Card or Photo required -
                    Yes
                  </Text>
                </View>

                <View
                  style={[commonStyles.commWrapSeven, {columnGap: _ms(10)}]}>
                  <Image
                    style={[size12, styles.margin]}
                    tintColor={'#249995'}
                    source={icon.check}
                  />
                  <Text
                    style={[
                      styles.lato,
                      commonStyles.flexOne,
                      commonStyles.font12,
                      {color: '#249995'},
                    ]}>
                    Complimentary Golden jubilee Anniversary/Silver Jubilee
                    Anniversary inclusions are provided Sparkling wine/Fruit
                    Platter/Flowers.
                  </Text>
                </View>
              </View>

              <TouchableOpacity style={[commonStyles.alignSelfFlexStart]}>
                <Text style={[styles.lato, commonStyles.font11, {color: blue}]}>
                  VIEW ALL INCLUSIONS
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                rowGap: _mvs(10),
              }}>
              <View style={[commonStyles.commWrapSeven, {columnGap: _ms(4)}]}>
                <Text style={[styles.lato, commonStyles.font11, {color: b3}]}>
                  {'Day Meals Lunch & Dinner :'}
                </Text>

                <Text
                  style={[
                    styles.lato,
                    commonStyles.font11,
                    commonStyles.flexOne,
                    {color: b3},
                  ]}>
                  Included at Meeru Island Resort & Spa - Holidays Selections ,
                  Maldives
                </Text>
              </View>

              <View style={[commonStyles.commWrapSeven, {columnGap: _ms(4)}]}>
                <Text style={[styles.lato, commonStyles.font11, {color: b3}]}>
                  End Of Day -
                </Text>

                <Text
                  style={[
                    styles.lato,
                    commonStyles.font11,
                    commonStyles.flexOne,
                    {color: b3},
                  ]}>
                  Spend time at Leisure or add an activity to your day
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.horizontal, {marginHorizontal: _ms(12)}]} />
        </View>
      )}
    </View>
  );
};

export default Itinerary;

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: white,
    // backgroundColor: 'yellowgreen',
    marginBottom: 5,
  },

  //   flights style start

  header: {
    paddingVertical: _mvs(12),
    rowGap: _mvs(10),
    paddingHorizontal: _ms(12),
  },

  dateButton: {
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(6),
    paddingHorizontal: _ms(12),
  },

  dateButtonTxt: {
    fontSize: _ms(10),
    fontFamily: 'Lato-Regular',
  },

  wrapOne: {
    backgroundColor: D9D9D9,
    borderRadius: 30,
    paddingLeft: _ms(15),
    paddingVertical: _mvs(8),
  },

  verticalLine: {
    backgroundColor: black,
    width: 1.3,
    height: _mvs(20),
  },

  secondVerticalLine: {
    backgroundColor: D9D9D9,
    width: 1.2,
    height: _mvs(20),
  },

  lato: {
    fontFamily: 'Lato-Regular',
    fontSize: _ms(14),
    color: b1,
  },

  rightArrow: {
    width: _ms(30),
    height: _ms(22),
    resizeMode: 'cover',
  },

  horizontal: {
    backgroundColor: D9D9D9,
    height: 1.5,
    marginTop: _mvs(5),
    marginBottom: _mvs(15),
    marginHorizontal: _ms(7),
  },

  //   flights style end

  //   hotels style start

  hotelImage: {
    width: '28%',
    height: _mvs(50),
    borderRadius: 8,
  },

  ratingCon: {
    backgroundColor: b2,
    alignSelf: 'flex-start',
    paddingVertical: _mvs(3),
    borderRadius: 5,
    paddingHorizontal: _ms(12),
    alignItems: 'center',
    justifyContent: 'center',
  },

  conclusion: {
    backgroundColor: '#EEEEEE',
    paddingVertical: _mvs(8),
    paddingHorizontal: _ms(10),
    rowGap: _mvs(10),
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#D8D8D8',
  },

  margin: {
    marginTop: 3,
  },
  //   hotels style end

  //   activity style start

  //   activity style end
});
