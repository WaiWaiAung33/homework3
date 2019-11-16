import React from "react";
import Route from "./Route";
export default class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        fontLoaded: true
      };
    }
    async componentDidMount() {
      await Font.loadAsync({
        "Dosis-Light":require("./assets/font/Dosis-Light.otf")
  
      });
  
      this.setState({ fontLoaded: true });
    }
 render(){
    if(this.state.fontLoaded){
  return  (
     <Route/>
  );
    }
   
 }
}



