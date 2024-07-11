import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="bounceInLeft"
        duration={2000}
        style={styles.text}
      >
        WELCOME
      </Animatable.Text>
      <Animatable.Text
        animation="bounceInRight"
        duration={2000}
        style={styles.text}
      >
        NEWS APP
      </Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF4444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#FFFFFF',
  },
});

export default SplashScreen;
