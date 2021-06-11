import React, { useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import Users from "../data/Users";
import ListControls from "./ListControls";

function filterAndSort(text, asc) {
  return Users.filter((user) => {
    if (text) {
      return user.name.includes(text);
    } else {
      return true;
    }
  }).sort(
    asc
      ? (u1, u2) => u1.name.localeCompare(u2.name)
      : (u1, u2) => u2.name.localeCompare(u1.name)
  );
}

export default function UserList() {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState(Users);

  function onFilter(text) {
    console.log(text);
    setFilter(text);
    let data2 = filterAndSort(filter, asc);
    console.log(data2);
    setData(data);
  }

  function onSort() {
    setAsc(!asc);
    setData(filterAndSort(filter, asc));
  }

  function renderItem({ item }) {
    return <Text style={styles.item}>{item.name + ": " + item.gpa}</Text>;
  }

  return (
    <FlatList
      data={data}
      ListHeaderComponent={<ListControls {...{ onFilter, onSort, asc }} />}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 5,
    padding: 5,
    color: "slategrey",
    backgroundColor: "ghostwhite",
    textAlign: "center",
  },
});
