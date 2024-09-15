import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";

export default function FisrtScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../../assets/Ellipse.png")} style={styles.circle} />
      </View>
      <View>
        <Text style={styles.textTitle}>GROW YOUR BUSINESS</Text>
      </View>
      <View>
        <Text style={styles.text}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={styles.flexRow}>
        <TouchableOpacity style={[styles.button, { marginRight: "20px" }]}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
