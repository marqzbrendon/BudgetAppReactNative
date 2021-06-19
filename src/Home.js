import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

/**
 * Home screen
 */
export default class Home extends React.Component {
  static navigationOptions = {
    title: "Home",
  };

  render() {
    const { navigate } = this.props.navigation;
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    return (
      <View style={styles.container}>
        <Button
          title="Open Budget App"
          onPress={() =>
            navigate("Budget", {month: {month}, year: {year}})
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
