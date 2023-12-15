import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
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
import { DataContext } from "./ContextProvider";
import { Image } from "react-native";

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
  const { userDetails, setUserDetails } = useContext(DataContext);
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;

        setUserDetails(user);
        navigation.navigate("Home", { screen: "Home" });
      })
      .catch((error) => alert(error.message));
  };
  console.log("userDetails", userDetails?.email);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#000" />
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
          {/* <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            style={styles.input}
          /> */}

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleLogin}>
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
    backgroundColor: "white",
    padding: 5,
  },
});

{
  /* <View style={styles.main}>
        
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
            secureTextEntry
          />
        </View>

      
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={[styles.button]}>
            <Text style={styles.buttonTxt}>Login</Text>
          </TouchableOpacity>

          <View>
           
            <Text>
              Do not have an account?
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Signup", { screen: "Signup" })
                }
              >
               
                <Text>Register</Text>
              </TouchableOpacity>
            </Text>
          </View>
          
        </View>
      </View> */
}
