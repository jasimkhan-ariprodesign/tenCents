const {StyleSheet} = require('react-native');
const {b1, blue} = require('../../config/colors');
const {_fonts, _ms} = require('../../components/utils/Responsive');

const commonStyles = StyleSheet.create({
  lbB1: {
    fontFamily: _fonts.londonBetween,
    color: b1,
    fontSize: _ms(20),
  },

  ns700: {
    fontFamily: _fonts.nunitoSansBold,
    color: b1,
    fontSize: _ms(18),
  },

  ns600: {
    fontFamily: _fonts.nunitoSansSemiBold,
    color: b1,
    fontSize: _ms(14),
  },

  ns400: {
    fontFamily: _fonts.nunitoSansRegular,
    color: b1,
    fontSize: _ms(12),
  },

  commWrapOne: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  commWrapTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  commWrapThree: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  commWrapFour: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  commWrapFive: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  commWrapSix: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  commWrapSeven: {
    flexDirection: 'row',
  },

  alignItemsCenter: {
    alignItems: 'center',
  },

  blueUnderlineTxt: {
    color: blue,
    textDecorationLine: 'underline',
  },

  textTransformUppercase: {textTransform: 'uppercase'},

  flexStart: {
    alignSelf: 'flex-start',
  },

  alignSelfFlexStart: {
    alignSelf: 'flex-start',
  },

  alignSelfCenter: {
    alignSelf: 'center',
  },

  alignSelfFlexEnd: {
    alignSelf: 'flex-end',
  },

  alignItemsFlexEnd: {
    alignItems: 'flex-end',
  },

  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },

  textAlignCenter: {
    textAlign: 'center',
  },

  flexOne: {
    flex: 1,
  },

  flexOneHalf: {
    flex: 1.5,
  },

  flexTwo: {
    flex: 2,
  },

  font8: {
    fontSize: _ms(8),
  },

  font9: {
    fontSize: _ms(9),
  },

  font10: {
    fontSize: _ms(10),
  },

  font11: {
    fontSize: _ms(11),
  },

  font12: {
    fontSize: _ms(12),
  },

  font13: {
    fontSize: _ms(13),
  },

  font14: {
    fontSize: _ms(14),
  },

  font15: {
    fontSize: _ms(15),
  },

  font16: {
    fontSize: _ms(16),
  },

  font17: {
    fontSize: _ms(17),
  },

  font18: {
    fontSize: _ms(18),
  },

  font20: {
    fontSize: _ms(20),
  },
});

module.exports = commonStyles;
