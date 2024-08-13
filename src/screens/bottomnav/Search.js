import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BgGradient from '../../utility/BgGradient';
import Header from '../../components/Header';
import {white} from '../../config/colors';
import Flights from '../../components/Search/Flights/Flights';
import Hotels from '../../components/Search/Hotels/Hotels';
import Cars from '../../components/Search/Cars/Cars';
import GroupTickets from '../../components/Search/GroupTickets/GroupTickets';
import FlightAndHotels from '../../components/Search/FlightHotels/FlightAndHotels';
import HolidayPackages from '../../components/Search/HolidayPackages/HolidayPackages';
import {AnimatePresence, MotiView} from 'moti';
import {_s, _vs} from '../../components/utils/Responsive';

const {width, height} = Dimensions.get('window');

const Search = ({navigation}) => {
  const [selectedHMenu, setSelectedHMenu] = useState('f');
  const [prevHMenu, setPrevHMenu] = useState('f');
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const data = [1, 1, 1, 1, 1, 1];

  const fromOpacity = 0;
  const fromScale = 1;
  const fromTranslateX = width;

  const animateOpacity = 1;
  const animateScale = 1;
  const animateTranslateX = 0;

  // console.log(prevHMenu);

  const handleMenuSelect = menu => {
    setShouldAnimate(true); // for animation it will not animate when page renders
    setPrevHMenu(selectedHMenu);
    setSelectedHMenu(menu);
  };

  // console.log('height * 0.62', height * 0.62);

  return (
    <SafeAreaView style={styles.parent}>
      <BgGradient width={width} height={height * 0.62} />
      <Header />

      <View style={styles.body}>
        {/* flight , flight + hotel, hotels, cares button */}

        <View style={[styles.headMenuWrap, {justifyContent: 'space-between'}]}>
          {[
            'f',
            'f&h',
            'h',
            'c',
            //  'hp', 'gt'
          ].map(menu => (
            <TouchableOpacity
              // activeOpacity={0.5}
              key={menu}
              style={
                selectedHMenu === menu
                  ? styles.hMenuItemActive
                  : styles.hMenuItem
              }
              onPress={() => handleMenuSelect(menu)}>
              <Text style={styles.hMenuTxt}>
                {menu === 'f' && 'Flights'}
                {menu === 'f&h' && 'Flight + Hotels'}
                {menu === 'h' && 'Hotels'}
                {menu === 'c' && 'Cars'}
                {/* {menu === 'hp' && 'Holiday Packages'}
                {menu === 'gt' && 'Group Tickets'} */}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* holiday packages and group tickets buttons */}

        <View style={[styles.headMenuWrap, {marginVertical: _vs(10)}]}>
          {['hp', 'gt'].map(menu => (
            <TouchableOpacity
              key={menu}
              style={
                selectedHMenu === menu
                  ? styles.hMenuItemActive
                  : styles.hMenuItem
              }
              onPress={() => handleMenuSelect(menu)}>
              <Text style={styles.hMenuTxt}>
                {menu === 'hp' && 'Holiday Packages'}
                {menu === 'gt' && 'Group Tickets'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Flights */}
        <AnimatePresence>
          {selectedHMenu === 'f' && (
            <MotiView
              style={{flex: 1}}
              from={{
                opacity: shouldAnimate ? 0 : 1,
                scale: 1,
                // translateX: -width,
                translateX: shouldAnimate ? width : 0,
                // translateY: height,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                translateX: 0,
                // translateY: 0,
              }}
              transition={{
                duration: 500,
                type: 'timing',
                // delay: prevHMenu == 'f&h' || prevHMenu == 'f' ? 0 : 300,
                // delay: 100,
                delay: shouldAnimate ? 100 : 0,
              }}
              exit={{
                opacity: 0,
                scale: 1,
                translateX: -width, // X ke sath x aur Y ke sath y kam kar raha hai
                // translateY: height,
              }}
              exitTransition={{
                type: 'timing',
                duration: 100,
                delay: 0,
              }}>
              <Flights
                navigation={navigation}
                data={data}
                width={width}
                height={height}
              />
            </MotiView>
          )}
        </AnimatePresence>

        {/* Flights + hotels */}
        <AnimatePresence>
          {selectedHMenu === 'f&h' && (
            <MotiView
              style={{flex: 1}}
              from={{
                opacity: 0,
                scale: 1,
                // translateX: prevHMenu == "f" ? width : prevHMenu == "f&h" ? -width : -width,
                translateX: width,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                translateX: 0,
              }}
              transition={{duration: 500, type: 'timing', delay: 100}}
              exit={{
                opacity: 0,
                scale: 1,
                translateX: -width, // X ke sath x aur Y ke sath y kam kar raha hai
                // translateY: height,
              }}
              exitTransition={{
                type: 'timing',
                duration: 100,
                delay: 0,
              }}>
              <FlightAndHotels navigation={navigation} data={data} />
            </MotiView>
          )}
        </AnimatePresence>

        {/* hotels */}
        <AnimatePresence>
          {selectedHMenu === 'h' && (
            <MotiView
              style={{flex: 1}}
              from={{
                opacity: 0,
                scale: 1,
                translateX: width,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                translateX: 0,
              }}
              transition={{duration: 500, type: 'timing', delay: 100}}
              exit={{
                opacity: 0,
                scale: 1,
                translateX: -width, // X ke sath x aur Y ke sath y kam kar raha hai
                // translateY: height,
              }}
              exitTransition={{
                type: 'timing',
                duration: 100,
                delay: 0,
              }}>
              <Hotels
                navigation={navigation}
                data={data}
                width={width}
                height={height}
              />
            </MotiView>
          )}
        </AnimatePresence>

        {/* cars */}
        <AnimatePresence>
          {selectedHMenu === 'c' && (
            <MotiView
              style={{flex: 1}}
              from={{
                opacity: 0,
                scale: 1,
                translateX: width,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                translateX: 0,
              }}
              transition={{duration: 500, type: 'timing', delay: 100}}
              exit={{
                opacity: 0,
                scale: 1,
                translateX: -width, // X ke sath x aur Y ke sath y kam kar raha hai
                // translateY: height,
              }}
              exitTransition={{
                type: 'timing',
                duration: 100,
                delay: 0,
              }}>
              <Cars navigation={navigation} />
            </MotiView>
          )}
        </AnimatePresence>

        {/* holiday packages */}
        <AnimatePresence>
          {selectedHMenu === 'hp' && (
            <MotiView
              style={{flex: 1}}
              from={{
                opacity: 0,
                scale: 1,
                translateX: width,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                translateX: 0,
              }}
              transition={{duration: 500, type: 'timing', delay: 100}}
              exit={{
                opacity: 0,
                scale: 1,
                translateX: -width, // X ke sath x aur Y ke sath y kam kar raha hai
                // translateY: height,
              }}
              exitTransition={{
                type: 'timing',
                duration: 100,
                delay: 0,
              }}>
              <HolidayPackages navigation={navigation} />
            </MotiView>
          )}
        </AnimatePresence>

        {/* group tickets */}
        <AnimatePresence>
          {selectedHMenu === 'gt' && (
            <MotiView
              style={{flex: 1}}
              from={{
                opacity: 0,
                scale: 1,
                translateX: width,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                translateX: 0,
              }}
              transition={{duration: 500, type: 'timing', delay: 100}}
              exit={{
                opacity: 0,
                scale: 1,
                translateX: -width, // X ke sath x aur Y ke sath y kam kar raha hai
                // translateY: height,
              }}
              exitTransition={{
                type: 'timing',
                duration: 100,
                delay: 0,
              }}>
              <GroupTickets
                navigation={navigation}
                data={data}
                width={width}
                height={height}
              />
            </MotiView>
          )}
        </AnimatePresence>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },

  body: {
    flex: 1,
    paddingTop: _vs(25),
  },

  headMenuWrap: {
    flexDirection: 'row',
    gap: _s(15),
    marginHorizontal: _s(10),
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  hMenuItem: {
    borderBottomWidth: 1.5,
    borderColor: 'transparent',
    // flexBasis: 100,
    paddingHorizontal: _s(8),
    paddingVertical: 3,

    // backgroundColor: 'blue',
  },

  hMenuItemActive: {
    borderBottomWidth: 1.5,
    borderColor: white,
    paddingHorizontal: _s(8),
    paddingVertical: 3,

    // backgroundColor: 'blue',
  },

  hMenuTxt: {
    color: white,
    fontFamily: 'LondonBetween',
    fontSize: 15,
  },
});
