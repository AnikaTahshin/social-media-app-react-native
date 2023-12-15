import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import { DataContext } from "./ContextProvider";

const DetailsScreen = () => {
  const { detailsPost, setDetailsPost } = useContext(DataContext);

  return (
    <View>
      {/* <Text>{detailsPost.title}</Text> */}
      <TextInput value={detailsPost.title} />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
