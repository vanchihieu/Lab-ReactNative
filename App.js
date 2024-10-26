import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import ScreenCau1 from "./ScreenCau1";
import ScreenCau2 from "./ScreenCau2";

export default function App({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenCau1 />
      {/* <ScreenCau2 /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
