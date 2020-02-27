import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as Device from 'expo-device';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

const About = () => {
  const getAds = async () => {
    try {
      AdMobInterstitial.setAdUnitID('ca-app-pub-8960982869518476/1969873161');
      await setTestDeviceIDAsync('EMULATOR');
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
      await AdMobInterstitial.showAdAsync();
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={getAds}>
        <Text style={styles.text}>About Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

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
});

export default About;
