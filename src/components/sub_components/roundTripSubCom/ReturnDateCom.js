import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {b1, b2, black, blue, white} from '../../../config/colors';
import {_fonts, _ms, _vs} from '../../utils/Responsive';
import {next, plane} from '../../../config/IconAssets';
import {getCurrentDate2, todaydate} from '../../../config/CurrentDate';
import {CalendarList} from 'react-native-calendars';

const {width} = Dimensions.get('window');

const ReturnDateCom = ({roundTripHandler, setRoundTripHandler}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            setRoundTripHandler({
              ...roundTripHandler,
              showCalenderConRoundTrip: false,
            });
          }}
          style={styles.backButton}>
          <Image source={next} style={styles.calenderBackIcon} />
        </TouchableOpacity>

        <View style={styles.planeIconCon}>
          <Image source={plane} style={styles.planeIcon} />
        </View>

        <Text style={styles.title}>Pick a return journey date</Text>
      </View>
      <View style={styles.calenderCon}>
        <View style={{padding: _ms(20), backgroundColor: 'transparent'}}>
          <Text style={styles.todayDateTxt}>Today is {getCurrentDate2()}</Text>
        </View>
        <CalendarList
          onVisibleMonthsChange={months => {
            // console.log('now these months are visible', months);
          }}
          pastScrollRange={0}
          futureScrollRange={13}
          scrollEnabled={true}
          showScrollIndicator={true}
          minDate={todaydate}
          onDayPress={day => {
            setRoundTripHandler({
              ...roundTripHandler,
              returnDateRoundTrip: day.dateString,
            });
          }}
          markedDates={{
            [roundTripHandler.returnDateRoundTrip]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
          theme={{
            textSectionTitleColor: b1,
            monthTextColor: b1,
            textMonthFontSize: _ms(16),
            textMonthFontFamily: _fonts.nunitoSansRegular,
          }}
          calendarWidth={width - 10}
          calendarStyle={{marginBottom: -10}}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          setRoundTripHandler({
            ...roundTripHandler,
            showCalenderConRoundTrip: false,
          });
        }}
        style={styles.closeButton}>
        <Text style={styles.closeTxt}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReturnDateCom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    height: '100%',
    width: width,
  },

  header: {
    flexDirection: 'row',
    paddingHorizontal: _ms(10),
    alignItems: 'center',
    gap: _ms(8),
    marginTop: _vs(10),
    backgroundColor: white,
  },

  backButton: {
    width: _ms(30),
    height: _ms(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: _ms(35),
    // backgroundColor: 'blue',
  },

  calenderBackIcon: {
    width: _ms(19),
    height: _ms(19),
    resizeMode: 'contain',
    tintColor: black,
  },

  planeIconCon: {
    width: _ms(30),
    height: _ms(30),
    backgroundColor: b2,
    borderRadius: _ms(35),
    alignItems: 'center',
    justifyContent: 'center',
  },

  planeIcon: {
    width: _ms(14),
    height: _ms(14),
    resizeMode: 'contain',
  },

  title: {
    color: b2,
    fontSize: _ms(16),
    fontFamily: _fonts.londonTwo,
  },

  calenderCon: {
    backgroundColor: white,
    width: width - 20,
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 20,
    shadowColor: black,
    marginTop: _ms(15),
  },

  todayDateTxt: {
    color: b1,
    fontSize: _ms(16),
    fontFamily: _fonts.nunitoSansRegular,
    textAlign: 'center',
  },

  closeButton: {
    position: 'absolute',
    backgroundColor: blue,
    paddingVertical: _ms(7),
    paddingHorizontal: _ms(20),
    borderRadius: 5,
    bottom: 30,
    right: 20,
    zIndex: 1,
  },

  closeTxt: {
    color: white,
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(13),
  },
});
