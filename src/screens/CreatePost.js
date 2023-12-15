import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CreatePost = ({ navigation }) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate("Home")}>CreatePost</Text>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({});
