import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { DrawerItems } from 'react-navigation-drawer';
import { AdMobInterstitial, setTestDeviceIDAsync } from 'expo-ads-admob';

export default function CostumDrawer(props) {
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
    <SafeAreaView
      style={styles.views}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <DrawerItems {...props} onItemPres={(e) => console.log(e)} />
      <TouchableOpacity onPress={getAds} style={styles.sponsor}>
        <Text style={styles.text}>Sponsor</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteiner: {},
  views: { flex: 1 },
  sponsor: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
    left: 100,
  },
  text: {
    fontFamily: 'TradeWinds-Regular',
    fontSize: 24,
  },
});
