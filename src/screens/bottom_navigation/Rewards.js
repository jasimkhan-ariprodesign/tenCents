import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {b1, b2, b3, black, blue, white} from '../../config/colors';
import {
  _fonts,
  _height,
  _ms,
  _mvs,
  _vs,
  _width,
} from '../../components/utils/Responsive';
import BgGradient from '../../utility/BgGradient';
import Header from '../../components/Header';

const Rewards = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BgGradient width={_width} height={_height} />
      <Header navigation={navigation} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        // alwaysBounceVertical={true}
        bounces={true}
        style={{flex: 1, backgroundColor: white}}>
        <ImageBackground
          // source={require('../../assets/images/dubai.jpg')}
          source={require('../../assets/images/2ndscrn.png')}
          style={styles.imageStyle}
          resizeMode="cover">
          <View style={styles.parentOne}>
            <Text style={[styles.txtOne, {maxWidth: '70%', color: white}]}>
              Earn Points on every dollar you spend.!
            </Text>

            <Pressable
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}
              style={styles.btn}>
              <Text
                style={[
                  styles.txtOne,
                  {
                    fontFamily: _fonts.quicksandRegular,
                    marginBottom: _mvs(3),
                    fontSize: _ms(14),
                  },
                ]}>
                Log In / Register
              </Text>
            </Pressable>

            {/* {[
              {
                name: 'Settings',
                icon: icon?.settings,
              },

              {
                name: 'Feedback',
                icon: icon?.feedback,
              },

              {
                name: 'trip',
                icon: icon?.termAndCondition,
              },

              {
                name: 'Profile',
                icon: icon?.user2,
                route: 'ProfileScreen',
              },
            ].map((items, index) => {
              return (
                <Pressable
                  onPress={() => {
                    if (items.hasOwnProperty('route')) {
                      navigation.navigate(items.route);
                    } else {
                      console.log('No route specified');
                    }
                  }}
                  key={index}
                  style={styles.itemBtn}>
                  <Image source={items.icon} style={styles.itemIcon} />
                  <Text style={styles.itemName}>{items?.name}</Text>
                </Pressable>
              );
            })} */}
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },

  imageStyle: {
    width: _width,
    // height: _mvs(350),
    height: _height - _vs(50),
    flex: 1,
  },

  parentOne: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    // backgroundColor: 'rgba(255,255,255,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtOne: {
    // color: white,
    color: b2,
    fontFamily: _fonts.quicksandBold,
    fontSize: _ms(16),
    textAlign: 'center',
  },

  btn: {
    // backgroundColor: blue,
    backgroundColor: white,
    paddingVertical: _mvs(3),
    paddingHorizontal: _ms(35),
    borderRadius: _ms(15),
    marginVertical: _mvs(30),
  },

  itemBtn: {
    marginHorizontal: _ms(12),
    flexDirection: 'row',
    alignItems: 'center',
    gap: _ms(12),
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
    paddingVertical: _mvs(8),
    marginBottom: _mvs(10),
    elevation: 0.5,
    shadowColor: 'silver',
    backgroundColor: '#fff',
    paddingLeft: _ms(20),
  },

  itemIcon: {
    width: _ms(18),
    height: _ms(18),
    resizeMode: 'contain',
  },

  itemName: {
    color: b1,
    fontFamily: _fonts.interMedium,
    fontSize: _ms(14),
  },
});
