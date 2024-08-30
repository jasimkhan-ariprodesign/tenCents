const {StyleSheet} = require('react-native');
const {b1} = require('../../config/colors');
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
});

module.exports = commonStyles;
