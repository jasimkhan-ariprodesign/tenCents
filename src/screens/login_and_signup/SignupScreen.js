import {
  Alert,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {b1, black111111, blackTxt, w1, white} from '../../config/colors';
import {_fonts, _ms, _s, _vs} from '../../components/utils/Responsive';

const SignupScreen = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    contactNumber: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
  });

  // console.log(userData.firstName);
  // console.log(userData.lastName);
  // console.log(userData.emailAddress);
  // console.log(userData.contactNumber);
  // console.log(userData.address);
  // console.log(userData.city);
  // console.log(userData.zipCode);
  // console.log(userData.country);

  return (
    <ImageBackground
      source={require('../../assets/image/welcomeBackground.png')}
      style={styles.container}>
      <View style={[styles.container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.skipWrap}
            onPress={() => Alert.alert('skip')}>
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Enter Details</Text>

          {/* first name, last name, email, contact name */}
          <View
            style={{
              gap: _vs(10),
              paddingVertical: _vs(25),
              // backgroundColor: 'rgba(0,0,0,0.1)',
            }}>
            <TextInput
              placeholder="First Name *"
              placeholderTextColor={blackTxt}
              style={styles.firstNameInput}
              value={userData.firstName}
              onChangeText={txt => {
                setUserData({
                  ...userData,
                  firstName: txt,
                });
              }}
            />

            <TextInput
              placeholder="Last Name *"
              placeholderTextColor={blackTxt}
              style={styles.firstNameInput}
              value={userData.lastName}
              onChangeText={txt => {
                setUserData({
                  ...userData,
                  lastName: txt,
                });
              }}
            />

            <TextInput
              placeholder="E-mail Address *"
              placeholderTextColor={blackTxt}
              style={styles.firstNameInput}
              value={userData.emailAddress}
              onChangeText={txt => {
                setUserData({
                  ...userData,
                  emailAddress: txt,
                });
              }}
              keyboardType="email-address"
            />

            {/* contact number */}
            <View style={styles.contactCon}>
              <Text style={styles.contactNumberTxt}>Contact Number *</Text>
              <TouchableOpacity style={styles.countryCodePckerBtn}>
                <Text style={styles.countryCodeTxt}>+91</Text>
                <Image
                  source={require('../../assets/icons/right-arrow.png')}
                  style={{
                    width: _ms(8),
                    height: _ms(8),
                    transform: [{rotate: '90deg'}],
                  }}
                />
              </TouchableOpacity>
              <TextInput
                placeholder="0000 *"
                placeholderTextColor={blackTxt}
                style={styles.contactNumInput}
                value={userData.contactNumber}
                onChangeText={txt => {
                  setUserData({
                    ...userData,
                    contactNumber: txt,
                  });
                }}
                keyboardType="phone-pad"
              />
            </View>

            <View>
              <Text style={styles.txtOne}>
                Confirmation email goes to this mail
              </Text>
              <Text style={styles.txtOne}>id and phone number</Text>
            </View>
          </View>

          <View
            style={{
              gap: _vs(10),
              // backgroundColor: 'rgba(255,255,255,0.4)',
            }}>
            <Text style={styles.yourAddressTxt}>Your address</Text>

            <TextInput
              placeholder="Address *"
              placeholderTextColor={blackTxt}
              style={styles.firstNameInput}
              value={userData.address}
              onChangeText={txt => {
                setUserData({
                  ...userData,
                  address: txt,
                });
              }}
            />

            <TextInput
              placeholder="City *"
              placeholderTextColor={blackTxt}
              style={styles.firstNameInput}
              value={userData.city}
              onChangeText={txt => {
                setUserData({
                  ...userData,
                  city: txt,
                });
              }}
            />

            <TextInput
              placeholder="Zip Code *"
              placeholderTextColor={blackTxt}
              style={styles.firstNameInput}
              value={userData.zipCode}
              onChangeText={txt => {
                setUserData({
                  ...userData,
                  zipCode: txt,
                });
              }}
              keyboardType="phone-pad"
            />

            <TextInput
              placeholder="Country/Region *"
              placeholderTextColor={blackTxt}
              style={styles.firstNameInput}
              value={userData.country}
              onChangeText={txt => {
                setUserData({
                  ...userData,
                  country: txt,
                });
              }}
            />

            <Pressable style={styles.signUpBtn}>
              <Text style={styles.signUpTxt}>SIGN UP</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default SignupScreen;

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

  firstNameInput: {
    backgroundColor: white,
    fontFamily: _fonts.nunitoSansRegular,
    color: b1,
    marginHorizontal: _s(15),
    borderRadius: _s(30),
    borderWidth: 1,
    borderColor: blackTxt,
    padding: 0,
    height: _vs(40),
    paddingHorizontal: _s(20),
    fontSize: _ms(12),
  },
  contactCon: {
    backgroundColor: white,
    marginHorizontal: _s(15),
    borderRadius: _s(30),
    borderWidth: 1,
    borderColor: blackTxt,
    height: _vs(40),
    paddingLeft: _s(20),
    flexDirection: 'row',
  },
  contactNumberTxt: {
    color: b1,
    fontSize: _ms(12),
    fontFamily: _fonts.nunitoSansRegular,
    textAlignVertical: 'center',
    paddingRight: _s(5),
    // backgroundColor: 'red',
  },
  contactNumInput: {
    // backgroundColor: 'lime',
    flex: 1,
    padding: 0,
    paddingLeft: _s(8),
    color: b1,
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(12),
  },

  countryCodePckerBtn: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    gap: _ms(4),
    width: _s(60),
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: w1,
  },

  countryCodeTxt: {
    color: b1,
    fontSize: _ms(12),
    fontFamily: _fonts.nunitoSansRegular,
  },

  txtOne: {
    color: white,
    fontSize: _ms(12),
    fontFamily: _fonts.nunitoSansRegular,
    textAlign: 'center',
  },

  yourAddressTxt: {
    color: white,
    fontSize: _ms(12),
    fontFamily: _fonts.nunitoSansSemiBold,
    marginLeft: _s(15),
  },

  signUpBtn: {
    backgroundColor: black111111,
    alignSelf: 'center',
    paddingVertical: _vs(10),
    paddingHorizontal: _vs(60),
    borderRadius: _vs(30),
  },

  signUpTxt: {
    color: white,
    textAlign: 'center',
    fontFamily: _fonts.quicksandBold,
    fontSize: _ms(16),
  },
});
