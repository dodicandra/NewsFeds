import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import * as Device from 'expo-device';
import { AdMobInterstitial, setTestDeviceIDAsync } from 'expo-ads-admob';

const About = () => {
  useEffect(() => {
    const aDD = async () => {
      await getAds();
    };
    setTimeout(() => {
      aDD();
    }, 3000);
  }, []);

  const getAds = async () => {
    try {
      AdMobInterstitial.setAdUnitID('ca-app-pub-8960982869518476/1969873161');
      await setTestDeviceIDAsync(Device.osBuildId.toString());
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
      await AdMobInterstitial.showAdAsync();
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={getAds}>
        <Image
          source={require('../assets/image/CK.jpg')}
          style={styles.image}
        />
        <Text style={styles.text}>Chika Rahayu Putri</Text>
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
    fontFamily: 'Acme-Regular',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default About;
