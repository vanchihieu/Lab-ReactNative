import React from "react";
import { styles } from "./styles";
import { Image, Text, TextInput, View } from "react-native";
import Button from "../../components/Button";
import TextComponent from "../../components/Text";
import { globalStyles } from "../../styles/globalStyles";

const EighthScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require("../../../assets/XMEye.png")}
          style={styles.logo}
        />
      </View>
      <View style={{ width: "100%" }}>
        <View style={{ marginVertical: 35, position: "relative" }}>
          <Image
            source={require("../../../assets/username.png")}
            style={{
              width: 30,
              height: "100%",
              position: "absolute",
              left: 10,
            }}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Please input user name"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              paddingLeft: 50,
              paddingVertical: 10,
              fontSize: 18,
              color: "#c4c4c4",
              outline: "none",
            }}
          ></TextInput>
        </View>
        <View style={{ position: "relative", marginBottom: 40 }}>
          <Image
            source={require("../../../assets/pass-8.png")}
            style={{
              width: 30,
              height: "100%",
              position: "absolute",
              left: 10,
            }}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Please input user name"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              paddingLeft: 50,
              paddingVertical: 10,
              fontSize: 18,
              color: "#c4c4c4",
              outline: "none",
            }}
            secureTextEntry={true}
          ></TextInput>
        </View>
      </View>

      <Button
        text={"LOGIN"}
        color={"rgba(56, 111, 252, 1)"}
        textColor={"rgba(255, 255, 255, 1)"}
        textSize={18}
        styles={{ marginTop: 10, textAlign: "center", borderRadius: 10 }}
      />
      <View style={[globalStyles.row, { marginTop: 25 }]}>
        <TextComponent text={"Register"} styles={[styles.font]} />
        <TextComponent text={"Forgot password"} styles={[styles.font]} />
      </View>

      <View style={styles.row}>
        <Image
          source={require("../../../assets/line.png")}
          style={{
            width: 100,
            height: 1,
          }}
        />
        <Text style={styles.textGroup6}>Other Login Methods</Text>
        <Image
          source={require("../../../assets/line.png")}
          style={{
            width: 100,
            height: 1,
          }}
        />
      </View>

      <View style={styles.rowIcon}>
        <Image
          source={require("../../../assets/addIcon.png")}
          style={{ width: 74, height: 74 }}
          resizeMode="contain"
        />
        <View style={styles.wifiBtn}>
          <Image
            source={require("../../../assets/Wifi.png")}
            style={{ width: 70, height: 70 }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.fbBtn} resizeMode="contain">
          <Image
            source={require("../../../assets/facebook.png")}
            style={{ width: 70, height: 60 }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default EighthScreen;
