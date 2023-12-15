import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Profile = ({ navigation }) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate("Home")}>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
