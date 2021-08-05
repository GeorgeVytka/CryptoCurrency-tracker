import { StatusBar } from "expo-status-bar";
import React, { useRef, useMemo, useState } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import Listitem from "./components/Listitem";
import { SAMPLE_DATA } from "./assets/data/sampleData";
import ListItem from "./components/Listitem";
import Chart from "./components/Charts";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

export default function App() {
  const [selctedCoin, setSelectedCoin] = useState(null);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ["40%"], []);

  const openModal = (item) => {
    setSelectedCoin(item);
    bottomSheetModalRef.current.present();
  };

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.largeTitle}>Crypto Markets</Text>
        </View>

        <View style={styles.divder}></View>

        {/* List the crypto */}

        <FlatList
          keyExtractor={(item) => item.id}
          data={SAMPLE_DATA}
          renderItem={({ item }) => (
            <Listitem
              name={item.name}
              symbol={item.symbol}
              currentPrice={item.current_price}
              priceChangePercentage7d={
                item.price_change_percentage_7d_in_currency
              }
              logoUrl={item.image}
              onPress={() => openModal(item)}
            />
          )}
        />
      </SafeAreaView>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        {
          //if selectedCoin is not null pass data
          selctedCoin ? (
            <Chart
              currentPrice={selctedCoin.current_price}
              logoUrl={selctedCoin.image}
              name={selctedCoin.name}
              priceChangePercentage7d={
                selctedCoin.price_change_percentage_7d_in_currency
              }
              symbol={selctedCoin.symbol}
              sparkline={selctedCoin.sparkline_in_7d.price}
            />
          ) : null
        }
      </BottomSheetModal>
    </BottomSheetModalProvider>
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
    marginTop: 60,
    paddingHorizontal: 17,
  },
  divder: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "black",
    marginHorizontal: 17,
    marginTop: 17,
  },
  bottomSheet: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.24,
    shadowRadius: 5,
    elevation: 5,
  },
});
