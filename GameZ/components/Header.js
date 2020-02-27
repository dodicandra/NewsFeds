import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icons from '@expo/vector-icons/MaterialIcons';

export default function Headers({ navigation, title }) {
  const openDraw = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.icon} onPress={openDraw}>
        <Icons name="menu" size={23} />
      </TouchableOpacity>
      <View style={styles.headerContainer}>
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
    fontFamily: 'Acme-Regular',
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  reslt: {
    fontSize: 10,
    backgroundColor: '#000',
    padding: 8,
    borderRadius: 100 / 2,
    marginLeft: 10,
    color: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
