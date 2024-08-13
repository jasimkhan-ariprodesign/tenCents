import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Alert,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {_fonts, _ms, _s, _vs} from '../../components/utils/Responsive';
import {black111111, white} from '../../config/colors';
import OTPResendButton from '../../components/sub_components/OTPResendButton';

const OTPVerifyScreen = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const CELL_COUNT = 6;

  //   console.log(value);
  //   console.log(isLastFilledCell);

  useEffect(() => {
    if (value.length === CELL_COUNT) {
      Keyboard.dismiss();
    }
  }, [value]);

  useEffect(() => {
    ref.current.focus();
  }, []);

  //   console.log('------------------------------------------');

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

          <Text style={styles.title}>Enter Code</Text>

          <View style={styles.parent}>
            {/* otp input field */}
            <CodeField
              ref={ref}
              {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              caretHidden={false}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="phone-pad"
              textContentType="oneTimeCode"
              autoComplete={Platform.select({
                android: 'sms-otp',
                default: 'one-time-code',
              })}
              testID="my-code-input"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />

            <Text style={styles.txtOne}>
              {`We've sent an SMS with an activation code to your phone +55 47 9 9991 5060`}
            </Text>

            <View
              style={
                {
                  // backgroundColor: 'red',
                }
              }>
              <OTPResendButton />
            </View>

            {/* continue button */}
            <Pressable
              style={styles.continueBtn}
              onPress={() => alert('abhi kaha jaoge')}>
              <Text style={styles.continueTxt}>CONTINUE</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default OTPVerifyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginHorizontal: _s(25),
    // marginTop: _vs(15),
  },

  parent: {
    // backgroundColor: 'rgba(0,0,0,0.1)',
    paddingTop: _vs(40),
    gap: _vs(25),
  },

  codeFieldRoot: {
    marginTop: 20,
    // backgroundColor: '#fff',
    justifyContent: 'center',
    gap: _s(5),
    paddingVertical: 10,
  },

  cell: {
    width: _s(45),
    height: _vs(45),
    lineHeight: _vs(43),
    fontSize: _ms(24),
    borderWidth: 2,
    borderColor: '#CDCDCD',
    textAlign: 'center',
    borderRadius: _s(8),
    color: white,
  },
  focusCell: {
    // borderColor: '#3C3D6C',
    borderColor: '#fff',
    backgroundColor: '#6E73D3BF',
  },

  continueBtn: {
    backgroundColor: black111111,
    alignSelf: 'center',
    paddingVertical: _vs(10),
    paddingHorizontal: _vs(60),
    borderRadius: _vs(30),
    // marginTop: _vs(30),
  },

  continueTxt: {
    color: white,
    textAlign: 'center',
    fontFamily: _fonts.quicksandBold,
    fontSize: _ms(16),
  },
});
