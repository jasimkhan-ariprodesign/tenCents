import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Search from '../src/screens/bottom_navigation/Search';
import MyTrips from '../src/screens/bottom_navigation/MyTrips';
import Deals from '../src/screens/bottom_navigation/Deals';
import Rewards from '../src/screens/bottom_navigation/Rewards';

it('Search renders correctly', () => {
  renderer.create(<Search />);
});

it('My Trip renders correctly', () => {
  renderer.create(<MyTrips />, { });
});

it('Deals renders correctly', () => {
  renderer.create(<Deals />);
});

it('Rewards renders correctly', () => {
  renderer.create(<Rewards />);
});