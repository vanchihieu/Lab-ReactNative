import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Screen3 from "./src/screens/Screen3";
import EditTaskScreen from "./src/screens/EditTask/EditTask";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTaskScreen from "./src/screens/AddTask/AddTask";
// import Screen1 from "./src/screens/saga/screens/Screen1";
import { Provider } from "react-redux";
// import store from "./src/screens/saga/store/configureStore";

// ** redux-toolkit
import Screen1 from "./src/screens/redux-toolkit/screen/Screen1";
import store from "./src/screens/redux-toolkit/store/store";

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
});
