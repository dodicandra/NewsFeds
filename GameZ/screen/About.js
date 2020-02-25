import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'expo-ads-admob';
import * as Device from 'expo-device';

const About = () => {
  // useEffect(() => {
  //   getAds();
  // }, []);
  const getAds = async () => {
    await AdMobInterstitial.setAdUnitID(
      'ca-app-pub-8960982869518476/1969873161'
    );
    await AdMobInterstitial.setTestDeviceID(Device.osBuildId);
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync(inters);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <AdMobBanner
        bannerSize={'smartBannerPortrait'}
        adUnitID={'ca-app-pub-8960982869518476/1969873161'}
        testID={Device.osInternalBuildId}
      />
      <PublisherBanner
        bannerSize={'smartBannerPortrait'}
        adUnitID={'ca-app-pub-8960982869518476/1969873161'}
        testID={Device.osInternalBuildId}
        onDidFailToReceiveAdWithError={(error) => console.log(error)}
        onAdMobDispatchAppEvent={(error) => console.log(error)}
      />
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
