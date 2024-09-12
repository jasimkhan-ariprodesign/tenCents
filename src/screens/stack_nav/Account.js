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
import {b1, b2, blue, white} from '../../config/colors';
import {
  _fonts,
  _height,
  _ms,
  _mvs,
  _width,
} from '../../components/utils/Responsive';
import BgGradient from '../../utility/BgGradient';
import Header from '../../components/Header';
import icon from '../../config/IconAssets';

const Account = ({navigation}) => {
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
          source={require('../../assets/images/dubai.jpg')}
          style={styles.imageStyle}
          resizeMode="cover">
          <View style={styles.parentOne}>
            <Text style={[styles.txtOne, {maxWidth: '80%'}]}>
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
                  },
                ]}>
                Log In / Register
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
        <View style={styles.parentTwo}>
          <Text style={styles.title}>Settings and Support</Text>

          {[
            {
              name: 'Account',
              icon: icon?.user2,
              route: 'ProfileScreen',
            },

            {
              name: 'Settings',
              icon: icon?.settings,
            },

            {
              name: 'Feedback',
              icon: icon?.feedback,
            },

            {
              name: 'Terms & Conditions',
              icon: icon?.termAndCondition,
            },

            {
              name: 'Privacy Policy',
              icon: icon?.privacyPolicy,
            },

            {
              name: 'Account Management',
              icon: icon?.user2,
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
          })}

          {/* talk to agent */}
          <Pressable style={styles.talkToAgentBtn}>
            <View>
              <Image source={icon.woman} style={styles.agentIcon} />
              <View style={styles.onlineDot} />
            </View>

            <Text style={styles.ourAgentTxt}>
              Our agents are ready! Call us 24/7
            </Text>
          </Pressable>

          {/* sign out */}
          {/* <Pressable style={styles.signOut}>
            <Text style={styles.signOutTxt}>Sign out</Text>
          </Pressable> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },

  imageStyle: {
    width: _width,
    height: _mvs(250),
  },

  parentOne: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtOne: {
    color: white,
    fontFamily: _fonts.quicksandBold,
    fontSize: _ms(16),
    textAlign: 'center',
  },

  btn: {
    backgroundColor: blue,
    paddingVertical: _mvs(2),
    paddingHorizontal: _ms(40),
    paddingBottom: _mvs(5),
    borderRadius: _ms(5),
    marginVertical: _mvs(30),
  },

  parentTwo: {
    flex: 1,
    backgroundColor: white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    paddingBottom: _mvs(60),
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

  title: {
    fontFamily: _fonts.interBold,
    color: b1,
    fontSize: _ms(17),
    marginHorizontal: _ms(18),
    marginTop: _mvs(20),
    marginBottom: _mvs(14),
  },

  talkToAgentBtn: {
    borderWidth: 1,
    borderColor: '#e6e6e6',
    marginHorizontal: _ms(12),
    marginTop: _mvs(10),
    marginBottom: _mvs(20),

    paddingVertical: _mvs(12),
    paddingHorizontal: _ms(14),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    gap: _ms(10),
  },

  agentIcon: {
    width: _ms(40),
    height: _ms(40),
    resizeMode: 'contain',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: blue,
  },

  ourAgentTxt: {
    color: b1,
    fontFamily: _fonts.interBold,
    fontSize: _ms(13),
  },

  onlineDot: {
    width: _ms(10),
    height: _ms(10),
    backgroundColor: 'green',
    position: 'absolute',
    bottom: _ms(1),
    right: _ms(2),

    borderRadius: 40,
  },

  signOut: {
    borderWidth: 1.5,
    borderColor: '#e6e6e6',
    marginBottom: _mvs(20),
    marginHorizontal: _ms(12),
    borderRadius: 5,
    paddingVertical: _mvs(6),
    alignItems: 'center',
  },

  signOutTxt: {
    color: b2,
    fontFamily: _fonts.interBold,
    fontSize: _ms(14),
  },
});
