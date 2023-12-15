import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("checking user", user.email);
        navigation.navigate("Home", { screen: "Home" });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#000" />

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
        <TouchableOpacity onPress={handleLogin} style={[styles.button]}>
          <Text style={styles.buttonTxt}>Login</Text>
        </TouchableOpacity>

        <View>
          {/* Your other login screen components */}
          <Text>
            Do not have an account?
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Signup", { screen: "Signup" })
              }
            >
              {/* <Text style={styles.buttonOutlineTxt}>Register</Text> */}
              <Text>Register</Text>
            </TouchableOpacity>
          </Text>
        </View>
        {/* 
        <Text>
          Do not have account?
          <TouchableOpacity
            onPress={navigation.navigate("signup")}
            //   onPress={handleSignUp}
            //   style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineTxt}>Register</Text>
          </TouchableOpacity>
        </Text> */}
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
