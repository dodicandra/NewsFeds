import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import Card from '../components/card';

const Home = ({ navigation }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetData = async () => {
      const response = await fetch(
        'http://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=60562f9576c1464ca30d27ce80c0cadb'
      );
      const result = await response.json();
      setData(result.articles);
    };
    fetData();
  }, []);

  // const [data, setData] = useState([
  //   {
  //     title: 'PUBG',
  //     id: '123ewd',
  //     body:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, animi vitae? Aspernatur totam quis voluptates adipisci odit earum repudiandae ipsa?',
  //   },
  //   {
  //     title: 'Mobile Legends',
  //     id: '456rg',
  //     body:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, animi vitae? Aspernatur totam quis voluptates adipisci odit earum repudiandae ipsa?',
  //   },
  //   {
  //     title: 'PUBG Steam',
  //     id: 'e6bjgj6',
  //     body:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, animi vitae? Aspernatur totam quis voluptates adipisci odit earum repudiandae ipsa?',
  //   },
  //   {
  //     title: 'Fire Fire',
  //     id: 'e568tyhj',
  //     body:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, animi vitae? Aspernatur totam quis voluptates adipisci odit earum repudiandae ipsa?',
  //   },
  // ]);
  const goTOReview = (item) => {
    navigation.navigate('ReviewDetails', item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={() => JSON.stringify(Math.random())}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ReviewDetails', item)}
            >
              <Card>
                <ImageBackground
                  imageStyle={{
                    borderTopLeftRadius: 7,
                    borderTopRightRadius: 7,
                  }}
                  style={styles.image}
                  source={{ uri: `${item.urlToImage}` }}
                >
                  <Text style={styles.text}>{item.title}</Text>
                </ImageBackground>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfeff',
  },
  text: {
    fontSize: 15,
    fontFamily: 'Acme-Regular',
    padding: 8,
    textShadowColor: '#212120',
    textShadowRadius: 5,
  },
  content: {
    flex: 1,
    borderWidth: 2,
    marginBottom: 10,
    borderColor: '#6ea2f5',
    borderRadius: 5,
    marginHorizontal: 12,
    height: 100,
    padding: 1,
  },
  image: {
    width: '100%',
    height: 120,
  },
});

export default Home;
