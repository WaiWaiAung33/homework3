import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from "react-native";
import * as Font from "expo-font";

export default class Screen1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: true
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      "Pyidaungsu":require("../assets/font/Pyidaungsu.ttf"),

    });

    this.setState({ fontLoaded: true });
  }
  render() {
    if (this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          <View style={styles.body}>
            <Image style={{width:50,height:50,marginLeft:25}} source={require("../assets/teddy-bear.png")}/>
            <Text style={styles.text}>ရုပ်စုံက မှ ကြိုဆိုပါတယ်။</Text>
            <Text style={styles.text}>
              ကလေးတို့ လိုချင်တဲ့ အရုပ်မျိုးစုံကို ဒီမှာ ရနိုင်ပြီနော်....
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Screen2")}
            >
              <Image
                style={styles.image}
                source={require("../assets/right-arrow.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Code with heart by Ultimate Solutions
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink"
  },
  body: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  text: {
    // color:"#FF1694",
    fontSize: 15,
    marginLeft: 25
  },
  image: {
    marginLeft: 250,
    width:50,
    height:30,
    padding:30,
    
    
  },
  footer: {
    height: 40,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  footerText: {
    fontSize: 15,
    // color: "#FF1694",
    margin: 6,
    marginHorizontal: 30
  }
});
