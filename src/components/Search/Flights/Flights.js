import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BgGradient from '../../../utility/BgGradient';
import SearchButton from '../../SearchButton';
import {b1, b3, black, blue, white} from '../../../config/colors';
import OneWay from './OneWay';
import RoundTrip from './RoundTrip';
import MultiCity from './MultiCity';
import DealItem from './DealItem';
import icon from '../../../config/IconAssets';
import {_fonts, _ms, _s, _vs} from '../../utils/Responsive';
import {MotiPressable} from 'moti/interactions';
import {AnimatePresence, MotiView} from 'moti';

const Flights = ({navigation, data, width, height}) => {
  const [selectedMidMenu, setSelectedMidMenu] = useState('o');
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // console.log(height + height);

  const handleNavbar = txt => {
    setShouldAnimate(true);
    setSelectedMidMenu(txt);
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        // backgroundColor: 'transparent'
        // backgroundColor: '#fff',
      }}
      showsVerticalScrollIndicator={false}>
      {selectedMidMenu === 'm' && <View style={{marginVertical: 3}} />}
      {selectedMidMenu === 'm' && (
        <BgGradient width={width} height={height + height} />
      )}

      {/* trip option nav bar */}
      <View style={styles.mainMenuWrap}>
        <View style={styles.mmContWrap}>
          <TouchableOpacity
            style={selectedMidMenu == 'o' ? styles.mmBtnActive : styles.mmBtn}
            onPress={() => {
              // setSelectedMidMenu('o');
              handleNavbar('o');
            }}>
            <Text
              style={
                selectedMidMenu == 'o' ? styles.mmBtnTxtActive : styles.mmBtnTxt
              }>
              One-way
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={selectedMidMenu == 'r' ? styles.mmBtnActive : styles.mmBtn}
            onPress={() => setSelectedMidMenu('r')}>
            <Text
              style={
                selectedMidMenu == 'r' ? styles.mmBtnTxtActive : styles.mmBtnTxt
              }>
              Round-trip
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={selectedMidMenu == 'm' ? styles.mmBtnActive : styles.mmBtn}
            onPress={() => setSelectedMidMenu('m')}>
            <Text
              style={
                selectedMidMenu == 'm' ? styles.mmBtnTxtActive : styles.mmBtnTxt
              }>
              Multi-city
            </Text>
          </TouchableOpacity>
        </View>
        {/*  YAHA PE KAM KAR RAHA THA ------------------------------------------------------------- */}
        {/* trip option content */}
        <View style={styles.subComWrapper}>
          <AnimatePresence>
            {selectedMidMenu === 'o' && (
              <MotiView
                style={{flex: 1}}
                from={{
                  opacity: shouldAnimate ? 0 : 1,
                  scale: 1,
                  translateX: shouldAnimate ? width : 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  translateX: 0,
                }}
                transition={{
                  duration: 400,
                  type: 'timing',
                  delay: shouldAnimate ? 100 : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 1,
                  translateX: -width, // X ke sath x aur Y ke sath y kam kar raha hai
                  // translateY: height,
                }}
                exitTransition={{
                  type: 'timing',
                  duration: 100,
                  delay: 0,
                }}>
                <OneWay navigation={navigation} />
              </MotiView>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {selectedMidMenu === 'r' && <RoundTrip navigation={navigation} />}
          </AnimatePresence>
          {/* {selectedMidMenu === "m" && <MultiCity />} */}
        </View>
      </View>

      {selectedMidMenu === 'm' && <MultiCity navigation={navigation} />}

      {/* add flight button */}
      {selectedMidMenu === 'm' && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: -1,
            marginBottom: 20,
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: white,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
              paddingHorizontal: 75,
              borderRadius: 4,
            }}>
            <Text
              style={{fontFamily: 'LondonBetween', color: white, fontSize: 18}}>
              Add Flight
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* search button */}
      <SearchButton navigation={navigation} screenName={'flightsearch'} />

      {/* prifile option */}
      <View style={{marginHorizontal: 15, marginTop: 18, zIndex: -1}}>
        <View style={styles.pBarWrap}>
          <View style={styles.proLogoWrap}>
            <Image style={{marginHorizontal: 10}} source={icon.prologo} />
            <Text style={styles.proLogoTxt}>Welcome Back, Kevin!</Text>
          </View>

          <Image style={styles.arwImg} source={icon.rightArrow} />
        </View>
      </View>

      {/* calling option */}
      <View style={{marginHorizontal: 15, marginTop: 18, marginBottom: 10}}>
        <View style={styles.addBarWrap}>
          <Image style={{marginLeft: 7}} source={icon.proimg} />

          <View>
            <Text style={styles.addTxtB}>Looking for last-minute deals?</Text>
            <Text style={styles.addTxt}>
              Speak to a travel expert and a get assistance 24/7
            </Text>
          </View>

          <TouchableOpacity style={styles.callImgWrap}>
            <Image style={styles.callImg} source={icon.mobile} />
          </TouchableOpacity>
        </View>
      </View>

      {/* deals option */}
      {selectedMidMenu === 'r' && (
        <View style={styles.dealWrap}>
          <Text style={styles.dealHeadTxt}>Explore Deals from San Jose</Text>

          <View style={styles.dealContWrap}>
            {data.map((_, i) => (
              <View key={i}>
                <DealItem />
                {i == data.length - 1 ? (
                  <View style={{marginBottom: 30}} />
                ) : null}
              </View>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Flights;

const styles = StyleSheet.create({
  mainMenuWrap: {
    marginHorizontal: _s(8),
    // marginVertical: _vs(5),
    backgroundColor: white,
    borderRadius: 6,
    elevation: 20,
    shadowColor: black,
    padding: 5,
    paddingVertical: 7,
  },

  mmContWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#f3f3f2',
    overflow: 'scroll',
    gap: _s(12),
  },

  mmBtn: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _vs(5),
  },

  mmBtnActive: {
    flex: 1,
    backgroundColor: 'rgba(33, 180, 226, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: '#21B4E2',
    // borderColor: 'rgba(33, 180, 226, 1)',
    borderWidth: 1,
  },

  mmBtnTxtActive: {
    color: 'rgba(33, 180, 226, 1)',
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(14),
  },
  // -------------------------------------
  subComWrapper: {
    // backgroundColor: 'pink',
    margin: 5,
  },

  mmBtnTxt: {
    color: b3,
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(14),
  },

  pBarWrap: {
    backgroundColor: white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    paddingVertical: 12,
    elevation: 4,
  },

  callImg: {
    width: 26,
    height: 26,
  },

  callImgWrap: {
    width: 45,
    height: 45,
    backgroundColor: blue,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  arwImg: {
    width: 20,
    height: 20,
    tintColor: b3,
    marginRight: 10,
  },

  proLogoWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  proLogoTxt: {
    color: black,
    fontFamily: 'NunitoSans_10pt-Regular',
    fontSize: 15,
    marginLeft: 15,
  },

  addBarWrap: {
    backgroundColor: white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    elevation: 3,
  },
  addTxtB: {
    color: b1,
    fontFamily: 'NunitoSans_10pt-Bold',
    fontSize: 13,
    marginBottom: 5,
  },
  addTxt: {
    color: b1,
    fontFamily: 'NunitoSans_10pt-Regular',
    fontSize: 11,
  },
  dealWrap: {
    backgroundColor: white,
    elevation: 3,
    flex: 1,
    marginHorizontal: 7,
    borderRadius: 10,
    marginTop: 12,
  },
  dealHeadTxt: {
    fontFamily: 'NunitoSans_10pt-Bold',
    fontSize: 17,
    color: b1,
    textAlign: 'center',
    marginTop: 25,
  },
  dealContWrap: {
    marginTop: 20,
    marginHorizontal: 20,
    flex: 1,
    rowGap: 20,
  },
});
