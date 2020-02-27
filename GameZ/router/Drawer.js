import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './HomeStack';
import AbaoutStack from './AboutStack';
import CostumDrawer from '../components/CostumDrawer';
import * as Icons from '@expo/vector-icons';

const RootDrawer = createDrawerNavigator(
  {
    Berita: {
      screen: HomeStack,
      navigationOptions: {
        title: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Icons.AntDesign name="home" size={25} color={tintColor} />
        ),
      },
    },
    About: {
      screen: AbaoutStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icons.AntDesign
            name="exclamationcircle"
            size={25}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    contentComponent: (props) => <CostumDrawer {...props} />,
    drawerPosition: 'right',
    drawerType: 'slide',
    contentOptions: {
      itemsContainerStyle: {
        marginTop: 14,
      },
      labelStyle: {
        marginLeft: 30,
      },
    },
    initialRouteName: 'Berita',
  }
);

export default createAppContainer(RootDrawer);
