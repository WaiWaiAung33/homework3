import React from "react";
import {View,Text,Image} from "react-native";
export default class App extends React.Component{
    render(){
        return(
            <View>
  <Image source={require("../../assets/barbie.jpg")}/>
            </View>
        )
    }
}