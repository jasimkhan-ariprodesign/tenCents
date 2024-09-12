import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import icon, {mail} from '../../config/IconAssets';
import {_fonts, _ms, _mvs} from '../../components/utils/Responsive';
import {b1, b2, b3, blue, white} from '../../config/colors';
import {useRoute} from '@react-navigation/native';

const AddNewTravellerDetails = ({navigation}) => {
  const [bookingType, setBookingtype] = useState('personal');
  const route = useRoute();

  const goBackWithData = () => {
    // Check if the callback function exists and invoke it with data
    // if (route.params?.onGoBack) {
    //   route.params.onGoBack('Some data from Screen B');
    // }
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.conainer}>
      <StatusBar translucent={true} barStyle={'dark-content'} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Please select a fare for IndiGo</Text>

          <TouchableOpacity
            onPress={() => {
              //   navigation.goBack();
              goBackWithData();
            }}
            style={styles.clossButton}>
            <Image
              source={icon.cross}
              style={styles.closeIcon}
              tintColor={b2}
            />
          </TouchableOpacity>
        </View>

        {/* parent all visible core are here */}
        <View style={styles.parent}>
          <View style={styles.titletwoCon}>
            <Text style={styles.titleTwo}>TRAVELLER DETAILS</Text>
          </View>

          {/* personal and business btn */}

          <View style={styles.buttonCon}>
            <TouchableOpacity
              onPress={() => {
                setBookingtype('personal');
              }}
              style={[
                styles.personalBtn,
                {
                  borderTopLeftRadius: _ms(20),
                  borderBottomLeftRadius: _ms(20),
                  backgroundColor: bookingType === 'personal' ? blue : white,
                },
              ]}>
              <Text
                style={[
                  styles.personalBtnTxt,
                  {color: bookingType === 'personal' ? white : b3},
                ]}>
                Personal
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setBookingtype('business');
              }}
              style={[
                styles.personalBtn,
                {
                  borderTopRightRadius: _ms(20),
                  borderBottomRightRadius: _ms(20),
                  backgroundColor: bookingType === 'business' ? blue : white,
                },
              ]}>
              <Text
                style={[
                  styles.personalBtnTxt,
                  {color: bookingType === 'business' ? white : b3},
                ]}>
                Business
              </Text>
            </TouchableOpacity>
          </View>

          {/* note */}
          <View style={styles.noteCon}>
            <View style={styles.noteTxtCon}>
              <Text style={styles.noteTxt}>NOTE:</Text>
            </View>

            <Text style={[styles.noteTxt, {color: b3, flex: 1}]}>
              Please make sure you enter the Name as per your govt. photo id.
            </Text>
          </View>

          {/* child for inpur fields */}
          <View style={styles.child}>
            <View style={styles.txtCon}>
              <Image
                source={require('../../assets/icons/userWithCheck.png')}
                style={styles.userIconStyle}
              />
              <Text style={styles.adultOneTxt}>Adult 1</Text>
            </View>

            <TextInput
              style={styles.firstNameinput}
              placeholder="First Name *"
              placeholderTextColor={b1}
            />

            <TextInput
              style={styles.firstNameinput}
              placeholder="Last Name *"
              placeholderTextColor={b1}
            />

            <TextInput
              style={styles.firstNameinput}
              placeholder="E-mail Address *"
              placeholderTextColor={b1}
            />

            {/* contact number */}

            <View style={styles.contactNumCon}>
              <Text style={styles.contTxt}>Contact Number *</Text>
              <TouchableOpacity style={styles.countryCodeBtn}>
                <Text style={styles.countryCode}>+91</Text>

                <Image
                  source={icon.rightArrow}
                  resizeMode="contain"
                  style={styles.icon}
                />
              </TouchableOpacity>

              <TextInput
                placeholder="1234567890"
                placeholderTextColor={b1}
                style={styles.contactNumInput}
              />
            </View>

            <Text style={styles.txtOne}>
              Confirmation email goes to this mail id and phone number
            </Text>

            <Text style={styles.yourAdd}>Your address *</Text>

            <TextInput
              style={styles.firstNameinput}
              placeholder="Address *"
              placeholderTextColor={b1}
            />

            <TextInput
              style={styles.firstNameinput}
              placeholder="City *"
              placeholderTextColor={b1}
            />

            <TextInput
              style={styles.firstNameinput}
              placeholder="Zipcode *"
              placeholderTextColor={b1}
            />

            <TextInput
              style={styles.firstNameinput}
              placeholder="Country/Region *"
              placeholderTextColor={b1}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.proceedBtn}>
          <Text style={styles.proceedTxt}>Proceed</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNewTravellerDetails;

