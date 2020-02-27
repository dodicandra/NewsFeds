import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  RefreshControl,
  Modal,
  BackHandler,
} from 'react-native';
import Card from '../components/card';
import Icons from '@expo/vector-icons/MaterialIcons';
import ReviewForm from '../components/ReviewForm';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const Home = ({ navigation }) => {
  const [data, setData] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetData();
  }, []);

  useEffect(() => {
    const getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    };
    getPermissionAsync();
  });

  const fetData = async () => {
    const response = await fetch(
      'http://newsapi.org/v2/top-headlines?country=id&apiKey=60562f9576c1464ca30d27ce80c0cadb'
    );
    const result = await response.json();
    setData(result.articles);
  };
  const onRefresh = useCallback(async () => {
    setRefresh(true);
    await fetData();
    setRefresh(false);
  }, [refresh]);

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

  const onScrolHandler = (event) => {
    const layout = event.nativeEvent.contentOffset.y;
    const x = Math.floor(layout);
    if (x >= 60) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
  };

  const addNews = (data) => {
    setData((curent) => {
      return [data, ...curent];
    });
    setOpenModal(false);
  };

  return (
    <View style={styles.container}>
      <Modal visible={openModal} animationType="slide">
        <View style={styles.modalContent}>
          <Icons
            name="close"
            size={25}
            color="#373838"
            style={styles.close}
            onPress={() => setOpenModal(false)}
          />
          <ReviewForm addNews={addNews} />
        </View>
      </Modal>
      <Icons
        name="add"
        size={25}
        color="#373838"
        style={{ ...styles.icon, opacity: opacity }}
        onPress={() => setOpenModal(true)}
      />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
        onScroll={(e) => onScrolHandler(e)}
        data={data}
        keyExtractor={() => Math.random().toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => goTOReview(item)}>
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
    alignItems: 'center',
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
  icon: {
    position: 'absolute',
    zIndex: 9999,
    backgroundColor: '#000',
    borderRadius: 50,
    padding: 10,
    top: 5,
    color: '#fff',
  },
  modalContent: {
    alignItems: 'center',
    flex: 1,
  },
  close: {
    position: 'absolute',
    bottom: 60,
    backgroundColor: '#fc0345',
    padding: 10,
    borderRadius: 50,
  },
});

export default Home;
