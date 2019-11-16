import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native";
export default class Screen4 extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.first}>
          <Image
            style={styles.image}
            source={require("../assets/marvel.jpg")}
          />
        </View>
        <View style={styles.first}>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 10,
              padding: 20,
              marginLeft: 1,
              fontFamily: "Dosis-Light"
            }}
          >
            6-Inch Deeppool Action Figure -Exclusive
          </Text>
          <Text
            style={{
              color: "red",
              fontSize: 16,
              marginLeft: 10,
              padding: 10,
              fontFamily: "Dosis-Light"
            }}
          >
            Price:$24.99
          </Text>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => this.props.navigation.navigate("Screen5")}
          >
            <Text style={styles.text}>Where can I buy?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    padding: 7,
    marginVertical: 8,
    // marginLeft: 10,
    // marginRight: 10,
    // backgroundColor: "#BEAFC2"
  },
  image: {
    width: 280,
    height: 280,
    borderWidth: 2,
    borderColor: "#250436",
    marginLeft: 15,
    marginRight: 15
  },
  first: {
    flex: 1,
    flexDirection: "column",
    // marginVertical: 30,
    marginTop: 20
  },
  touch: {
    marginLeft: 50,
    width: 200,
    height: 40,
    backgroundColor: "#8815C5",
    paddingTop: 10
  },
  text: {
    textAlign: "center",
    color: "white",
    fontFamily: "Dosis-Light"
  }
});
