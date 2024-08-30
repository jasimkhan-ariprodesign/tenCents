import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {_fonts, _ms, _s, _vs} from '../../utils/Responsive';
import {b1, b2, b3, black, white} from '../../../config/colors';
import {cross, next, search2} from '../../../config/IconAssets';

const {width} = Dimensions.get('window');

const AirportSearchMultiCity = ({
  filteredAirports, // temp dat
  multiCityHandler,
  setMultiCityHandler,
  multiCityFlights,
  setMultiCityFlights,
}) => {
  const handleInputChange = (field, value) => {
    const newFlights = [...multiCityFlights];
    newFlights[multiCityHandler.currentIndex][field] = value;
    setMultiCityFlights(newFlights);
  };

  return (
    <>
      <LinearGradient
        colors={['rgba(67, 89, 112, 1)', 'rgba(102, 152, 197, 1)']}
        style={{
          flex: 1,
        }}>
        <View style={onewayStyles.parent}>
          <View style={onewayStyles.child}>
            <Pressable
              onPress={() => {
                setMultiCityHandler({
                  ...multiCityHandler,
                  showSearchConMultiCity: false,
                });
                // handleOneWayHideSearch();
              }}
              style={onewayStyles.backButton}>
              <Image source={next} style={onewayStyles.backIcon} />
            </Pressable>
            {/* origin input */}
            <View style={onewayStyles.searchFieldWrapper}>
              <Image source={search2} style={onewayStyles.searchIcon} />
              <TextInput
                placeholder="Origin city/airpot"
                placeholderTextColor={b2}
                style={onewayStyles.originInput}
                // autoFocus={true}

                value={multiCityFlights[multiCityHandler.currentIndex].origin}
                onChangeText={value => {
                  handleInputChange('origin', value);
                }}
              />

              <Pressable
                onPress={() => {
                  //   setOneWayHandler({...oneWayHandler, origin: ''});
                }}
                style={onewayStyles.backButton}>
                <Image
                  source={cross}
                  style={[onewayStyles.searchIcon, {width: _ms(15)}]}
                />
              </Pressable>
            </View>
          </View>

          {/* destination  */}
          <View style={onewayStyles.child}>
            <View style={onewayStyles.backButton} />
            <View style={onewayStyles.searchFieldWrapper}>
              <Image source={search2} style={onewayStyles.searchIcon} />
              <TextInput
                placeholder="Destination city/airpot"
                placeholderTextColor={b2}
                style={onewayStyles.originInput}
                // autoFocus={true}
                value={
                  multiCityFlights[multiCityHandler.currentIndex].destination
                }
                onChangeText={value => {
                  // setOneWayHandler({...oneWayHandler, destination: value});
                  handleInputChange('destination', value);
                }}
              />

              <Pressable
                onPress={() => {
                  //   setOneWayHandler({...oneWayHandler, destination: ''});
                }}
                style={onewayStyles.backButton}>
                <Image
                  source={cross}
                  style={[onewayStyles.searchIcon, {width: _ms(15)}]}
                />
              </Pressable>
            </View>
          </View>
          {/* search list */}

          <View style={onewayStyles.flatlistContainer}>
            <FlatList
              // data={[1, 2, 3]}
              data={filteredAirports}
              renderItem={({item, index}) => {
                return (
                  <View style={onewayStyles.flatlistParent}>
                    {index == 0 && (
                      <Text style={onewayStyles.popularCities}>
                        Popular Cities
                      </Text>
                    )}

                    <TouchableOpacity style={onewayStyles.itemCon}>
                      <Text style={onewayStyles.itemTxt}>{item}</Text>
                      <Text style={onewayStyles.itemTxt2}>{item}</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
              keyExtractor={index => index.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default AirportSearchMultiCity;

const onewayStyles = StyleSheet.create({
  parent: {
    flex: 1,
    // backgroundColor: 'rgba(255,255,255,0.5)',
    // backgroundColor: 'rgba(0,0,0,0.1)',
  },

  child: {
    flexDirection: 'row',
    paddingHorizontal: _s(12),
    marginTop: _ms(13),
    alignItems: 'center',
    gap: _ms(5),

    // backgroundColor: 'rgba(55,25,255,0.2)',
  },

  backButton: {
    width: _ms(30),
    height: _ms(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: _ms(35),
    // backgroundColor: 'blue',
  },

  backIcon: {
    width: _ms(19),
    height: _ms(22),
    resizeMode: 'contain',
    tintColor: white,
    // backgroundColor: 'red',
  },

  searchFieldWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: b3,
    flex: 1,
    paddingHorizontal: _ms(8),
    backgroundColor: white,
  },

  searchIcon: {
    width: _ms(20),
    height: _ms(20),
    resizeMode: 'contain',
    tintColor: b1,
    // backgroundColor: 'red',
  },

  originInput: {
    padding: 0,
    color: b1,
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(12),
    flex: 1,
    paddingVertical: _ms(3),
    paddingHorizontal: _ms(5),
  },

  flatlistContainer: {
    backgroundColor: white,
    marginHorizontal: _ms(10),
    marginVertical: _ms(20),
    borderRadius: 5,
    maxHeight: '80%',
    paddingVertical: _ms(10),
  },

  flatlistParent: {
    // backgroundColor: '#f1f1f1',
    marginBottom: _ms(10),
    paddingHorizontal: _ms(12),
  },

  popularCities: {
    color: b1,
    fontSize: _ms(16),
    fontFamily: _fonts.nunitoSansBold,
    marginBottom: _ms(10),
  },

  itemCon: {
    // marginTop: _ms(10),
  },

  itemTxt: {
    color: b1,
    fontSize: _ms(14),
    fontFamily: _fonts.nunitoSansSemiBold,
  },

  itemTxt2: {
    color: b2,
    fontSize: _ms(13),
    fontFamily: _fonts.nunitoSansRegular,
  },

  //  calender styles
  header: {
    flexDirection: 'row',
    paddingHorizontal: _ms(10),
    alignItems: 'center',
    gap: _ms(8),
    marginTop: _vs(10),
    // backgroundColor: 'blue',
  },

  calenderBackIcon: {
    width: _ms(19),
    height: _ms(19),
    resizeMode: 'contain',
    tintColor: black,
  },

  planeIconCon: {
    width: _ms(30),
    height: _ms(30),
    backgroundColor: b2,
    borderRadius: _ms(35),
    alignItems: 'center',
    justifyContent: 'center',
  },

  planeIcon: {
    width: _ms(14),
    height: _ms(14),
    resizeMode: 'contain',
  },

  title: {
    color: b1,
    fontSize: _ms(16),
    fontFamily: _fonts.londonTwo,
  },

  calenderCon: {
    backgroundColor: white,
    width: width - 20,
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 20,
    shadowColor: black,
    marginTop: _ms(15),
  },

  todayDateTxt: {
    color: b1,
    fontSize: _ms(16),
    fontFamily: _fonts.nunitoSansRegular,
    textAlign: 'center',
  },
});
