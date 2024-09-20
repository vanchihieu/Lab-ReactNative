import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const ThirdScreen = () => {
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
          source={require("../../../assets/lock.png")}
          style={styles.circle}
        />
      </View>
      <View style={styles.mid}>
        <View style={{ marginTop: -60 }}>
          <Text style={styles.textTitle}>FORGET </Text>
          <Text style={styles.textTitle}>PASSWORD</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.text}>
            Provide your account’s email for which you want to reset your
            password
          </Text>
        </View>
        <View style={[styles.flexRow, { marginTop: 30 }]}>
          <Image
            source={require("../../../assets/email.png")}
            style={styles.image}
          />
          <TextInput placeholder="Email:" style={styles.inputEmail} />
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default ThirdScreen;
