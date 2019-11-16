import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";
import Screen5 from "./screens/Screen5";
import Screen6 from "./screens/Screen6";
const StackNavigatorConfig = {
  initialRouteName: "Screen1"
};
const RouteConfigs = {
  Screen1: {
    screen: Screen1,
    navigationOptions: () => ({
      title:" Welcome Baby",
    headerStyle: { backgroundColor:"pink"},
    headerTitleStyle: {
      color: "#FF0080",
      textAlign: "center",
      width: "100%",
      
    },
    })
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: () => ({
      title: "Category List",
      headerStyle: {backgroundColor:"#6C3483"},
      headerTitleStyle: {
        color: "white",
        textAlign: "center",
        width: "80%"
      },
      headerTintColor: "white"
    })
  },
  Screen3:{
      screen: Screen3,
      navigationOptions: () => ({
        title: "Action Figure",
        headerStyle: { backgroundColor:"#2471A3"},
        headerTitleStyle: {
          color: "white",
          textAlign: "center",
          width: "80%"
        },
        headerTintColor: "white"
      })

  },
  Screen4:{
    screen: Screen4,
    navigationOptions: () => ({
      title: "Marvel Legand",
      headerStyle: { backgroundColor:"#8815C5"},
      headerTitleStyle: {
        color: "white",
        textAlign: "center",
        width: "80%"
      },
      headerTintColor: "white"
    })

},
Screen5:{
  screen: Screen5,
  navigationOptions: () => ({
    title: "You can buy here",
    headerStyle: { backgroundColor:"#BDB0C4"},
    headerTitleStyle: {
      color:"#B9592D",
      textAlign: "center",
      width: "80%"
    },
    headerTintColor: "white"
  })

},
Screen6:{
  screen: Screen6,
  navigationOptions: () => ({
    title: "Pony Princess",
    headerStyle: { backgroundColor: "green" },
    headerTitleStyle: {
      color: "white",
      textAlign: "center",
      width: "80%"
    },
    headerTintColor: "white"
  })

},
};
export default createAppContainer(
  createStackNavigator(RouteConfigs, StackNavigatorConfig)
);
