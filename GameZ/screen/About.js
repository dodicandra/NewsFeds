import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as Device from 'expo-device';

const About = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>About Screen</Text>
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
