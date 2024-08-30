import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import SearchButton from '../../SearchButton';
import {b1, b2, b3, black, blue, white} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import HpSearchComp from './HpSearchComp';
import HpOffers from './HpOffers';
import {hpData} from '../../../config/StaticVars';
import {_fonts, _ms, _s} from '../../utils/Responsive';

const HolidayPackages = ({navigation}) => {
  const [selectedTopMenu, setSelectedTopMenu] = useState('h&c');

  return (
    <ScrollView
      style={{flex: 1}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: _ms(60)}}>
      {/* trip option nav bar */}
      <View style={styles.mainMenuWrap}>
        {/* trip option top nav bar */}
        <View style={styles.mmContWrap}>
          {[
            {key: 'f&h', label: 'Flight + Hotel'},
            {key: 'h&c', label: 'Hotel + Car'},
          ].map(item => (
            <TouchableOpacity
              key={item.key}
              style={
                selectedTopMenu === item.key ? styles.mmBtnActive : styles.mmBtn
              }
              onPress={() => setSelectedTopMenu(item.key)}>
              <Text
                style={
                  selectedTopMenu === item.key
                    ? styles.mmBtnTxtActive
                    : styles.mmBtnTxt
                }>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <>
          {selectedTopMenu == 'h&c' && (
            <View>
              <TouchableOpacity style={styles.allCarSizeBtn}>
                <Text
                  style={[commonStyles.ns400, {fontSize: _ms(14), color: b3}]}>
                  All Car Sizes
                </Text>
                <Image style={styles.downArrowIcon} source={icon.rightArrow} />
              </TouchableOpacity>
            </View>
          )}

          {/* trip option content */}

          <HpSearchComp navigation={navigation} />
        </>
      </View>

      {/* search button */}

      <SearchButton
        navigation={navigation}
        navigationScreen={'hpsearch'}
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
            marginBottom: _ms(20),
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

        <TouchableOpacity
          onPress={() => navigation.navigate('hpassist')}
          style={styles.callIconCon}>
          <Image style={styles.callIconStyle} source={icon.mobile} />
        </TouchableOpacity>
      </View>

      {/* deals option */}
      <View style={styles.dealWrap}>
        <Text style={styles.dealHeadTxt}>
          International Holiday Packages On Sale
        </Text>

        <Text
          style={[
            commonStyles.ns400,
            {color: b3, textAlign: 'center', marginTop: _ms(15)},
          ]}>
          Get Flat 45% Off! Use code: 10CAHOLIDAY
        </Text>

        <View style={styles.dealContWrap}>
          {hpData.map((item, i) => (
            <View key={i}>
              <HpOffers data={item} />
            </View>
          ))}
        </View>

        <View style={styles.wrapper}>
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

export default HolidayPackages;

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

  mmBtnTxt: {
    color: b3,
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(14),
  },

  mmBtnTxtActive: {
    color: blue,
    // color: 'rgba(33, 180, 226, 1)',
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(14),
  },

  allCarSizeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: _ms(5),
    alignSelf: 'flex-start',
    marginLeft: _ms(5),
    paddingVertical: _ms(5),
  },

  downArrowIcon: {
    width: 11,
    height: 11,
    tintColor: b3,
    transform: [{rotate: '90deg'}],
    top: _ms(2),
  },

  // ??

  profileButtonContainer: {
    marginHorizontal: _s(10),
    marginTop: _ms(15),
    backgroundColor: white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    paddingVertical: _ms(9),
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
    width: _ms(20),
    height: _ms(20),
  },

  //

  dealWrap: {
    backgroundColor: white,
    flex: 1,
    marginTop: _ms(10),
    marginHorizontal: _ms(5),
    borderRadius: 10,
    elevation: 20,
    shadowColor: black,
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
