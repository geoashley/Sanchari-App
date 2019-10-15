

import 'react-native';
import React from 'react';

import TripItem from '../app/components/TripItem';
import { render, fireEvent } from 'react-native-testing-library';

describe('trip item tests',() => {
  it('should ',() => {
    const { getAllByA11yRole, getByText } = render(<TripItem id='1'
      title='{item.title}'
      author='{item.author}'
      thumbnail='{item.thumbnail}'/>);
  })

});