const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    backgroundColor: white,
  },

  header: {
    flexDirection: 'row',
    paddingVertical: _mvs(5),
    justifyContent: 'space-between',
    paddingHorizontal: _ms(12),
    // backgroundColor: 'blueviolet',
  },

  clossButton: {
    padding: _ms(5),
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
  },

  closeIcon: {
    width: _ms(15),
    height: _ms(15),
    resizeMode: 'contain',
  },

  title: {
    color: b1,
    fontSize: _ms(16),
    fontFamily: _fonts.londonBetween,
  },

  parent: {
    flex: 1,
    backgroundColor: white,
    elevation: 2,
    marginTop: _mvs(20),
    marginHorizontal: _ms(10),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D8D8D8',
  },

  titletwoCon: {
    paddingVertical: _mvs(12),
    paddingHorizontal: _ms(20),
    borderBottomWidth: 1,
    borderColor: '#D8D8D8',
  },

  titleTwo: {
    color: b1,
    fontFamily: _fonts.nunitoSansBold,
  },

  buttonCon: {
    borderWidth: 1,
    borderColor: '#D8D8D8',
    marginVertical: _mvs(10),
    alignSelf: 'center',
    borderRadius: _ms(20),
    flexDirection: 'row',
    elevation: 1,
    backgroundColor: white,
  },

  personalBtn: {
    paddingVertical: _ms(5),
    paddingHorizontal: _ms(15),
  },

  personalBtnTxt: {
    color: b3,
    fontSize: _ms(14),
    fontFamily: _fonts.nunitoSansRegular,
  },

  noteCon: {
    backgroundColor: '#E9F7FB',
    padding: _ms(4),
    flexDirection: 'row',
    alignItems: 'center',
    gap: _ms(10),
    marginHorizontal: _ms(6),
    borderRadius: 1,
  },

  noteTxtCon: {
    backgroundColor: blue,
    padding: _ms(2.5),
    paddingHorizontal: _ms(8),
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  noteTxt: {
    color: white,
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(12),
  },

  child: {
    backgroundColor: '#F4FAFD',
    marginHorizontal: _ms(5),
    marginTop: _mvs(5),
    marginBottom: _mvs(5),
    paddingBottom: _mvs(5),
    borderRadius: 1,
  },

  txtCon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: _mvs(20),
    paddingHorizontal: _ms(8),
    gap: _ms(10),
  },

  userIconStyle: {
    width: _ms(28),
    height: _ms(18),
    resizeMode: 'stretch',
  },

  adultOneTxt: {
    color: b3,
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(14),
  },

  firstNameinput: {
    borderWidth: 1,
    borderColor: '#e6e6e6',
    padding: 0,
    height: _mvs(36),
    borderRadius: 5,
    elevation: 1,
    // backgroundColor: '#F4FAFD',
    backgroundColor: white,
    marginHorizontal: _ms(6),
    paddingHorizontal: _ms(10),
    color: b1,
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(12),
    marginBottom: _mvs(5),
  },

  contactNumCon: {
    flexDirection: 'row',
    backgroundColor: white,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    height: _mvs(36),
    borderRadius: 5,
    elevation: 1,
    marginHorizontal: _ms(6),
  },

  contTxt: {
    color: b1,
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(12),
    marginHorizontal: _ms(10),
    textAlignVertical: 'center',
  },

  countryCodeBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#e6e6e6',
    paddingHorizontal: _ms(5),
    flexDirection: 'row',
    gap: _ms(5),
  },

  countryCode: {
    color: b1,
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(12),
  },

  icon: {
    width: _ms(9),
    height: _ms(9),
    transform: [{rotate: '90deg'}],
    tintColor: b1,
  },

  contactNumInput: {
    flex: 1,
    // backgroundColor: 'red',
    padding: 0,
    paddingHorizontal: _ms(10),
    height: _mvs(36),
    color: b1,
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(12),
  },

  txtOne: {
    textAlign: 'center',
    width: '70%',
    alignSelf: 'center',
    marginVertical: _mvs(5),
    color: b1,
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(12),
  },

  yourAdd: {
    color: b1,
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(12),
    marginLeft: _ms(10),
    marginBottom: _mvs(5),
  },

  proceedBtn: {
    backgroundColor: b2,
    alignSelf: 'center',
    marginTop: _mvs(20),
    paddingVertical: _mvs(7),
    paddingHorizontal: _ms(55),
    borderRadius: 5,
  },

  proceedTxt: {
    color: white,
    fontFamily: _fonts.londonTwo,
    fontSize: _ms(15),
  },
});
