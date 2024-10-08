import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {b1, b3, blue, violet, white} from '../../config/colors';
import {_fonts, _ms, _mvs, _vs} from '../../components/utils/Responsive';

const Success = ({navigation}) => {
  const mytrips = () => {
    navigation.navigate('tab', {screen: 'My Trips'});
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} barStyle={'dark-content'} />
      <View style={styles.Wrap}>
        <Text style={styles.success}>SUCCESS!</Text>

        <Image
          style={styles.img}
          resizeMode="contain"
          source={require('../../assets/images/success.png')}
        />

        <View style={styles.child}>
          <Text style={[styles.ns400]}>Your flight has been confirmed for</Text>

          <Text style={[styles.ns400]}>08 Feb'24. Check details at </Text>

          <Text style={[styles.ns400]}>
            <Text onPress={mytrips} style={{color: violet}}>
              My Trips{' '}
            </Text>
            section.
          </Text>
        </View>

        <View style={styles.buttonCon}>
          <TouchableOpacity
            style={styles.backToHome}
            onPress={() => navigation.popToTop('tab')}>
            <Text style={[styles.ns600, {color: blue}]}>BACK TO HOME</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF2F7',
  },

  img: {
    width: '75%',
    alignSelf: 'center',
    // height: _mvs(290),
    // backgroundColor: 'red',
  },

  backToHome: {
    borderColor: blue,
    borderWidth: 1.3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
    paddingHorizontal: _ms(42),
    paddingVertical: _ms(7),
    borderRadius: 8,
  },

  child: {
    // backgroundColor: 'skyblue',
    alignItems: 'center',
  },

  buttonCon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: 'green',
  },

  Wrap: {
    flex: 1,
    marginVertical: _vs(80),
    marginHorizontal: _ms(15),
    // backgroundColor: 'pink',
  },

  ns600: {
    fontFamily: _fonts.nunitoSansSemiBold,
    color: b1,
    fontSize: _ms(14),
  },

  ns400: {
    fontFamily: _fonts.nunitoSansRegular,
    color: b3,
    fontSize: _ms(14),
  },

  success: {
    color: b1,
    fontFamily: 'MarkoOne-Regular',
    fontSize: _ms(28),
    letterSpacing: 5,
    textAlign: 'center',
  },
});
