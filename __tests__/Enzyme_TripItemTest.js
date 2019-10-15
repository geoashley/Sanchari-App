/**
 * @jest-environment jsdom
 */
import {Text, View} from 'react-native';
import React from 'react';
import TripItem from '../app/components/TripItem';
import {mount} from 'enzyme';
import {expect} from 'chai';

describe('trip item tests', () => {
  it('should ', () => {
    const wrapper = mount(
      <TripItem
        id="1"
        title="{item.title}"
        author="{item.author}"
        thumbnail="{item.thumbnail}"
      />,
    );
    expect(wrapper.find(Text)).to.have.lengthOf(2);
    expect(wrapper.find(View)).to.have.lengthOf(2);
  });
});
