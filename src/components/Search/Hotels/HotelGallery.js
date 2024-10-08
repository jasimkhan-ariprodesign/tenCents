import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BgGradient from '../../../utility/BgGradient';
import Header from '../../Header';
import commonStyles from '../../../assets/css/CommonFonts';
import {b1, b2, bgColor, white} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import image from '../../../config/ImageAssets';
import {_ms, _mvs, _s, _vs, _width} from '../../utils/Responsive';

const HotelGallery = ({navigation}) => {
  const sliderData = [
    image.bi1,
    image.gal2,
    image.gal3,
    image.gal4,
    image.gal5,
    image.gal6,
    image.gal7,
    image.gal8,
    image.gal9,
    image.gal10,
    image.gal11,
    image.gal12,
  ];

  const [curInd, setCurInd] = useState(0);

  const leftClick = () => {
    if (curInd !== 0) {
      setCurInd(curInd - 1);
    } else {
      setCurInd(sliderData.length - 1);
    }
  };

  const rightClick = () => {
    if (curInd !== sliderData.length - 1) {
      setCurInd(curInd + 1);
    } else {
      setCurInd(0);
    }
  };

  return (
    <SafeAreaView style={styles.parent}>
      <BgGradient width={_width} height={_vs(82)} />
      <Header />

      <View style={styles.body}>
        <>
          {/* hotel name */}
          <Text style={[commonStyles.ns600]}>
            Ramada Plaza by Wyndham Calgary Downtown
          </Text>

          {/* hotel rating */}
          <View style={[styles.reserverCon]}>
            {/* star */}
            <View style={styles.absolute}>
              {[...Array(3).keys()].map((_, i) => (
                <Image key={i} style={styles.starIcon} source={icon.star} />
              ))}
            </View>

            {/* button */}
            <TouchableOpacity style={[styles.btn]}>
              <Text
                style={[commonStyles.lbB1, {color: white, fontSize: _ms(15)}]}>
                Reserve
              </Text>
            </TouchableOpacity>
          </View>

          {/* slider */}
          <View style={styles.slider}>
            <TouchableOpacity
              style={[styles.lftRght, {marginLeft: -_ms(5)}]}
              onPress={() => leftClick()}>
              <Image
                style={[
                  styles.leftIcon,
                  {
                    transform: [{rotate: '180deg'}],
                  },
                ]}
                source={icon.rightArrow}
              />
            </TouchableOpacity>

            <>
              <Image
                // style={{width: 322, height: 229, borderRadius: 8}}
                style={{flex: 1, height: _mvs(180), borderRadius: 8}}
                source={sliderData[curInd]}
              />
            </>

            <TouchableOpacity
              style={[styles.lftRght, {marginRight: -_ms(5)}]}
              onPress={() => rightClick()}>
              <Image style={[styles.leftIcon]} source={icon.rightArrow} />
            </TouchableOpacity>
          </View>

          {/* overview */}
          <View style={styles.overViewCon}>
            <Text style={[commonStyles.ns600, {fontSize: 18}]}>Overview</Text>

            <View style={styles.multiImagesCon}>
              {sliderData?.map((item, index) => (
                <Image key={index} style={styles.galleryImage} source={item} />
              ))}
            </View>
          </View>
        </>
      </View>
    </SafeAreaView>
  );
};

export default HotelGallery;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: bgColor,
  },

  body: {
    flex: 1,
    backgroundColor: white,
    paddingTop: _mvs(20),
    paddingHorizontal: _ms(10),
  },

  btn: {
    borderRadius: 4,
    backgroundColor: b2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(4),
    paddingHorizontal: _ms(40),
  },

  lftRght: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  slider: {
    marginTop: _mvs(15),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: _ms(5),
  },

  starIcon: {
    width: _ms(20),
    height: _ms(20),
  },

  reserverCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: _mvs(15),
  },

  absolute: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    left: 0,
    gap: _ms(3),
  },

  leftIcon: {
    width: _ms(23),
    height: _ms(30),
    tintColor: b2,
    resizeMode: 'contain',
  },

  overViewCon: {
    marginTop: _mvs(30),
  },

  multiImagesCon: {
    marginTop: _mvs(10),
    flexWrap: 'wrap',
    flexDirection: 'row',
    rowGap: _mvs(8),
    justifyContent: 'space-between',
  },

  galleryImage: {
    width: _ms(78),
    height: _ms(66),
  },
});
