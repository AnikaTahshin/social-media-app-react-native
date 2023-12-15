import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = () => {
  return (
    <SafeAreaView
      className="flex-1 h-full w-full"
      style={{ backgroundColor: "#877dfa" }}
    >
      <StatusBar />
      <View className="flex-1 flex justify-around">
        <Text>Let's Get Started</Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
