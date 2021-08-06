import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  monotoneCubicInterpolation,
  ChartYLabel,
} from "@rainbow-me/animated-charts";

export const { width: SIZE } = Dimensions.get("window");

const Chart = ({
  currentPrice,
  logoUrl,
  name,
  symbol,
  priceChangePercentage7d,

  sparkline,
}) => {
  const priceColor = priceChangePercentage7d > 0 ? "green" : "red";

  //fix the render issue with chart
  const [chartReady, setChartReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChartReady(true);
    }, 3);
  }, []);
  {
    /*included in the rainbow doc */
  }
  const formatUSD = (value) => {
    //running on the ui thread
    "worklet";
    if (value === "") {
      return `${currentPrice.toLocaleString("en-US", { currency: "USD" })}`;
    }

    const formattedValue = `$${parseFloat(value).toFixed(2)}`;
    return formattedValue;
  };
  return (
    <ChartPathProvider
      data={{ points: sparkline, smoothingStrategy: "bezier" }}
    >
      <View style={styles.chartWrapper}>
        <View style={styles.titlesWrapper}>
          <View style={styles.upperTitles}>
            <View style={styles.upperImg}>
              <Image source={{ uri: logoUrl }} style={styles.image} />
              <Text style={styles.subtitle}>
                {name}({symbol.toUpperCase()})
              </Text>
            </View>

            <Text style={styles.subtitle}>7d</Text>
          </View>

          <View style={styles.lowerTitles}>
            {/**gets the data while moving finger through the chart to show the exact value in given point. */}
            <ChartYLabel format={formatUSD} style={styles.boldTitle} />
            {/* 
            <Text style={styles.boldTitle}>
              ${currentPrice.toLocaleString("en-US", { currency: "USD" })}
            </Text>
*/}
            <Text style={[styles.title, { color: priceColor }]}>
              %{priceChangePercentage7d.toFixed(2)}
            </Text>
          </View>

          <View style={styles.divder}></View>
        </View>

        {chartReady ? (
          <View>
            <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
            <ChartDot style={{ backgroundColor: "blue" }} />
          </View>
        ) : null}
      </View>
    </ChartPathProvider>
  );
};

const styles = StyleSheet.create({
  chartWrapper: {
    marginVertical: 17,
  },
  titlesWrapper: {
    marginHorizontal: 17,
  },
  divder: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "black",

    marginTop: 17,
  },
  upperTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  upperImg: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
  },
  lowerTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boldTitle: {
    fontSize: 23,
    color: "black",
    fontWeight: "bold",
  },

  title: {
    fontSize: 18,
  },
});

export default Chart;
