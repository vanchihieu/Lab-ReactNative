import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Screen1 from "./src/screens/Screen1/Screen1";
import Screen2 from "./src/screens/Screen2/Screen2";
import Screen3 from "./src/screens/Screen3";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function App({ navigation }) {
  const BottomTab = createBottomTabNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: "#1BA9FF", paddingTop: 12 },
          }}
        >
          <BottomTab.Screen
            name="Screen1"
            component={Screen1}
            options={{
              title: "",
              tabBarIcon: ({ focused, color }) => {
                return <Octicons name="three-bars" size={24} color="black" />;
              },
            }}
          />

          <BottomTab.Screen
            name="Screen2"
            component={Screen2}
            options={{
              title: "",
              tabBarIcon: ({ focused, color }) => {
                return <Octicons name="home" size={24} color="black" />;
              },
            }}
          />
          <BottomTab.Screen
            name="Screen3"
            component={Screen3}
            options={{
              title: "",
              tabBarIcon: ({ focused, color }) => {
                return <AntDesign name="back" size={24} color="black" />;
              },
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
});
