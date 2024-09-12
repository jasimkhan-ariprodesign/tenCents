import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import TabNavigation from './src/screens/bottom_navigation/TabNavigation';
import {StatusBar} from 'react-native';
import TravelDate from './src/screens/stack_nav/TravelDate';
import FlightSearch from './src/screens/stack_nav/FlightSearch';
import Filters from './src/screens/stack_nav/Filters';
import SelectFair from './src/screens/stack_nav/SelectFair';
import FlightReview from './src/screens/stack_nav/FlightReview';
import AddOns from './src/screens/stack_nav/AddOns';
import Payments from './src/screens/stack_nav/Payments';
import Success from './src/screens/stack_nav/Success';
import HotelSearches from './src/components/search/hotels/HotelSearches';
import HotelFilter from './src/components/search/hotels/HotelFilter';
import HotelDetails from './src/components/search/hotels/HotelDetails';
import HotelReview from './src/components/search/hotels/HotelReview';
import HotelGallery from './src/components/search/hotels/HotelGallery';
import HotelUserDetails from './src/components/search/hotels/HotelUserDetails';
import HotelPriceSum from './src/components/search/hotels/HotelPriceSum';
import HotelSummary from './src/components/search/hotels/HotelSummary';
import HotelPayment from './src/components/search/hotels/HotelPayment';
import CarSearch from './src/components/search/cars/CarSearch';
import CarFilter from './src/components/search/cars/CarFilter';
import CarDetails from './src/components/search/cars/CarDetails';
import CarFareDetails from './src/components/search/cars/CarFareDetails';
import CarPayment from './src/components/search/cars/CarPayment';
import GtDisclaimer from './src/components/search/group_tickets/GtDisclaimer';
import GtCreateReq from './src/components/search/group_tickets/GtCreateReq';
import FhSearch from './src/components/search/flight_hotels/FhSearch';
import FhFilter from './src/components/search/flight_hotels/FhFilter';
import FhDetails from './src/components/search/flight_hotels/FhDetails';
import FhFlightDetails from './src/components/search/flight_hotels/FhFlightDetails';
import FhBaseReview from './src/components/search/flight_hotels/FhBaseReview';
import FhFinalReview from './src/components/search/flight_hotels/FhFinalReview';
import FhTripFilter from './src/components/search/flight_hotels/FhTripFilter';
import FhPayment from './src/components/search/flight_hotels/FhPayment';
import ChPackegeDetails from './src/components/search/car_hotel/ChPackegeDetails';
import ChReview from './src/components/search/car_hotel/ChReview';
import Chpayment from './src/components/search/car_hotel/Chpayment';
import HpSearches from './src/components/search/holiday_package/HpSearches';
import HpFilter from './src/components/search/holiday_package/HpFilter';
import HpAssistance from './src/components/search/holiday_package/HpAssistance';
import HpPkgDetails from './src/components/search/holiday_package/HpPkgDetails';
import HpSummary from './src/components/search/holiday_package/HpSummary';
import HpUserDetails from './src/components/search/holiday_package/HpUserDetails';
import HpPriceSum from './src/components/search/holiday_package/HpPriceSum';
import HpPayment from './src/components/search/holiday_package/HpPayment';

import 'react-native-reanimated';
import 'react-native-gesture-handler';
import LoginScreen from './src/screens/login_and_signup/LoginScreen';
import SignupScreen from './src/screens/login_and_signup/SignupScreen';
import LoginWithPhone from './src/screens/login_and_signup/LoginWithPhone';
import OTPVerifyScreen from './src/screens/login_and_signup/OTPVerifyScreen';
import AddNewTravellerDetails from './src/screens/stack_nav/AddNewTravellerDetails';
import ChartScreen from './src/screens/stack_nav/ChartScreen';
import Notification from './src/screens/stack_nav/Notification';
import ProfileScreen from './src/screens/stack_nav/ProfileScreen';
import Account from './src/screens/stack_nav/Account';

