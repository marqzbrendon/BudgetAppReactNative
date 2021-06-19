import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import auth from "./auth";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    justifyContent: "center",
    paddingLeft: 10,
    fontSize: 18,
    height: 44,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
    height: 44,
  }
});

const ExpenseList = () => {
  // firebase.initializeApp(auth);
  // const db = firebase.firestore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses</Text>
      <FlatList
        data={[
          { key: "Expense 1", value: 725 },
          { key: "Expense 2", value: 100 },
          { key: "Expense 3", value: 975 },
        ]}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.key} - ${item.value}
          </Text>
        )}
      />
    </View>
  );
};

export default ExpenseList;
