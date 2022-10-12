import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import BusinessesShowScreen from "./src/screens/BusinessesShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    BusinessesShow: BusinessesShowScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  }
);

export default createAppContainer(navigator);

//Client ID
// 31pylNfZCVdPEevQxSvudw

// API Key
// 16IIuSaIW_V52Mphu_y4IcUbzlsLZLupHkeo3Yvid_2ukPdWxxB0bqbB01uLcyXaejnUw9CC7nGP2OlVWxDYZIgo7A_m5U2jUvoDuRlT4peqJb_j1myMV5U3SFpAY3Yx
