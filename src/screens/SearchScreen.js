import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useBusinesses from "../hooks/useBusinesses";
import BusinessesList from "../components/BusinessesList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, businesses, errorMessage] = useBusinesses("");

  // console.log(businesses);

  const filterResultsByPrice = (price) => {
    //price === '$' || '$$' || '$$$'
    return businesses.filter((businesses) => {
      return businesses.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text> We have found {businesses.length} businesses</Text> */}
      <ScrollView>
        <BusinessesList
          businesses={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <BusinessesList
          businesses={filterResultsByPrice("$$")}
          title="Bit Pricer"
          
        />
        <BusinessesList
          businesses={filterResultsByPrice("$$$")}
          title="Big Spender"
          
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
