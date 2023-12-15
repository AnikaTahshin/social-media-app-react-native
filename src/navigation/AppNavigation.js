import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import SignUpScreen from "../screens/SignUpScreen";

import Profile from "../screens/Profile";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailsScreen from "../screens/DetailsScreen";

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// }
// import WelcomeScreen from "../screens/WelcomeScreen";
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={SignUpScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={Profile}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="DetailsScreen"
          component={DetailsScreen}
        />
        {/* <Stack.Screen name="main" component={MyTabs} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
