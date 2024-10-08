import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import icon from '../../../config/IconAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import {b2, blue, white} from '../../../config/colors';
import {_ms, _mvs, _width, backIconStyle} from '../../utils/Responsive';

const filtersData = [
  {
    category: 'Filter by:',
    options: [{id: 1, label: 'Your Budget (per night)', range: '$20 - $300'}],
  },
  {
    category: 'Popular Filters',
    options: [
      {id: 2, label: 'Free cancellation', count: 174},
      {id: 3, label: 'No prepayment', count: 93},
      {id: 4, label: 'Less than 1/2 mile', count: 17},
      {id: 5, label: 'Distance from center of Calgary', count: null},
      {id: 6, label: 'Hotels', count: 86},
      {id: 7, label: 'Breakfast Included', count: 70},
      {id: 8, label: '5 stars', count: 80},
      {id: 9, label: 'Calgary Stampede', count: 25},
      {id: 10, label: 'Downtown Calgary', count: 45},
    ],
  },
  {
    category: 'Sustainability',
    options: [{id: 11, label: 'Travel Sustainable properties', count: 90}],
  },
  {
    category: 'Property Rating',
    options: [
      {id: 12, label: '2 stars', count: 10},
      {id: 13, label: '3 stars', count: 62},
      {id: 14, label: '4 stars', count: 80},
      {id: 15, label: '5 stars', count: 85},
      {id: 16, label: 'Unrated', count: 35},
    ],
  },
  {
    category: 'Popular Facilities',
    options: [
      {id: 17, label: 'Fitness center', count: 57},
      {id: 18, label: 'Parking', count: 586},
      {id: 19, label: 'Airport shuttle', count: 59},
      {id: 20, label: 'Pet friendly', count: 119},
      {id: 21, label: 'Non-smoking rooms', count: 575},
    ],
  },
  {
    category: 'Meals',
    options: [
      {id: 22, label: 'Breakfast included', count: 524},
      {id: 23, label: 'Half-board included', count: 86},
    ],
  },
  {
    category: 'Property Type',
    options: [
      {id: 24, label: 'Hotels', count: 1190},
      {id: 25, label: 'Apartments', count: 88},
      {id: 26, label: 'Guesthouses', count: 56},
      {id: 27, label: 'Hostels', count: 13},
      {id: 28, label: 'Homestays', count: 8},
    ],
  },
  {
    category: 'Amenities',
    options: [
      {id: 29, label: 'Free WiFi', count: 560},
      {id: 30, label: 'Parking', count: 586},
      {id: 31, label: 'Fitness center', count: 525},
      {id: 32, label: 'Room service', count: 504},
      {id: 33, label: 'Non-smoking rooms', count: 575},
    ],
  },
  {
    category: 'Room Facilities',
    options: [
      {id: 34, label: 'Kitchen', count: 45},
      {id: 35, label: 'Private bathroom', count: 35},
    ],
  },
  {
    category: 'Accessibility',
    options: [{id: 36, label: 'Wheelchair accessible', count: 21}],
  },
  {
    category: 'Sustainability',
    options: [{id: 37, label: 'Travel Sustainable', count: 120}],
  },
  {
    category: 'Neighborhoods',
    options: [
      {id: 38, label: 'Beltline', count: 105},
      {id: 39, label: 'Downtown Calgary', count: 65},
      {id: 40, label: 'Kensington', count: 30},
    ],
  },
  {
    category: 'Parking Accessibility',
    options: [
      {id: 41, label: 'Electric vehicle charging station', count: 19},
      {id: 42, label: 'Parking on site', count: 38},
      {id: 43, label: 'Accessible parking', count: 21},
    ],
  },
  {
    category: 'Room Accessibility',
    options: [
      {id: 44, label: 'Lower bathroom sink', count: 6},
      {id: 45, label: 'Raised toilet', count: 10},
      {id: 46, label: 'Toilet with grab rails', count: 14},
      {id: 47, label: 'Shower chair', count: 8},
      {id: 48, label: 'Entire unit wheelchair accessible', count: 21},
    ],
  },
];

