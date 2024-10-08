import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import commonStyles from '../assets/css/CommonFonts';
import {_ms, _mvs} from '../components/utils/Responsive';
import {b2, b3} from '../config/colors';

const TestCom = () => {
  const flightData = {
    flights: [
      {
        depart: '1:00 am (DAC)',
        duration: '1d 09h 45m',
        stops: ['BOM', 'LHR'],
        arrival: '9:45 am (YYC)',
        arrivalDay: 'next day',
      },
      {
        depart: '9:55 am (YYC)',
        duration: '2d 00h 05m',
        stops: ['LHR', 'DXB'],
        arrival: '10:45 am (DAC)',
        arrivalDay: '+2 days',
      },
    ],
  };

  return (
    <View>
      {flightData.flights.map((flight, index) => (
        <View style={styles.depart} key={index}>
          {/* Left Section (Departure Time) */}
          {/* <Text style={[commonStyles.ns400, styles.departTxt]}>Depart</Text>

          <Text style={[commonStyles.ns400, styles.textStyleOne]}>
            {flight.depart}
          </Text> */}

          {/* Middle Section (Duration and Stops) */}
          <View style={styles.middleView}>
            <Text style={[commonStyles.ns400, {fontSize: 10}]}>
              {flight.duration}
            </Text>

            <View style={styles.middleViewChild}>
              {/* Loop through stops */}
              {flight.stops.map((stop, i) => (
                <React.Fragment key={i}>
                  <Text style={[commonStyles.ns400, styles.topDest]}>
                    {stop}
                  </Text>
                  {i < flight.stops.length - 1 && (
                    <>
                      <View style={styles.dLine} />
                      <View style={styles.diamond} />
                    </>
                  )}
                </React.Fragment>
              ))}
            </View>
          </View>

          {/* Right Section (Arrival Time) */}
          <View style={styles.rightView}>
            <Text
              style={[commonStyles.ns400, {fontSize: 10, color: '#7F5F01'}]}>
              {flight.arrivalDay}
            </Text>

            <Text style={[commonStyles.ns400, {fontSize: 10}]}>
              {flight.arrival}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default TestCom;

const styles = StyleSheet.create({
  depart: {
    flexDirection: 'row',
    columnGap: _ms(5),
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
  },
  departTxt: {
    fontSize: _ms(10),
    flex: 0.6,
  },
  textStyleOne: {
    fontSize: _ms(10),
    flex: 1,
  },
  middleView: {
    rowGap: _mvs(4),
    alignItems: 'center',
    flex: 1.3,
  },
  middleViewChild: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: _mvs(18),
  },
  rightView: {
    rowGap: _mvs(5),
    alignItems: 'flex-end',
    flex: 1.1,
  },
  dLine: {
    backgroundColor: b3,
    height: 1.5,
    width: 50, // Adjust this width dynamically based on content
  },
  diamond: {
    width: _ms(5),
    height: _ms(5),
    backgroundColor: b2,
    transform: [{rotate: '45deg'}],
  },
  topDest: {
    fontSize: _ms(8.5),
    color: b3,
    marginHorizontal: 10,
  },
  bottomDest: {
    fontSize: 8,
    color: b3,
    position: 'absolute',
    bottom: 0,
    right: 25,
  },
});
