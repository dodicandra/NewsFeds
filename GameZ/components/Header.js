import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icons from '@expo/vector-icons/MaterialIcons';

export default function Headers({ navigation, title }) {
  console.log(navigation);
  const openDraw = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.icon} onPress={openDraw}>
        <Icons name="menu" size={23} />
      </TouchableOpacity>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  headerText: {
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
    fontFamily: 'TradeWinds-Regular',
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
});