const HotelFilter = ({navigation}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  //   console.log('-->', selectedItems);

  const handlePress = item => {
    setSelectedItems(prevItems => {
      if (prevItems.includes(item)) {
        // Item is already selected, so remove it
        return prevItems.filter(selectedItem => selectedItem !== item);
      } else {
        // Item is not selected, so add it
        return [...prevItems, item];
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} barStyle={'dark-content'} />
      <View style={[styles.container, {marginTop: _mvs(45)}]}>
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

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.parent]}>
            {filtersData?.map((item, index) => {
              const lastIndex = filtersData.length - 1;
              // console.log(index == 0 && item);

              return (
                <View key={index}>
                  <View style={styles.scrollParent}>
                    {/* category name */}
                    <Text style={[commonStyles.ns700, commonStyles.font15]}>
                      {item?.category}
                    </Text>

                    {/* option map here  */}
                    {item?.options?.map((options, i) => (
                      <View key={i} style={styles.buttonCon}>
                        <View
                          style={[
                            commonStyles.commWrapSeven,
                            commonStyles.flexOne,
                            {gap: _ms(6)},
                          ]}>
                          {/* button for select and deselect */}
                          {index !== 0 && (
                            <TouchableOpacity
                              onPress={() => {
                                //   console.log(options.label);
                                handlePress(options.label);
                              }}
                              style={[
                                styles.button,
                                {
                                  backgroundColor: selectedItems.includes(
                                    options.label,
                                  )
                                    ? blue
                                    : white,

                                  borderRadius: selectedItems.includes(
                                    options.label,
                                  )
                                    ? 100
                                    : 5,
                                },
                              ]}>
                              <Image
                                source={icon.check}
                                style={styles.checkicon}
                              />
                            </TouchableOpacity>
                          )}

                          {/* category names */}
                          <View>
                            <Text
                              style={[
                                commonStyles.ns600,
                                commonStyles.flexOne,
                              ]}>
                              {options?.label}
                            </Text>

                            {/* range is here -- $20 – $300+ */}
                            {options?.range && (
                              <Text
                                style={[
                                  commonStyles.ns600,
                                  commonStyles.flexOne,
                                  {
                                    marginTop: _mvs(5),
                                  },
                                ]}>
                                {options?.range}
                              </Text>
                            )}
                          </View>
                        </View>

                        {/* item count */}

                        <Text
                          style={[
                            commonStyles.ns600,
                            {
                              textAlign: 'right',
                              width: _ms(30),
                            },
                          ]}>
                          {options?.count}
                        </Text>
                      </View>
                    ))}
                  </View>

                  {lastIndex != index && <View style={styles.horizontalLine} />}
                </View>
              );
            })}
          </View>
        </ScrollView>

        <View style={styles.bottomBtnCon}>
          <Pressable style={styles.applyBtn}>
            <Text
              style={[commonStyles.lbB1, {color: white, fontSize: _ms(14)}]}>
              APPLY
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setSelectedItems([]);
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

export default HotelFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },

  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginLeft: _ms(15),
    gap: _ms(10),
  },

  parent: {
    // minWidth: _width - _ms(100),
    // maxWidth: _width - _ms(30),
    // backgroundColor: 'teal',
    width: _width - _ms(80),
    marginHorizontal: _ms(15),
    marginVertical: _mvs(15),
    paddingVertical: _mvs(14),
    borderRadius: 6,
    backgroundColor: white,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#e6e6e6',
  },

  checkicon: {
    width: _ms(10),
    height: _ms(10),
    resizeMode: 'contain',
    tintColor: white,
  },

  buttonCon: {
    backgroundColor: white,
    flexDirection: 'row',
    alignItems: 'center',
    gap: _ms(2),
    paddingVertical: _mvs(6),
    justifyContent: 'space-between',
  },

  button: {
    width: _ms(22),
    height: _ms(22),
    backgroundColor: blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: blue,
    elevation: 1,
  },

  scrollParent: {
    marginHorizontal: _ms(10),
  },

  horizontalLine: {
    height: 1,
    backgroundColor: '#e6e6e6',
    marginTop: _mvs(5),
    marginBottom: _mvs(10),
    marginHorizontal: 1,
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
