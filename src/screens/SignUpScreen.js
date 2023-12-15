import {
  Image,
  SafeAreaView,
  ScrollView,
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
import { auth } from "../../firebase";
import Toast from "react-native-simple-toast";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();
  const handleSignUp = () => {
    if (!email) {
      Toast.show("Email is empty");
    } else if (!password) {
      Toast.show("Password is empty");
    } else if (!confirmPassword) {
      Toast.show("Password is empty");
    } else if (password !== confirmPassword) {
      Toast.show("Password did not match");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("Signed in", user.email);

          navigation.navigate("Login", { screen: "Login" });
        })
        .catch((error) => alert(error.message));
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar /> */}
      <ScrollView>
        <View style={styles.hero}>
          <View style={styles.inputContainer}>
            <Image
              style={{
                height: hp("10%"),
                width: wp("20%"),
                marginVertical: 10,
                borderRadius: 15,
              }}
              source={require("../assets/images/pen.png")}
            />
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
            />
            <TextInput
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              style={styles.input}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleSignUp}>
                <Text>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  hero: {
    backgroundColor: "#fff",
    alignItems: "center",
    height: hp("100%"),
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 80,
    width: wp("80%"),
    backgroundColor: "#7FCCD6",
    borderRadius: 10,
  },

  input: {
    backgroundColor: "#fff",
    width: wp("60%"),
    padding: 8,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: "green",
  },
});
