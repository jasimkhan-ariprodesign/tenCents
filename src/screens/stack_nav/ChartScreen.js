import {
  Image,
  Linking,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {b1, b2, blue, linkColor, white} from '../../config/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import icon from '../../config/IconAssets';
import {_fonts, _ms, _mvs} from '../../components/utils/Responsive';

const ChartScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState(1234567890);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />

      <SafeAreaView style={styles.container}>
        <View style={styles.headerCon}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.backBtn}>
            <Image source={icon.rightArrow} style={styles.backIcon} />
          </Pressable>
          <Text style={styles.title}>Chart</Text>
        </View>

        <View style={styles.topWrapper}>
          <View>
            <View style={styles.onlineDot} />
            <Image source={icon.woman} style={styles.womanIcon} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.txtOne}>Hello and Welcome!</Text>
            <Text style={styles.txtTwo}>
              We're happy to help with any one of your travel needs. You can
              call us or chat below.
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.startChattingBtn}>
          <Text style={styles.startChattingTxt}>Start Chatting</Text>
        </TouchableOpacity>

        <View style={styles.orCon}>
          <View style={styles.horizontalLine} />
          <Text style={styles.orTxt}>or</Text>
          <View style={styles.horizontalLine} />
        </View>

        <Text style={[styles.txtOne, {fontSize: _ms(14), marginLeft: _ms(12)}]}>
          Speak to a travel expert
        </Text>

        <Text style={[styles.txtTwo, {marginHorizontal: _ms(10)}]}>
          We're happy to help with any one of your travel need.
        </Text>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`tel:${phoneNumber}`);
          }}
          style={styles.callNowBtn}>
          <Text style={[styles.startChattingTxt, {color: linkColor}]}>
            Call Now
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default ChartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },

  headerCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(10),
    // backgroundColor: 'blue',
  },

  title: {
    color: b1,
    fontFamily: _fonts.quicksandBold,
    // fontFamily: _fonts.interBold,
    fontSize: _ms(16),
  },

  backBtn: {
    // backgroundColor: 'red',
    padding: _ms(6),
    borderRadius: 40,
    position: 'absolute',
    left: _ms(6),
    zIndex: 1,
  },

  backIcon: {
    width: _ms(15),
    height: _ms(15),
    resizeMode: 'contain',
    transform: [{rotate: '180deg'}],
    tintColor: blue,
  },

  topWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: white,
    paddingVertical: _mvs(10),
    gap: _ms(15),
    paddingHorizontal: _ms(10),
  },

  womanIcon: {
    width: _ms(45),
    height: _ms(45),
    resizeMode: 'contain',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: blue,
  },

  onlineDot: {
    width: _ms(10),
    height: _ms(10),
    backgroundColor: 'green',
    position: 'absolute',
    bottom: _ms(1),
    right: _ms(2),

    borderRadius: 40,
    zIndex: 1,
  },

  txtOne: {
    color: b1,
    fontFamily: _fonts.interBold,
    fontSize: _ms(15),
  },

  txtTwo: {
    color: b1,
    fontFamily: _fonts.interRegular,
    fontSize: _ms(12.5),
    marginTop: _mvs(5),
  },

  startChattingBtn: {
    backgroundColor: blue,
    marginHorizontal: _ms(10),
    marginTop: _mvs(20),
    paddingVertical: _mvs(6),
    alignItems: 'center',
    borderRadius: 5,
  },

  startChattingTxt: {
    color: white,
    fontFamily: _fonts.interMedium,
    fontSize: _ms(14),
  },

  orCon: {
    // backgroundColor: 'lime',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: _mvs(15),
    marginHorizontal: _ms(11),
    gap: _ms(5),
  },

  horizontalLine: {
    height: 1,
    flex: 1,
    backgroundColor: '#666',
    marginTop: _mvs(2.5),
  },

  orTxt: {
    color: b1,
    fontFamily: _fonts.interBold,
    fontSize: _ms(14),
  },
  callNowBtn: {
    backgroundColor: white,
    elevation: 1,
    // shadowColor: 'silver',
    borderWidth: 1.3,
    borderColor: linkColor,
    marginVertical: _mvs(20),
    marginHorizontal: _ms(10),
    paddingVertical: _mvs(5),
    alignItems: 'center',
    borderRadius: 5,
  },
});
