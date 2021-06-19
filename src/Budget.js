import React from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import IncomeList from "./IncomeList";
import ExpenseList from "./ExpenseList";

/**
 * Profile screen
 */
export default class Profile extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Budget",
    };
  };

  render() {
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const { navigate, state } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.period}>
            PERIOD: {months[state.params.month.month - 1]} -{" "}
            {state.params.year.year}
          </Text>
        </View>
        <View style={styles.middleContainer}>
          <IncomeList />
          <ExpenseList />
        </View>
        <View style={styles.bottomContainer}>
          <Button
            style={styles.btnStyle}
            title="Go to home screen"
            onPress={() => navigate("Home")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomContainer: {
    alignItems: "center",
    flex: 0.2,
  },
  btnStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  middleContainer: {
    flex: 1,
  },
  period: {
    fontSize: 20,
    top: 15,
  },
  topContainer: {
    flex: 0.1,
    alignItems: "center",
  },
});
