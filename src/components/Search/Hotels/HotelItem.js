import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import image from '../../../config/ImageAssets';
import commonStyles from '../../../assets/css/CommonFonts';
import icon from '../../../config/IconAssets';
import {white, b1, b2, b3} from '../../../config/colors';
import {_ms, _mvs} from '../../utils/Responsive';

const {width} = Dimensions.get('window');

const HotelItem = ({navigation, srcName, selectedTopMenu}) => {
  // console.log('HotelItem Com selectedTopMenu  => ', selectedTopMenu);

  // console.log(srcName);

  return (
    <View style={styles.main}>
      <>
        <Image style={styles.img} resizeMode="cover" source={image.hotelimg} />
      </>

      <>
        <View
          style={{
            rowGap: _mvs(6),
            marginTop: _mvs(5),
            // backgroundColor: 'teal',
          }}>
          <Text style={[commonStyles.ns600, {fontSize: _ms(15)}]}>
            DoubleTree by Hilton Hotel & Suites
          </Text>

          {/* leaf */}
          <View style={styles.leafViewCon}>
            {[...Array(3).keys()].map((_, i) => (
              <Image
                key={i}
                style={styles.leafIcon}
                source={i > 0 ? icon.leaf : icon.leafSolid}
              />
            ))}

            <Text
              style={[
                commonStyles.ns600,
                {color: '#24AD53', fontSize: _ms(12), marginLeft: _ms(10)},
              ]}>
              Travel Sustainable Level 1
            </Text>
          </View>

          {/* bed */}
          <View style={{rowGap: _mvs(6)}}>
            <Text style={[commonStyles.ns600, {fontSize: _ms(12)}]}>
              Queen Room with Two Queen Beds - Non-Smoking
            </Text>
            <Text style={[commonStyles.ns600, {fontSize: _ms(12)}]}>
              2 queen beds
            </Text>
          </View>

          {/* perks */}
          <View style={styles.breakfastCon}>
            <Text
              style={[
                commonStyles.ns600,
                {color: '#24AD53', fontSize: _ms(12)},
              ]}>
              Breakfast included
            </Text>

            <Text
              style={[
                commonStyles.ns600,
                {color: '#24AD53', fontSize: _ms(12)},
              ]}>
              Free cancellation
            </Text>

            <Text
              style={[
                commonStyles.ns600,
                {color: '#24AD53', fontSize: _ms(12)},
              ]}>
              No prepayment needed
            </Text>
          </View>

          {/* rating & reviews */}
          <View style={styles.ratingCon}>
            <View style={styles.rating}>
              <Text
                style={[commonStyles.ns600, {color: white, fontSize: _ms(12)}]}>
                7.6
              </Text>
            </View>

            <Text
              style={[
                commonStyles.ns600,
                {color: '#24AD53', fontSize: _ms(12)},
              ]}>
              Good
            </Text>

            <View style={styles.ratingView}>
              {Array.from({length: 3}).map((_, i) => (
                <Image key={i} style={styles.star} source={icon.star} />
              ))}
            </View>

            <Text style={[commonStyles.ns600, {color: b2, fontSize: _ms(12)}]}>
              1,888 Reviews
            </Text>
          </View>
        </View>

        <View style={styles.buttonParent}>
          <View>
            <View style={commonStyles.commWrapSeven}>
              <Text style={[commonStyles.ns600, {fontSize: _ms(16)}]}>
                $ 631
              </Text>
              <Text style={styles.centTxt}>.39</Text>
            </View>

            <Text
              style={[
                commonStyles.ns400,
                {color: b3, fontSize: _ms(11), marginTop: _mvs(3)},
              ]}>
              +US $162 taxes and charges
            </Text>
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              navigation.navigate(srcName, {selectedTopMenu: selectedTopMenu})
            }>
            <Text
              style={[commonStyles.lbB1, {color: white, fontSize: _ms(16)}]}>
              Book
            </Text>
          </TouchableOpacity>
        </View>
      </>
    </View>
  );
};

export default HotelItem;

const styles = StyleSheet.create({
  main: {
    // backgroundColor: 'violet',
    marginBottom: _mvs(20),
  },

  img: {
    width: width - 80,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    alignSelf: 'center',
  },

  rating: {
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: b2,
    paddingHorizontal: _ms(22),
    paddingVertical: _mvs(2.5),
  },

  leafViewCon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1FEF6',
    borderRadius: 3,
    alignSelf: 'flex-start',
    paddingHorizontal: _ms(8),
    paddingVertical: _mvs(2),
  },

  leafIcon: {
    width: _ms(16),
    height: _ms(16),
    marginRight: 3,
    tintColor: '#1D8842',
  },

  breakfastCon: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    columnGap: _ms(10),
  },

  ratingCon: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: _ms(10),
  },

  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 3,
  },

  star: {
    width: _ms(15),
    height: _ms(15),
    resizeMode: 'contain',
  },

  buttonParent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: _mvs(10),
  },

  centTxt: {
    color: b1,
    fontSize: _ms(12),
    alignSelf: 'flex-start',
    fontFamily: 'Arial',
  },

  btn: {
    borderRadius: 4,
    backgroundColor: b2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(4.5),
    paddingHorizontal: _ms(35),
  },
});
