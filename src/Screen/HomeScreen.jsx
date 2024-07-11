import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import Header from "../components/Header";
import { getTopHeadlines } from "../../data/getData";
import CategoriesFilter from "../components/CategoriesFilter";
import Loading from "../components/Loading";
import { categoryList } from "../../data/categoryList";

const HomeScreen = ({ navigation }) => {
  const [dataTopHeadline, setDataTopHeadline] = useState([]);
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState(0);
  const categories = categoryList;

  useEffect(() => {
    setLoading(true);
    getTopHeadlines(categories[select].category)
      .then((res) => {
        setDataTopHeadline(res.articles);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [select]);

  const setFilter = (index) => {
    setSelect(index);
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <CategoriesFilter
        categories={categories}
        select={select}
        setFilter={setFilter}
      />
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.newsContainer}>
          {
            // todo
            // display the data of 'dataTopHeadline' 
            // only show 5 news per category
            // diplay title, description, image and date of publishing
            // the data should be displayed by date of publish
          }
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E8F0',
  },
  newsContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
});

export default HomeScreen;
