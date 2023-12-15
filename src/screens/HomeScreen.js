import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const HomeScreen = ({ navigation }) => {
  const [post, setPost] = useState([]);
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
        console.log("see response", response);
        setPost(response);
      });
  };

  const [details, setDetails] = useState({});

  const handleDetails = (item) => {
    console.log("the item", item);
    // https://jsonplaceholder.typicode.com/posts/1
    fetch(`https://jsonplaceholder.typicode.com/posts/${item?.id}`, {
      method: "GET",
      // headers: {
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
      // },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("details response", response);

        setDetails(response);
      });
  };
  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {post?.map((item) => {
            return (
              <TouchableOpacity onPress={handleDetails(item)}>
                <View style={styles.container}>
                  <Text key={item.id} style={{ color: "#000" }}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: "orange",
    width: wp("90%"),
    height: hp(20),
  },
});
