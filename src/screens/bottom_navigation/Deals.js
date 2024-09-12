import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {b1, b2, black, blue, white} from '../../config/colors';
import BgGradient from '../../utility/BgGradient';
import Header from '../../components/Header';
import {_fonts, _ms, _mvs} from '../../components/utils/Responsive';
import icon from '../../config/IconAssets';

const {width, height} = Dimensions.get('window');

const Deals = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <BgGradient width={width} height={height} />
      <Header navigation={navigation} />
      <View style={styles.parent}>
        <View style={styles.iconCon}>
          <Image source={icon.discount} style={styles.discountIcon} />
        </View>

        <Text style={styles.txtOne}>Sign in to check our deals</Text>

        <Text style={styles.txtTwo}>
          Not a member yet? Sign up to 10 Cents Air now to get our latest offers
        </Text>

        <Pressable
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
          style={styles.signInBtn}>
          <Text style={styles.signIn}>Log In / Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    // paddingTop: _mvs(55),
  },

  parent: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconCon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(33, 180, 226, 0.05)',
    padding: _ms(40),
    borderRadius: 500,
  },

  discountIcon: {
    width: _ms(80),
    height: _ms(80),
    tintColor: blue,
  },

  txtOne: {
    color: b2,
    fontFamily: _fonts.poppinsSemiBold,
    fontSize: _ms(14),
    marginTop: _mvs(15),
  },

  txtTwo: {
    color: b2,
    fontFamily: _fonts.poppinsRegular,
    fontSize: _ms(12),
    marginTop: _mvs(10),
    maxWidth: '85%',
    textAlign: 'center',
  },

  signInBtn: {
    backgroundColor: b2,
    padding: _ms(5),
    paddingHorizontal: _ms(50),
    borderRadius: 5,
    marginTop: _mvs(20),
  },

  signIn: {
    color: white,
    fontFamily: _fonts.assistantBold,
    fontSize: _ms(14),
  },
});
