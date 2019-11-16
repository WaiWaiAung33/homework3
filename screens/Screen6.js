import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
export default class Screen6 extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.first}>
          <Image
            style={styles.image}
            source={require("../assets/ponyprincess1.jpg")}
          />
        </View>
        <View style={styles.first}>
          <Text style={{ fontSize: 15,paddingTop: 10, padding:10 }}>
            6-Inch Deeppool Action Figure -Exclusive
          </Text>
          <Text style={{ color: "red", fontSize: 15, padding:10,paddingTop:10 }}>
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
    marginLeft: 10,
    marginRight: 10
  },
  image: {
    width: 280,
    height: 280,
    borderWidth: 2,
    borderColor: "black",
    marginLeft: 10,
    marginRight: 20
  },
  first: {
    flex: 1,
    flexDirection: "column",
    marginVertical: 30,
    marginTop: 20
  },
  touch: {
    marginLeft: 50,
    width: 200,
    height: 40,
    backgroundColor: "green",
    paddingTop: 10,
    padding:10
   
  },
  text: {
    textAlign: "center",
    color: "white",
    fontFamily:"Dosis-Light"
    
  }
});
