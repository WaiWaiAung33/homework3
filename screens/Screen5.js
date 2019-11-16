import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default class Screen5 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      mapRegion: {
        latitude: 19.754620,
        longitude: 96.203392,
        latitudeDelta: 0.004757,
        longitudeDelta: 0.006688
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} region={this.state.mapRegion}>
          <Marker
            style={{ width: 60, height: 40 }}
            coordinate={{
              latitude: 19.75462,
              longitude: 96.203392
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={"Linn Mobile Mark"}
            description={"MA=30,58 Street,Pyinmana"}
          ></Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
