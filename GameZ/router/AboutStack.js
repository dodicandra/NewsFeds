import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screen/About';
import Headers from '../components/Header';

const AbaoutStack = createStackNavigator({
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Headers title={navigation.state.routeName} navigation={navigation} />
        ),
      };
    },
  },
});

export default AbaoutStack;
