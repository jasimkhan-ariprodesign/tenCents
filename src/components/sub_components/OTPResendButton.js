import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {_fonts, _ms, _s, _vs} from '../utils/Responsive';
import {white} from '../../config/colors';

const OTPResendButton = () => {
  const [timer, setTimer] = useState(30);
  const [isDisabled, setIsDisabled] = useState(true);

  //   console.log('otp resend components --');

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval); // Cleanup on unmount or before the next effect
    } else {
      setIsDisabled(false);
      console.log('---resend---');
    }

    return () => {
      //   clearInterval(interval); // this is not working
      console.log('unmount--- > OTPResendButton');
    };
  }, [timer]);

  const resendOtp = () => {
    setTimer(30);
    setIsDisabled(true);
    // Add your OTP resend logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtOne}>Send code again </Text>
      <TouchableOpacity
        disabled={isDisabled}
        onPress={() => {
          //   Alert.alert('hello world');
          resendOtp();
        }}>
        <Text style={styles.txtOne}>
          {isDisabled ? (
            `00:${timer}`
          ) : (
            <Text
              style={{
                fontFamily: _fonts.ralewayBold,
                // textShadowColor: '#fff',
                textShadowOffset: {width: 1, height: 1},
                textShadowRadius: 5,
              }}>
              Resend
            </Text>
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPResendButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // gap: _s(5),
    // marginTop: _vs(20),
  },

  txtOne: {
    color: white,
    fontSize: _ms(16),
    fontFamily: _fonts.ralewayMedium,
  },
});
