import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../../screen/Home';
import Headers from '../../components/Header';
import ReviewDetails from '../../screen/ReviewDetails';

const HomeStack = createStackNavigator(
  {
    Berita: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => (
            <Headers
              title={navigation.state.routeName}
              navigation={navigation}
            />
          ),
        };
      },
    },
    ReviewDetails: {
      screen: ReviewDetails,
      navigationOptions: {},
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: 60,
      },
    },
    headerMode: 'screen',
  }
);

export default HomeStack;
