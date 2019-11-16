import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
export default class Screen3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.first}>
            <View>
              <Image
                style={styles.image}
                source={require("../assets/marvelLegand1.jpg")}
              />
            </View>
            <View>
              <TouchableOpacity
                style={styles.linkBtn}
                onPress={() => this.props.navigation.navigate("Screen4")}
              >
                <Text style={styles.text}>Marvel Legends</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.first}>
            <View >
              <Image style={styles.image} source={require("../assets/starwars.jpg")} />
            </View>
            <View>
                <Text style={styles.text}>Star Wars</Text>
              
            </View>
          </View>

          <View style={styles.first}>
            <View >
              <Image style={styles.image} source={require("../assets/transformers.jpg")} />
            </View>
            <View>
              <TouchableOpacity
                style={styles.linkBtn}
                onPress={() => alert("hi")}
              >
                <Text style={styles.text}>Transformer</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.first}>
            <View >
              <Image style={styles.image} source={require("../assets/pokemon.jpg")} />
            </View>
            <View>
              <TouchableOpacity
                style={styles.linkBtn}
                onPress={() => alert("hi")}
              >
                <Text style={styles.text}>Pokemon</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.first}>
            <View >
              <Image style={styles.image} source={require("../assets/toystroy.jpg")} />
            </View>
            <View>
              <TouchableOpacity
                style={styles.linkBtn}
                onPress={() => alert("hi")}
              >
                <Text style={styles.text}>Toy Story</Text>
              </TouchableOpacity>
            </View>
          </View> 

          <View style={styles.first}>
            <View >
              <Image style={styles.image} source={require("../assets/ponyprincess.jpg")} />
            </View>
            <View>
              <TouchableOpacity
                style={styles.linkBtn}
                onPress={() => this.props.navigation.navigate("Screen6")}
              >
                <Text style={styles.text}>Pony Princess</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.first}>
            <View >
              <Image style={styles.image} source={require("../assets/barbie.jpg")} />
            </View>
            <View>
              <TouchableOpacity
                style={styles.linkBtn}
                onPress={() => alert("hi")}
              >
                <Text style={styles.text}>Barbie Princess</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.first}>
            <View >
              <Image style={styles.image} source={require("../assets/disney.jpg")} />
            </View>
            <View>
              <TouchableOpacity
                style={styles.linkBtn}
                onPress={() => alert("hi")}
              >
                <Text style={styles.text}>Disney Princess</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    padding: 7,
    marginLeft:5,
    marginRight:5
  },
  first: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 30,
    borderBottomWidth: 1,
  marginTop:20,
  padding:10,
  borderBottomColor:"#2471A3"
  },
  text: {
    fontSize: 15,
    color: "#2471A3",
    marginHorizontal: 10
  },
  image: {
    width: 100,
    height: 80
  }
});
