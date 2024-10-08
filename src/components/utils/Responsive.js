import {Dimensions} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';

export {s as _s, vs as _vs, ms as _ms, mvs as _mvs};

export const _fonts = {
  londonBetween: 'LondonBetween',
  londonTwo: 'LondonTwo',

  poppinsRegular: 'Poppins-Regular',
  poppinsSemiBold: 'Poppins-SemiBold',

  assistantSemiBold: 'Assistant-SemiBold',
  assistantBold: 'Assistant-Bold',
  assistantRegular: 'Assistant-Regular',

  rubikRegular: 'Rubik-Regular',

  nunitoSansRegular: 'NunitoSans_7pt-Regular',
  nunitoSansSemiBold: 'NunitoSans_7pt-SemiBold',
  nunitoSansBold: 'NunitoSans_10pt-Bold',

  quicksandBold: 'Quicksand-Bold',
  quicksandRegular: 'Quicksand-Regular',
  quicksandSemiBold: 'Quicksand-SemiBold',

  ralewayRegular: 'Raleway-Regular',
  ralewayMedium: 'Raleway-Medium',
  ralewaySemiBold: 'Raleway-SemiBold',
  ralewayBold: 'Raleway-Bold',

  interBold: 'Inter_18pt-Bold',
  interLight: 'Inter_18pt-Light',
  interMedium: 'Inter_18pt-Medium',
  interSemiBold: 'Inter_18pt-SemiBold',
  interRegular: 'Inter_18pt-Regular',
};

const {width: _width, height: _height} = Dimensions.get('window');

export {_width, _height};

export const backIconStyle = {
  width: ms(21),
  height: ms(21),
  resizeMode: 'contain',
};

export const shieldIconStyle = {
  width: ms(20),
  height: ms(20),
  resizeMode: 'contain',
};

export const checkIconStyle = {
  width: ms(10),
  height: ms(10),
  resizeMode: 'contain',
};

export const size12 = {
  width: ms(12),
  height: ms(12),
  resizeMode: 'contain',
};

export const size14 = {
  width: ms(14),
  height: ms(14),
  resizeMode: 'contain',
};

export const size15 = {
  width: ms(15),
  height: ms(15),
  resizeMode: 'contain',
};

export const size16 = {
  width: ms(16),
  height: ms(16),
  resizeMode: 'contain',
};

export const size18 = {
  width: ms(18),
  height: ms(18),
  resizeMode: 'contain',
};

export const size20 = {
  width: ms(20),
  height: ms(20),
  resizeMode: 'contain',
};

export const size22 = {
  width: ms(22),
  height: ms(22),
  resizeMode: 'contain',
};

export const size24 = {
  width: ms(24),
  height: ms(24),
  resizeMode: 'contain',
};

export const clubIcon = {
  width: ms(30),
  height: ms(30),
  resizeMode: 'contain',
};

export const alamoIconStyle = {
  width: ms(80),
  height: mvs(22),
  resizeMode: 'contain',
};

export const carIconStyle = {
  width: ms(100),
  height: mvs(50),
  // resizeMode: 'contain',
};

export {SafeAreaView as SafeAreaCon};
