import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "react-native";
import { auth } from "../../firebase";
import Toast from "react-native-simple-toast";
import { useNavigation } from "@react-navigation/native";
import { DataContext } from "./ContextProvider";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [post, setPost] = useState([]);
  const { detailsPost, setDetailsPost } = useContext(DataContext);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("see response", response.slice(0, 10));
        setPost(response);
      });
  };

  // const [details, setDetails] = useState({});

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        Toast.show("Log out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleDetails = (item) => {
    console.log("the item", item);
    // https://jsonplaceholder.typicode.com/posts/1
    fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}`, {
      method: "GET",
      // headers: {
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
      // },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("details response", response);
        setDetailsPost(response);
        navigation.navigate("DetailsScreen");
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <View style={[styles.topDiv]}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 140,
          }}
        >
          Home
        </Text>

        <TouchableOpacity>
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {post?.map((item) => {
          return (
            <>
              <TouchableOpacity key={item.id} onPress={handleDetails(item)}>
                <View style={styles.container}>
                  <View style={styles.postContainer}>
                    <View>
                      <Text style={{ color: "#000" }}>{item?.title}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "gray",
    marginHorizontal: 10,
    height: 100,
    // borderBlockColor: "red",
  },

  postContainer: {
    // backgroundColor: "neon",
  },

  topDiv: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginVertical: 10,
    // marginHorizontal: 10,
    padding: 20,
    backgroundColor: "#7FCCD6",
  },

  shadowProp: {
    elevation: 8,
    backgroundColor: "white",
  },
});
