import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Crypto Markets</Text>
      </View>

      <View style={styles.divder}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titleWrapper: {
    marginTop: 80,
    paddingHorizontal: 17,
  },
  divder: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "black",
    marginHorizontal: 17,
    marginTop: 17,
  },
});
