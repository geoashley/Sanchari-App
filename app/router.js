import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';

import {  createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { Icon } from 'react-native-elements';

import Explore from './screens/Explore';
import Trips from './screens/Trips';
import Profile from './screens/Profile';
import Settings from './screens/Settings';

let screen = Dimensions.get('window');

export const Tabs = createBottomTabNavigator({
  'Explore': {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => <Icon name="map" type="entypo" size={28} color={tintColor} />
    },
  },
  'Trips': {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'Trips',
      tabBarIcon: ({ tintColor }) => <Icon name="add-to-list" type="entypo" size={28} color={tintColor} />
    },
  },
  'Profile': {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="user" type="entypo" size={28} color={tintColor} />
    },
  },
  'Settings': {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => <Icon name="tools" type="entypo" size={28} color={tintColor} />
    },
  },
});

const createRootNavigator = createStackNavigator(
    {
      Tabs: {
        screen: Tabs,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
  );

export const AppContainer = createAppContainer(createRootNavigator);

