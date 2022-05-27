import React, { useState, useEffect } from 'react';
import { Text, Image, StyleSheet, FlatList, View } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.nameStyle}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.photoStyle} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  photoStyle: {
    width: 250,
    height: 120,
    marginBottom: 15,
    borderRadius: 5,
    marginLeft: 10,
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 15,
    marginLeft: 10,
  },
});

export default ResultsShowScreen;
