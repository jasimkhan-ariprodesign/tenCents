import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {b1, b2, blue, linkColor, white} from '../../config/colors';
import {_fonts, _ms, _mvs} from '../../components/utils/Responsive';
import icon from '../../config/IconAssets';

const ProfileScreen = ({navigation}) => {
  const [userDetails, setUserdetails] = useState({
    firstName: 'Hello',
    lastName: 'World',
    email: 'hello@gmail.com',
    number: '1234567890',
    address: 'Saltlake Sector V, Kolkata',
    city: 'Kolkata',
    zipCode: '123123',
    country: 'India',
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.headerCon}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backBtn}>
          <Image source={icon.rightArrow} style={styles.backIcon} />
        </Pressable>
        <Text style={styles.title}>Profile</Text>
      </View>

      <ScrollView keyboardDismissMode="on-drag">
        {/* user details */}
        <View style={styles.fullNameCon}>
          <View style={styles.justCon}>
            <Text style={styles.txtOne}>first name</Text>

            <TextInput
              style={styles.inputStyle}
              value={userDetails.firstName}
              onChangeText={text => {
                setUserdetails({
                  ...userDetails,
                  firstName: text,
                });
              }}
            />
          </View>

          <View style={styles.justCon}>
            <Text style={styles.txtOne}>last name</Text>

            <TextInput
              style={styles.inputStyle}
              value={userDetails.lastName}
              onChangeText={text => {
                setUserdetails({
                  ...userDetails,
                  lastName: text,
                });
              }}
            />
          </View>

          <View style={styles.justCon}>
            <Text style={styles.txtOne}>email</Text>

            <TextInput
              style={styles.inputStyle}
              value={userDetails.email}
              onChangeText={text => {
                setUserdetails({
                  ...userDetails,
                  email: text,
                });
              }}
            />
          </View>

          <View style={styles.justCon}>
            <Text style={styles.txtOne}>mobile number</Text>

            <TextInput
              style={styles.inputStyle}
              value={userDetails.number}
              onChangeText={text => {
                setUserdetails({
                  ...userDetails,
                  number: text,
                });
              }}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.justCon}>
            <Text style={styles.txtOne}>address</Text>

            <TextInput
              style={styles.inputStyle}
              value={userDetails.address}
              onChangeText={text => {
                setUserdetails({
                  ...userDetails,
                  address: text,
                });
              }}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.justCon}>
            <Text style={styles.txtOne}>city</Text>

            <TextInput
              style={styles.inputStyle}
              value={userDetails.city}
              onChangeText={text => {
                setUserdetails({
                  ...userDetails,
                  city: text,
                });
              }}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.justCon}>
            <Text style={styles.txtOne}>zip code</Text>

            <TextInput
              style={styles.inputStyle}
              value={userDetails.zipCode}
              onChangeText={text => {
                setUserdetails({
                  ...userDetails,
                  zipCode: text,
                });
              }}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.justCon}>
            <Text style={styles.txtOne}>country</Text>
            {/* <Text style={styles.nametxt}>India</Text> */}
            <TextInput
              style={styles.inputStyle}
              value={userDetails.country}
              onChangeText={text => {
                setUserdetails({
                  ...userDetails,
                  country: text,
                });
              }}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        {/* edit button */}
        <TouchableOpacity style={styles.updateBtn}>
          <Text style={[styles.nametxt, {}]}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingTop: _mvs(40),
  },

  headerCon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: _mvs(10),
    gap: _ms(10),
  },

  title: {
    color: b2,
    fontFamily: _fonts.quicksandBold,
    fontSize: _ms(14),
    marginBottom: _mvs(3.5),
  },

  backBtn: {
    padding: _ms(6),
    borderRadius: 40,
    marginLeft: _ms(6),
    zIndex: 1,
  },

  backIcon: {
    width: _ms(15),
    height: _ms(15),
    resizeMode: 'contain',
    transform: [{rotate: '180deg'}],
    tintColor: blue,
  },

  fullNameCon: {
    paddingHorizontal: _ms(20),
    gap: _mvs(10),
    marginTop: _mvs(20),
  },

  justCon: {
    // backgroundColor: 'mintcream',
    backgroundColor: white,
    gap: _mvs(2),
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
    paddingBottom: _mvs(5),
  },

  txtOne: {
    color: b1,
    textTransform: 'uppercase',
    fontSize: _ms(11),
    fontFamily: _fonts.ralewayMedium,
  },

  nametxt: {
    color: b2,
    fontSize: _ms(14),
    fontFamily: _fonts.ralewayBold,
  },

  inputStyle: {
    padding: 0,

    color: b2,
    fontSize: _ms(14),
    fontFamily: _fonts.ralewayBold,
  },

  updateBtn: {
    backgroundColor: white,
    borderWidth: 1.5,
    borderColor: b2,
    marginTop: _mvs(20),
    marginHorizontal: _ms(20),
    paddingVertical: _mvs(6),
    alignItems: 'center',
    borderRadius: 5,
  },
});
