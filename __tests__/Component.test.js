import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Search from '../src/screens/bottomnav/Search';
import MyTrips from '../src/screens/bottomnav/MyTrips';
import Deals from '../src/screens/bottomnav/Deals';
import Rewards from '../src/screens/bottomnav/Rewards';

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