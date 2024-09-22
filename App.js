import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { SeventhScreen } from "./src/screens/SeventhScreen";
import SixthScreen from "./src/screens/SixthScreen/SixthScreen";
import { Screen2 } from "./src/screens/Screen2";
import { Screen3 } from "./src/screens/Screen3";

export default function App({ navigation }) {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <Stack.Screen name="SeventhScreen" component={SeventhScreen} /> */}
          {/* <Stack.Screen name="Screen2" component={Screen2} /> */}
          <Stack.Screen name="Screen3" component={Screen3} />
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