const RootStack = createNativeStackNavigator();
console.log('App.js ---  not update folder...');

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <RootStack.Navigator
        initialRouteName="wlscrn"
        screenOptions={{headerShown: false}}>
        <RootStack.Screen name="wlscrn" component={WelcomeScreen} />
        <RootStack.Screen name="tab" component={TabNavigation} />
        <RootStack.Screen name="traveldate" component={TravelDate} />
        {/* flights */}
        <RootStack.Screen name="flightsearch" component={FlightSearch} />
        <RootStack.Screen name="filters" component={Filters} />
        <RootStack.Screen name="selectfair" component={SelectFair} />
        <RootStack.Screen name="flightreview" component={FlightReview} />
        <RootStack.Screen name="addons" component={AddOns} />
        <RootStack.Screen name="payments" component={Payments} />
        <RootStack.Screen name="success" component={Success} />
        {/* flight and hotel */}
        <RootStack.Screen name="fhsearch" component={FhSearch} />
        <RootStack.Screen name="fhfilter" component={FhFilter} />
        <RootStack.Screen name="fhtripfilter" component={FhTripFilter} />
        <RootStack.Screen name="fhdetails" component={FhDetails} />
        <RootStack.Screen name="fhfdetails" component={FhFlightDetails} />
        <RootStack.Screen name="fhbr" component={FhBaseReview} />
        <RootStack.Screen name="fhfr" component={FhFinalReview} />
        <RootStack.Screen name="fhpayment" component={FhPayment} />
        {/* car and hotel */}
        <RootStack.Screen name="chpd" component={ChPackegeDetails} />
        <RootStack.Screen name="chreview" component={ChReview} />
        <RootStack.Screen name="chpayment" component={Chpayment} />
        {/* hotels */}
        <RootStack.Screen name="hotelsearches" component={HotelSearches} />
        <RootStack.Screen name="hotelfilter" component={HotelFilter} />
        <RootStack.Screen name="hoteldetails" component={HotelDetails} />
        <RootStack.Screen name="hotelreview" component={HotelReview} />
        <RootStack.Screen name="hotelgallery" component={HotelGallery} />
        <RootStack.Screen name="hotelud" component={HotelUserDetails} />
        <RootStack.Screen name="hotelps" component={HotelPriceSum} />
        <RootStack.Screen name="hotelsum" component={HotelSummary} />
        <RootStack.Screen name="hotelpay" component={HotelPayment} />
        {/* cars */}
        <RootStack.Screen name="carsearch" component={CarSearch} />
        <RootStack.Screen name="carfilter" component={CarFilter} />
        <RootStack.Screen name="cardetails" component={CarDetails} />
        <RootStack.Screen name="carfaredetails" component={CarFareDetails} />
        <RootStack.Screen name="carpayment" component={CarPayment} />
        {/* holiday packages */}
        <RootStack.Screen name="hpsearch" component={HpSearches} />
        <RootStack.Screen name="hpfilter" component={HpFilter} />
        <RootStack.Screen name="hpassist" component={HpAssistance} />
        <RootStack.Screen name="hppdetails" component={HpPkgDetails} />
        <RootStack.Screen name="hpsum" component={HpSummary} />
        <RootStack.Screen name="hpud" component={HpUserDetails} />
        <RootStack.Screen name="hppricesum" component={HpPriceSum} />
        <RootStack.Screen name="hppayment" component={HpPayment} />
        {/* group tickets */}
        <RootStack.Screen name="gtdisclaimer" component={GtDisclaimer} />
        <RootStack.Screen name="gtcreatereq" component={GtCreateReq} />
        {/* login and signup screens */}
        <RootStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <RootStack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{
            animation: 'slide_from_right',
            // animationDuration: 5000,
            // presentation: 'transparentModal'
          }}
        />
        <RootStack.Screen
          name="LoginWithPhone"
          component={LoginWithPhone}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <RootStack.Screen
          name="OTPVerifyScreen"
          component={OTPVerifyScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <RootStack.Screen
          name="AddNewTravellerDetails"
          component={AddNewTravellerDetails}
          options={{
            animation: 'slide_from_right',
          }}
        />

        <RootStack.Screen
          name="ChartScreen"
          component={ChartScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />

        <RootStack.Screen
          name="Notification"
          component={Notification}
          options={{
            animation: 'slide_from_right',
          }}
        />

        <RootStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />

        <RootStack.Screen
          name="Account"
          component={Account}
          options={{
            animation: 'slide_from_right',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
