import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Today's News</Text>
        {
          // todo
          // Add icon
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    backgroundColor: "#FFFFFF",
    marginBottom: 8,
    elevation: 4,
  },
  innerContainer: {
    marginHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: "#FF6347",
    fontWeight: "bold",
  },
});

export default Header;
