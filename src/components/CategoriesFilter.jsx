import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";

const CategoriesFilter = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      {
        // only show 3 categories randomly
        // show horizonal list of categories
        // if a category is pressed should be reflect in the homeScreen
      }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginVertical: 12,
  },
});

export default CategoriesFilter;
