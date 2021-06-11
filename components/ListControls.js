import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ListControls({ onFilter, onSort, asc }) {
  return (
    <View style={styles.controls}>
      <ListFilter onFilter={onFilter} />
      <ListSort onSort={onSort} asc={asc} />
    </View>
  );
}

function ListSort({ onSort, asc }) {
  return <Text onPress={onSort}>{asc ? "Asc" : "Des"}</Text>;
}

function ListFilter({ onFilter }) {
  return <TextInput autoFocus placeholder="Search" onChangeText={onFilter} />;
}

const styles = StyleSheet.create({
  controls: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
});
