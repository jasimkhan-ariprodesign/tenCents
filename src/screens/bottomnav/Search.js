import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BgGradient from '../../utility/BgGradient';
import Header from '../../components/Header';
import {b1, b2, b3, black, white} from '../../config/colors';
import Flights from '../../components/Search/Flights/Flights';
import Hotels from '../../components/Search/Hotels/Hotels';
import Cars from '../../components/Search/Cars/Cars';
import GroupTickets from '../../components/Search/GroupTickets/GroupTickets';
import FlightAndHotels from '../../components/Search/FlightHotels/FlightAndHotels';
import HolidayPackages from '../../components/Search/HolidayPackages/HolidayPackages';
import {AnimatePresence, MotiView} from 'moti';
import {_fonts, _ms, _s, _vs} from '../../components/utils/Responsive';
import {cross, next, plane, search2} from '../../config/IconAssets';
import LinearGradient from 'react-native-linear-gradient';
import useDebounce from '../../components/sub_components/Debounce';
import {CalendarList} from 'react-native-calendars';
import {getCurrentDate2, todaydate} from '../../config/CurrentDate';
import AirportSearchCom from '../../components/sub_components/onewaySubCom/AirportSearchCom';
import SelectDateCom from '../../components/sub_components/onewaySubCom/SelectDateCom';
import ReturnDateCom from '../../components/sub_components/roundTripSubCom/ReturnDateCom';

const {width, height} = Dimensions.get('window');

const Search = ({navigation}) => {
  const [selectedHMenu, setSelectedHMenu] = useState('f');
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const data = [1, 1, 1, 1, 1];

  const [oneWayHandler, setOneWayHandler] = useState({
    showSearchCon: false,
    showCalenderCon: false,
    origin: '',
    destination: '',
    date: '',
  });

  const [roundTripHandler, setRoundTripHandler] = useState({
    showCalenderConRoundTrip: false,
    returnDateRoundTrip: '',
  });

  // console.log('---->>', oneWayHandler.origin);
  // console.log('---->>', oneWayHandler.destination);
  // console.log('---->>', oneWayHandler.date);

  const filteredAirports = [
    'Los Angeles International Airport',
    'John F. Kennedy International Airport',
    'San Francisco International Airport',
    'Heathrow Airport',
    'Tokyo Haneda Airport',
    'Dubai International Airport',
    'Sydney Kingsford Smith Airport',
    // Add more airports as needed
  ];

  const fetchResults = query => {
    // Your API call or logic here
    // Alert.alert('search call', query);
    console.warn('search call', query);
    console.log('Searching for:', query);
  };

  const debouncedSearch = useDebounce(fetchResults, 500);

  const handleAirportSearchInput = (search, type) => {
    // console.log(search, type);

    if (type == 'Origin') {
      setOneWayHandler({...oneWayHandler, origin: search});
      debouncedSearch(search);
    } else {
      setOneWayHandler({...oneWayHandler, destination: search});
      debouncedSearch(search);
    }
  };

  const handleMenuSelect = menu => {
    setShouldAnimate(true); // for animation it will not animate when page renders
    setSelectedHMenu(menu);
  };

  //  rendering comp ---> ✌
  const menuItems = [
    {
      key: 'f',
      Component: Flights,
      props: {
        navigation,
        data,
        width,
        height,
        oneWayHandler,
        setOneWayHandler,
        roundTripHandler,
        setRoundTripHandler,
      },
    },
    {
      key: 'f&h',
      Component: FlightAndHotels,
      props: {navigation, data},
    },
    {
      key: 'h',
      Component: Hotels,
      props: {navigation, data, width, height},
    },
    {
      key: 'c',
      Component: Cars,
      props: {navigation},
    },
    {
      key: 'hp',
      Component: HolidayPackages,
      props: {navigation},
    },
    {
      key: 'gt',
      Component: GroupTickets,
      props: {navigation, data, width, height},
    },
  ];

  return (
    <SafeAreaView style={styles.parent}>
      <BgGradient width={width} height={height * 0.74} />
      <Header />

      {/* <StatusBar
        translucent={true}
        backgroundColor={oneWayHandler.showSearchCon ? white : 'transparent'}
        barStyle={
          oneWayHandler.showSearchCon ? 'dark-content' : 'light-content'
        }
      /> */}

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
              activeOpacity={0.5}
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

        {/*  sub com / child com */}
        {menuItems.map(({key, Component, props}) => (
          <AnimatePresence key={key}>
            {selectedHMenu === key && (
              <MotiView
                style={{flex: 1}}
                from={{
                  opacity: shouldAnimate ? 0.5 : 1,
                  scale: shouldAnimate ? 1 : 1,
                  translateX: shouldAnimate ? width : 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  translateX: 0,
                }}
                transition={{
                  duration: 300,
                  type: 'timing',
                  delay: shouldAnimate ? 100 : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  // translateX: -width,    // esko use karne pe transition ka duration badhana padega..
                }}
                exitTransition={{
                  type: 'spring',
                  duration: 0,
                  delay: 0,
                }}>
                <Component {...props} />
              </MotiView>
            )}
          </AnimatePresence>
        ))}
      </View>

      {/* flight sub com start here ------- */}

      {/* one way sub components start -- */}
      <Modal
        animationType="slide"
        transparent={true}
        hardwareAccelerated={true}
        visible={oneWayHandler.showSearchCon}
        onRequestClose={() => {
          setOneWayHandler({...oneWayHandler, showSearchCon: false});
        }}>
        <>
          <AirportSearchCom
            oneWayHandler={oneWayHandler}
            setOneWayHandler={setOneWayHandler}
            handleAirportSearchInput={handleAirportSearchInput}
            filteredAirports={filteredAirports}
          />
        </>
      </Modal>

      {/* date picker comp */}

      <Modal
        animationType="slide"
        transparent={true}
        hardwareAccelerated={true}
        visible={oneWayHandler.showCalenderCon}
        onRequestClose={() => {
          setOneWayHandler({...oneWayHandler, showCalenderCon: false});
        }}>
        <SelectDateCom
          oneWayHandler={oneWayHandler}
          setOneWayHandler={setOneWayHandler}
        />
      </Modal>

      {/* one way sub components end == */}

      {/* round trip sub components start -- */}
      <Modal
        animationType="slide"
        transparent={true}
        hardwareAccelerated={true}
        // statusBarTranslucent
        visible={roundTripHandler.showCalenderConRoundTrip}
        onRequestClose={() => {
          setRoundTripHandler({
            ...roundTripHandler,
            showCalenderConRoundTrip: false,
          });
        }}>
        <ReturnDateCom
          roundTripHandler={roundTripHandler}
          setRoundTripHandler={setRoundTripHandler}
        />
      </Modal>
      {/* round trip sub components start == */}

      {/* flight sub com end here ======= */}
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
    paddingTop: _vs(20),
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
    paddingVertical: _ms(6),

    // backgroundColor: 'blue',
  },

  hMenuItemActive: {
    borderBottomWidth: 1.5,
    borderColor: white,
    paddingHorizontal: _s(8),
    paddingVertical: _ms(6),

    // backgroundColor: 'blue',
  },

  hMenuTxt: {
    color: white,
    fontFamily: 'LondonBetween',
    fontSize: 15,
  },
});
