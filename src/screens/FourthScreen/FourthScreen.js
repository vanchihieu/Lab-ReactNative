import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { styles } from "./styles";
import { View } from "react-native";
import TextComponent from "../../components/Text";
import Button from "../../components/Button";

const FourthScreen = () => {
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
      <View>
        <TextComponent
          text={"CODE"}
          size={60}
          font={"Roboto"}
          weight={"bold"}
        />
      </View>
      <View>
        <TextComponent
          text={"VERIFICATION"}
          font={"Roboto"}
          weight={"bold"}
          size={15}
          styles={styles.marginTop}
        />
        <View style={styles.marginTop}>
          <TextComponent
            text={"Enter ontime password sent on"}
            weight={"bold"}
            size={15}
          />
          <TextComponent text={" ++849092605798"} weight={"bold"} size={15} />
        </View>
        <View style={[styles.row, styles.marginTop]}>
          {Array.from({ length: 6 }).map((_, index) => {
            return <View style={styles.input}></View>;
          })}
        </View>
        <Button
          text={"VERIFY CODE"}
          color={"#E3C000"}
          styles={styles.marginTop}
        />
      </View>
    </LinearGradient>
  );
};

export default FourthScreen;
