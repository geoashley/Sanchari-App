/**
 * @jest-environment jsdom
 */
import {Text, View} from 'react-native';
import React from 'react';
import TripItem from '../app/components/TripItem';
import {mount} from 'enzyme';
import {expect} from 'chai';
import { Card, Button } from 'react-native-elements'

describe('trip item tests', () => {
  it('should ', () => {
    const wrapper = mount(
      <TripItem
        id="1"
        title="title"
        author="author"
        thumbnail="thumbnail"
      />,
    );
    expect(wrapper.find(Text)).to.have.lengthOf(1);
    expect(wrapper.find(Card)).to.have.lengthOf(1);
  });
});
