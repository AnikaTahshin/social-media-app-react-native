import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#61dafb" />

      {/* FOR EMAIL AND PASSWORD TO LOGIN  */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      {/* LOGIN AND REGISTER BUTTON  */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          // onPress={}
          style={[styles.button]}
        >
          <Text style={styles.buttonTxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineTxt}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: wp("100%"),
  },

  inputContainer: {
    width: wp("80%"),
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  button: {
    backgroundColor: "blue",
    width: wp("60%"),
    padding: 15,
    borderRadius: 10,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "blue",
    borderWidth: 2,
  },
  buttonTxt: { textAlign: "center", color: "white", fontSize: hp(2) },
  buttonOutlineTxt: {
    textAlign: "center",
    fontSize: hp(2),
  },
});
