import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {b1, b2, b3, blue, red, white} from '../../config/colors';
import DirectTab from '../../components/search/flights/DirectTab';
import Meals from '../../components/search/flights/Meals';
import Extras from '../../components/search/flights/Extras';
import FareBreakSheet from '../../utility/FareBreakSheet';
import {_fonts, _ms, _mvs} from '../../components/utils/Responsive';
import icon from '../../config/IconAssets';

const {width} = Dimensions.get('window');

const AddOns = ({navigation}) => {
  const [addOns, setAddOns] = useState('d');
  const [flight, setFlight] = useState('dac');
  const addonFareRef = useRef();

  const addOnsData = [
    {id: 'd', label: 'Direct', icon: require('../../assets/icons/seat.png')},
    {id: 'm', label: 'Meals', icon: require('../../assets/icons/dinner.png')},
    {id: 'e', label: 'Extras', icon: require('../../assets/icons/diamond.png')},
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent={true} barStyle={'dark-content'} />
      <View style={styles.Wrap}>
        {/* nav */}
        <View style={styles.navWrap}>
          <TouchableOpacity
            style={styles.nav}
            onPress={() => navigation.goBack()}>
            <Image
              style={{width: _ms(20), height: _ms(20)}}
              tintColor={b1}
              resizeMode="contain"
              source={icon.next}
            />
            <Text style={[styles.lbB1, {fontSize: _ms(16)}]}>Add Ons</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{}}
            onPress={() => navigation.navigate('payments')}>
            <Text style={[styles.lbB1, {fontSize: _ms(16), color: blue}]}>
              Skip to Payments
            </Text>
          </TouchableOpacity>
        </View>

        {/* add ons option */}
        <View style={styles.addOnsOptnWrap}>
          {addOnsData.map(option => (
            <TouchableOpacity
              key={option.id}
              style={
                addOns === option.id
                  ? styles.addOnsOptnActive
                  : styles.addOnsOptn
              }
              onPress={() => setAddOns(option.id)}>
              <Image
                style={
                  addOns === option.id
                    ? styles.addOnsIconActive
                    : styles.addOnsIcon
                }
                source={option.icon}
              />
              <Text
                style={[
                  styles.ns600,
                  addOns === option.id
                    ? styles.addOnsTxtActive
                    : styles.addOnsTxt,
                ]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* flight and seat */}

        <View style={styles.subComCon}>
          {/* seat layout */}
          {addOns === 'd' && <DirectTab />}

          {/* meals */}
          {addOns === 'm' && <Meals width={width} />}

          {/* extras */}
          {addOns === 'e' && <Extras width={width} />}
        </View>

        {/* bottom */}
        <View style={styles.bottom}>
          <View
            style={{
              width: '70%',
              paddingHorizontal: _ms(10),
              // backgroundColor: 'salmon',
            }}>
            <View style={styles.bottomChild}>
              <View style={styles.rowAndCenter}>
                <Image
                  style={styles.bottomIconstyle}
                  source={require('../../assets/icons/seat.png')}
                />
                <Text style={[styles.ns400]}>$ 100</Text>
              </View>

              <View style={styles.rowAndCenter}>
                <Text style={[styles.ns400]}>+ </Text>
                <Image
                  style={styles.bottomIconstyle}
                  source={require('../../assets/icons/dinner.png')}
                />
                <Text style={[styles.ns400]}>$ 180</Text>
              </View>

              <View style={styles.rowAndCenter}>
                <Text style={[styles.ns400]}>+ </Text>
                <Image
                  style={styles.bottomIconstyle}
                  source={require('../../assets/icons/diamond.png')}
                />
                <Text style={[styles.ns400]}>$ 120</Text>
              </View>
            </View>

            {/* final price */}
            <TouchableOpacity
              style={[styles.rowAndCenter, {gap: _ms(12)}]}
              onPress={() => addonFareRef.current.open()}>
              <Text style={[styles.ns700]}>$ 495</Text>
              <Image
                style={[
                  styles.bottomIconstyle,
                  {
                    transform: [{rotate: '-90deg'}],
                  },
                ]}
                source={require('../../assets/icons/right-arrow.png')}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.next}
            onPress={() => navigation.navigate('payments')}>
            <Text style={styles.nextTxt}>Next</Text>
          </TouchableOpacity>
        </View>

        {/* bottom sheet */}
        <FareBreakSheet fareRef={addonFareRef} />
      </View>
    </SafeAreaView>
  );
};

export default AddOns;

const styles = StyleSheet.create({
  Wrap: {
    flex: 1,
    marginTop: _mvs(40),
  },

  lbB1: {
    fontFamily: _fonts.londonBetween,
    color: b1,
  },

  ns700: {
    fontFamily: _fonts.nunitoSansBold,
    color: b1,
    fontSize: _ms(18),
  },

  ns600: {
    fontFamily: _fonts.nunitoSansSemiBold,
    color: b1,
    fontSize: _ms(16),
  },

  ns400: {
    fontFamily: _fonts.nunitoSansRegular,
    color: b1,
    fontSize: _ms(14),
  },

  navWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: _mvs(10),
    marginHorizontal: _ms(15),
  },

  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: _ms(20),
  },

  addOnsOptnWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: _ms(10),
    marginTop: _mvs(10),
  },

  addOnsOptn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.7,
    borderColor: '#D8D8D8',
    justifyContent: 'center',
    borderRadius: 3,
    gap: _ms(10),
    paddingVertical: _ms(6),
    paddingHorizontal: _ms(13),
  },

  addOnsOptnActive: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.7,
    justifyContent: 'center',
    borderColor: blue,
    backgroundColor: 'rgba(33, 180, 226, 0.1)',
    borderRadius: 3,
    gap: _ms(10),
    paddingVertical: _ms(6),
    paddingHorizontal: _ms(10),
  },

  addOnsIcon: {
    width: _ms(16),
    height: _ms(16),
    tintColor: b3,
    resizeMode: 'contain',
  },

  addOnsIconActive: {
    width: _ms(16),
    height: _ms(16),
    tintColor: blue,
    resizeMode: 'contain',
  },

  addOnsTxt: {
    fontSize: _ms(14),
    color: b3,
  },

  addOnsTxtActive: {
    fontSize: _ms(14),
    color: blue,
  },

  flightSeat: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    borderTopWidth: 0.8,
    paddingTop: 12,
    backgroundColor: white,
    elevation: 3,
  },

  bottom: {
    width: width,
    backgroundColor: white,
    flexDirection: 'row',
    paddingVertical: _mvs(4),
    paddingHorizontal: _ms(4),
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e6e6e6',
  },

  bottomChild: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: _mvs(2.5),
    gap: _ms(8),
    flexWrap: 'wrap',
    // backgroundColor: 'blue',
  },

  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: _ms(3),
  },

  next: {
    borderRadius: 5,
    backgroundColor: b2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(6),
    width: '30%',
  },

  nextTxt: {
    color: white,
    fontSize: _ms(14),
    fontFamily: _fonts.londonTwo,
  },

  bottomIconstyle: {
    width: _ms(14),
    height: _ms(14),
    resizeMode: 'contain',
  },
  //
  subComCon: {
    flex: 1,
    marginTop: _mvs(10),
  },
});
