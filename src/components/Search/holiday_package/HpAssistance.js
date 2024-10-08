import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

import icon from '../../../config/IconAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import {b1, b2, blue, white} from '../../../config/colors';
import {
  _ms,
  _mvs,
  backIconStyle,
  checkIconStyle,
  SafeAreaCon,
} from '../../utils/Responsive';

const HpAssistance = ({navigation}) => {
  const [termAndCondition, setTermAndCondition] = useState(false);
  return (
    <SafeAreaCon style={[styles.container]}>
      <StatusBar translucent={true} barStyle={'dark-content'} />
      <View style={[commonStyles.flexOne]}>
        {/* nav */}

        <TouchableOpacity
          style={styles.nav}
          onPress={() => navigation.goBack()}>
          <Image
            style={[backIconStyle, {marginTop: _mvs(3)}]}
            source={icon.next}
          />

          <Text style={[commonStyles.ns600, {fontSize: _ms(16)}]}>
            ASSISTANCE
          </Text>
        </TouchableOpacity>

        <>
          <ScrollView
            scrollEventThrottle={16}
            bounces={false}
            decelerationRate={'fast'}
            showsVerticalScrollIndicator={false}>
            <Text
              style={[
                commonStyles.ns400,
                commonStyles.textAlignCenter,
                {marginTop: _mvs(20)},
              ]}>
              Get in touch with us
            </Text>

            <View style={[styles.parent]}>
              <View style={[styles.inputCon]}>
                <Text
                  style={[
                    commonStyles.ns400,
                    commonStyles.textTransformUppercase,
                  ]}>
                  Destination
                </Text>

                <TextInput style={styles.inputBox} />
              </View>

              <View style={[styles.inputCon]}>
                <Text
                  style={[
                    commonStyles.ns400,
                    commonStyles.textTransformUppercase,
                  ]}>
                  Departure City
                </Text>

                <TextInput style={styles.inputBox} />
              </View>

              <View style={[styles.inputCon]}>
                <Text
                  style={[
                    commonStyles.ns400,
                    commonStyles.textTransformUppercase,
                  ]}>
                  Name
                </Text>

                <TextInput style={styles.inputBox} />
              </View>

              <View style={[styles.inputCon]}>
                <Text
                  style={[
                    commonStyles.ns400,
                    commonStyles.textTransformUppercase,
                  ]}>
                  Phone
                </Text>

                <TextInput style={styles.inputBox} />
              </View>

              <View style={[styles.inputCon]}>
                <Text
                  style={[
                    commonStyles.ns400,
                    commonStyles.textTransformUppercase,
                  ]}>
                  Email ID
                </Text>

                <TextInput style={styles.inputBox} />
              </View>
            </View>

            <View style={styles.childOne}>
              <TouchableOpacity
                onPress={() => {
                  setTermAndCondition(!termAndCondition);
                }}>
                <View
                  style={[
                    styles.circle,
                    {backgroundColor: termAndCondition ? blue : white},
                  ]}>
                  <Image
                    source={icon.check}
                    tintColor={white}
                    style={[checkIconStyle]}
                  />
                </View>
              </TouchableOpacity>

              <Text style={styles.dcltn}>
                I have read and agree to the
                <Text
                  onPress={() => Alert.alert('User Agreement')}
                  style={[styles.dcltn, {color: '#008CFF'}]}>
                  {' '}
                  User Agreement{' '}
                </Text>
                &
                <Text
                  onPress={() => Alert.alert('Privacy Policy')}
                  style={[styles.dcltn, {color: '#008CFF'}]}>
                  {' '}
                  Privacy Policy
                </Text>
              </Text>
            </View>

            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnTxt}>Get a Callback</Text>
            </TouchableOpacity>

            <View style={styles.bottomTxtCon}>
              <Text style={styles.bottomTxt}>
                750+ Travel Experts | 40 Lac+ Travelers | 65+ Destinations
              </Text>
            </View>
          </ScrollView>
        </>
      </View>
    </SafeAreaCon>
  );
};

export default HpAssistance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },

  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginLeft: _ms(15),
    gap: _ms(10),
    marginTop: _mvs(15),
  },

  parent: {
    marginTop: _mvs(15),
    marginHorizontal: _ms(8),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    rowGap: _mvs(10),
    paddingVertical: _mvs(15),
    paddingHorizontal: _ms(20),
  },

  inputCon: {
    // backgroundColor: 'red',
    gap: _mvs(4),
  },

  inputBox: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: blue,
    padding: 0,
    paddingLeft: _ms(10),
    height: _mvs(40),
  },

  childOne: {
    marginTop: _mvs(15),
    marginHorizontal: _ms(8),
    gap: _ms(8),
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },

  circle: {
    width: _ms(18),
    height: _ms(18),
    borderRadius: _ms(18),
    borderWidth: 1.5,
    borderColor: blue,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
  },

  dcltn: {
    fontFamily: 'Lato-Regular',
    fontSize: _ms(11),
    color: b1,
    flex: 1,
  },

  btn: {
    marginTop: _mvs(15),
    backgroundColor: b2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(8),
    paddingBottom: _mvs(10),
    paddingHorizontal: _ms(20),
    borderRadius: 25,
    alignSelf: 'center',
  },

  btnTxt: {
    fontSize: _ms(15),
    color: white,
    fontFamily: 'Lato-Regular',
  },

  bottomTxtCon: {
    marginTop: _mvs(15),
    marginHorizontal: _ms(10),
  },

  bottomTxt: {
    fontSize: _ms(12),
    color: b1,
    fontFamily: 'Lato-Regular',
  },
});
