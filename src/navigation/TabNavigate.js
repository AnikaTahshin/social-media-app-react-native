import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Tab = createBottomTabNavigator();
const TabNavigate = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="welcome" component={WelcomeScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigate;

const styles = StyleSheet.create({});
