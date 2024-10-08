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
    category: 'Popular Filters',
    options: [
      {id: 1, label: 'Hotel', count: 174},
      {id: 2, label: 'Refundable properties', count: 93},
      {id: 3, label: 'Homes and Apartment', count: 17},
      {id: 4, label: '5 Star Rating', count: 86},
      {id: 5, label: 'Guest Rating 9+', count: 70},
    ],
  },
  {
    category: 'Property Rating',
    options: [
      {id: 6, label: '2 stars', count: 10},
      {id: 7, label: '3 stars', count: 62},
      {id: 8, label: '4 stars', count: 80},
      {id: 9, label: '5 stars', count: 3},
      {id: 10, label: 'Unrated', count: 35},
    ],
  },
  {
    category: 'Hotel Amenities',
    options: [
      {id: 11, label: 'Restaurant', count: 85},
      {id: 12, label: 'Indoor pool', count: 57},
      {id: 13, label: 'Fitness', count: 57},
      {id: 14, label: 'Hot tub/Jacuzzi', count: 48},
      {id: 15, label: 'Bar', count: 35},
    ],
  },
];

const FhFilter = ({navigation}) => {
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
              return (
                <View key={index}>
                  <View style={styles.scrollParent}>
                    <Text
                      style={[
                        commonStyles.ns700,
                        {fontSize: _ms(15), marginBottom: _mvs(10)},
                      ]}>
                      {item?.category}
                    </Text>
                    {item?.options?.map((options, i) => (
                      <View key={i} style={styles.buttonCon}>
                        <View style={{flexDirection: 'row', gap: _ms(10)}}>
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
                          <Text style={commonStyles.ns600}>
                            {options?.label}
                          </Text>
                        </View>

                        <Text style={commonStyles.ns600}>{options?.count}</Text>
                      </View>
                    ))}
                  </View>
                  <View style={styles.horizontalLine} />
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

export default FhFilter;

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
    gap: _ms(10),
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
