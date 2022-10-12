import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const BusinessesDetail = ({ business }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: business.image_url }} />
      <Text style={styles.name}>{business.name} </Text>
      <Text style={styles.rating}>
        {business.rating} Stars, {business.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 150,
    borderRadius: 4,
    height: 150,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    // fontSize: 16,
  },
  rating: {
    // fontWeight: "100",
    color: "grey",
  },
});

export default BusinessesDetail;
