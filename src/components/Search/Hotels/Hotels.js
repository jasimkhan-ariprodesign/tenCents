import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SearchButton from '../../SearchButton';
import {b1, b2, b3, black, blue, white} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import HotelSearchOptn from './HotelSearchOptn';
import HotelPromoOffers from './HotelPromoOffers';
import commonStyles from '../../../assets/css/CommonFonts';
import {_fonts, _ms, _s, _vs} from '../../utils/Responsive';

const Hotels = ({navigation, data}) => {
  const [isClass, setIsClass] = useState(false);
  const [isTravel, setIsTravel] = useState(false);

  const handleTravellers = childData => {
    setIsClass(false);
    setIsTravel(!isTravel);
  };

  const handleClassType = childData => {
    setIsTravel(false);
    setIsClass(!isClass);
  };

  return (
    <ScrollView
      nestedScrollEnabled
      style={{flex: 1}}
      contentContainerStyle={{paddingBottom: _ms(60)}}
      showsVerticalScrollIndicator={false}>
      {/* trip option nav bar */}
      <View style={styles.mainMenuWrap}>
        {/* trip option content */}
        <>
          <HotelSearchOptn
            navigation={navigation}
            handleTravellers={handleTravellers}
            handleClassType={handleClassType}
            isTravel={isTravel}
            isClass={isClass}
          />
        </>
      </View>

      {/* search button */}

      <SearchButton
        navigation={navigation}
        navigationScreen={'hotelsearches'}
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

      {/* deals option */}
      <View style={styles.dealWrap}>
        <Text style={styles.dealHeadTxt}>Deals of the day</Text>

        <View style={styles.dealContWrap}>
          {data.map((_, i) => (
            <View key={i}>
              <HotelPromoOffers />
            </View>
          ))}
        </View>

        <View style={styles.wrapper}>
          <Text style={styles.detailsTxt}>
            *All fares above were last found on:{' '}
            <Text style={styles.redTxt}>Oct 02, 2023 at 12:10:59 AM</Text>.
            These are based on average nightly rates and airfare includes all
            fuel surcharges, taxes & fees and our service fees. Hotels, rental
            cars and activities may have additional taxes and fees. Displayed
            rates are based on historical data, are subject to change, and
            cannot be guaranteed at the time of booking. See all booking{' '}
            <Text onPress={() => Alert.alert('t&c')} style={styles.blueTxt}>
              terms and conditions
            </Text>
          </Text>

          {/* view all btn */}
          <TouchableHighlight
            onPress={() => Alert.alert('TouchableHighlight', 'Button Pressed!')}
            underlayColor={blue}
            style={styles.viewall}>
            <Text style={[commonStyles.lbB1, {fontSize: _ms(16), color: blue}]}>
              View All
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

export default Hotels;

const styles = StyleSheet.create({
  mainMenuWrap: {
    marginHorizontal: _ms(8),
    backgroundColor: white,
    borderRadius: 5,
    elevation: 6,
  },

  dealWrap: {
    backgroundColor: white,
    flex: 1,
    marginTop: _vs(10),
  },

  dealHeadTxt: {
    fontFamily: _fonts.nunitoSansBold,
    fontSize: _ms(16),
    color: b1,
    textAlign: 'center',
    marginTop: _ms(20),
  },
  dealContWrap: {
    marginTop: _ms(15),
    marginHorizontal: _ms(10),
    flex: 1,
    rowGap: 20,
  },

  // ??

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

  //
  wrapper: {
    marginHorizontal: _ms(18),
    marginVertical: _ms(15),
    backgroundColor: white,
    alignItems: 'center',
  },

  detailsTxt: {
    fontFamily: _fonts.nunitoSansRegular,
    color: b2,
    fontSize: _ms(11),
    lineHeight: _ms(18),
  },

  redTxt: {
    color: '#CB3926',
    fontFamily: _fonts.nunitoSansRegular,
  },

  blueTxt: {
    color: blue,
    textDecorationLine: 'underline',
  },

  viewall: {
    borderWidth: 2,
    borderColor: blue,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _ms(7),
    width: '85%',
    marginVertical: _ms(10),
  },
});
