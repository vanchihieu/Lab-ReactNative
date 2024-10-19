import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Screen1 from "./src/screens/Screen1/Screen1";
import Screen3 from "./src/screens/Screen3";
import EditTaskScreen from "./src/screens/EditTask/EditTask";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTaskScreen from "./src/screens/AddTask/AddTask";

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: "#1BA9FF", paddingTop: 12 },
          }}
        >
          <Stack.Screen name="Screen1" component={Screen1} />

          <Stack.Screen name="EditTask" component={EditTaskScreen} />
          <Stack.Screen name="AddTask" component={AddTaskScreen} />
        </Stack.Navigator>
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
