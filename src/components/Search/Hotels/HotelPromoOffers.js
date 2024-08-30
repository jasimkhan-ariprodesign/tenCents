import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React from 'react';
import {b1, b2, b3, white} from '../../../config/colors';
import image from '../../../config/ImageAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import icon from '../../../config/IconAssets';
import {_fonts, _ms, _vs} from '../../utils/Responsive';

const HotelPromoOffers = ({origin, screenName}) => {
  return (
    <View style={styles.main}>
      <Image style={styles.img} resizeMode="cover" source={image.hotelimg} />

      <View
        style={{
          marginTop: _ms(4),
          paddingHorizontal: 2,
          gap: _ms(3),
        }}>
        <View style={{rowGap: _ms(3)}}>
          <Text style={[commonStyles.ns600]}>
            DoubleTree by Hilton Hotel & Suites
          </Text>

          {/* destination glimpse */}
          {origin === 'f&h' && (
            <View style={{rowGap: _ms(3)}}>
              <View style={styles.child}>
                <Image style={styles.flightIcon} source={icon.plane} />

                <Text style={commonStyles.ns400}>
                  Roundtrip flight + Taxes and fees
                </Text>
              </View>

              <View style={styles.child}>
                <Text
                  style={[commonStyles.ns400, {fontSize: _ms(11), color: b3}]}>
                  Los Angeles
                </Text>

                <View style={styles.exchangeIconCon}>
                  <Image style={styles.exchangeIcon} source={icon.exchange} />
                </View>

                <Text
                  style={[commonStyles.ns400, {fontSize: _ms(11), color: b3}]}>
                  Las Vegas
                </Text>
              </View>

              <Text
                style={[commonStyles.ns400, {fontSize: _ms(11), color: b3}]}>
                (Dec 17, 2023 - Dec 21, 2023)
              </Text>

              <Text
                style={[commonStyles.ns400, {fontSize: _ms(11), color: b3}]}>
                Class - Economy
              </Text>
            </View>
          )}

          {/* star */}
          <View style={styles.commonWrapper}>
            <Image style={styles.starIcon} source={icon.star} />
            <Image style={styles.starIcon} source={icon.star} />
            <Image style={styles.starIcon} source={icon.star} />
          </View>

          {/* location */}
          <View style={[styles.commonWrapper, {gap: _ms(3)}]}>
            <Image
              style={styles.starIcon}
              source={icon.location}
              tintColor={b1}
            />

            <Text style={[commonStyles.ns600, {fontSize: _ms(11)}]}>
              New York
            </Text>
          </View>
        </View>

        <View style={[styles.commonWrapper]}>
          <View style={{flex: 1, paddingHorizontal: 2}}>
            <View
              style={{
                flexDirection: 'row',
                maxWidth: '90%',
              }}>
              <Text numberOfLines={1} style={[commonStyles.ns600]}>
                $ 631
              </Text>
              <Text style={styles.centTxt}>.39</Text>
            </View>

            <Text style={[commonStyles.ns400, {color: b3}]}>
              Hotel (incl. taxes & fees)
            </Text>
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HotelPromoOffers;

const styles = StyleSheet.create({
  main: {
    marginHorizontal: _ms(15),
    backgroundColor: white,
    paddingVertical: _ms(5),
    paddingHorizontal: _ms(2),
    borderRadius: 5,
    // elevation: 1,
    shadowColor: 'silver',
  },

  img: {
    width: '100%',
    height: _vs(150),
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },

  child: {
    flexDirection: 'row',
    columnGap: _ms(10),
    alignItems: 'center',
  },

  flightIcon: {
    width: _ms(14),
    height: _ms(14),
    tintColor: b1,
    transform: [{rotate: '45deg'}],
    resizeMode: 'contain',
  },

  exchangeIconCon: {
    backgroundColor: b3,
    width: _ms(17),
    height: _ms(17),
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  exchangeIcon: {
    width: _ms(9),
    height: _ms(9),
    tintColor: white,
  },

  starIcon: {
    width: _ms(14),
    height: _ms(14),
    resizeMode: 'contain',
  },

  commonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  centTxt: {
    color: b1,
    fontSize: _ms(10),
    fontFamily: 'Arial',
  },

  btn: {
    borderRadius: 4,
    backgroundColor: b2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _ms(6),
    paddingHorizontal: _ms(35),
  },
  btnTxt: {
    fontFamily: _fonts.londonBetween,
    color: white,
    fontSize: _ms(15),
  },
});
