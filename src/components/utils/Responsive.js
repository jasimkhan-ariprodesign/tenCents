import {Dimensions} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';

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
};

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export {SCREEN_WIDTH, SCREEN_HEIGHT};
