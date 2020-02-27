import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-paper';

import { Formik } from 'formik';

export default function ReviewForm({ addNews }) {
  const pickImage = async (handleChange) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancalled) {
      handleChange(result.uri);
    }
  };

  return (
    <View style={styles.conteiner}>
      <Formik
        initialValues={{ title: '', urlToImage: '' }}
        onSubmit={(values) => {
          addNews(values);
        }}
      >
        {(props) => (
          <View style={styles.conteiner}>
            <TextInput
              style={styles.input}
              placeholder="Title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />
            <TextInput
              multiline
              style={styles.input}
              placeholder="Berita"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />
            <View style={styles.btnGroup}>
              {props.values.urlToImage && props.values.urlToImage.length > 0 ? (
                <Image
                  source={{ uri: props.values.urlToImage }}
                  style={{ width: 300, height: 200 }}
                />
              ) : null}
              <Button
                icon="camera"
                mode="contained"
                color="black"
                onPress={() => pickImage(props.handleChange('urlToImage'))}
                style={styles.btn}
              >
                Take
              </Button>

              <Button
                mode="contained"
                style={styles.btn}
                title="submit"
                color="black"
                onPress={props.handleSubmit}
              >
                SUBMIT
              </Button>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    padding: 13,
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 24,
    borderRadius: 5,
    width: 350,
    marginBottom: 13,
  },
  pickImage: {
    alignItems: 'center',
    marginVertical: 5,
  },
  btn: {
    marginVertical: 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnGroup: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
