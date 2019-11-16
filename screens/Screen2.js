import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default class Screen2 extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.first}>
          <View style={styles.box}>
          <TouchableOpacity
              style={styles.linkBtn}
              onPress={() => this.props.navigation.navigate("Screen3")}
            >
            <Image
              style={styles.image}
              source={require("../assets/actionfigure1.png")}
            />
           
              <Text style={styles.text}>Action Figure</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
          <TouchableOpacity
                style={styles.linkBtn}
                onPress={() => alert("hi")}
              >
            <Image
              style={styles.image}
              source={require("../assets/doll.png")}
            />
            <Text style={styles.text}>Dolls</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.first}>
          <View style={styles.box}>
          <TouchableOpacity
                style={styles.linkBtn}
                onPress={() => alert("hi")}
              >
            <Image
              style={styles.image}
              source={require("../assets/presentation.png")}
            />
            <Text style={styles.text}>Educational</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
          <TouchableOpacity
                style={styles.linkBtn}
                onPress={() => alert("hi")}
              >
            <Image
              style={styles.image}
              source={require("../assets/car.png")}
            />
            <Text style={styles.text}>Controlled Cars</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.first}>
        
        <View style={styles.box}>
        <TouchableOpacity
                style={styles.linkBtn}
                onPress={() => alert("hi")}
              >
            <Image
              style={styles.image}
              source={require("../assets/game-controller.png")}
            />
            <Text style={styles.text}>Electronic</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
          <TouchableOpacity
                style={styles.linkBtn}
                onPress={() => alert("hi")}
              >
            <Image
              style={styles.image}
              source={require("../assets/jigsaw.png")}
            />
            <Text style={styles.text}>Creative</Text>
            </TouchableOpacity>
          </View>
        </View>

      <View style={styles.first}>
          <View style={styles.box}>
          <TouchableOpacity
                style={styles.linkBtn}
                onPress={() => alert("hi")}
              >
            <Image style={styles.image} source={require("../assets/karaoke.png")} />
            <Text style={styles.text}>Sound</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
          <TouchableOpacity
                style={styles.linkBtn}
                onPress={() => alert("hi")}
              >
            <Image
              style={styles.image}
              source={require("../assets/clown-fish.png")}
            />
            <Text style={styles.text}>Animal</Text>
            </TouchableOpacity>
          </View> 

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
  first: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
   
  },
  text: {
    color: "black",
    marginTop: 10,
    textAlign: "center",
    fontFamily:"Dosis-Light"
  },
  box: {
    backgroundColor: "#C39BD3",
    width: "45%",
    height: 120,
    borderRadius: 7
  },
  image: {
    width: "50%",
    height: "55%",
    marginLeft: "25%",
    marginTop: "5%"
  }
});
