import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {_fonts, _ms, _s, _vs} from '../../components/utils/Responsive';
import {
  black111111,
  blackTxt,
  bs1,
  primaryColor,
  violet,
  white,
} from '../../config/colors';
import {hide, phone, view} from '../../config/IconAssets';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(true);
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  // console.log('userCredentials ==> ', userCredentials);

  return (
    <ImageBackground
      source={require('../../assets/image/signInBackground.png')}
      style={styles.container}>
      <View style={[styles.container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.skipWrap}
            onPress={() => Alert.alert('skip')}>
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Sign In</Text>

          <View style={{marginTop: _ms(15)}}>
            <Text style={styles.txtOne}>
              Earn <Text style={styles.boldText}>2x points</Text> when you're
            </Text>
            <Text style={styles.txtOne}>signed in.</Text>
          </View>

          {/* email input */}

          <View style={styles.parent}>
            <TextInput
              placeholder="Email"
              style={styles.emailInput}
              value={userCredentials.email}
              onChangeText={txt => {
                setUserCredentials({
                  ...userCredentials,
                  email: txt,
                });
              }}
              keyboardType="email-address"
            />

            <View style={styles.passwordCon}>
              <TextInput
                placeholder="Password"
                style={styles.passwordInput}
                secureTextEntry={showPassword}
                value={userCredentials.password}
                onChangeText={txt => {
                  setUserCredentials({
                    ...userCredentials,
                    password: txt,
                  });
                }}
              />
              <Pressable
                style={styles.showPassBtn}
                onPress={() => {
                  setShowPassword(!showPassword);
                }}>
                <Image
                  source={showPassword ? hide : view}
                  style={styles.showPassIcon}
                />
              </Pressable>
            </View>

            {/* forgot pasword button */}

            <TouchableOpacity style={styles.forgotBtn}>
              <Text style={styles.forgotTxt}>Forgot password?</Text>
            </TouchableOpacity>

            {/* login button*/}

            <Pressable style={styles.loginBtn}>
              <Text style={styles.loginTxt}>LOGIN</Text>
            </Pressable>

            {/* horizontal line */}

            <View style={styles.OR_Wrapper}>
              <View style={styles.horizontalLine} />
              <Text style={styles.OR_Txt}>OR</Text>
              <View style={styles.horizontalLine} />
            </View>

            {/* continue with phone */}

            <TouchableOpacity
              style={styles.continueWithPhoneBtn}
              onPress={() => {
                navigation.navigate('LoginWithPhone');
              }}>
              <Image source={phone} style={styles.phoneIcon} />
              <Text style={styles.continueWithPhoneTxt}>
                Continue with phone
              </Text>
            </TouchableOpacity>

            {/*  */}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

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

  boldText: {
    fontWeight: '800',
  },

  parent: {
    // backgroundColor: 'rgba(0,0,0, 0.3)', // ---------------------------------
    gap: _vs(10),
    paddingTop: _vs(100),
  },

  emailInput: {
    backgroundColor: white,
    fontFamily: _fonts.poppinsRegular,
    color: black111111,
    marginHorizontal: _s(15),
    borderRadius: _vs(30),
    padding: 0,
    paddingHorizontal: _s(15),
    height: _vs(40),
    borderWidth: 1,
    borderColor: bs1,
  },

  passwordCon: {
    flexDirection: 'row',
    backgroundColor: white,
    marginHorizontal: _s(15),
    borderRadius: _vs(30),
    borderWidth: 1,
    borderColor: bs1,
  },

  passwordInput: {
    // backgroundColor: '#ccc',
    flex: 1,
    paddingLeft: _s(15),
    borderTopLeftRadius: _vs(30),
    borderBottomLeftRadius: _vs(30),
    fontFamily: _fonts.poppinsRegular,
    color: black111111,
    padding: 0,
    height: _vs(40),
  },

  showPassBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'lime',
    paddingLeft: _s(10),
    paddingRight: _s(20),

    borderTopRightRadius: _vs(30),
    borderBottomRightRadius: _vs(30),
  },

  showPassIcon: {
    width: _s(20),
    height: _s(20),
    resizeMode: 'contain',
    tintColor: black111111,
  },

  forgotBtn: {
    // backgroundColor: 'blue',
    alignSelf: 'center',
  },

  forgotTxt: {
    color: blackTxt,
    fontFamily: _fonts.poppinsRegular,
    fontSize: _ms(13),
  },

  loginBtn: {
    backgroundColor: black111111,
    alignSelf: 'center',
    paddingVertical: _vs(10),
    paddingHorizontal: _vs(60),
    borderRadius: _vs(30),
    marginTop: _vs(10),
  },

  loginTxt: {
    color: white,
    textAlign: 'center',
    fontFamily: _fonts.quicksandBold,
    fontSize: _ms(16),
  },

  OR_Wrapper: {
    // backgroundColor: 'lime',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: _s(10),
    marginTop: _vs(85),
  },

  horizontalLine: {
    width: _s(130),
    height: 2,
    backgroundColor: white,
  },

  OR_Txt: {
    color: white,
    fontSize: _ms(16),
    fontFamily: _fonts.assistantRegular,
  },

  continueWithPhoneBtn: {
    flexDirection: 'row',
    backgroundColor: white,
    marginHorizontal: _s(15),
    borderRadius: _vs(30),
    borderWidth: 1,
    borderColor: bs1,
    alignItems: 'center',
    justifyContent: 'center',
    height: _vs(40),
    gap: _s(20),

    marginTop: _vs(20),
  },

  phoneIcon: {
    width: _s(20),
    height: _s(20),
    resizeMode: 'contain',
    tintColor: primaryColor,
    // tintColor: '#699BF7',
  },

  continueWithPhoneTxt: {
    color: bs1,
    fontFamily: _fonts.assistantRegular,
    fontSize: _ms(16),
  },
});
