/**
 * @jest-environment jsdom
 */
import {SectionList, Text, View} from 'react-native';
import React from 'react';
import TripItem from '../app/components/TripItem';
import Trips from '../app/screens/Trips';

import {mount} from 'enzyme';
import {expect} from 'chai';

const mockDataTrips = [
  {title: 'upcoming',
  trips: [
    {
      id: '1',
      name: 'Title-1',
      author: 'Author-1',
      thumbnail: 'Image-1',
    },
    {
      id: '2',
      name: 'Title-2',
      author: 'Author-2',
      thumbnail: 'Image-2',
    },
    {
      id: '3',
      name: 'Title-3',
      author: 'Author-3',
      thumbnail: 'Image-3',
    }],
  },
  {title: 'past',
  trips: [
    {
      id: '4',
      name: 'Title-4',
      author: 'Author-4',
      thumbnail: 'Image-4',
    }
  ]
}
];
describe('trips tests', () => {
  it('should have matching no of tripitems', () => {
    const wrapper = mount(<Trips data={mockDataTrips}/>);
    //expect(wrapper.find(SectionList)).to.have.lengthOf(1);
    expect(wrapper.find(TripItem)).to.have.lengthOf(4);

  });
});
