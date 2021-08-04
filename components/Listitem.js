import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
//mport eth from "../assets/icon.png";

const ListItem = ({
  name,
  symbol,
  currentPrice,
  priceChangePercentage7d,
  logoUrl,
}) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        {/** This is the Lft side */}

        <View style={styles.leftSide}>
          <Image
            source={require("../assets/image/eth.png")}
            style={styles.image}
          />
          {/*TODO: make dynamic */}
          <View style={styles.tittleWrapper}>
            <Text style={styles.title}>Ethereum</Text>
            <Text style={styles.subtitle}>ETH</Text>
          </View>
        </View>

        {/** This is the Right side */}
        <View style={styles.rightSide}>
          <Text style={styles.title}>Ethereum</Text>
          <Text style={(styles.subtitle, { color: "red" })}>ETH</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 17,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 48,
    width: 48,
  },
  tittleWrapper: { marginLeft: 7 },
  title: { fontSize: 19 },
  subtitle: {
    marginTop: 5,
    fontSize: 14,
    color: "gray",
  },
  rightSide: {
    alignItems: "flex-end",
  },
});

export default ListItem;
