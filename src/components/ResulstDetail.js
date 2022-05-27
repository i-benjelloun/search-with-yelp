import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text style={styles.infoStyle}>
        {result.rating} Stars, {result.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 10,
  },
  imageStyle: {
    width: 250,
    height: 125,
    borderRadius: 4,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
  },
  infoStyle: {
    color: 'gray',
  },
});

export default ResultsDetail;
