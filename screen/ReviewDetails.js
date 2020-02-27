import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Card from '../components/card';
import * as WebBrowser from 'expo-web-browser';

const ReviewDetails = ({ navigation }) => {
  const openWeb = async () => {
    await WebBrowser.openBrowserAsync(`${navigation.getParam('url')}`);
  };
  return (
    <View style={styles.container}>
      <Card>
        <TouchableOpacity onPress={openWeb}>
          <Text style={styles.text}>{navigation.getParam('title')}</Text>
        </TouchableOpacity>
        <Text style={styles.content}>{navigation.getParam('content')}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Acme-Regular',
  },
  content: {
    marginTop: 10,
    letterSpacing: 1,
  },
});

export default ReviewDetails;
