import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './HomeStack';
import AbaoutStack from './AboutStack';

const RootDrawer = createDrawerNavigator({
  'News Feed': {
    screen: HomeStack,
  },
  'About-NewsFeed': { screen: AbaoutStack },
});

export default createAppContainer(RootDrawer);
