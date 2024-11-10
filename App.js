import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
// ** redux-toolkit
import store from "./src/store/store";

// ** Screens
import GetStarted from "./src/components/GetStarted";
import ListProduct from "./src/components/ProductList";
import ProductDetail from "./src/components/ProductDetail";
import AddProduct from "./src/components/ProductAdd";
import UpdateProduct from "./src/components/UpdateProduct/UpdateProduct";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="GetStarted"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="ListProduct" component={ListProduct} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name="AddProduct" component={AddProduct} />
            <Stack.Screen name="UpdateProduct" component={UpdateProduct} />
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
