import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigation from './router/Drawer';

const getFont = () => {
  return Font.loadAsync({
    'Acme-Regular': require('./assets/Fonts/Acme-Regular.ttf'),
    'TradeWinds-Regular': require('./assets/Fonts/TradeWinds-Regular.ttf'),
  });
};
export default function App() {
  const [fonLoad, setFontLoad] = useState(false);
  if (fonLoad) {
    return <Navigation />;
  } else {
    return (
      <AppLoading startAsync={getFont} onFinish={() => setFontLoad(true)} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 27,
    fontFamily: 'TradeWinds-Regular',
  },
  text1: { fontSize: 24, fontFamily: 'Acme-Regular' },
});
