import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
//mport eth from "../assets/icon.png";

const ListItem = ({
  name,
  symbol,
  currentPrice,
  priceChangePercentage7d,
  logoUrl,
  onPress,
}) => {
  const priceColor = priceChangePercentage7d > 0 ? "green" : "red";

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemWrapper}>
        {/** This is the Lft side */}

        <View style={styles.leftSide}>
          <Image source={{ url: logoUrl }} style={styles.image} />
          {/*TODO: make dynamic */}
          <View style={styles.tittleWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          </View>
        </View>

        {/** This is the Right side */}
        <View style={styles.rightSide}>
          <Text style={styles.title}>
            ${currentPrice.toLocaleString("en-US", { currency: "USD" })}
          </Text>
          <Text style={(styles.subtitle, { color: priceColor })}>
            %{priceChangePercentage7d.toFixed(2)}
          </Text>
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
