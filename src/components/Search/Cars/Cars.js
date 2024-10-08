import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {white, b1, b3, black, blue} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import SearchButton from '../../SearchButton';
import RentalCars from './RentalCars';
import AirportTransport from './AirportTransport';
import {_fonts, _ms, _s, _vs} from '../../utils/Responsive';

const Cars = ({navigation}) => {
  const [selectedMidMenu, setSelectedMidMenu] = useState('rc');

  const [isTravel, setIsTravel] = useState(false);

  const handleTravellers = childData => {
    setIsTravel(!isTravel);
  };

  return (
    <ScrollView
      style={{flex: 1}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: _ms(60)}}>
      {/* trip option nav bar */}
      <View style={styles.mainMenuWrap}>
        <View style={styles.mmContWrap}>
          {[
            {key: 'rc', label: 'Rental Cars'},
            {key: 'at', label: 'Airport Transportation'},
          ].map(item => (
            <TouchableOpacity
              key={item.key}
              style={
                selectedMidMenu === item.key ? styles.mmBtnActive : styles.mmBtn
              }
              onPress={() => setSelectedMidMenu(item.key)}>
              <Text
                style={
                  selectedMidMenu === item.key
                    ? styles.mmBtnTxtActive
                    : styles.mmBtnTxt
                }>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* trip option content */}
        <>
          {selectedMidMenu === 'rc' && (
            <RentalCars
              navigation={navigation}
              handleTravellers={handleTravellers}
              isTravel={isTravel}
            />
          )}
          {selectedMidMenu === 'at' && (
            <AirportTransport
              navigation={navigation}
              handleTravellers={handleTravellers}
              isTravel={isTravel}
            />
          )}
        </>
      </View>

      {/* search button */}

      <SearchButton
        navigation={navigation}
        navigationScreen={'carsearch'}
        name="Search"
      />

      {/* prifile option */}
      <View style={styles.profileButtonContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: _ms(15),
          }}>
          <Image style={styles.profileIconStyle} source={icon.prologo} />
          <Text style={styles.welcomeBackTxt}>Welcome Back, Kevin!</Text>
        </View>

        <Image style={styles.greaterArrowIcon} source={icon.rightArrow} />
      </View>

      {/* calling option */}
      <View
        style={[
          styles.profileButtonContainer,
          {
            gap: _s(5),
            paddingHorizontal: _s(5),
            marginBottom: _vs(20),
            borderRadius: 0,
          },
        ]}>
        <Image style={styles.profileIconStyle} source={icon.proimg} />

        <View style={{flex: 1}}>
          <Text style={styles.TxtOne}>Looking for last-minute deals?</Text>
          <Text style={styles.TxtTwo}>
            Speak to a travel expert and a get assistance 24/7
          </Text>
        </View>

        <TouchableOpacity style={styles.callIconCon}>
          <Image style={styles.callIconStyle} source={icon.mobile} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Cars;

const styles = StyleSheet.create({
  mainMenuWrap: {
    backgroundColor: white,
    // backgroundColor: 'red',
    paddingBottom: 5,
    marginHorizontal: _ms(8),
    borderRadius: 5,
    elevation: 20,
    shadowColor: black,
  },

  mmContWrap: {
    flexDirection: 'row',
    backgroundColor: white,
    // backgroundColor: 'green',
    overflow: 'scroll',
    gap: _ms(6),
    padding: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  mmBtn: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _ms(4),
    paddingHorizontal: _ms(20),
    borderRadius: 4,
    borderWidth: 1.5,
    // borderColor: 'red',
    borderColor: 'transparent',
  },

  mmBtnActive: {
    backgroundColor: 'rgba(33, 180, 226, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _ms(4),
    paddingHorizontal: _ms(20),
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#21B4E2',
  },

  mmBtnTxtActive: {
    color: blue,
    // color: 'rgba(33, 180, 226, 1)',
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(14),
  },

  mmBtnTxt: {
    color: b3,
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(14),
  },

  profileButtonContainer: {
    marginHorizontal: _s(10),
    marginTop: _vs(15),
    backgroundColor: white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    paddingVertical: _vs(9),
    paddingHorizontal: _s(8),
    elevation: 10,
    shadowColor: 'gray',

    zIndex: 1,
  },

  profileIconStyle: {
    width: _s(35),
    height: _s(35),
    resizeMode: 'contain',
  },

  greaterArrowIcon: {
    width: _s(12),
    height: _s(12),
    resizeMode: 'contain',
    tintColor: b3,
  },

  welcomeBackTxt: {
    color: black,
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(14),
  },

  TxtOne: {
    color: b1,
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(12),
  },

  TxtTwo: {
    color: b1,
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(9),
  },

  callIconCon: {
    width: _s(35),
    height: _s(35),
    backgroundColor: blue,
    borderRadius: _s(35),
    alignItems: 'center',
    justifyContent: 'center',
  },

  callIconStyle: {
    width: _s(20),
    height: _s(20),
  },
});
