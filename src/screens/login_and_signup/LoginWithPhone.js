import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {_fonts, _ms, _s, _vs} from '../../components/utils/Responsive';
import {black111111, white} from '../../config/colors';
import {usa} from '../../config/IconAssets';
import {useNavigation} from '@react-navigation/native';

const LoginWithPhone = () => {
  const navigation = useNavigation();
  const [userNumber, setUserNumber] = useState('');
  // console.log(userNumber);

  const handleLogin = () => {
    // Alert.alert('Long Press', 'continue !');
    navigation.navigate('OTPVerifyScreen');
  };

  return (
    <ImageBackground
      source={require('../../assets/image/signInBackground.png')}
      style={styles.container}>
      <View style={[styles.container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* skip button */}
          <TouchableOpacity
            style={styles.skipWrap}
            onPress={() => Alert.alert('skip')}>
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Sign In</Text>

          <View style={{marginTop: _ms(15)}}>
            <Text style={styles.txtOne}>
              Please confirm your country code and
            </Text>
            <Text style={styles.txtOne}>enter your phone number.</Text>
          </View>

          <View style={styles.parent}>
            {/* user country name and flag */}
            <View style={styles.country_flag_name_Con}>
              <Image source={usa} style={styles.countryIcon} />
              <Text style={styles.countryName}>USA</Text>
            </View>

            {/* input field/container */}
            <View style={styles.inputCon}>
              <TouchableOpacity style={styles.countryCodeBtn}>
                <Text style={styles.countryCodeTxt}>+1</Text>
              </TouchableOpacity>

              <TextInput
                placeholder="00 0 0000 0000"
                placeholderTextColor={white}
                style={styles.numberInput}
                keyboardType="phone-pad"
                value={userNumber}
                onChangeText={setUserNumber}
              />
            </View>

            {/* continue button */}
            <Pressable style={styles.continueBtn} onPress={handleLogin}>
              <Text style={styles.continueTxt}>CONTINUE</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default LoginWithPhone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: primaryColor,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },

  skip: {
    fontFamily: _fonts.rubikRegular,
    fontSize: _ms(14),
    color: white,
  },

  skipWrap: {
    marginTop: _vs(40),
    marginLeft: 10,
    width: _ms(50),
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: white,
    fontSize: _ms(22),
    fontFamily: _fonts.londonBetween,
    textAlign: 'center',
    marginTop: _vs(10),
  },

  txtOne: {
    color: white,
    fontFamily: _fonts.poppinsRegular,
    textAlign: 'center',
    fontSize: _ms(12),
  },

  parent: {
    // backgroundColor: 'rgba(0,0,0,0.1)',
    paddingTop: _vs(80),
  },

  country_flag_name_Con: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: _s(20),
    gap: _s(10),
  },

  countryIcon: {
    width: _s(35),
    height: _s(35),
    resizeMode: 'contain',
  },

  countryName: {
    color: white,
    fontSize: _ms(16),
    fontFamily: _fonts.ralewayMedium,
  },

  inputCon: {
    flexDirection: 'row',
    marginHorizontal: _s(20),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: white,
    paddingVertical: _vs(10),
    marginTop: _vs(10),
  },

  countryCodeBtn: {
    // backgroundColor: 'red',
    // backgroundColor: 'transparent',
    width: _s(60),
    paddingVertical: _vs(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: white,
    overflow: 'scroll',
  },

  countryCodeTxt: {
    color: white,
    fontSize: _ms(16),
    fontFamily: _fonts.ralewayMedium,
  },

  numberInput: {
    padding: 0,
    paddingHorizontal: _s(15),
    color: white,
    fontSize: _ms(15),
    fontFamily: _fonts.ralewayMedium,
    // backgroundColor: 'blue',
    flex: 1,
  },

  continueBtn: {
    backgroundColor: black111111,
    alignSelf: 'center',
    paddingVertical: _vs(10),
    paddingHorizontal: _vs(60),
    borderRadius: _vs(30),
    marginTop: _vs(30),
  },

  continueTxt: {
    color: white,
    textAlign: 'center',
    fontFamily: _fonts.quicksandBold,
    fontSize: _ms(16),
  },
});
