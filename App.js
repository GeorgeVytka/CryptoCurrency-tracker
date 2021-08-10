import { StatusBar } from "expo-status-bar";
import React, { useRef, useMemo, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ImageBackground,
  Button,
} from "react-native";
import "react-native-gesture-handler";
import Listitem from "./components/Listitem";
import { SAMPLE_DATA } from "./assets/data/sampleData";
import ListItem from "./components/Listitem";
import Chart from "./components/Charts";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { getMarketData } from "./api/geckoApi";
import svg from "./assets/image/Abstract-Timekeeper.svg";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserChar from "./components/UserChart";
import UserPickedChart from "./components/UserPickedChart";
import { createSwitchNavigator } from "react-navigation";

export default function App() {
  //data from the api
  const [data, setData] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
    };
    FetchData();
  }, []);

  const [selctedCoin, setSelectedCoin] = useState(null);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ["40%"], []);

  const openModal = (item) => {
    setSelectedCoin(item);
    bottomSheetModalRef.current.present();
  };
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={UserChar} />
        <Stack.Screen name="UserChart" component={UserPickedChart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tan",
  },
  imageBack: {
    flex: 1,

    justifyContent: "center",
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titleWrapper: {
    marginTop: 60,
    paddingHorizontal: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
