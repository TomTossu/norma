import React from "react";
import { Component } from "react";
/* import { Fragment } from "react"; */
import ImageButton from "./ImageButton";
import { View, Text, FlatList, Item, ScrollView } from "react-native";
class CitiesDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "fail"
    };
  }
  render() {
    const data = this.props.data;
    let ciudades;

    if (data != undefined) {
      ciudades = data;
      ciudades = ciudades.map(item => (
        <ImageButton key={item} width={200} height={200} ciudad={item} navigation={this.props.navigation} />
      ));
    } else {
      ciudades = "Loading...";
    }
    return (
      <View>
        <ScrollView
          style={{
            display: "flex",
            width: "100%",
            borderRadius: 5,
            overflow: "hidden",
            padding: 15,
            margin: 10
          }}
        >
          {ciudades}
        </ScrollView>
      </View>
    );
  }
}
export default CitiesDisplay;
