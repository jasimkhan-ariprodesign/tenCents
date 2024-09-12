import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {b1, blue, white} from '../../config/colors';
import {_fonts, _ms, _mvs} from '../../components/utils/Responsive';
import icon from '../../config/IconAssets';

const Notification = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />

      <View style={styles.headerCon}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backBtn}>
          <Image source={icon.rightArrow} style={styles.backIcon} />
        </Pressable>
        <Text style={styles.title}>Notification</Text>
      </View>

      <View style={styles.parent}>
        <Text style={styles.txtOne}>
          This is where you can view notifications.
        </Text>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingTop: _mvs(40),
  },

  headerCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(10),
    // backgroundColor: 'blue',
  },

  title: {
    color: b1,
    fontFamily: _fonts.quicksandBold,
    // fontFamily: _fonts.interBold,
    fontSize: _ms(16),
  },

  backBtn: {
    // backgroundColor: 'red',
    padding: _ms(6),
    borderRadius: 40,
    position: 'absolute',
    left: _ms(6),
    zIndex: 1,
  },

  backIcon: {
    width: _ms(15),
    height: _ms(15),
    resizeMode: 'contain',
    transform: [{rotate: '180deg'}],
    tintColor: blue,
  },

  parent: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
  },

  txtOne: {
    color: b1,
    fontFamily: _fonts.assistantSemiBold,
    fontSize: _ms(15),
    marginTop: _mvs(15),
  },
});
