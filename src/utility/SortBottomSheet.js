import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {b1, b3, blue, white} from '../config/colors';
import {_fonts, _ms, _vs} from '../components/utils/Responsive';

const SortBottomSheet = ({sortRef}) => {
  const [selected, setSelected] = useState('H');
  return (
    <RBSheet
      ref={sortRef}
      animationType="slide"
      openDuration={300}
      closeDuration={250}
      closeOnDragDown={true}
      closeOnPressMask={false}
      customStyles={{
        wrapper: {
          backgroundColor: '#4C4C4C',
          opacity: 0.9,
        },
        draggableIcon: {
          // backgroundColor: "#000",
          display: 'none',
        },
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: _vs(200),
          minHeight: 200,
          backgroundColor: white,
        },
      }}>
      <View style={styles.parent}>
        {/* nav */}
        <View style={styles.navWrap}>
          <Text style={[styles.ns600, {textTransform: 'uppercase'}]}>
            Sort By
          </Text>

          <TouchableOpacity
            style={styles.cross}
            onPress={() => sortRef.current.close()}>
            <Image
              style={{width: _ms(17), height: _ms(17), tintColor: b3}}
              source={require('../assets/icons/cross.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* body */}
        <View style={styles.body}>
          <TouchableOpacity
            onPress={() => setSelected('H')}
            style={[
              styles.sortOptn,
              {borderColor: selected == 'H' ? '#d9d9d9' : 'transparent'},
            ]}>
            <Text style={styles.ns400}>Price - High To Low</Text>

            {selected == 'H' ? (
              <View style={styles.check}>
                <Image
                  style={styles.checkIcon}
                  source={require('../assets/icons/check.png')}
                />
              </View>
            ) : null}
          </TouchableOpacity>

          {/* <View
            style={{
              borderBottomWidth: 1,
              marginTop: 5,
              marginBottom: 13,
              borderColor: b3,
              backgroundColor: 'red',
            }}
          /> */}

          <TouchableOpacity
            onPress={() => setSelected('L')}
            style={[
              styles.sortOptn,
              {borderColor: selected == 'L' ? '#d9d9d9' : 'transparent'},
            ]}>
            <Text style={styles.ns400}>Price - Low To High</Text>
            {selected == 'L' ? (
              <View style={styles.check}>
                <Image
                  style={styles.checkIcon}
                  source={require('../assets/icons/check.png')}
                />
              </View>
            ) : null}
          </TouchableOpacity>

          {/* <View
            style={{
              borderBottomWidth: 1,
              marginTop: 5,
              marginBottom: 10,
              borderColor: b3,
            }}
          /> */}
        </View>
      </View>
    </RBSheet>
  );
};

export default SortBottomSheet;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: _ms(20),
    justifyContent: 'space-evenly',
    backgroundColor: white,
  },

  navWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginVertical: 10,
    // backgroundColor: 'blue',
  },

  ns600: {
    fontFamily: _fonts.nunitoSansBold,
    fontSize: _ms(16),
    color: b1,
  },

  ns400: {
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(15),
    color: b1,
  },

  cross: {
    backgroundColor: '#D9D9D9',
    padding: _ms(5),
    borderRadius: 100,
    elevation: 5,
    shadowColor: 'silver',
  },

  check: {
    backgroundColor: b1,
    padding: _ms(6),
    borderRadius: 100,
    marginRight: 10,
  },

  body: {
    // marginTop: 18,
    // backgroundColor: 'green'
  },

  sortOptn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: _ms(10),
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },

  checkIcon: {
    width: _ms(10),
    height: _ms(10),
    tintColor: white,
  },
});
