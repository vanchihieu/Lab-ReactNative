import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import TextComponent from "../../components/Text";
import Input from "../../components/Input";
import { globalStyles } from "../../styles/globalStyles";
import Button from "../../components/Button";

const FifthScreen = () => {
  return (
    <View style={styles.container}>
      <TextComponent text={"LOGIN"} size={25} />

      <View style={{ marginTop: 60 }}>
        <Input value={"Email"} />
        <Input
          value={"Password"}
          isShowPass
          isPassword
          styles={[styles.marginTop, globalStyles.row]}
        />
        <Button
          text={"LOGIN"}
          color={"rgba(229, 57, 53, 1)"}
          textColor={"rgba(255, 255, 255, 1)"}
          styles={{ marginTop: 40 }}
        />
      </View>
      <TextComponent
        text={"When you agree to terms and conditions"}
        styles={[styles.font, { marginTop: 20 }]}
      />

      <TextComponent
        text={"For got your password?"}
        styles={[styles.font, { marginTop: 10 }]}
        color={"rgba(93, 37, 250, 1)"}
      />

      <TextComponent
        text={"Or login with"}
        styles={[styles.font, { marginTop: 10 }]}
      />

      <View style={[styles.flex, styles.marginTop]}>
        <View style={[styles.box, styles.rec1]}>
          <Image
            source={require("../../../assets/icofacebook.png")}
            style={{ width: 36, height: 36 }}
          />
        </View>
        <View style={[styles.box, styles.rec2]}>
          <Text style={{ fontSize: 40, color: "#fff", fontWeight: "700" }}>
            Z
          </Text>
        </View>
        <View style={[styles.box, styles.rec3]}>
          <Image
            source={require("../../../assets/icogoogle.png")}
            style={{ width: 35, height: 35 }}
          />
        </View>
      </View>
    </View>
  );
};

export default FifthScreen;
