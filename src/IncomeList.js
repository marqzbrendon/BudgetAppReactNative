import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
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

const IncomeList = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Incomes</Text>
      <FlatList
        data={[
          { key: "Salary 1", value: 725 },
          { key: "Salary 2", value: 100 },
          { key: "Salary 3", value: 975 },
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

export default IncomeList;
