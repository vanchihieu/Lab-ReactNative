import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";

export default function FirstScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require("../../../assets/Ellipse.png")}
          style={styles.circle}
        />
      </View>
      <View style={styles.mid}>
        <View>
          <Text style={styles.textTitle}>GROW </Text>
          <Text style={styles.textTitle}>YOUR BUSINESS</Text>
        </View>
        <View>
          <Text style={styles.text}>
            We will help you to grow your business using online server
          </Text>
        </View>
        <View style={styles.flexRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
