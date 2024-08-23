import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {CalendarList} from 'react-native-calendars';
import {SafeAreaView} from 'react-native-safe-area-context';

import {b1, b2, b3, black, blue, white} from '../config/colors';
import {_fonts, _ms, _vs} from '../components/utils/Responsive';
import {next, plane} from '../config/IconAssets';
import {genCurrentDate} from '../config/CurrentDate';

const {width} = Dimensions.get('window');

const CalenderTest = () => {
  const date = new Date().toISOString().split('T')[0];
  console.log('-------------------', date);

  const [selectedRange, setSelectedRange] = useState({
    startDate: null,
    endDate: null,
  });

  console.log(' selected date == >', selectedRange);

  const onDayPress = day => {
    const {dateString} = day;
    const {startDate, endDate} = selectedRange;

    if (!startDate || (startDate && endDate)) {
      setSelectedRange({startDate: dateString, endDate: null});
    } else if (startDate && !endDate && dateString >= startDate) {
      setSelectedRange({...selectedRange, endDate: dateString});
    } else {
      setSelectedRange({startDate: dateString, endDate: null});
    }
  };

  const getMarkedDates = () => {
    const {startDate, endDate} = selectedRange;
    let markedDates = {};

    if (startDate) {
      markedDates[startDate] = {
        startingDay: true,
        // endingDay: true,
        color: blue,
        textColor: 'white',
      };
    }

    if (endDate) {
      let current = new Date(startDate);
      while (current <= new Date(endDate)) {
        const formattedDate = current.toISOString().split('T')[0];
        markedDates[formattedDate] = {
          color: 'rgba(33, 180, 226, 0.3) ',
          textColor: 'white',
        };
        current.setDate(current.getDate() + 1);
      }
      markedDates[endDate] = {
        endingDay: true,
        color: blue,
        textColor: 'white',
      };
      markedDates[startDate] = {
        startingDay: true,
        color: blue,
        textColor: 'white',
      };
    }

    return markedDates;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image source={next} style={styles.backIcon} />
        </TouchableOpacity>

        <View style={styles.planeIconCon}>
          <Image source={plane} style={styles.planeIcon} />
        </View>

        <Text style={styles.title}>Pick a journey date</Text>
      </View>

      <View style={styles.calenderCon}>
        <View style={{padding: _ms(10), backgroundColor: 'transparent'}}>
          <Text style={styles.todayDateTxt}>Today is {genCurrentDate()}</Text>
        </View>

        <CalendarList
          loadItemsForMonth={month => {
            console.log('trigger items loading', month);
          }}
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={months => {
            console.log('now these months are visible', months);
          }}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={0}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={13}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}
          minDate={new Date().toISOString().split('T')[0]}
          onDayPress={onDayPress}
          markedDates={getMarkedDates()}
          markingType={'period'}
          theme={{
            textSectionTitleColor: b1,
            todayTextColor: blue,
            monthTextColor: b1,
            textMonthFontSize: _ms(16),
            textMonthFontFamily: _fonts.nunitoSansRegular,
          }}
          calendarWidth={width - 25}
          // columnWrapperStyle={{backgroundColor: 'red'}}
          //   dayComponent={() => <Text>Hello</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

export default CalenderTest;

const styles = StyleSheet.create({
  container: {
    // paddingTop: _vs(30),
    backgroundColor: white,
  },

  header: {
    flexDirection: 'row',
    paddingHorizontal: _ms(10),
    alignItems: 'center',
    gap: _ms(8),
    marginTop: _vs(10),
    // backgroundColor: 'blue',
  },

  backButton: {
    width: _ms(30),
    height: _ms(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: _ms(35),
    // backgroundColor: 'blue',
  },

  backIcon: {
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
    color: b1,
    fontSize: _ms(16),
    fontFamily: _fonts.londonTwo,
  },

  calenderCon: {
    backgroundColor: white,
    paddingVertical: _ms(10),
    elevation: 20,
    shadowColor: black,
    width: width - 20,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: _ms(15),
  },

  todayDateTxt: {
    color: b1,
    fontSize: _ms(16),
    fontFamily: _fonts.nunitoSansRegular,
    textAlign: 'center',
  },
});
