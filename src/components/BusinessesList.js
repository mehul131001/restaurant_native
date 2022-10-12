import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import BusinessesDetail from "./BusinessesDetail";
import {withNavigation} from 'react-navigation';

const BusinessesList = ({ title, businesses, navigation }) => {
    if(!businesses.length){
        return null;
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={businesses}
        keyExtractor={(business) => business.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('BusinessesShow', { id: item.id})}>
          <BusinessesDetail business={item} />
          </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
    fontStyle: "italic",
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(BusinessesList);
