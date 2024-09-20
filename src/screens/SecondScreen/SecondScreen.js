import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { Image, Text, TouchableOpacity, View } from "react-native";

const SecondScreen = () => {
  return (
    <LinearGradient
      colors={[
        "rgba(199, 244, 246, 1)",
        "rgba(209, 244, 246, 1)",
        "rgba(229, 244, 245, 1)",
        "rgba(0, 204, 249, 1)",
      ]}
      style={styles.container}
    >
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
        <View>
          <Text style={styles.txtWork}>HOW WE WORK?</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SecondScreen;
